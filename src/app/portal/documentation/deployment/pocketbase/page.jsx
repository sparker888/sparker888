import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'PocketBase Deployment Guide - Light-Speed 2026 Documentation',
  description: 'Complete guide to deploying PocketBase backend to production with cloud hosting providers'
}

export default function PocketBaseDeploymentPage() {
  return (
    <DocumentationLayout 
      title="PocketBase Deployment Guide" 
      description="Deploy your Light-Speed 2026 backend to production with scalable, reliable hosting"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="What You'll Deploy">
          <p className="mb-3">
            This guide covers deploying PocketBase (your backend database and API) to production. You'll learn 
            about different hosting options, from simple VPS deployment to enterprise-grade solutions.
          </p>
          <p>
            PocketBase is lightweight, fast, and perfect for social media management platforms with real-time data needs.
          </p>
        </InfoBox>

        <StepCard step={1} title="Production Preparation">
          <p className="mb-4">Prepare your PocketBase instance for production deployment:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Environment Configuration</h4>
            <CodeBlock language="bash" title="pb_data/.env">
{`# Production environment variables
PB_ENCRYPTION_KEY=your-32-character-encryption-key-here
PB_DATA_DIR=/app/pb_data
PB_HOOKS_DIR=/app/pb_hooks
PB_MIGRATIONS_DIR=/app/pb_migrations

# Security settings
PB_CORS_ENABLED=true
PB_CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
PB_RATE_LIMIT=120  # requests per minute per IP

# SSL/TLS settings (if using custom domain)
PB_HTTPS_ENABLED=true
PB_SSL_CERT_PATH=/etc/ssl/certs/your_cert.pem
PB_SSL_KEY_PATH=/etc/ssl/private/your_key.pem`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Database Optimization</h4>
            <CodeBlock language="javascript" title="pb_hooks/optimize.js">
{`// Database optimization for production
onAfterBootstrap((e) => {
  // Enable WAL mode for better performance
  $app.dao().db().exec("PRAGMA journal_mode = WAL;")
  
  // Optimize for better performance
  $app.dao().db().exec("PRAGMA synchronous = NORMAL;")
  $app.dao().db().exec("PRAGMA cache_size = 1000000;")
  $app.dao().db().exec("PRAGMA temp_store = memory;")
  
  // Create necessary indexes
  try {
    $app.dao().db().exec(\`
      CREATE INDEX IF NOT EXISTS idx_posts_created ON posts(created);
      CREATE INDEX IF NOT EXISTS idx_posts_user_id ON posts(user_id);
      CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date);
      CREATE INDEX IF NOT EXISTS idx_schedules_publish_at ON scheduled_posts(publish_at);
    \`)
  } catch (e) {
    console.log("Indexes might already exist:", e)
  }
})`}
            </CodeBlock>
          </div>

          <InfoBox type="warning" title="Backup Strategy">
            Always set up automated backups before going live. PocketBase stores everything in SQLite files, 
            making backups straightforward but critical for data safety.
          </InfoBox>
        </StepCard>

        <StepCard step={2} title="VPS Deployment (Recommended)">
          <p className="mb-4">Deploy to a Virtual Private Server for full control and cost-effectiveness:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Server Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
                <h5 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Minimum Specs</h5>
                <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                  <li>🖥️ 1 CPU core</li>
                  <li>💾 1GB RAM</li>
                  <li>💿 20GB SSD storage</li>
                  <li>🌐 Ubuntu 22.04 LTS</li>
                </ul>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
                <h5 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Recommended Specs</h5>
                <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                  <li>🖥️ 2+ CPU cores</li>
                  <li>💾 4GB+ RAM</li>
                  <li>💿 50GB+ SSD storage</li>
                  <li>🌐 Ubuntu 22.04 LTS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Server Setup Script</h4>
            <CodeBlock language="bash" title="setup-server.sh">
{`#!/bin/bash
# PocketBase production setup script

# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y curl unzip nginx certbot python3-certbot-nginx

# Create pocketbase user
sudo useradd -r -s /bin/false -d /opt/pocketbase pocketbase

# Create directories
sudo mkdir -p /opt/pocketbase/{app,data,logs}
sudo chown -R pocketbase:pocketbase /opt/pocketbase

# Download PocketBase
cd /tmp
curl -L https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase_linux_amd64.zip -o pocketbase.zip
unzip pocketbase.zip
sudo mv pocketbase /opt/pocketbase/app/
sudo chown pocketbase:pocketbase /opt/pocketbase/app/pocketbase
sudo chmod +x /opt/pocketbase/app/pocketbase

# Copy your pb_data directory
sudo cp -r ./pb_data/* /opt/pocketbase/data/
sudo chown -R pocketbase:pocketbase /opt/pocketbase/data

echo "Server setup complete!"
echo "Next: Configure systemd service and nginx"`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Systemd Service Configuration</h4>
            <CodeBlock language="bash" title="/etc/systemd/system/pocketbase.service">
{`[Unit]
Description=PocketBase
After=network.target

[Service]
Type=simple
User=pocketbase
Group=pocketbase
WorkingDirectory=/opt/pocketbase/data
ExecStart=/opt/pocketbase/app/pocketbase serve --http=127.0.0.1:8090
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pocketbase

# Security settings
NoNewPrivileges=yes
PrivateTmp=yes
ProtectSystem=strict
ProtectHome=yes
ReadWritePaths=/opt/pocketbase/data
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Start PocketBase Service</h4>
            <CodeBlock language="bash">
{`# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable pocketbase
sudo systemctl start pocketbase

# Check status
sudo systemctl status pocketbase

# View logs
sudo journalctl -u pocketbase -f`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={3} title="Nginx Reverse Proxy Setup">
          <p className="mb-4">Configure Nginx to handle HTTPS and proxy requests to PocketBase:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Nginx Configuration</h4>
            <CodeBlock language="nginx" title="/etc/nginx/sites-available/api.yourdomain.com">
{`server {
    listen 80;
    server_name api.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.yourdomain.com;
    
    # SSL configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/api.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req zone=api burst=20 nodelay;
    
    # Proxy to PocketBase
    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # File upload size
        client_max_body_size 10M;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # WebSocket support for real-time features
    location /_/ {
        proxy_pass http://127.0.0.1:8090;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Logs
    access_log /var/log/nginx/pocketbase_access.log;
    error_log /var/log/nginx/pocketbase_error.log;
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">SSL Certificate Setup</h4>
            <CodeBlock language="bash">
{`# Enable the site
sudo ln -s /etc/nginx/sites-available/api.yourdomain.com /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Get SSL certificate
sudo certbot --nginx -d api.yourdomain.com

# Reload nginx
sudo systemctl reload nginx

# Test SSL
curl -I https://api.yourdomain.com/api/health`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={4} title="Digital Ocean Deployment">
          <p className="mb-4">Deploy to Digital Ocean with their managed database options:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Digital Ocean App Platform</h4>
            <CodeBlock language="yaml" title=".do/app.yaml">
{`name: light-speed-2026-api
services:
- name: pocketbase
  source_dir: /
  github:
    repo: your-username/light-speed-2026
    branch: main
  run_command: ./pocketbase serve --http=0.0.0.0:8080
  environment_slug: ubuntu-22-04-x64
  instance_count: 1
  instance_size_slug: basic-xxs
  http_port: 8080
  health_check:
    http_path: /api/health
  envs:
  - key: PB_ENCRYPTION_KEY
    value: your-encryption-key
    type: SECRET
  - key: PB_CORS_ALLOWED_ORIGINS
    value: https://yourdomain.com
  routes:
  - path: /
databases:
- name: pocketbase-db
  engine: PG
  version: "14"
  size: db-s-dev-database`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Deployment Commands</h4>
            <CodeBlock language="bash">
{`# Install doctl CLI
curl -sL https://github.com/digitalocean/doctl/releases/download/v1.98.0/doctl-1.98.0-linux-amd64.tar.gz | tar -xzv
sudo mv doctl /usr/local/bin

# Authenticate
doctl auth init

# Deploy the app
doctl apps create --spec .do/app.yaml

# Check deployment status
doctl apps list
doctl apps get <app-id>`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={5} title="AWS EC2 Deployment">
          <p className="mb-4">Deploy to AWS EC2 with RDS for enterprise-grade hosting:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">EC2 Instance Setup</h4>
            <CodeBlock language="bash">
{`# User data script for EC2 instance
#!/bin/bash
yum update -y
yum install -y docker

# Start Docker
systemctl start docker
systemctl enable docker

# Create directory for PocketBase
mkdir -p /opt/pocketbase/{data,logs}

# Run PocketBase in Docker
docker run -d \\
  --name pocketbase \\
  --restart unless-stopped \\
  -p 8090:8090 \\
  -v /opt/pocketbase/data:/pb_data \\
  -e PB_ENCRYPTION_KEY="$ENCRYPTION_KEY" \\
  -e PB_CORS_ALLOWED_ORIGINS="https://yourdomain.com" \\
  ghcr.io/muchobien/pocketbase:latest \\
  serve --http=0.0.0.0:8090

# Configure log rotation
cat > /etc/logrotate.d/pocketbase << EOF
/opt/pocketbase/logs/*.log {
  daily
  missingok
  rotate 52
  compress
  notifempty
  create 644 root root
}
EOF`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Application Load Balancer</h4>
            <CodeBlock language="bash">
{`# Create target group
aws elbv2 create-target-group \\
  --name pocketbase-targets \\
  --protocol HTTP \\
  --port 8090 \\
  --vpc-id vpc-xxxxxxxxx \\
  --health-check-path /api/health

# Create load balancer
aws elbv2 create-load-balancer \\
  --name pocketbase-alb \\
  --subnets subnet-xxxxxxxx subnet-yyyyyyyy \\
  --security-groups sg-xxxxxxxxx

# Register EC2 instances with target group
aws elbv2 register-targets \\
  --target-group-arn arn:aws:elasticloadbalancing:... \\
  --targets Id=i-xxxxxxxxx`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={6} title="Backup and Monitoring">
          <p className="mb-4">Set up automated backups and monitoring for production:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Automated Backup Script</h4>
            <CodeBlock language="bash" title="/opt/pocketbase/backup.sh">
{`#!/bin/bash
# PocketBase backup script

BACKUP_DIR="/opt/pocketbase/backups"
DATA_DIR="/opt/pocketbase/data"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="pocketbase_backup_$DATE"

# Create backup directory
mkdir -p $BACKUP_DIR

# Stop PocketBase temporarily
sudo systemctl stop pocketbase

# Create backup
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" -C $DATA_DIR .

# Restart PocketBase
sudo systemctl start pocketbase

# Upload to S3 (optional)
if [ ! -z "$AWS_S3_BUCKET" ]; then
  aws s3 cp "$BACKUP_DIR/$BACKUP_NAME.tar.gz" "s3://$AWS_S3_BUCKET/backups/"
fi

# Clean old backups (keep last 30 days)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $BACKUP_NAME.tar.gz"`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Cron Job for Backups</h4>
            <CodeBlock language="bash">
{`# Add to crontab (crontab -e)
# Daily backup at 2 AM
0 2 * * * /opt/pocketbase/backup.sh >> /opt/pocketbase/logs/backup.log 2>&1

# Weekly full backup on Sundays at 1 AM
0 1 * * 0 /opt/pocketbase/full_backup.sh >> /opt/pocketbase/logs/backup.log 2>&1`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Health Check Endpoint</h4>
            <CodeBlock language="javascript" title="pb_hooks/health.js">
{`// Health check endpoint
routerAdd("GET", "/api/health", (c) => {
  const health = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    database: "connected"
  }
  
  try {
    // Test database connection
    $app.dao().findFirstRecordByData("_params", "key", "test")
    health.database = "connected"
  } catch (e) {
    health.database = "error"
    health.status = "unhealthy"
  }
  
  return c.json(200, health)
})`}
            </CodeBlock>
          </div>

          <InfoBox type="info" title="Monitoring Tools">
            Consider using monitoring tools like UptimeRobot, Pingdom, or DataDog to monitor your PocketBase 
            deployment and receive alerts when issues occur.
          </InfoBox>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🚀 PocketBase Deployment Complete!</h3>
          <p className="mb-4 opacity-90">
            Your PocketBase backend is now running in production with proper security, monitoring, and backups. 
            Next, deploy your frontend to complete the full platform deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/deployment/frontend">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Next: Frontend Deployment →
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🎯 Test Your API
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            🛠️ Production Deployment Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Security</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>✅ HTTPS enabled with valid SSL certificate</li>
                <li>✅ Firewall configured (only ports 80, 443, 22 open)</li>
                <li>✅ Strong encryption key set</li>
                <li>✅ Regular security updates scheduled</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Performance</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>✅ Database indexes created</li>
                <li>✅ Nginx caching configured</li>
                <li>✅ Rate limiting enabled</li>
                <li>✅ Log rotation set up</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Reliability</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>✅ Automated backups running daily</li>
                <li>✅ Health monitoring configured</li>
                <li>✅ Systemd service auto-restart enabled</li>
                <li>✅ Backup restoration tested</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Monitoring</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>✅ Uptime monitoring active</li>
                <li>✅ Error logging configured</li>
                <li>✅ Disk space alerts set</li>
                <li>✅ Performance metrics tracked</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}