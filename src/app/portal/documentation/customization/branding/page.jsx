import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Branding Customization Guide - Light-Speed 2026 Documentation',
  description: 'Complete guide to customizing Light-Speed 2026 with your brand colors, logos, and content'
}

export default function BrandingPage() {
  return (
    <DocumentationLayout 
      title="Branding Customization Guide" 
      description="Transform Light-Speed 2026 to match your brand identity and create a unique social media platform"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="What You'll Customize">
          <p className="mb-3">
            This guide will help you rebrand Light-Speed 2026 to match your company's identity. You'll customize 
            colors, logos, fonts, content, and even the platform name to create a unique social media management tool.
          </p>
          <p>
            Perfect for agencies, consultants, and SaaS entrepreneurs who want to white-label the platform.
          </p>
        </InfoBox>

        <StepCard step={1} title="Brand Colors & Theme">
          <p className="mb-4">Light-Speed 2026 uses Tailwind CSS with a stone color palette. Let's customize the primary colors:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Primary Color Configuration</h4>
            <CodeBlock language="javascript" title="tailwind.config.js">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        // Replace these with your brand colors
        brand: {
          50: '#fff7ed',   // Lightest
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Primary brand color
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',  // Darkest
        },
        // Secondary accent color
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Secondary color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Apply Your Colors Throughout</h4>
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              Update key components to use your brand colors:
            </p>
            <CodeBlock language="javascript" title="src/components/Header.jsx (example)">
{`// Replace stone colors with your brand colors
<button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg">
  Get Started
</button>

// For gradients and highlights
<div className="bg-gradient-to-r from-brand-500 to-accent-500 text-white p-6 rounded-xl">
  <h2 className="text-2xl font-bold">Welcome to Your Platform</h2>
</div>`}
            </CodeBlock>
          </div>

          <InfoBox type="info" title="Color Generator Tools">
            Use tools like <a href="https://uicolors.app" className="underline text-blue-600 dark:text-blue-400">uicolors.app</a> or 
            <a href="https://tailwindshades.com" className="underline text-blue-600 dark:text-blue-400 ml-1">tailwindshades.com</a> to 
            generate complete color palettes from your brand colors.
          </InfoBox>
        </StepCard>

        <StepCard step={2} title="Logo & Brand Assets">
          <p className="mb-4">Replace the Light-Speed 2026 branding with your own logos and imagery:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Logo Files Setup</h4>
            <CodeBlock language="bash">
{`# Create your brand assets directory
mkdir -p public/brand
mkdir -p src/images/brand

# Add your logo files (recommended formats)
# public/brand/
#   ├── logo.svg           # Primary logo (vector)
#   ├── logo-dark.svg      # Dark mode version
#   ├── logo-icon.svg      # Icon only version
#   ├── favicon.ico        # Browser favicon
#   └── og-image.png       # Social media sharing image (1200x630)`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Update Header Logo</h4>
            <CodeBlock language="javascript" title="src/components/Header.jsx">
{`import Image from 'next/image'
import { useTheme } from 'next-themes'

function Logo() {
  const { theme } = useTheme()
  
  return (
    <div className="flex items-center">
      <Image
        src={theme === 'dark' ? '/brand/logo-dark.svg' : '/brand/logo.svg'}
        alt="Your Platform Name"
        width={180}
        height={40}
        className="h-8 w-auto"
      />
    </div>
  )
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Update Favicon & Metadata</h4>
            <CodeBlock language="javascript" title="src/app/layout.jsx">
{`export const metadata = {
  title: 'Your Platform Name - Social Media Management',
  description: 'Professional social media management platform for businesses',
  icons: {
    icon: '/brand/favicon.ico',
    apple: '/brand/logo-icon.svg',
  },
  openGraph: {
    title: 'Your Platform Name',
    description: 'Professional social media management platform',
    images: ['/brand/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Platform Name',
    description: 'Professional social media management platform',
    images: ['/brand/og-image.png'],
  },
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={3} title="Platform Name & Content">
          <p className="mb-4">Replace "Light-Speed 2026" with your platform name throughout the application:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Global Search & Replace</h4>
            <CodeBlock language="bash">
{`# Use VS Code or your editor to find and replace:
# Search for: "Light-Speed 2026"
# Replace with: "Your Platform Name"

# Search for: "Light-Speed"
# Replace with: "YourPlatform"

# Update environment variables
# .env.local
NEXT_PUBLIC_APP_NAME="Your Platform Name"
NEXT_PUBLIC_APP_DESCRIPTION="Professional social media management platform"`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Key Files to Update</h4>
            <div className="space-y-3">
              <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
                <h5 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Homepage Content</h5>
                <CodeBlock language="javascript" title="src/app/page.jsx">
{`<h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100">
  Welcome to Your Platform Name
</h1>
<p className="text-xl text-stone-600 dark:text-stone-400">
  The complete social media management solution for your business
</p>`}
                </CodeBlock>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
                <h5 className="font-medium text-stone-900 dark:text-stone-100 mb-2">Footer Information</h5>
                <CodeBlock language="javascript" title="src/components/Footer.jsx">
{`<div className="text-center">
  <p className="text-stone-600 dark:text-stone-400">
    © 2024 Your Company Name. All rights reserved.
  </p>
  <p className="text-sm text-stone-500 dark:text-stone-500 mt-1">
    Powered by Your Platform Name
  </p>
</div>`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard step={4} title="Typography & Fonts">
          <p className="mb-4">Customize fonts to match your brand identity:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Google Fonts Integration</h4>
            <CodeBlock language="javascript" title="src/app/layout.jsx">
{`import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${poppins.variable}\`}>
      <body className="font-inter">
        {children}
      </body>
    </html>
  )
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Update Tailwind Configuration</h4>
            <CodeBlock language="javascript" title="tailwind.config.js">
{`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      }
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Apply Typography Classes</h4>
            <CodeBlock language="javascript">
{`// For headings
<h1 className="font-heading font-bold text-3xl">Your Heading</h1>

// For body text
<p className="font-sans text-base">Your content text</p>

// For buttons and UI elements
<button className="font-heading font-medium">Get Started</button>`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={5} title="Custom Styling & Components">
          <p className="mb-4">Create custom styles that reflect your brand personality:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Custom Button Styles</h4>
            <CodeBlock language="javascript" title="src/components/Button.jsx">
{`const buttonVariants = {
  primary: 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-200',
  secondary: 'bg-white hover:bg-stone-50 text-brand-600 border border-brand-200 hover:border-brand-300',
  gradient: 'bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white shadow-lg',
  outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors',
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Custom Card Components</h4>
            <CodeBlock language="javascript" title="src/components/CustomCard.jsx">
{`export function BrandCard({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700',
    featured: 'bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20 border border-brand-200 dark:border-brand-800',
    elevated: 'bg-white dark:bg-stone-800 shadow-xl border border-stone-200 dark:border-stone-700 hover:shadow-2xl transition-shadow',
  }
  
  return (
    <div className={\`rounded-xl p-6 \${variants[variant]}\`}>
      {children}
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={6} title="Dashboard Customization">
          <p className="mb-4">Customize the main dashboard to reflect your brand:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Welcome Message</h4>
            <CodeBlock language="javascript" title="src/app/portal/dashboard/page.jsx">
{`<div className="bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl p-8 text-white mb-8">
  <h1 className="text-3xl font-bold mb-3">
    Welcome to Your Platform Name Dashboard
  </h1>
  <p className="text-brand-100 text-lg">
    Manage all your social media accounts from one powerful platform
  </p>
</div>`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Custom Metrics Cards</h4>
            <CodeBlock language="javascript">
{`<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
  <MetricCard
    title="Total Posts"
    value="1,234"
    change="+12%"
    color="brand"
    icon="📝"
  />
  <MetricCard
    title="Engagement Rate"
    value="5.8%"
    change="+0.5%"
    color="accent"
    icon="❤️"
  />
  // ... more metrics
</div>`}
            </CodeBlock>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🎨 Branding Complete!</h3>
          <p className="mb-4 opacity-90">
            Your Light-Speed 2026 platform now reflects your unique brand identity. The next step is to 
            configure your social media platform integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/customization/platforms">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Next: Platform Configuration →
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🎯 Preview Your Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            🛠️ Advanced Branding Tips
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Consistent Color Usage</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Use your primary brand color for CTAs and important actions. Use secondary colors for accents and highlights.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Logo Best Practices</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Ensure your logo works well at small sizes and in both light and dark themes. SVG format is recommended for crisp scaling.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Mobile Responsiveness</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Test your branding on mobile devices. Consider how your logo and colors appear on smaller screens.
              </p>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}