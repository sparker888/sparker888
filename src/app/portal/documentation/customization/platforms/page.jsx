import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Platform Configuration Guide - Light-Speed 2026 Documentation',
  description: 'Complete guide to configuring Twitter/X and LinkedIn - the two platforms with immediate API access'
}

export default function PlatformsPage() {
  return (
    <DocumentationLayout 
      title="Platform Configuration Guide" 
      description="Connect Twitter/X and LinkedIn for immediate social media posting without app review delays"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="Simplified Platform Support">
          <p className="mb-3">
            This template focuses on the two most developer-friendly social media platforms: 
            Twitter/X and LinkedIn. Both provide immediate API access without app review requirements.
          </p>
          <p>
            You'll learn how to obtain API keys and set up automated posting for professional 
            social media management without review delays.
          </p>
        </InfoBox>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            ✅ Supported Platforms (No Review Required)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center p-3 bg-white dark:bg-stone-700 rounded-lg">
              <span className="text-2xl mr-3">🐦</span>
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">Twitter/X</h4>
                <p className="text-stone-600 dark:text-stone-400">500 posts/month free • Immediate access</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-white dark:bg-stone-700 rounded-lg">
              <span className="text-2xl mr-3">💼</span>
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">LinkedIn</h4>
                <p className="text-stone-600 dark:text-stone-400">Open permissions • Professional content</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-stone-600 dark:text-stone-400">
            <strong>Why these platforms?</strong> Both provide immediate posting access perfect for 
            example applications and rapid development without approval delays.
          </div>
        </div>

        <StepCard step={1} title="Twitter/X API Configuration (No Review Required)">
          <div className="mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200 text-sm">
              <strong>✅ Immediate Access:</strong> Twitter provides instant posting access with no app review. 
              Free tier includes 500 posts/month immediately upon account creation.
            </p>
          </div>
          <p className="mb-4">Twitter offers immediate API access perfect for development and testing:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Get Twitter API Keys (5 minutes)</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Visit <a href="https://docs.x.com/fundamentals/developer-apps" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">X Developer Documentation</a></li>
              <li>Create a new developer account (no review required)</li>
              <li>Create a new app project</li>
              <li>Generate your API keys and tokens immediately</li>
            </ol>
            
            <CodeBlock language="bash" title=".env.local">
{`# Twitter/X API Configuration
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here

# For Twitter API v2
TWITTER_CLIENT_ID=your_client_id_here
TWITTER_CLIENT_SECRET=your_client_secret_here`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Twitter Integration Code</h4>
            <CodeBlock language="javascript" title="src/lib/twitter.js">
{`import { TwitterApi } from 'twitter-api-v2'

// Initialize Twitter client
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

export async function postToTwitter(content, mediaUrls = []) {
  try {
    // Upload media if provided
    const mediaIds = []
    for (const url of mediaUrls) {
      const media = await twitterClient.v1.uploadMedia(url)
      mediaIds.push(media)
    }
    
    // Post tweet
    const tweet = await twitterClient.v2.tweet({
      text: content,
      media: mediaIds.length > 0 ? { media_ids: mediaIds } : undefined
    })
    
    return { success: true, data: tweet }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export async function getTwitterMetrics(tweetId) {
  const tweet = await twitterClient.v2.singleTweet(tweetId, {
    'tweet.fields': ['public_metrics', 'created_at']
  })
  return tweet.data.public_metrics
}`}
            </CodeBlock>
          </div>

          <InfoBox type="info" title="Twitter API Pricing (2025)">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Free Tier:</strong> 500 posts/month immediately available</li>
              <li><strong>Basic Tier:</strong> $200/month for increased limits</li>
              <li><strong>Pro Tier:</strong> $5,000/month for enterprise features</li>
            </ul>
          </InfoBox>
        </StepCard>

        <StepCard step={2} title="LinkedIn API Configuration (No Review Required)">
          <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>✅ Open Permissions:</strong> Basic posting available immediately with no app review required.
            </p>
          </div>
          <p className="mb-4">LinkedIn's API is excellent for professional content and B2B marketing:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">LinkedIn App Setup (10 minutes)</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Go to <a href="https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">LinkedIn API Authentication</a></li>
              <li>Create a new app and associate it with your LinkedIn page</li>
              <li>Request "Open Permissions" for basic posting (no review required)</li>
              <li>Configure OAuth redirect URLs</li>
            </ol>
            
            <CodeBlock language="bash" title=".env.local">
{`# LinkedIn API Configuration
LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/api/auth/linkedin/callback

# For company pages
LINKEDIN_COMPANY_ID=your_company_id_here`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">LinkedIn Integration</h4>
            <CodeBlock language="javascript" title="src/lib/linkedin.js">
{`export async function postToLinkedIn(accessToken, content, imageUrl = null) {
  const linkedInAPI = 'https://api.linkedin.com/v2'
  
  try {
    // Get user profile
    const profileResponse = await fetch(\`\${linkedInAPI}/me\`, {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json'
      }
    })
    const profile = await profileResponse.json()
    
    let sharePayload = {
      author: \`urn:li:person:\${profile.id}\`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: content
          },
          shareMediaCategory: imageUrl ? 'IMAGE' : 'NONE'
        }
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
      }
    }
    
    // Add image if provided
    if (imageUrl) {
      // Upload image first (implementation depends on your image handling)
      const uploadedImageUrn = await uploadImageToLinkedIn(accessToken, imageUrl)
      sharePayload.specificContent['com.linkedin.ugc.ShareContent'].media = [{
        status: 'READY',
        description: {
          text: 'Shared image'
        },
        media: uploadedImageUrn,
        title: {
          text: 'Image'
        }
      }]
    }
    
    // Post to LinkedIn
    const response = await fetch(\`\${linkedInAPI}/ugcPosts\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sharePayload)
    })
    
    return await response.json()
  } catch (error) {
    throw new Error(\`LinkedIn posting failed: \${error.message}\`)
  }
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🚀 Platform Configuration Complete!</h3>
          <p className="mb-4 opacity-90">
            Your Light-Speed 2026 platform is now connected to Twitter/X and LinkedIn - the two most 
            developer-friendly social media platforms with immediate API access.
          </p>
          <div className="text-sm opacity-75 mb-4">
            <p><strong>Total Setup Time:</strong> 15 minutes instead of days waiting for app reviews!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/deployment/pocketbase">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Next: Deploy to Production →
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🎯 Test Platform Connections
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            🔧 Platform Integration Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Twitter/X Optimization</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Keep tweets under 280 characters, use relevant hashtags, and include media for better engagement.
              </p>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Rate Limiting</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Both platforms have rate limits. Implement queuing for high-volume posting scenarios.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">LinkedIn Professional Content</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Focus on professional tone, industry insights, and thought leadership content for better reach.
              </p>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Token Management</h4>
              <p className="text-stone-600 dark:text-stone-400">
                Implement secure token storage and refresh mechanisms for long-term automation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}