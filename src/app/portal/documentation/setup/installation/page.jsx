import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Installation Guide - Light-Speed 2026 Documentation',
  description: 'Complete installation guide for Light-Speed 2026 social media management platform'
}

export default function InstallationPage() {
  return (
    <DocumentationLayout 
      title="Installation Guide" 
      description="Get Light-Speed 2026 running on your development machine in under 10 minutes"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="What You'll Build">
          <p className="mb-3">
            By the end of this guide, you'll have a fully functional social media management platform running locally, 
            complete with user authentication, social media scheduling, analytics, and payment processing.
          </p>
          <p>
            Perfect for SaaS entrepreneurs, agencies, and developers looking to launch their own social media tools.
          </p>
        </InfoBox>

        <StepCard step={1} title="System Requirements">
          <p className="mb-4">Ensure your development machine meets these requirements:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Required Software</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>✅ Node.js 18.0+ (LTS recommended)</li>
                <li>✅ npm 9.0+ or yarn 1.22+</li>
                <li>✅ Git 2.0+</li>
                <li>✅ Code editor (VS Code recommended)</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">System Specs</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>💾 4GB+ RAM available</li>
                <li>💽 2GB+ free disk space</li>
                <li>🌐 Stable internet connection</li>
                <li>🖥️ macOS, Windows, or Linux</li>
              </ul>
            </div>
          </div>

          <CodeBlock language="bash" title="Verify your setup">
{`# Check Node.js version
node --version
# Should be v18.0.0 or higher

# Check npm version  
npm --version
# Should be 9.0.0 or higher

# Check Git
git --version
# Should be 2.0.0 or higher`}
          </CodeBlock>
        </StepCard>

        <StepCard step={2} title="Download Light-Speed 2026">
          <p className="mb-4">Get access to the Light-Speed 2026 codebase:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Option A: GitHub Repository (Recommended)</h4>
            <CodeBlock language="bash">
{`# Clone the repository
git clone https://github.com/your-username/light-speed-2026.git

# Navigate to the project directory
cd light-speed-2026

# Check that all files are present
ls -la`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Option B: ZIP Download</h4>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                <strong>Download Link:</strong> If you purchased Light-Speed 2026, you received a download link via email.
              </p>
              <CodeBlock language="bash">
{`# Extract the ZIP file
unzip light-speed-2026.zip

# Navigate to the extracted directory
cd light-speed-2026

# Verify all files are present
ls -la`}
              </CodeBlock>
            </div>
          </div>
        </StepCard>

        <StepCard step={3} title="Install Dependencies">
          <p className="mb-4">Install all required packages for both frontend and backend:</p>
          
          <CodeBlock language="bash">
{`# Install frontend dependencies
npm install

# This will install:
# - Next.js 13+ (React framework)
# - Tailwind CSS (styling)
# - NextAuth.js (authentication)
# - Stripe (payments)
# - And 50+ other packages`}
          </CodeBlock>

          <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Note:</strong> The installation may take 2-5 minutes depending on your internet connection. 
              You'll see a progress bar showing package downloads.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Verify Installation</h4>
            <CodeBlock language="bash">
{`# Check that node_modules was created
ls -la node_modules

# Verify key packages are installed
npm list next react stripe

# Should show versions without errors`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={4} title="Environment Configuration">
          <p className="mb-4">Set up your environment variables for development:</p>
          
          <CodeBlock language="bash">
{`# Copy the example environment file
cp .env.example .env.local

# Open in your code editor
code .env.local`}
          </CodeBlock>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Basic Configuration</h4>
            <CodeBlock language="bash" title=".env.local">
{`# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Your Social Media Platform"

# Database (PocketBase will auto-configure)
POCKETBASE_URL=http://localhost:8090

# Authentication Secret (generate a random string)
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# Payment Processing (add your Stripe keys later)
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Social Media APIs (configure during platform setup)
TWITTER_API_KEY=your-twitter-key
LINKEDIN_CLIENT_ID=your-linkedin-id
INSTAGRAM_CLIENT_ID=your-instagram-id`}
            </CodeBlock>
          </div>

          <InfoBox type="warning" title="Security Reminder">
            Never commit your .env.local file to version control. It contains sensitive API keys and secrets. 
            The .gitignore file is already configured to exclude it.
          </InfoBox>
        </StepCard>

        <StepCard step={5} title="Launch Development Server">
          <p className="mb-4">Start both the frontend and backend services:</p>
          
          <CodeBlock language="bash">
{`# Start the development server (this starts both frontend and backend)
npm run dev

# You should see output like:
# ✓ PocketBase started on http://localhost:8090
# ✓ Next.js started on http://localhost:3000
# ✓ Database initialized with sample data`}
          </CodeBlock>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Frontend (Next.js)</h4>
              <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                <strong>URL:</strong> <a href="http://localhost:3000" className="underline">http://localhost:3000</a>
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                The main application where users will interact with your social media platform.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">✅ Backend (PocketBase)</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                <strong>URL:</strong> <a href="http://localhost:8090" className="underline">http://localhost:8090</a>
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                The database and API that powers your platform. Admin panel included.
              </p>
            </div>
          </div>
        </StepCard>

        <StepCard step={6} title="Verify Installation">
          <p className="mb-4">Test that everything is working correctly:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">1. Check Frontend</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm mb-3">
                <li>Visit <a href="http://localhost:3000" className="text-blue-600 dark:text-blue-400 underline">http://localhost:3000</a></li>
                <li>You should see the Light-Speed 2026 homepage</li>
                <li>Try clicking "Sign Up" to test the registration flow</li>
                <li>Check that dark/light mode toggle works</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">2. Check Backend Admin</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm mb-3">
                <li>Visit <a href="http://localhost:8090/_/" className="text-blue-600 dark:text-blue-400 underline">http://localhost:8090/_/</a></li>
                <li>Create an admin account when prompted</li>
                <li>Verify you can see the database collections</li>
                <li>Check that sample data was loaded</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">3. Test Database Connection</h4>
              <CodeBlock language="bash">
{`# In a new terminal, test the API connection
curl http://localhost:8090/api/health

# Should return: {"status":"ok"}`}
              </CodeBlock>
            </div>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🎉 Installation Complete!</h3>
          <p className="mb-4 opacity-90">
            Congratulations! Light-Speed 2026 is now running on your machine. You have a complete 
            social media management platform ready for customization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/setup/environment">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Next: Environment Setup →
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🎯 Try the Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            🛠️ Troubleshooting Common Issues
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Port Already in Use</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-2">If ports 3000 or 8090 are busy:</p>
              <CodeBlock language="bash">
{`# Kill processes using the ports
npx kill-port 3000 8090

# Or run on different ports
npm run dev -- --port 3001`}
              </CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Node Version Issues</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-2">If you have Node version conflicts:</p>
              <CodeBlock language="bash">
{`# Use Node Version Manager (nvm)
nvm install 18
nvm use 18

# Or download from nodejs.org`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Package Installation Errors</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-2">If npm install fails:</p>
              <CodeBlock language="bash">
{`# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
              </CodeBlock>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}