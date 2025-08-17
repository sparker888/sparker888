import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'ProductFlow Pro - E-commerce Example - Light-Speed 2026 Documentation',
  description: 'Complete example of customizing Light-Speed 2026 for e-commerce stores and online retail businesses'
}

export default function EcommerceExamplePage() {
  return (
    <DocumentationLayout 
      title="ProductFlow Pro - E-commerce Example" 
      description="Transform Light-Speed 2026 into a powerful social commerce platform for online stores and retail brands"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="Social Commerce Platform">
          <p className="mb-3">
            ProductFlow Pro demonstrates how Light-Speed 2026 becomes a comprehensive social commerce management platform. 
            This example includes product showcases, inventory-aware posting, sales tracking, and customer engagement features.
          </p>
          <p>
            Perfect for e-commerce stores, dropshippers, retail brands, and marketplace sellers who want to maximize social media ROI.
          </p>
        </InfoBox>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
            🛍️ ProductFlow Pro Platform Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Product Showcases</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">Auto-generate product posts with pricing, availability, and purchase links</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Sales Analytics</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Track social media attribution and ROI from each platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Smart Campaigns</h4>
              <p className="text-sm text-green-700 dark:text-green-300">Automated product promotions based on inventory and trends</p>
            </div>
          </div>
        </div>

        <StepCard step={1} title="E-commerce Branding & Design">
          <p className="mb-4">Transform the platform with e-commerce focused branding and shopping-centric UI:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">E-commerce Color Palette</h4>
            <CodeBlock language="javascript" title="tailwind.config.js">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary e-commerce brand colors
        commerce: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Main commerce blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Sales/conversion color
        conversion: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',  // Success green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Warning/urgent color
        urgent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',  // Alert red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Premium/luxury color
        premium: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // Premium purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      }
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Shopping-Focused Header</h4>
            <CodeBlock language="javascript" title="src/components/EcommerceHeader.jsx">
{`import { ShoppingCartIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function EcommerceHeader() {
  return (
    <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/brand/productflow-logo.svg"
              alt="ProductFlow Pro"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <div className="hidden md:block">
              <span className="text-sm text-commerce-600 dark:text-commerce-400 font-medium">
                Social Commerce Management
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/dashboard" className="text-stone-600 hover:text-commerce-600 dark:text-stone-300 dark:hover:text-commerce-400">
              Dashboard
            </a>
            <a href="/products" className="text-stone-600 hover:text-commerce-600 dark:text-stone-300 dark:hover:text-commerce-400">
              Products
            </a>
            <a href="/campaigns" className="text-stone-600 hover:text-commerce-600 dark:text-stone-300 dark:hover:text-commerce-400">
              Campaigns
            </a>
            <a href="/analytics" className="text-stone-600 hover:text-commerce-600 dark:text-stone-300 dark:hover:text-commerce-400">
              Analytics
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="bg-commerce-50 dark:bg-commerce-900/20 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-commerce-700 dark:text-commerce-300">
                💰 Revenue: $12,450
              </span>
            </div>
            <button className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 relative">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-urgent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">E-commerce Hero Section</h4>
            <CodeBlock language="javascript" title="src/components/EcommerceHero.jsx">
{`export function EcommerceHero() {
  return (
    <div className="relative bg-gradient-to-br from-commerce-500 via-premium-500 to-conversion-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">Turn Social Media</span>
              <span className="block text-conversion-200">Into Sales</span>
              <span className="block">Automatically</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ProductFlow Pro connects your store to social media, creating product posts 
              that convert followers into customers with intelligent automation.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <span className="text-blue-100">Auto-sync with Shopify/WooCommerce</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <span className="text-blue-100">Track sales from each post</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <span className="text-blue-100">Smart inventory management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-conversion-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>
                <span className="text-blue-100">Automated customer retargeting</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-commerce-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                🚀 Connect Your Store
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-commerce-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📊 See ROI Calculator
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-conversion-300">+247%</div>
                <div className="text-sm text-blue-200">Social Media ROI</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Posts this month</span>
                  <span className="font-semibold">142</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Sales generated</span>
                  <span className="font-semibold text-conversion-300">$28,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Conversion rate</span>
                  <span className="font-semibold text-conversion-300">3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={2} title="Product Integration & Sync">
          <p className="mb-4">Connect with popular e-commerce platforms and sync product data:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Shopify Integration</h4>
            <CodeBlock language="javascript" title="src/lib/integrations/shopify.js">
{`export class ShopifyIntegration {
  constructor(shopDomain, accessToken) {
    this.shopDomain = shopDomain
    this.accessToken = accessToken
    this.baseUrl = \`https://\${shopDomain}.myshopify.com/admin/api/2023-10\`
  }

  async getProducts(limit = 50) {
    try {
      const response = await fetch(\`\${this.baseUrl}/products.json?limit=\${limit}\`, {
        headers: {
          'X-Shopify-Access-Token': this.accessToken,
          'Content-Type': 'application/json'
        }
      })
      
      const data = await response.json()
      
      return data.products.map(product => ({
        id: product.id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0]?.price || '0.00',
        comparePrice: product.variants[0]?.compare_at_price,
        images: product.images.map(img => img.src),
        inventory: product.variants[0]?.inventory_quantity || 0,
        tags: product.tags.split(',').map(tag => tag.trim()),
        productType: product.product_type,
        vendor: product.vendor,
        handle: product.handle,
        variants: product.variants.map(variant => ({
          id: variant.id,
          title: variant.title,
          price: variant.price,
          inventory: variant.inventory_quantity,
          sku: variant.sku
        }))
      }))
    } catch (error) {
      throw new Error(\`Shopify sync failed: \${error.message}\`)
    }
  }

  async getProductAnalytics(productId, days = 30) {
    try {
      const endDate = new Date()
      const startDate = new Date(endDate.getTime() - (days * 24 * 60 * 60 * 1000))
      
      const response = await fetch(
        \`\${this.baseUrl}/analytics/reports/product_performance.json?product_id=\${productId}&start_date=\${startDate.toISOString()}&end_date=\${endDate.toISOString()}\`,
        {
          headers: {
            'X-Shopify-Access-Token': this.accessToken
          }
        }
      )
      
      return await response.json()
    } catch (error) {
      throw new Error(\`Analytics fetch failed: \${error.message}\`)
    }
  }

  generateProductPost(product, template = 'showcase') {
    const templates = {
      showcase: \\\`🛍️ NEW ARRIVAL ALERT! 🛍️

✨ \\\${product.title}

💰 Price: $\\\${product.price}
\\\${product.comparePrice ? \\\`🏷️ Was: $\\\${product.comparePrice} (SAVE $\\\${(parseFloat(product.comparePrice) - parseFloat(product.price)).toFixed(2)}!)\\\` : ''}

📦 \\\${product.inventory > 0 ? \\\`In Stock (\\\${product.inventory} available)\\\` : 'Limited Stock - Order Now!'}

\\\${product.description.replace(/<[^>]*>/g, '').substring(0, 150)}...

🛒 Shop now: [Link in Bio]

#NewArrival #\\\${product.productType.replace(/\\\\s+/g, '')} #Shopping #\\\${product.vendor}\\\`,

      sale: \\\`🚨 FLASH SALE ALERT! 🚨

⚡ \\\${product.title}

💥 SALE PRICE: $\\\${product.price}
\\\${product.comparePrice ? \\\`🔥 You Save: $\\\${(parseFloat(product.comparePrice) - parseFloat(product.price)).toFixed(2)} (\\\${Math.round(((parseFloat(product.comparePrice) - parseFloat(product.price)) / parseFloat(product.comparePrice)) * 100)}% OFF!)\\\` : ''}

⏰ Limited time only! 
📦 Only \\\${product.inventory} left in stock!

Don't miss out - grab yours before they're gone! 👇

🛒 Shop now: [Link in Bio]

#FlashSale #LimitedTime #\\\${product.productType.replace(/\\\\s+/g, '')} #Sale\\\`,

      restock: \\\`📦 BACK IN STOCK! 📦

🎉 \\\${product.title} is finally back!

Our customers have been asking for this one - and it's here! 

💰 $\\\${product.price}
📦 Fresh stock: \\\${product.inventory} units available

Get yours before they sell out again! 

🛒 Order now: [Link in Bio]

#BackInStock #PopularItem #\\\${product.productType.replace(/\\\\s+/g, '')} #\\\${product.vendor}\\\`
    }
    
    return templates[template] || templates.showcase
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">WooCommerce Integration</h4>
            <CodeBlock language="javascript" title="src/lib/integrations/woocommerce.js">
{`import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export class WooCommerceIntegration {
  constructor(url, consumerKey, consumerSecret) {
    this.api = new WooCommerceRestApi({
      url,
      consumerKey,
      consumerSecret,
      version: 'wc/v3'
    })
  }

  async getProducts(params = {}) {
    try {
      const response = await this.api.get('products', {
        per_page: 50,
        status: 'publish',
        ...params
      })
      
      return response.data.map(product => ({
        id: product.id,
        title: product.name,
        description: product.description,
        shortDescription: product.short_description,
        price: product.price,
        regularPrice: product.regular_price,
        salePrice: product.sale_price,
        onSale: product.on_sale,
        images: product.images.map(img => img.src),
        stock: product.stock_quantity,
        inStock: product.stock_status === 'instock',
        categories: product.categories.map(cat => cat.name),
        tags: product.tags.map(tag => tag.name),
        sku: product.sku,
        permalink: product.permalink,
        variations: product.variations
      }))
    } catch (error) {
      throw new Error(\`WooCommerce sync failed: \${error.message}\`)
    }
  }

  async getProductSales(productId, period = '30d') {
    try {
      const response = await this.api.get('reports/products', {
        product_ids: [productId],
        period
      })
      
      return response.data
    } catch (error) {
      throw new Error(\`Sales data fetch failed: \${error.message}\`)
    }
  }

  async getTopProducts(limit = 10) {
    try {
      const response = await this.api.get('reports/top_sellers', {
        per_page: limit
      })
      
      return response.data
    } catch (error) {
      throw new Error(\`Top products fetch failed: \${error.message}\`)
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Product Sync Dashboard</h4>
            <CodeBlock language="javascript" title="src/components/ProductSyncDashboard.jsx">
{`export function ProductSyncDashboard() {
  const [integrations, setIntegrations] = useState([])
  const [syncStatus, setSyncStatus] = useState('idle')
  const [lastSync, setLastSync] = useState(null)

  const integrationTypes = [
    {
      name: 'Shopify',
      icon: '🛍️',
      color: 'commerce',
      description: 'Sync products, inventory, and sales data'
    },
    {
      name: 'WooCommerce',
      icon: '🛒',
      color: 'premium',
      description: 'WordPress e-commerce integration'
    },
    {
      name: 'Etsy',
      icon: '🎨',
      color: 'conversion',
      description: 'Handmade and vintage product sync'
    },
    {
      name: 'Amazon',
      icon: '📦',
      color: 'urgent',
      description: 'Marketplace product management'
    }
  ]

  const handleSync = async (integration) => {
    setSyncStatus('syncing')
    try {
      // Perform sync based on integration type
      await syncProducts(integration)
      setLastSync(new Date())
      setSyncStatus('success')
    } catch (error) {
      setSyncStatus('error')
      console.error('Sync failed:', error)
    }
  }

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
          🔗 Store Integrations
        </h3>
        <div className="flex items-center space-x-3">
          <div className={\`px-3 py-1 rounded-full text-sm font-medium \${
            syncStatus === 'syncing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
            syncStatus === 'success' ? 'bg-conversion-100 text-conversion-800 dark:bg-conversion-900/20 dark:text-conversion-300' :
            syncStatus === 'error' ? 'bg-urgent-100 text-urgent-800 dark:bg-urgent-900/20 dark:text-urgent-300' :
            'bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-300'
          }\`}>
            {syncStatus === 'syncing' ? 'Syncing...' :
             syncStatus === 'success' ? 'Synced' :
             syncStatus === 'error' ? 'Error' : 'Ready'}
          </div>
          {lastSync && (
            <span className="text-sm text-stone-500 dark:text-stone-400">
              Last sync: {lastSync.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrationTypes.map((integration) => {
          const isConnected = integrations.some(i => i.type === integration.name.toLowerCase())
          
          return (
            <div key={integration.name} className="border border-stone-200 dark:border-stone-600 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{integration.icon}</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <div className={\`px-2 py-1 rounded-full text-xs font-medium \${
                  isConnected
                    ? 'bg-conversion-100 text-conversion-800 dark:bg-conversion-900/20 dark:text-conversion-300'
                    : 'bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-300'
                }\`}>
                  {isConnected ? 'Connected' : 'Not Connected'}
                </div>
              </div>

              {isConnected ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Products synced:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Last update:</span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">2 hours ago</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSync(integration)}
                      className={\`flex-1 bg-\${integration.color}-500 hover:bg-\${integration.color}-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors\`}
                    >
                      Sync Now
                    </button>
                    <button className="px-4 py-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 rounded-lg text-sm hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
                      Settings
                    </button>
                  </div>
                </div>
              ) : (
                <button className={\`w-full bg-\${integration.color}-500 hover:bg-\${integration.color}-600 text-white py-3 px-6 rounded-lg font-medium transition-colors\`}>
                  Connect {integration.name}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={3} title="Smart Product Post Generator">
          <p className="mb-4">Automatically generate compelling product posts with AI and data insights:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">AI Product Post Generator</h4>
            <CodeBlock language="javascript" title="src/lib/productPostGenerator.js">
{`export class ProductPostGenerator {
  constructor(product, analytics = null) {
    this.product = product
    this.analytics = analytics
  }

  generatePost(template = 'auto', platform = 'instagram') {
    // Auto-select best template based on product data
    if (template === 'auto') {
      template = this.selectBestTemplate()
    }

    const context = this.buildContext()
    
    switch (template) {
      case 'launch':
        return this.generateLaunchPost(context, platform)
      case 'sale':
        return this.generateSalePost(context, platform)
      case 'testimonial':
        return this.generateTestimonialPost(context, platform)
      case 'lifestyle':
        return this.generateLifestylePost(context, platform)
      case 'urgency':
        return this.generateUrgencyPost(context, platform)
      default:
        return this.generateStandardPost(context, platform)
    }
  }

  selectBestTemplate() {
    const { product, analytics } = this
    
    // New product
    if (this.isNewProduct()) return 'launch'
    
    // On sale
    if (product.onSale || product.salePrice) return 'sale'
    
    // Low stock
    if (product.stock && product.stock < 10) return 'urgency'
    
    // High performing product
    if (analytics?.conversionRate > 0.05) return 'testimonial'
    
    // Default to lifestyle for broad appeal
    return 'lifestyle'
  }

  buildContext() {
    const savings = this.product.regularPrice && this.product.salePrice
      ? (parseFloat(this.product.regularPrice) - parseFloat(this.product.salePrice)).toFixed(2)
      : null

    const savingsPercent = savings && this.product.regularPrice
      ? Math.round((savings / parseFloat(this.product.regularPrice)) * 100)
      : null

    return {
      title: this.product.title,
      price: this.product.price,
      regularPrice: this.product.regularPrice,
      salePrice: this.product.salePrice,
      savings,
      savingsPercent,
      stock: this.product.stock,
      inStock: this.product.inStock,
      categories: this.product.categories || [],
      tags: this.product.tags || [],
      isNew: this.isNewProduct(),
      isLowStock: this.product.stock && this.product.stock < 10,
      isTrending: this.analytics?.views > 1000,
      rating: this.analytics?.averageRating || null
    }
  }

  generateLaunchPost(context, platform) {
    const emojis = this.getEmojisForCategories(context.categories)
    
    return \\\`\\\${emojis.join(' ')} NEW ARRIVAL ALERT! \\\${emojis.join(' ')}

✨ Introducing: \\\${context.title}

🎉 Fresh from our collection and ready to wow you!

💰 Starting at $\\\${context.price}
📦 \\\${context.stock > 0 ? \\\`\\\${context.stock} units available\\\` : 'Limited quantities'}

Be among the first to experience this amazing new addition! 

What do you think? Drop a ❤️ if you love it!

🛒 Shop now: [Link in Bio]

#NewArrival #JustLaunched #\\\${context.categories.map(cat => cat.replace(/\\\\s+/g, '')).join(' #')} #Shopping\\\`
  }

  generateSalePost(context, platform) {
    const urgencyEmojis = ['🚨', '⚡', '🔥', '💥']
    const emoji = urgencyEmojis[Math.floor(Math.random() * urgencyEmojis.length)]
    
    return \\\`\\\${emoji} SALE ALERT! \\\${emoji}

🛍️ \\\${context.title}

💸 NOW: $\\\${context.salePrice || context.price}
\\\${context.savings ? \\\`🏷️ Was: $\\\${context.regularPrice}\\\` : ''}
\\\${context.savingsPercent ? \\\`💰 You save: $\\\${context.savings} (\\\${context.savingsPercent}% OFF!)\\\` : ''}

⏰ Limited time offer!
\\\${context.isLowStock ? \\\`📦 Only \\\${context.stock} left!\\\` : ''}

Don't let this deal slip away! 👆

🛒 Grab yours: [Link in Bio]

#Sale #LimitedTime #Deal #\\\${context.categories.map(cat => cat.replace(/\\\\s+/g, '')).join(' #')}\\\`
  }

  generateLifestylePost(context, platform) {
    const lifestyleHooks = [
      "Transform your everyday moments",
      "Elevate your style game",
      "Experience the difference",
      "Discover your new favorite",
      "Make every day special"
    ]
    
    const hook = lifestyleHooks[Math.floor(Math.random() * lifestyleHooks.length)]
    
    return \\\`✨ \\\${hook} ✨

💫 \\\${context.title}

\\\${this.generateLifestyleDescription(context)}

💰 \\\${context.salePrice ? \\\`Special price: $\\\${context.salePrice}\\\` : \\\`Price: $\\\${context.price}\\\`}
\\\${context.rating ? \\\`⭐ Rated \\\${context.rating}/5 by customers\\\` : ''}

Tag someone who would love this! 👇

🛒 Shop the collection: [Link in Bio]

#Lifestyle #Quality #\\\${context.categories.map(cat => cat.replace(/\\\\s+/g, '')).join(' #')}\\\`
  }

  generateLifestyleDescription(context) {
    const descriptions = {
      'clothing': "Perfect for any occasion, this piece combines comfort with style.",
      'electronics': "Technology that works as hard as you do, designed for modern life.",
      'home': "Transform your space into a sanctuary of comfort and style.",
      'beauty': "Because you deserve to feel confident and beautiful every day.",
      'fitness': "Gear up for success with equipment that supports your goals.",
      'default': "Crafted with care and designed with you in mind."
    }
    
    const category = context.categories[0]?.toLowerCase() || 'default'
    return descriptions[category] || descriptions.default
  }

  getEmojisForCategories(categories) {
    const categoryEmojis = {
      'clothing': ['👗', '👔', '👕'],
      'electronics': ['📱', '💻', '🔌'],
      'home': ['🏠', '🛋️', '🕯️'],
      'beauty': ['💄', '✨', '🌸'],
      'fitness': ['💪', '🏋️', '⚡'],
      'jewelry': ['💎', '✨', '💍'],
      'books': ['📚', '📖', '🤓'],
      'toys': ['🧸', '🎮', '🎯']
    }
    
    const emojis = []
    categories.forEach(category => {
      const catEmojis = categoryEmojis[category.toLowerCase()]
      if (catEmojis) {
        emojis.push(...catEmojis.slice(0, 2))
      }
    })
    
    return emojis.length > 0 ? emojis : ['🛍️', '✨']
  }

  isNewProduct() {
    // Check if product was created in the last 7 days
    const createdDate = new Date(this.product.dateCreated || this.product.created_at)
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    return createdDate > weekAgo
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Product Post Editor Interface</h4>
            <CodeBlock language="javascript" title="src/components/ProductPostEditor.jsx">
{`export function ProductPostEditor({ product, onSave }) {
  const [selectedTemplate, setSelectedTemplate] = useState('auto')
  const [selectedPlatform, setSelectedPlatform] = useState('instagram')
  const [generatedPost, setGeneratedPost] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const templates = [
    { id: 'auto', name: 'Auto-Select Best', description: 'AI picks the best template' },
    { id: 'launch', name: 'New Product Launch', description: 'Announce new arrivals' },
    { id: 'sale', name: 'Sale & Promotion', description: 'Highlight discounts' },
    { id: 'lifestyle', name: 'Lifestyle Focus', description: 'Show product in use' },
    { id: 'testimonial', name: 'Social Proof', description: 'Feature reviews/ratings' },
    { id: 'urgency', name: 'Limited Stock', description: 'Create urgency' }
  ]

  const platforms = [
    { id: 'instagram', name: 'Instagram', charLimit: 2200 },
    { id: 'facebook', name: 'Facebook', charLimit: 63206 },
    { id: 'twitter', name: 'Twitter/X', charLimit: 280 },
    { id: 'linkedin', name: 'LinkedIn', charLimit: 3000 },
    { id: 'tiktok', name: 'TikTok', charLimit: 150 }
  ]

  const generatePost = async () => {
    setIsGenerating(true)
    try {
      const generator = new ProductPostGenerator(product)
      const post = generator.generatePost(selectedTemplate, selectedPlatform)
      setGeneratedPost(post)
    } catch (error) {
      console.error('Post generation failed:', error)
    }
    setIsGenerating(false)
  }

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
        🤖 AI Product Post Generator
      </h3>

      {/* Product Preview */}
      <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-4">
          {product.images?.[0] && (
            <img 
              src={product.images[0]} 
              alt={product.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
              {product.title}
            </h4>
            <div className="flex items-center space-x-4 text-sm text-stone-600 dark:text-stone-400">
              <span>Price: \${product.price}</span>
              {product.stock && <span>Stock: {product.stock}</span>}
              {product.categories?.length > 0 && (
                <span>Category: {product.categories[0]}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Template Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-3">
          Post Template
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={\`p-3 border-2 rounded-lg cursor-pointer transition-colors \${
                selectedTemplate === template.id
                  ? 'border-commerce-500 bg-commerce-50 dark:bg-commerce-900/20'
                  : 'border-stone-200 dark:border-stone-600 hover:border-commerce-300'
              }\`}
            >
              <div className="font-medium text-stone-900 dark:text-stone-100 mb-1">
                {template.name}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {template.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-3">
          Target Platform
        </label>
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
                selectedPlatform === platform.id
                  ? 'bg-commerce-500 text-white'
                  : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
              }\`}
            >
              {platform.name}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePost}
        disabled={isGenerating}
        className="w-full bg-commerce-500 hover:bg-commerce-600 disabled:bg-stone-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors mb-6"
      >
        {isGenerating ? '🤖 Generating...' : '✨ Generate Post'}
      </button>

      {/* Generated Post Preview */}
      {generatedPost && (
        <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100">Generated Post</h4>
            <div className="text-sm text-stone-500 dark:text-stone-400">
              {generatedPost.length} / {platforms.find(p => p.id === selectedPlatform)?.charLimit} chars
            </div>
          </div>
          <div className="whitespace-pre-wrap text-stone-700 dark:text-stone-300 mb-4 border border-stone-200 dark:border-stone-600 rounded-lg p-3">
            {generatedPost}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onSave(generatedPost)}
              className="bg-conversion-500 hover:bg-conversion-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              📅 Schedule Post
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(generatedPost)}
              className="bg-stone-500 hover:bg-stone-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              📋 Copy Text
            </button>
            <button
              onClick={generatePost}
              className="bg-premium-500 hover:bg-premium-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              🔄 Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={4} title="Sales Attribution & Analytics">
          <p className="mb-4">Track which social media posts drive actual sales and revenue:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Sales Tracking Implementation</h4>
            <CodeBlock language="javascript" title="src/lib/salesAttribution.js">
{`export class SalesAttributionTracker {
  constructor() {
    this.trackingParams = {
      utm_source: 'social',
      utm_medium: 'organic',
      utm_campaign: 'product_post'
    }
  }

  generateTrackingLink(product, platform, postId) {
    const baseUrl = product.permalink || product.url
    const params = new URLSearchParams({
      ...this.trackingParams,
      utm_content: \`\${platform}_\${product.id}\`,
      utm_term: product.title.toLowerCase().replace(/\\s+/g, '_'),
      social_post_id: postId,
      platform: platform,
      product_id: product.id
    })

    return \`\${baseUrl}?\${params.toString()}\`
  }

  async trackClick(postId, platform, productId) {
    try {
      await pb.collection('social_clicks').create({
        post_id: postId,
        platform: platform,
        product_id: productId,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer
      })
    } catch (error) {
      console.error('Click tracking failed:', error)
    }
  }

  async trackSale(orderId, orderData, trackingData) {
    try {
      const attribution = await this.findAttribution(trackingData)
      
      await pb.collection('sales_attribution').create({
        order_id: orderId,
        total_amount: orderData.total,
        products: orderData.items.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price
        })),
        attribution: {
          social_post_id: attribution?.postId,
          platform: attribution?.platform,
          time_to_purchase: attribution?.timeToPurchase,
          touchpoints: attribution?.touchpoints || []
        },
        customer_data: {
          new_customer: orderData.isNewCustomer,
          customer_id: orderData.customerId
        },
        timestamp: new Date().toISOString()
      })

      // Update post performance metrics
      if (attribution?.postId) {
        await this.updatePostMetrics(attribution.postId, orderData.total)
      }
    } catch (error) {
      console.error('Sale attribution failed:', error)
    }
  }

  async findAttribution(trackingData) {
    // Look for recent clicks from this user
    const recentClicks = await pb.collection('social_clicks').getList(1, 50, {
      filter: \`user_session = "\${trackingData.userSession}" && created >= "\${this.getRecentTimeframe()}"\`,
      sort: '-created'
    })

    if (recentClicks.items.length === 0) return null

    const firstClick = recentClicks.items[recentClicks.items.length - 1]
    const lastClick = recentClicks.items[0]
    
    return {
      postId: lastClick.post_id,
      platform: lastClick.platform,
      timeToPurchase: Date.now() - new Date(firstClick.created).getTime(),
      touchpoints: recentClicks.items.map(click => ({
        platform: click.platform,
        timestamp: click.created,
        post_id: click.post_id
      }))
    }
  }

  async updatePostMetrics(postId, saleAmount) {
    try {
      const currentMetrics = await pb.collection('post_metrics').getFirstListItem(
        \`post_id = "\${postId}"\`
      )

      await pb.collection('post_metrics').update(currentMetrics.id, {
        sales_count: (currentMetrics.sales_count || 0) + 1,
        sales_amount: (currentMetrics.sales_amount || 0) + parseFloat(saleAmount),
        conversion_rate: this.calculateConversionRate(
          currentMetrics.clicks || 0,
          (currentMetrics.sales_count || 0) + 1
        )
      })
    } catch (error) {
      console.error('Metrics update failed:', error)
    }
  }

  calculateConversionRate(clicks, sales) {
    return clicks > 0 ? (sales / clicks * 100).toFixed(2) : 0
  }

  getRecentTimeframe() {
    // Attribution window: 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    return thirtyDaysAgo.toISOString()
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Revenue Analytics Dashboard</h4>
            <CodeBlock language="javascript" title="src/components/RevenueAnalytics.jsx">
{`import { Line, Bar, Doughnut } from 'react-chartjs-2'

export function RevenueAnalytics() {
  const [timeframe, setTimeframe] = useState('30d')
  const [revenueData, setRevenueData] = useState(null)
  const [platformBreakdown, setPlatformBreakdown] = useState(null)

  const revenueChartData = {
    labels: revenueData?.dates || [],
    datasets: [
      {
        label: 'Revenue from Social Media',
        data: revenueData?.revenue || [],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Sales Count',
        data: revenueData?.sales || [],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  }

  const platformChartData = {
    labels: platformBreakdown?.platforms || [],
    datasets: [
      {
        data: platformBreakdown?.revenue || [],
        backgroundColor: [
          'rgb(59, 130, 246)',   // Instagram
          'rgb(16, 185, 129)',   // Facebook
          'rgb(168, 85, 247)',   // TikTok
          'rgb(249, 115, 22)',   // Twitter
          'rgb(239, 68, 68)'     // LinkedIn
        ]
      }
    ]
  }

  return (
    <div className="space-y-6">
      {/* Revenue Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-commerce-600 dark:text-commerce-400">
            $28,450
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Social Revenue</div>
          <div className="text-xs text-conversion-600 dark:text-conversion-400 font-medium">
            +24% vs last month
          </div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-conversion-600 dark:text-conversion-400">
            247
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Sales from Social</div>
          <div className="text-xs text-conversion-600 dark:text-conversion-400 font-medium">
            +18% vs last month
          </div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-premium-600 dark:text-premium-400">
            3.2%
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Conversion Rate</div>
          <div className="text-xs text-conversion-600 dark:text-conversion-400 font-medium">
            +0.4% vs last month
          </div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-urgent-600 dark:text-urgent-400">
            $115
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Avg Order Value</div>
          <div className="text-xs text-conversion-600 dark:text-conversion-400 font-medium">
            +$12 vs last month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
              📈 Revenue Trend
            </h3>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <Line data={revenueChartData} />
        </div>

        {/* Platform Revenue Breakdown */}
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
            🏆 Top Performing Platforms
          </h3>
          <div className="h-64">
            <Doughnut data={platformChartData} />
          </div>
          <div className="mt-4 space-y-2">
            {platformBreakdown?.platforms?.map((platform, index) => (
              <div key={platform} className="flex justify-between items-center">
                <span className="text-stone-700 dark:text-stone-300">{platform}</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {platformBreakdown.revenue?.[index]?.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Products */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
          🥇 Top Performing Products (Social Media)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-700">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Social Sales</th>
                <th className="text-left py-3 px-4">Revenue</th>
                <th className="text-left py-3 px-4">Conversion Rate</th>
                <th className="text-left py-3 px-4">Best Platform</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Wireless Bluetooth Headphones', sales: 34, revenue: 2890, rate: 4.2, platform: 'Instagram' },
                { name: 'Smart Fitness Watch', sales: 28, revenue: 4480, rate: 3.8, platform: 'Facebook' },
                { name: 'Eco-Friendly Water Bottle', sales: 45, revenue: 1125, rate: 5.1, platform: 'TikTok' }
              ].map((product, index) => (
                <tr key={index} className="border-b border-stone-100 dark:border-stone-800">
                  <td className="py-3 px-4 font-medium text-stone-900 dark:text-stone-100">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 text-stone-600 dark:text-stone-400">
                    {product.sales}
                  </td>
                  <td className="py-3 px-4 font-semibold text-conversion-600 dark:text-conversion-400">
                    {product.revenue.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-stone-600 dark:text-stone-400">
                    {product.rate}%
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-commerce-100 text-commerce-800 dark:bg-commerce-900/20 dark:text-commerce-300 rounded-full text-xs font-medium">
                      {product.platform}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={5} title="Automated Campaign Management">
          <p className="mb-4">Set up intelligent campaigns that respond to inventory levels, trends, and performance:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Smart Campaign Rules</h4>
            <CodeBlock language="javascript" title="src/lib/campaignAutomation.js">
{`export class CampaignAutomation {
  constructor() {
    this.rules = []
  }

  addRule(rule) {
    this.rules.push({
      id: this.generateId(),
      ...rule,
      created: new Date().toISOString(),
      active: true,
      lastTriggered: null,
      triggerCount: 0
    })
  }

  async checkRules() {
    for (const rule of this.rules.filter(r => r.active)) {
      try {
        const shouldTrigger = await this.evaluateRule(rule)
        if (shouldTrigger) {
          await this.executeRule(rule)
        }
      } catch (error) {
        console.error(\`Rule execution failed for \${rule.id}:\`, error)
      }
    }
  }

  async evaluateRule(rule) {
    switch (rule.trigger.type) {
      case 'low_inventory':
        return await this.checkLowInventory(rule.trigger.params)
      case 'high_performance':
        return await this.checkHighPerformance(rule.trigger.params)
      case 'new_product':
        return await this.checkNewProducts(rule.trigger.params)
      case 'sale_event':
        return await this.checkSaleEvents(rule.trigger.params)
      case 'trending_product':
        return await this.checkTrendingProducts(rule.trigger.params)
      default:
        return false
    }
  }

  async checkLowInventory(params) {
    const products = await this.getProducts({
      inventory_threshold: params.threshold || 10,
      categories: params.categories
    })
    
    return products.filter(p => p.stock <= params.threshold && p.stock > 0)
  }

  async checkHighPerformance(params) {
    const analytics = await this.getProductAnalytics({
      timeframe: params.timeframe || '7d',
      min_sales: params.minSales || 5
    })
    
    return analytics.filter(p => 
      p.conversionRate >= (params.minConversionRate || 3.0) &&
      p.sales >= params.minSales
    )
  }

  async executeRule(rule) {
    const products = await this.evaluateRule(rule)
    
    for (const product of products) {
      const post = await this.generateCampaignPost(product, rule.action)
      await this.schedulePost(post, rule.action.schedule)
    }
    
    // Update rule statistics
    await this.updateRule(rule.id, {
      lastTriggered: new Date().toISOString(),
      triggerCount: rule.triggerCount + 1
    })
  }

  async generateCampaignPost(product, action) {
    const generator = new ProductPostGenerator(product)
    
    return {
      content: generator.generatePost(action.template, action.platform),
      product: product,
      platforms: action.platforms || ['instagram'],
      trackingData: {
        campaign_id: action.campaignId,
        rule_type: action.type,
        automation: true
      }
    }
  }

  // Predefined rule templates
  createLowStockUrgencyRule() {
    return {
      name: 'Low Stock Urgency Campaign',
      description: 'Create urgency posts when inventory is running low',
      trigger: {
        type: 'low_inventory',
        params: {
          threshold: 5,
          categories: ['bestsellers']
        }
      },
      action: {
        type: 'urgency_post',
        template: 'urgency',
        platforms: ['instagram', 'facebook'],
        schedule: {
          delay: '1h',
          repeat: false
        }
      },
      conditions: {
        maxPostsPerDay: 3,
        cooldownHours: 24
      }
    }
  }

  createNewProductLaunchRule() {
    return {
      name: 'New Product Launch Campaign',
      description: 'Automatically promote new products across platforms',
      trigger: {
        type: 'new_product',
        params: {
          categories: ['all'],
          minPrice: 10
        }
      },
      action: {
        type: 'launch_sequence',
        templates: ['launch', 'lifestyle', 'testimonial'],
        platforms: ['instagram', 'facebook', 'twitter'],
        schedule: {
          sequence: [
            { delay: '2h', template: 'launch' },
            { delay: '1d', template: 'lifestyle' },
            { delay: '3d', template: 'testimonial' }
          ]
        }
      }
    }
  }

  createBestsellerBoostRule() {
    return {
      name: 'Bestseller Boost Campaign',
      description: 'Amplify promotion of high-performing products',
      trigger: {
        type: 'high_performance',
        params: {
          minConversionRate: 4.0,
          minSales: 10,
          timeframe: '7d'
        }
      },
      action: {
        type: 'boost_campaign',
        template: 'testimonial',
        platforms: ['instagram', 'facebook'],
        schedule: {
          frequency: 'weekly',
          maxPosts: 2
        }
      }
    }
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Campaign Management Interface</h4>
            <CodeBlock language="javascript" title="src/components/CampaignManager.jsx">
{`export function CampaignManager() {
  const [campaigns, setCampaigns] = useState([])
  const [activeRules, setActiveRules] = useState([])
  const [isCreatingRule, setIsCreatingRule] = useState(false)

  const ruleTemplates = [
    {
      id: 'low_stock',
      name: 'Low Stock Urgency',
      description: 'Create urgency when inventory runs low',
      icon: '⚠️',
      color: 'urgent'
    },
    {
      id: 'new_product',
      name: 'New Product Launch',
      description: 'Auto-promote new arrivals',
      icon: '🚀',
      color: 'commerce'
    },
    {
      id: 'bestseller',
      name: 'Bestseller Boost',
      description: 'Amplify high-performing products',
      icon: '⭐',
      color: 'conversion'
    },
    {
      id: 'sale_event',
      name: 'Sale Event Promotion',
      description: 'Automatic sale announcements',
      icon: '🔥',
      color: 'premium'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Campaign Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-commerce-600 dark:text-commerce-400">
            12
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Active Campaigns</div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-conversion-600 dark:text-conversion-400">
            248
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Auto Posts This Month</div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-premium-600 dark:text-premium-400">
            $8,450
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Revenue from Automated Posts</div>
        </div>
        
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
          <div className="text-2xl font-bold text-urgent-600 dark:text-urgent-400">
            4.2%
          </div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Automation Conversion Rate</div>
        </div>
      </div>

      {/* Quick Rule Templates */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
          🤖 Smart Campaign Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ruleTemplates.map((template) => (
            <div
              key={template.id}
              className={\`p-4 border-2 border-dashed border-\${template.color}-300 dark:border-\${template.color}-700 rounded-lg hover:border-\${template.color}-500 transition-colors cursor-pointer\`}
              onClick={() => createRuleFromTemplate(template)}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{template.icon}</div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                  {template.name}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {template.description}
                </p>
                <button className={\`mt-3 w-full bg-\${template.color}-500 hover:bg-\${template.color}-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors\`}>
                  Set Up Rule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Rules List */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            ⚙️ Active Automation Rules
          </h3>
          <button
            onClick={() => setIsCreatingRule(true)}
            className="bg-commerce-500 hover:bg-commerce-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            + Create Custom Rule
          </button>
        </div>

        <div className="space-y-4">
          {activeRules.map((rule) => (
            <div key={rule.id} className="border border-stone-200 dark:border-stone-600 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                      {rule.name}
                    </h4>
                    <div className={\`px-2 py-1 rounded-full text-xs font-medium \${
                      rule.active
                        ? 'bg-conversion-100 text-conversion-800 dark:bg-conversion-900/20 dark:text-conversion-300'
                        : 'bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-300'
                    }\`}>
                      {rule.active ? 'Active' : 'Paused'}
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                    {rule.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-stone-500 dark:text-stone-400">
                    <span>Triggered: {rule.triggerCount} times</span>
                    <span>Last run: {rule.lastTriggered ? new Date(rule.lastTriggered).toLocaleDateString() : 'Never'}</span>
                    <span>Platforms: {rule.action.platforms?.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
                    ⚙️
                  </button>
                  <button className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
                    📊
                  </button>
                  <button className="p-2 text-stone-400 hover:text-urgent-600">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-commerce-500 to-premium-500 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🛍️ ProductFlow Pro Implementation Complete!</h3>
          <p className="mb-4 opacity-90">
            You've seen how Light-Speed 2026 transforms into a powerful e-commerce social media platform. From 
            product sync to sales attribution, this example shows the complete social commerce ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/dashboard">
              <Button className="bg-white text-commerce-600 hover:bg-blue-50">
                🚀 Build Your E-commerce Platform
              </Button>
            </Link>
            <Link href="/portal/documentation">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                📖 Back to Documentation
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            💡 ProductFlow Pro Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Store Integrations</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>• Shopify & WooCommerce sync</li>
                <li>• Real-time inventory tracking</li>
                <li>• Product data automation</li>
                <li>• Multi-store management</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">AI Content Generation</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>• Smart template selection</li>
                <li>• Platform-optimized content</li>
                <li>• Product-specific messaging</li>
                <li>• A/B testing capabilities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Sales Attribution</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>• UTM tracking & analytics</li>
                <li>• Revenue attribution by post</li>
                <li>• Customer journey mapping</li>
                <li>• ROI reporting</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Smart Automation</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>• Inventory-based campaigns</li>
                <li>• Performance-driven promotion</li>
                <li>• Automated restock alerts</li>
                <li>• Trending product detection</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}