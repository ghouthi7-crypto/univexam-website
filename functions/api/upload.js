import { AwsClient } from 'aws4fetch';

const ACCOUNT_ID = 'cb691857ed2d2baab866959c3678a53b';
const ACCESS_KEY_ID = '4467d0b297a20bb797e2a0f8d3c0e50f';
const SECRET_ACCESS_KEY = 'b311db736a4cfc4200b70d7c18a54958fce17026ee7542dd1b89c7e5398cacb7';
const BUCKET_NAME = 'ghouthi';
const PUBLIC_URL = 'https://pub-e354e3db406b475f95f0c08f1a94001e.r2.dev';
const BASE_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`;

const aws = new AwsClient({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  service: 's3',
  region: 'auto',
});

export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const folder = formData.get('folder') || 'general';
    const customName = formData.get('customName');

    if (!file) {
      return new Response(JSON.stringify({ error: 'لم يتم العثور على ملف' }), { status: 400 });
    }

    const fileExt = file.name.split('.').pop() || 'pdf';
    const fileName = customName
      ? `${customName}.${fileExt}`
      : `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
    const key = `${folder}/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();

    const uploadUrl = `${BASE_URL}/${BUCKET_NAME}/${encodeURIComponent(key)}`;
    const res = await aws.fetch(uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type || 'application/pdf' },
      body: arrayBuffer,
    });

    if (!res.ok) {
      const txt = await res.text();
      return new Response(JSON.stringify({ error: txt }), { status: 500 });
    }

    let base = PUBLIC_URL;
    if (base.endsWith('/')) base = base.slice(0, -1);

    return new Response(JSON.stringify({ url: `${base}/${key}` }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
