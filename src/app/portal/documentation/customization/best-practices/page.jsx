import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'

export const metadata = {
  title: 'Best Practices - Light-Speed 2026 Documentation',
  description: 'Development best practices and Claude Code workflow for Light-Speed 2026'
}

export default function BestPracticesPage() {
  return (
    <DocumentationLayout 
      title="Development Best Practices" 
      description="Essential guidelines for working with Light-Speed 2026 and maximizing your development workflow"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="Development Excellence">
          <p>
            This guide covers best practices for developing with Light-Speed 2026, including Claude Code workflows, 
            template customization strategies, and common pitfalls to avoid.
          </p>
        </InfoBox>

        <StepCard step={1} title="Claude Code Development Workflow">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Recommended Two-Claude Setup</h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
                For optimal development experience, use Claude in two different contexts:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-400 text-sm mb-4">
                <li><strong>Claude Code (Opus 4) in VS Code Terminal</strong> - Primary development and code generation</li>
                <li><strong>Claude Browser (Sonnet 4) with Project Knowledge</strong> - Code reviews and documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Essential Claude Code Commands</h4>
              <CodeBlock language="bash">
{`# Start fresh conversation for new features
/clear

# Get project-specific help
/help

# Analyze current codebase state
/init

# Search for specific code patterns
/search "component name"

# Generate comprehensive documentation
/docs`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Pro Development Tips</h4>
              <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400 text-sm">
                <li><strong>Always launch Claude Code from the project root directory</strong> - Ensures proper context</li>
                <li><strong>Use <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">/clear</code> when starting new development tasks</strong> - Prevents context pollution</li>
                <li><strong>The CLAUDE.md file provides project-specific context automatically</strong> - Review it regularly</li>
                <li><strong>Break large features into smaller tasks</strong> - Better code generation and easier debugging</li>
                <li><strong>Test incrementally</strong> - Verify each change before moving to the next</li>
              </ul>
            </div>
          </div>
        </StepCard>

        <StepCard step={2} title="Template Customization Best Practices">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Start Small, Build Incrementally</h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
                Follow this progression when customizing Light-Speed 2026:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-stone-600 dark:text-stone-400 text-sm">
                <li><strong>Colors and Branding</strong> - Update theme colors, logos, and basic styling</li>
                <li><strong>Content and Copy</strong> - Customize text, messaging, and feature descriptions</li>
                <li><strong>UI Components</strong> - Modify existing components or add new ones</li>
                <li><strong>Database Schema</strong> - Extend or modify data structures</li>
                <li><strong>API Integration</strong> - Add new services or modify existing ones</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Documentation Strategy</h4>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  <strong>Document Your Changes:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                  <li>Keep a <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">CUSTOMIZATIONS.md</code> file tracking your modifications</li>
                  <li>Comment complex customizations in your code</li>
                  <li>Update environment variable documentation</li>
                  <li>Document any new API endpoints or database changes</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Version Control Best Practices</h4>
              <CodeBlock language="bash">
{`# Create feature branches for major customizations
git checkout -b feature/custom-dashboard

# Make frequent, small commits
git add -A
git commit -m "feat: add custom analytics widget"

# Keep your main branch clean
git checkout main
git merge feature/custom-dashboard

# Tag stable versions
git tag -a v1.0-custom -m "Production ready custom version"`}
              </CodeBlock>
            </div>
          </div>
        </StepCard>

        <StepCard step={3} title="Development Workflow Tips">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">File Organization</h4>
              <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400 text-sm">
                <li><strong>Custom Components</strong> - Create in <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">src/components/custom/</code></li>
                <li><strong>New Pages</strong> - Follow Next.js 13 app router conventions</li>
                <li><strong>Utilities</strong> - Add custom utilities to <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">src/lib/custom/</code></li>
                <li><strong>Styles</strong> - Extend Tailwind config for custom styling</li>
                <li><strong>Assets</strong> - Store custom images in <code className="bg-stone-100 dark:bg-stone-800 px-1 rounded">public/custom/</code></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Component Reuse Strategy</h4>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
                Light-Speed 2026 is built with reusable components. Follow these patterns:
              </p>
              <CodeBlock language="jsx">
{`// Extend existing components instead of creating from scratch
import { BaseCard } from '@/components/ui/Card'

export function CustomAnalyticsCard({ data }) {
  return (
    <BaseCard className="custom-analytics">
      {/* Your custom content */}
    </BaseCard>
  )
}

// Use the existing design system
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/hooks/useTheme'`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Database Schema Modifications</h4>
              <InfoBox type="warning" title="Database Changes">
                When modifying the PocketBase schema, always create migrations and backup your data. 
                Test schema changes in development before applying to production.
              </InfoBox>
            </div>
          </div>
        </StepCard>

        <StepCard step={4} title="Common Pitfalls and Solutions">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Environment Variable Issues</h4>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">❌ Common Problem:</h5>
                <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                  Development server fails to start or features don't work properly.
                </p>
                <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">✅ Solution:</h5>
                <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 text-sm">
                  <li>Verify all required environment variables are set</li>
                  <li>Check variable names match exactly (case-sensitive)</li>
                  <li>Restart development server after changing .env file</li>
                  <li>Use <code className="bg-red-100 dark:bg-red-800 px-1 rounded">console.log(process.env.VARIABLE_NAME)</code> to debug</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Build Configuration Errors</h4>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-2">⚠️ Common Problem:</h5>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                  TypeScript errors or build failures after customization.
                </p>
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-2">✅ Solution:</h5>
                <CodeBlock language="bash">
{`# Check for TypeScript errors
npm run typecheck

# Clear Next.js cache if needed
rm -rf .next
npm run build

# Verify all imports are correct
npm run lint`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Database Migration Problems</h4>
              <InfoBox type="info" title="Migration Best Practices">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Always backup your database before schema changes</li>
                  <li>Test migrations in development environment first</li>
                  <li>Document schema changes in your customization notes</li>
                  <li>Use PocketBase admin panel for complex schema modifications</li>
                </ul>
              </InfoBox>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Deployment Gotchas</h4>
              <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400 text-sm">
                <li><strong>Environment Variables</strong> - Set production values in deployment platform</li>
                <li><strong>Build Optimization</strong> - Test production builds locally before deploying</li>
                <li><strong>Asset Paths</strong> - Ensure all custom assets are properly referenced</li>
                <li><strong>Database URLs</strong> - Update connection strings for production database</li>
              </ul>
            </div>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🚀 Ready to Build Something Amazing</h3>
          <p className="mb-4 opacity-90">
            With these best practices in mind, you're equipped to customize Light-Speed 2026 efficiently 
            and build a robust social media management platform tailored to your needs.
          </p>
          <div className="text-sm opacity-75">
            <p><strong>Remember:</strong> Start small, test frequently, and document your changes!</p>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}