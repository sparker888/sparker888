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
          
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-4">
            Open the <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">.env</code> file in VS Code to add your actual API keys and configuration values.
          </p>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://pockethost.io/docs" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  PocketHost Documentation
                </a>{' '}
                → Create Account → Deploy Instance
              </div>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://docs.stripe.com/development/quickstart" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Stripe Development Quickstart
                </a>{' '}
                → Create Account → Get API Keys
              </div>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://docs.aws.amazon.com/s3/latest/userguide/GetStartedWithS3.html" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  AWS S3 Getting Started
                </a>{' '}
                → Create Bucket → Set up CloudFront
              </div>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://developers.cloudflare.com/turnstile/get-started/" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Cloudflare Turnstile Documentation
                </a>{' '}
                → Create Site → Get Keys
              </div>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://docs.x.com/fundamentals/developer-apps" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  X Developer Documentation
                </a>{' '}
                → Create App → Generate Keys
              </div>
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
              <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication" 
                   className="text-blue-600 dark:text-blue-400 underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  LinkedIn API Authentication
                </a>{' '}
                → Create App → Add OAuth 2.0
              </div>
            </div>

          </div>
        </StepCard>

        <StepCard step={4} title="Email Integration">
          <p className="mb-4">Configure MailerLite for user notifications and email communications:</p>
          
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
            <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
              <strong>Setup:</strong> Visit{' '}
              <a href="https://developers.mailerlite.com/docs" 
                 className="text-blue-600 dark:text-blue-400 underline"
                 target="_blank" 
                 rel="noopener noreferrer">
                MailerLite API Documentation
              </a>{' '}
              → Create API Key → Set up Groups
            </div>
          </div>
        </StepCard>

        <StepCard step={5} title="Optional Services">
          <p className="mb-4">Configure optional analytics and monitoring:</p>
          
          <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center">
              <span className="mr-2">📊</span>
              Google Analytics (Optional)
            </h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
              Track user engagement and platform usage
            </p>
            <CodeBlock language="bash" title="Analytics Configuration">
{`GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX`}
            </CodeBlock>
            <div className="mt-3 text-sm text-stone-600 dark:text-stone-400">
              <strong>Setup:</strong> Visit{' '}
              <a href="https://developers.google.com/analytics/devguides/collection/ga4" 
                 className="text-blue-600 dark:text-blue-400 underline"
                 target="_blank" 
                 rel="noopener noreferrer">
                Google Analytics 4 Documentation
              </a>{' '}
              → Create Property → Get Measurement ID
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