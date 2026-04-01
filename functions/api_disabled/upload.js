import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return new Response(JSON.stringify({ error: 'لم يتم العثور على ملف' }), { status: 400 });
    }

    const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
    
    // محاولة الرفع عبر الربط المباشر (Binding) أولاً
    if (env.R2_BUCKET) {
      await env.R2_BUCKET.put(fileName, file.stream(), {
        httpMetadata: { contentType: file.type || 'application/pdf' },
      });
    } 
    // إذا لم يتوفر الربط، نستخدم الـ S3 Client كخيار بديل (Fallback) باستخدام المفاتيح
    else if (env.VITE_R2_ACCOUNT_ID && env.VITE_R2_ACCESS_KEY_ID && env.VITE_R2_SECRET_ACCESS_KEY) {
      const s3 = new S3Client({
        region: 'auto',
        endpoint: `https://${env.VITE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: env.VITE_R2_ACCESS_KEY_ID,
          secretAccessKey: env.VITE_R2_SECRET_ACCESS_KEY,
        },
      });
      
      const arrayBuffer = await file.arrayBuffer();
      const command = new PutObjectCommand({
        Bucket: env.VITE_R2_BUCKET_NAME,
        Key: fileName,
        Body: new Uint8Array(arrayBuffer),
        ContentType: file.type || 'application/pdf',
      });
      
      await s3.send(command);
    } else {
      return new Response(JSON.stringify({ error: 'إعدادات R2 غير متوفرة (لا يوجد ربط ولا مفاتيح في env)!' }), { status: 500 });
    }

    let publicUrl = env.VITE_R2_PUBLIC_URL || env.PUBLIC_R2_URL || 'https://pub-xxxx.r2.dev';
    if (publicUrl.endsWith('/')) publicUrl = publicUrl.slice(0, -1);
    
    const fileUrl = `${publicUrl}/${fileName}`;

    return new Response(JSON.stringify({ url: fileUrl }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}

