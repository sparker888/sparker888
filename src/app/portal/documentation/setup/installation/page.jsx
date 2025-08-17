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
            Complete setup instructions to get Light-Speed 2026 running on your development machine.
          </p>
        </InfoBox>

        <StepCard step={1} title="System Requirements">
          <p className="mb-4">Ensure your development machine meets these requirements:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Required Software</h4>
              <ul className="text-sm text-stone-600 dark:text-stone-400">
                <li>✅ Node.js 20.3.0+ (LTS recommended)</li>
                <li>✅ npm 9.0+ or yarn 1.22+</li>
                <li>✅ Git 2.0+</li>
                <li>✅ Code editor (VS Code recommended)</li>
              </ul>
            </div>
            
            <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">System Resources</h4>
              <ul className="text-sm text-stone-600 dark:text-stone-400">
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
# Should be v20.3.0 or higher

# Check npm version  
npm --version
# Should be 9.0.0 or higher

# Check Git
git --version
# Should be 2.0.0 or higher`}
          </CodeBlock>
        </StepCard>

        <StepCard step={2} title="Download Light-Speed 2026">
          <p className="mb-4">Download the latest Light-Speed 2026 template:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Template Download</h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
              The download link was provided in your purchase confirmation email. The ZIP file is automatically updated with the latest template version.
            </p>
            
            <CodeBlock language="bash">
{`# Extract the downloaded ZIP file
unzip light-speed-2026-latest.zip

# Navigate to the project directory
cd light-speed-2026

# Verify all files are present
ls -la`}
            </CodeBlock>
          </div>

          <InfoBox type="info" title="Template Updates">
            <p className="text-sm">
              When template updates are released, you'll receive an email notification with the new download link. 
              Simply download the latest version and compare with your customized code to apply updates.
            </p>
          </InfoBox>
        </StepCard>

        <StepCard step={3} title="Install Dependencies & IDE Setup">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Open Project in VS Code (or your preferred editor)</h4>
              <CodeBlock language="bash">
{`# Open project in VS Code
code .`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Install Dependencies</h4>
              <CodeBlock language="bash">
{`# Install project dependencies
npm install

# Verify installation
npm run typecheck`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Install Claude Code (Recommended)</h4>
              <CodeBlock language="bash">
{`# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Project Structure Overview</h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-3">
                Light-Speed 2026 includes a complete <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">.claude/</code> directory with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-400 text-sm mb-4">
                <li><strong>CLAUDE.md</strong> - Project memory and development guidelines</li>
                <li><strong>.claude/commands/</strong> - Custom slash commands for common tasks</li>
                <li><strong>.claude/docs/</strong> - Comprehensive project documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Development Workflow Setup</h4>
              <CodeBlock language="bash">
{`# Launch Claude Code in project root (optional)
claude

# Initialize project analysis if needed
# /init - Analyze codebase structure`}
              </CodeBlock>
              
              <p className="text-stone-600 dark:text-stone-400 text-sm mt-4">
                Light-Speed 2026 includes a complete <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">.claude/</code> directory with commands and documentation. 
                For a complete list of available Claude Code commands, visit the{' '}
                <a href="https://docs.anthropic.com/en/docs/claude-code" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  official Claude Code documentation
                </a>.
              </p>
            </div>

            <InfoBox type="warning" title="Environment Setup Required">
              Before running the development server, you'll need to configure environment variables in the next section.
            </InfoBox>
          </div>
        </StepCard>

        <StepCard step={4} title="Prepare Environment File">
          <p className="mb-4">Copy the environment template (configuration happens in next section):</p>
          
          <CodeBlock language="bash">
{`# Copy environment template
cp .env.example .env`}
          </CodeBlock>

          <p className="text-stone-600 dark:text-stone-400 text-sm mt-4 mb-4">
            <strong>Note:</strong> The <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">.env</code> file contains placeholder values. You'll configure actual values in the Environment Variables section next.
          </p>

          <InfoBox type="warning" title="Security Reminder">
            Never commit your .env file to version control. It contains sensitive API keys and secrets. The .gitignore file is already configured to exclude it.
          </InfoBox>
        </StepCard>

        <StepCard step={5} title="Setup Summary & Next Steps">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Setup Complete</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                You've successfully completed the basic installation. Here's what was accomplished:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-400 text-sm mb-4">
                <li>Dependencies installed and verified</li>
                <li>Project structure confirmed</li>
                <li>Environment template copied</li>
                <li>Claude Code development environment ready</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Environment Variables Required</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                The development server requires environment variables to be configured. In the next section, 
                you'll set up API keys and database connections that enable the platform's core functionality:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-400 text-sm mb-4">
                <li><strong>PocketBase Database</strong> - User authentication and data storage</li>
                <li><strong>Stripe Integration</strong> - Payment processing and subscriptions</li>
                <li><strong>AWS Services</strong> - File storage and CDN delivery</li>
                <li><strong>Email Services</strong> - User notifications and communications</li>
              </ul>
              <InfoBox type="info" title="What are Environment Variables?">
                Environment variables are configuration settings that store sensitive information like API keys 
                and database URLs. They're kept separate from your code for security and allow different 
                settings for development, staging, and production environments.
              </InfoBox>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Ready for Environment Setup</h4>
              <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                <strong>🔧 Continue to Environment Variables</strong><br/>
                Complete the setup by configuring your environment variables in the next section.
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>📝 Coming Up Next</strong><br/>
                Once environment variables are configured, you'll be able to start the development server 
                and begin customizing your social media management platform.
              </p>
            </div>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">📦 Basic Installation Complete!</h3>
          <p className="mb-4 opacity-90">
            You've successfully set up the development environment and prepared the Light-Speed 2026 codebase. 
            Next, you'll configure environment variables and database settings to complete the setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/setup/environment">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Next: Environment Variables →
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            🛠️ Troubleshooting Common Issues
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Port Already in Use</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">If ports 3000 or 8090 are busy:</p>
              <CodeBlock language="bash">
{`# Kill processes using the ports
npx kill-port 3000 8090

# Or run on different ports
npm run dev -- --port 3001`}
              </CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Node Version Issues</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">If you have Node version conflicts:</p>
              <CodeBlock language="bash">
{`# Use Node Version Manager (nvm)
nvm install 20
nvm use 20

# Or download from nodejs.org`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Package Installation Errors</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">If npm install fails:</p>
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