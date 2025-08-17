import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Environment Variables Configuration - Light Speed 2026',
  description: 'Configure environment variables that enable the platform\'s core functionality'
}

export default function EnvironmentSetupPage() {
  return (
    <DocumentationLayout 
      title="Environment Variables Configuration" 
      description="Before starting the development server, you need to configure environment variables that enable the platform's core functionality. This guide walks you through setting up all required API keys and service connections."
    >
      <div className="space-y-8">
        
        <StepCard step={1} title="Open Environment File in VS Code">
          <p className="mb-4">First, let's set up your local environment file:</p>
          
          <CodeBlock language="bash" title="Copy environment template">
{`# In VS Code, open the environment template file
# File → Open → .env.example

# Copy it to create your local environment file
cp .env.example .env`}
          </CodeBlock>
          
          <InfoBox type="warning" title="Critical Step">
            <p>
              Open the <code>.env</code> file in VS Code to add your actual API keys and configuration values.
            </p>
          </InfoBox>
        </StepCard>

        <StepCard step={2} title="Required Service Configuration">
          <p className="mb-4">The platform requires these services to function properly:</p>
          
          <div className="space-y-6">
            {/* PocketBase Database */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">🔐</span>
                PocketBase Database (Required)
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                User authentication and data storage
              </p>
              <CodeBlock language="bash" title="PocketBase Configuration">
{`PUBLIC_POCKETBASE_URL=https://your-instance.pockethost.io
POCKETBASE_URL=https://your-instance.pockethost.io
POCKETBASE_ADMIN_EMAIL=your-admin@email.com
POCKETBASE_ADMIN_PASSWORD=your-secure-password`}
              </CodeBlock>
            </div>

            {/* Stripe Integration */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">💳</span>
                Stripe Integration (Required)
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                Payment processing and subscriptions
              </p>
              <CodeBlock language="bash" title="Stripe Configuration">
{`STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx`}
              </CodeBlock>
            </div>

            {/* AWS Services */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">☁️</span>
                AWS Services (Required)
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                File storage and CDN delivery for professional-grade image handling
              </p>
              <CodeBlock language="bash" title="AWS Configuration">
{`CUSTOM_AWS_REGION=us-east-1
CUSTOM_AWS_ACCESS_KEY=your_access_key_here
CUSTOM_AWS_SECRET_KEY=your_secret_key_here
CUSTOM_S3_BUCKET=your-bucket-name
CLOUDFRONT_DISTRIBUTION_DOMAIN=your-cloudfront-domain.cloudfront.net`}
              </CodeBlock>
            </div>

            {/* Cloudflare Turnstile */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">🛡️</span>
                Cloudflare Turnstile (Recommended)
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                Anti-spam protection for forms
              </p>
              <CodeBlock language="bash" title="Turnstile Configuration">
{`TURNSTILE_SITE_KEY=0x4AAAAAxxxxxxxxxxxxx
TURNSTILE_SITE_SECRET=0x4AAAAAxxxxxxxxxxxxx`}
              </CodeBlock>
            </div>
          </div>
        </StepCard>

        <StepCard step={3} title="Social Media APIs">
          <p className="mb-4">Required for posting features:</p>
          
          
          <div className="space-y-6">
            {/* Twitter API */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">🐦</span>
                X/Twitter API - No app review required, immediate access
              </h4>
              <CodeBlock language="bash" title="Twitter Configuration">
{`TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here`}
              </CodeBlock>
            </div>

            {/* LinkedIn API */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">💼</span>
                LinkedIn API - Open permissions, no app review required
              </h4>
              <CodeBlock language="bash" title="LinkedIn Configuration">
{`LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback`}
              </CodeBlock>
            </div>

          </div>
        </StepCard>

        <StepCard step={4} title="Optional Services">
          <div className="space-y-6">
            {/* MailerLite Integration */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">📧</span>
                MailerLite Integration (Required)
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                User notifications and email communications
              </p>
              <CodeBlock language="bash" title="MailerLite Configuration">
{`MAILERLITE_API_KEY=your_mailerlite_api_key_here
MAILERLITE_GROUP_ID=your_group_id_here`}
              </CodeBlock>
            </div>

            {/* Analytics & Monitoring */}
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
                <span className="mr-2">📊</span>
                Analytics & Monitoring (Optional)
              </h4>
              <CodeBlock language="bash" title="Analytics Configuration">
{`GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=https://your-sentry-dsn-here`}
              </CodeBlock>
            </div>
          </div>
        </StepCard>

        <StepCard step={5} title="Start Development Server">
          <p className="mb-4">Once you've configured your environment variables:</p>
          
          <CodeBlock language="bash" title="Start the development server">
{`# Start the development server
npm run dev

# Your app will be available at:
# http://localhost:4321`}
          </CodeBlock>
        </StepCard>

        <StepCard step={6} title="Service Setup Guides">
          <p className="mb-4">Each service requires account setup and API key generation. Detailed setup guides are available for:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Database & Auth</h4>
              <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                <li>• <a href="./pocketbase-setup" className="text-blue-600 dark:text-blue-400 hover:underline">PocketBase Database Setup</a></li>
                <li>• <a href="./stripe-setup" className="text-blue-600 dark:text-blue-400 hover:underline">Stripe Payment Configuration</a></li>
              </ul>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Storage & CDN</h4>
              <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                <li>• <a href="./aws-setup" className="text-blue-600 dark:text-blue-400 hover:underline">AWS S3 & CloudFront Setup</a></li>
                <li>• <a href="./turnstile-setup" className="text-blue-600 dark:text-blue-400 hover:underline">Cloudflare Turnstile Setup</a></li>
              </ul>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Social Media</h4>
              <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                <li>• <a href="./social-media-setup" className="text-blue-600 dark:text-blue-400 hover:underline">Social Media API Configuration</a></li>
              </ul>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Email</h4>
              <ul className="space-y-1 text-sm text-stone-600 dark:text-stone-400">
                <li>• <a href="./mailerlite-setup" className="text-blue-600 dark:text-blue-400 hover:underline">MailerLite Email Integration</a></li>
              </ul>
            </div>
          </div>
        </StepCard>

        <StepCard step={7} title="Troubleshooting">
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Issues</h4>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <li><strong>Missing Environment Variables:</strong> If you see undefined variable errors, verify all required variables are set in your <code>.env</code> file.</li>
                <li><strong>API Connection Failures:</strong> Check that your API keys are valid and have the correct permissions.</li>
                <li><strong>File Upload Issues:</strong> Verify AWS credentials and bucket permissions are configured correctly.</li>
              </ul>
            </div>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🎉 Environment Configuration Complete!</h3>
          <p className="mb-4 opacity-90">
            Your Light Speed 2026 platform is now configured with all required environment variables. 
            You can start the development server and begin using all platform features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/setup/pocketbase">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Next: PocketBase Database Setup →
              </Button>
            </Link>
            <Link href="/portal/documentation/customization/branding">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                Skip to Branding
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}