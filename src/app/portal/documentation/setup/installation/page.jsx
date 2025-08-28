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
        <InfoBox type="success" title="What You'll Build" compact>
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
          <div className="grid grid-cols-1 gap-6 mb-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Required Software</h4>
              <ul className="text-sm text-stone-600 dark:text-stone-400">
                <li>✅ Node.js 20.3.0+ (LTS recommended)</li>
                <li>✅ npm 9.0+ or yarn 1.22+</li>
                <li>✅ Git 2.0+</li>
                <li>✅ Code editor (VS Code recommended)</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">System Resources</h4>
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
            <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Template Download</h4>
            <p className="mb-3 text-sm text-stone-600 dark:text-stone-400">
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

          <InfoBox type="info" title="Template Updates" compact>
            <p className="text-sm">
              When template updates are released, you'll receive an email notification with the new download link. 
              Simply download the latest version and compare with your customized code to apply updates.
            </p>
          </InfoBox>
        </StepCard>

        <StepCard step={3} title="Install Dependencies & IDE Setup">
          <div className="space-y-6">
            <div>
              <h4 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Open Project in VS Code (or your preferred editor)</h4>
              <CodeBlock language="bash">
{`# Open project in VS Code
code .`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Install Dependencies</h4>
              <CodeBlock language="bash">
{`# Install project dependencies
npm install

# Verify installation
npm run typecheck`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Install Claude Code (Recommended)</h4>
              <CodeBlock language="bash">
{`# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Project Structure Overview</h4>
              <p className="mb-3 text-sm text-stone-600 dark:text-stone-400">
                Light-Speed 2026 includes a complete <code className="px-1 rounded bg-stone-100 dark:bg-stone-800">.claude/</code> directory with:
              </p>
              <ul className="mb-4 text-sm list-disc list-inside text-stone-600 dark:text-stone-400">
                <li><strong>CLAUDE.md</strong> - Project memory and development guidelines</li>
                <li><strong>.claude/commands/</strong> - Custom slash commands for common tasks</li>
                <li><strong>.claude/docs/</strong> - Comprehensive project documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Development Workflow Setup</h4>
              <CodeBlock language="bash">
{`# Launch Claude Code in project root (optional)
claude

# Initialize project analysis if needed
# /init - Analyze codebase structure`}
              </CodeBlock>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
                Light-Speed 2026 includes a complete <code className="px-1 rounded bg-stone-100 dark:bg-stone-800">.claude/</code> directory with commands and documentation. 
                For a complete list of available Claude Code commands, visit the{' '}
                <a href="https://docs.anthropic.com/en/docs/claude-code" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  official Claude Code documentation
                </a>.
              </p>
            </div>

            <InfoBox type="warning" title="Environment Setup Required" compact>
              Before running the development server, you'll need to configure environment variables in the next section.
            </InfoBox>
          </div>
        </StepCard>

        <StepCard step={4} title="Setup Summary & Next Steps">
          <div className="space-y-6">
            <di
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Setup Complete</h4>
              <p className="mb-4 text-stone-600 dark:text-stone-400">  
                You've successfully completed the ba  sic installation. Here's what was accomplished:
              </p>
              <ul className="mb-4 text-sm list-disc list-inside text-stone-600 dark:text-stone-400">
                <li>Dependencies installed and verified</li>
                <li>Project structure confirmed</li>
                <li>Claude Code development environment ready</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Environment Variables Required</h4>
              <p className="mb-4 text-stone-600 dark:text-stone-400">
                The development server requires environment variables to be configured. In the next section, 
                you'll set up API keys and database connections that enable the platform's core functionality:
              </p>
              <ul className="mb-4 text-sm list-disc list-inside text-stone-600 dark:text-stone-400">
                <li><strong>PocketBase Database</strong> - User authentication and data storage</li>
                <li><strong>Stripe Integration</strong> - Payment processing and subscriptions</li>
                <li><strong>AWS Services</strong> - File storage and CDN delivery</li>
                <li><strong>Email Services</strong> - User notifications and communications</li>
              </ul>
              <InfoBox type="info" title="What are Environment Variables?" compact>
                Environment variables are configuration settings that store sensitive information like API keys 
                and database URLs. They're kept separate from your code for security and allow different 
                settings for development, staging, and production environments.
              </InfoBox>
            </div>

            <div className="p-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <h4 className="mb-3 font-semibold text-green-800 dark:text-green-200">Ready for Environment Setup</h4>
              <p className="mb-3 text-sm text-green-700 dark:text-green-300">
                <strong>🔧 Continue to Environment Variables</strong><br/>
                Complete the setup by configuring your environment variables in the next section.
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Once environment variables are configured, you'll be able to start the development server 
                and begin customizing your social media management platform.
              </p>
            </div>
          </div>
        </StepCard>

        <div className="p-6 text-white rounded-lg bg-gradient-to-r from-blue-600 to-green-600">
          <h3 className="mb-3 text-xl font-bold">📦 Basic Installation Complete!</h3>
          <p className="mb-4 opacity-90">
            You've successfully set up the development environment and prepared the Light-Speed 2026 codebase. 
            Next, you'll configure environment variables and database settings to complete the setup.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/portal/documentation/setup/environment">
              <Button className="text-blue-600 bg-white hover:bg-gray-100">
                Next: Environment Variables →
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-stone-100 dark:bg-stone-800">
          <h3 className="mb-4 text-lg font-semibold text-stone-900 dark:text-stone-100">
            🛠️ Installation Troubleshooting
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">Node Version Issues</h4>
              <p className="mb-2 text-stone-600 dark:text-stone-400">If you have Node version conflicts:</p>
              <CodeBlock language="bash">
{`# Use Node Version Manager (nvm)
nvm install 20
nvm use 20

# Or download from nodejs.org`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">Package Installation Errors</h4>
              <p className="mb-2 text-stone-600 dark:text-stone-400">If npm install fails:</p>
              <CodeBlock language="bash">
{`# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="mb-1 font-semibold text-stone-900 dark:text-stone-100">Permission Errors</h4>
              <p className="mb-2 text-stone-600 dark:text-stone-400">If you get permission denied errors:</p>
              <CodeBlock language="bash">
{`# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm

# Or use nvm instead of system Node.js`}
              </CodeBlock>
            </div>
          </div>
          
          <div className="p-3 mt-4 border border-blue-200 rounded bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 <strong>For server and development issues:</strong> See the troubleshooting section in the First Run guide after completing environment setup.
            </p>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}