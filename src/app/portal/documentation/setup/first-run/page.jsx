import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { InfoBox, StepCard } from '@/components/light-speed-2026/StepCard'

export const metadata = {
  title: 'First Run Verification - Light-Speed 2026 Documentation',
  description: 'Verify your Light-Speed 2026 installation and ensure everything is working correctly'
}

export default function FirstRunPage() {
  return (
    <DocumentationLayout
      title="First Run Verification"
      description="Ensure your Light-Speed 2026 platform is properly installed and configured"
    >
      <div className="space-y-8">
        <InfoBox type="success" title="Pre-Installation Complete">
          If you've followed the installation guide, your development environment should now be ready for verification.
        </InfoBox>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Verification Steps
          </h2>
          
          <div className="space-y-6">
            <StepCard step="1" title="Start Development Servers">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                First, ensure both your backend and frontend servers are running properly.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Start PocketBase backend:
                  </p>
                  <CodeBlock language="bash">
{`cd backend
./pocketbase serve`}
                  </CodeBlock>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    In a new terminal, start Next.js frontend:
                  </p>
                  <CodeBlock language="bash">
{`cd frontend
npm run dev`}
                  </CodeBlock>
                </div>
              </div>
            </StepCard>

            <StepCard step="2" title="Access Application URLs">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Verify that both servers are accessible:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-medium text-stone-900 dark:text-stone-100">Frontend:</span>
                    <a href="http://localhost:3000" className="ml-2 text-amber-600 hover:text-amber-700">
                      http://localhost:3000
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-medium text-stone-900 dark:text-stone-100">PocketBase Admin:</span>
                    <a href="http://localhost:8090/_/" className="ml-2 text-amber-600 hover:text-amber-700">
                      http://localhost:8090/_/
                    </a>
                  </div>
                </li>
              </ul>
            </StepCard>

            <StepCard step="3" title="Configure PocketBase Admin">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                On first run, you'll need to create an admin account for PocketBase:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-stone-600 dark:text-stone-400">
                <li>Navigate to http://localhost:8090/_/</li>
                <li>Create your admin email and password</li>
                <li>Save these credentials securely</li>
                <li>Log in to the PocketBase admin dashboard</li>
              </ol>
              
              <InfoBox type="warning" title="Important">
                Keep your PocketBase admin credentials secure. You'll need them to manage your database and users.
              </InfoBox>
            </StepCard>

            <StepCard step="4" title="Test Core Features">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Verify that the main features are working:
              </p>
              
              <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-4 space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-amber-600" />
                  <span className="text-stone-700 dark:text-stone-300">Homepage loads without errors</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-amber-600" />
                  <span className="text-stone-700 dark:text-stone-300">User registration page accessible</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-amber-600" />
                  <span className="text-stone-700 dark:text-stone-300">Login functionality works</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-amber-600" />
                  <span className="text-stone-700 dark:text-stone-300">Dashboard loads after login</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-amber-600" />
                  <span className="text-stone-700 dark:text-stone-300">Social media connection buttons visible</span>
                </label>
              </div>
            </StepCard>

            <StepCard step="5" title="Check Console for Errors" variant="info">
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                Open your browser's developer console to check for any errors:
              </p>
              
              <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                <li>• Press <code className="px-2 py-1 bg-stone-200 dark:bg-stone-700 rounded">F12</code> or right-click → Inspect</li>
                <li>• Navigate to the Console tab</li>
                <li>• Look for any red error messages</li>
                <li>• Check the Network tab for failed requests</li>
              </ul>
              
              <InfoBox type="info" title="Common Issues">
                If you see CORS errors, ensure your .env.local file has the correct NEXT_PUBLIC_POCKETBASE_URL set to http://localhost:8090
              </InfoBox>
            </StepCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Troubleshooting
          </h2>
          
          <div className="space-y-4">
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Backend won't start
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                If PocketBase fails to start:
              </p>
              <CodeBlock language="bash">
{`# Check if port 8090 is already in use
lsof -i :8090

# Kill the process if needed
kill -9 <PID>

# Or use a different port
./pocketbase serve --http=127.0.0.1:8091`}
              </CodeBlock>
            </div>

            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Frontend build errors
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                If you encounter build errors:
              </p>
              <CodeBlock language="bash">
{`# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev`}
              </CodeBlock>
            </div>

            <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Database connection issues
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Verify your environment variables:
              </p>
              <CodeBlock language="bash">
{`# Check .env.local file
cat .env.local

# Should contain:
NEXT_PUBLIC_POCKETBASE_URL=http://localhost:8090`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Next Steps
          </h2>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
              🎉 Verification Complete!
            </h3>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              Your Light-Speed 2026 platform is ready for customization. Continue with:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/portal/documentation/customization/branding" 
                className="inline-flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                Customize Branding →
              </a>
              <a 
                href="/portal/documentation/customization/platforms" 
                className="inline-flex items-center justify-center px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition"
              >
                Configure Platforms →
              </a>
            </div>
          </div>
        </section>
      </div>
    </DocumentationLayout>
  )
}