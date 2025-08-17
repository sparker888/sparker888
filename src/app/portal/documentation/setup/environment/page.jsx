import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Environment Setup - Light-Speed 2026 Documentation',
  description: 'Configure API keys and external services for Light-Speed 2026'
}

export default function EnvironmentSetupPage() {
  return (
    <DocumentationLayout 
      title="Environment Setup" 
      description="Configure API keys and external services to unlock all Light-Speed 2026 features"
    >
      <div className="space-y-8">
        
        <InfoBox type="warning" title="API Keys Required">
          <p className="mb-3">
            To use Light-Speed 2026's social media features, you'll need API credentials from various platforms. 
            This guide walks through obtaining and configuring each service.
          </p>
          <p>
            You can start with free tier accounts and upgrade as your business grows.
          </p>
        </InfoBox>

        <StepCard step={1} title="Social Media Platform APIs">
          <p className="mb-4">Set up API access for social media platforms:</p>
          
          <div className="space-y-6">
            {/* Twitter API */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <span className="mr-2">🐦</span>
                Twitter/X API Setup
              </h4>
              <CodeBlock language="bash" title="Required Environment Variables">
{`TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here  
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here`}
              </CodeBlock>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://developer.twitter.com" className="text-blue-600 dark:text-blue-400 underline">
                  developer.twitter.com
                </a>{' '}
                → Create App → Generate Keys
              </div>
            </div>

            {/* LinkedIn API */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <span className="mr-2">💼</span>
                LinkedIn API Setup
              </h4>
              <CodeBlock language="bash" title="Required Environment Variables">
{`LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback`}
              </CodeBlock>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://www.linkedin.com/developers/" className="text-blue-600 dark:text-blue-400 underline">
                  LinkedIn Developers
                </a>{' '}
                → Create App → Add OAuth 2.0
              </div>
            </div>

            {/* Instagram API */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <span className="mr-2">📸</span>
                Instagram API Setup
              </h4>
              <CodeBlock language="bash" title="Required Environment Variables">
{`INSTAGRAM_CLIENT_ID=your_client_id_here
INSTAGRAM_CLIENT_SECRET=your_client_secret_here
INSTAGRAM_REDIRECT_URI=http://localhost:3000/auth/instagram/callback`}
              </CodeBlock>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                <strong>Setup:</strong> Visit{' '}
                <a href="https://developers.facebook.com" className="text-blue-600 dark:text-blue-400 underline">
                  Facebook Developers
                </a>{' '}
                → Create App → Add Instagram Basic Display
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard step={2} title="Payment Processing (Stripe)">
          <p className="mb-4">Configure Stripe for subscription billing:</p>
          
          <CodeBlock language="bash" title="Stripe Configuration">
{`# Stripe API Keys
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Stripe Product IDs (create these in Stripe Dashboard)
STRIPE_STARTER_PRICE_ID=price_1234567890
STRIPE_PRO_PRICE_ID=price_0987654321
STRIPE_ENTERPRISE_PRICE_ID=price_1122334455`}
          </CodeBlock>

          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>Stripe Setup:</strong> Create a Stripe account, set up products and pricing, 
              then configure webhook endpoints for subscription management.
            </p>
          </div>
        </StepCard>

        <StepCard step={3} title="Database Configuration">
          <p className="mb-4">Configure PocketBase database settings:</p>
          
          <CodeBlock language="bash" title="Database Environment Variables">
{`# PocketBase Configuration
POCKETBASE_URL=http://localhost:8090
POCKETBASE_ADMIN_EMAIL=admin@yourcompany.com
POCKETBASE_ADMIN_PASSWORD=your_secure_password_here

# Database Encryption (generate a strong key)
PB_ENCRYPTION_KEY=your_32_character_encryption_key_here`}
          </CodeBlock>

          <InfoBox type="info" title="Security Note">
            Use a strong encryption key in production. You can generate one using: 
            <code>openssl rand -base64 32</code>
          </InfoBox>
        </StepCard>

        <StepCard step={4} title="Email Service (Optional)">
          <p className="mb-4">Configure email for notifications and user communication:</p>
          
          <CodeBlock language="bash" title="SMTP Configuration">
{`# Email Service (example: Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password_here

# Email Templates
EMAIL_FROM_NAME=Your Company Name
EMAIL_FROM_ADDRESS=noreply@yourcompany.com`}
          </CodeBlock>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🎉 Environment Setup Complete!</h3>
          <p className="mb-4 opacity-90">
            Your Light-Speed 2026 platform now has access to all external services. 
            You can start connecting social media accounts and processing payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/setup/first-run">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Next: First Run Verification →
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