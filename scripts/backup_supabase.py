#!/usr/bin/env python3
"""
UNIVEXAM Supabase Auto-Backup Script
Exports all database tables to JSON and SQL format
Saves to backups/ directory for GitHub storage
"""

import os
import json
import requests
from datetime import datetime, timezone
from pathlib import Path

# Configuration from environment variables
SUPABASE_URL = os.environ.get('SUPABASE_URL', '')
SUPABASE_KEY = os.environ.get('SUPABASE_KEY', '')

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ ERROR: SUPABASE_URL and SUPABASE_KEY must be set")
    exit(1)

headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': f'Bearer {SUPABASE_KEY}',
    'Content-Type': 'application/json'
}

# Tables to backup (in dependency order)
TABLES = [
    'universities',
    'specialties', 
    'modules',
    'documents',
    'moderators',
    'site_content',
    'messages',
    'moderator_applications'
]

def fetch_table(table_name):
    """Fetch all rows from a table"""
    url = f"{SUPABASE_URL}/rest/v1/{table_name}?select=*&order=created_at.asc"
    
    # Handle tables without created_at
    if table_name == 'site_content':
        url = f"{SUPABASE_URL}/rest/v1/{table_name}?select=*&order=key.asc"
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        print(f"  ✅ {table_name}: {len(data)} rows")
        return data
    else:
        print(f"  ⚠️  {table_name}: Error {response.status_code} - {response.text[:100]}")
        return []

def generate_sql_insert(table_name, rows):
    """Generate SQL INSERT statements for a table"""
    if not rows:
        return f"-- No data in {table_name}\n"
    
    sql_lines = [
        f"-- ============================================",
        f"-- Table: {table_name}",
        f"-- Rows: {len(rows)}",
        f"-- ============================================",
        f"DELETE FROM {table_name};  -- Clear before restore",
        ""
    ]
    
    for row in rows:
        columns = ', '.join(f'"{k}"' for k in row.keys())
        values = []
        for v in row.values():
            if v is None:
                values.append('NULL')
            elif isinstance(v, bool):
                values.append('TRUE' if v else 'FALSE')
            elif isinstance(v, (int, float)):
                values.append(str(v))
            elif isinstance(v, str):
                # Escape single quotes
                escaped = v.replace("'", "''")
                values.append(f"'{escaped}'")
            elif isinstance(v, dict) or isinstance(v, list):
                escaped = json.dumps(v).replace("'", "''")
                values.append(f"'{escaped}'")
            else:
                escaped = str(v).replace("'", "''")
                values.append(f"'{escaped}'")
        
        values_str = ', '.join(values)
        sql_lines.append(f"INSERT INTO {table_name} ({columns}) VALUES ({values_str});")
    
    sql_lines.append("")
    return '\n'.join(sql_lines)

def main():
    timestamp = datetime.now(timezone.utc)
    date_str = timestamp.strftime('%Y-%m-%d')
    datetime_str = timestamp.strftime('%Y-%m-%d_%H-%M')
    
    print(f"\n{'='*60}")
    print(f"🗄️  UNIVEXAM DATABASE BACKUP")
    print(f"📅  Date: {timestamp.strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"{'='*60}\n")
    
    # Create backup directories
    backup_dir = Path('backups')
    dated_dir = backup_dir / date_str
    latest_dir = backup_dir / 'latest'
    
    for d in [backup_dir, dated_dir, latest_dir]:
        d.mkdir(parents=True, exist_ok=True)
    
    all_data = {}
    all_sql_parts = [
        "-- ================================================",
        "-- UNIVEXAM Complete Database Backup",
        f"-- Generated: {timestamp.strftime('%Y-%m-%d %H:%M UTC')}",
        "-- ================================================",
        "",
        "BEGIN;",
        ""
    ]
    
    # Fetch all tables
    print("📊 Fetching tables...")
    for table in TABLES:
        data = fetch_table(table)
        all_data[table] = data
        all_sql_parts.append(generate_sql_insert(table, data))
    
    all_sql_parts.extend(["COMMIT;", "", f"-- Backup completed: {timestamp.strftime('%Y-%m-%d %H:%M UTC')}"])
    
    # Generate summary
    total_rows = sum(len(v) for v in all_data.values())
    summary = {
        "backup_timestamp": timestamp.isoformat(),
        "backup_date": date_str,
        "project": "UNIVEXAM",
        "supabase_url": SUPABASE_URL,
        "tables": {k: len(v) for k, v in all_data.items()},
        "total_rows": total_rows
    }
    
    # Save files
    print(f"\n💾 Saving backup files...")
    
    # 1. Full JSON backup
    json_path = dated_dir / f'backup_{datetime_str}.json'
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2, default=str)
    print(f"  ✅ JSON: {json_path}")
    
    # 2. SQL restore file
    sql_path = dated_dir / f'restore_{datetime_str}.sql'
    with open(sql_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_sql_parts))
    print(f"  ✅ SQL: {sql_path}")
    
    # 3. Summary file
    summary_path = dated_dir / 'summary.json'
    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)
    
    # 4. Save to 'latest' directory (always overwrite)
    import shutil
    latest_json = latest_dir / 'backup.json'
    latest_sql = latest_dir / 'restore.sql'
    latest_summary = latest_dir / 'summary.json'
    
    shutil.copy2(json_path, latest_json)
    shutil.copy2(sql_path, latest_sql)
    with open(latest_summary, 'w', encoding='utf-8') as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)
    
    print(f"  ✅ Latest: {latest_dir}")
    
    # 5. Update backup index
    index_path = backup_dir / 'index.json'
    existing_index = []
    if index_path.exists():
        with open(index_path, 'r', encoding='utf-8') as f:
            try:
                existing_index = json.load(f)
            except:
                existing_index = []
    
    # Add current backup entry
    existing_index.insert(0, {
        "date": date_str,
        "timestamp": timestamp.isoformat(),
        "total_rows": total_rows,
        "tables": summary["tables"]
    })
    
    # Keep only last 30 entries in index
    existing_index = existing_index[:30]
    
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(existing_index, f, ensure_ascii=False, indent=2)
    
    print(f"\n{'='*60}")
    print(f"✅ BACKUP COMPLETE!")
    print(f"📊 Total rows backed up: {total_rows}")
    for table, count in summary['tables'].items():
        print(f"   • {table}: {count} rows")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    main()
