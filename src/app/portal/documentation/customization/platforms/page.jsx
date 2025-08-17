import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Platform Configuration Guide - Light-Speed 2026 Documentation',
  description: 'Complete guide to configuring Twitter, LinkedIn, Instagram, and other social media platform integrations'
}

export default function PlatformsPage() {
  return (
    <DocumentationLayout 
      title="Platform Configuration Guide" 
      description="Connect and configure all major social media platforms for seamless content management"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="What You'll Configure">
          <p className="mb-3">
            This guide walks you through setting up API integrations for Twitter, LinkedIn, Instagram, Facebook, 
            YouTube, and TikTok. You'll learn how to obtain API keys, configure webhooks, and set up automated posting.
          </p>
          <p>
            Each platform has different requirements and capabilities - we'll cover them all.
          </p>
        </InfoBox>

        <StepCard step={1} title="Twitter/X API Configuration">
          <p className="mb-4">Twitter offers the most comprehensive API for social media management:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Get Twitter API Keys</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Visit <a href="https://developer.twitter.com" className="text-blue-600 dark:text-blue-400 underline">developer.twitter.com</a></li>
              <li>Create a new app and complete the application process</li>
              <li>Choose the appropriate access level (Basic, Pro, or Enterprise)</li>
              <li>Generate your API keys and tokens</li>
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

          <InfoBox type="warning" title="Twitter API Limits">
            Twitter has strict rate limits. Basic tier allows 1,500 posts per month. Pro tier allows 50,000 posts per month. 
            Plan your posting schedule accordingly.
          </InfoBox>
        </StepCard>

        <StepCard step={2} title="LinkedIn API Configuration">
          <p className="mb-4">LinkedIn's API is excellent for professional content and B2B marketing:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">LinkedIn App Setup</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Go to <a href="https://www.linkedin.com/developers" className="text-blue-600 dark:text-blue-400 underline">LinkedIn Developer Portal</a></li>
              <li>Create a new app and associate it with your LinkedIn page</li>
              <li>Request access to "Share on LinkedIn" and "Marketing Developer Platform"</li>
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

        <StepCard step={3} title="Instagram Basic Display API">
          <p className="mb-4">Instagram integration for content posting and analytics:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Instagram App Configuration</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Go to <a href="https://developers.facebook.com" className="text-blue-600 dark:text-blue-400 underline">Facebook Developers</a></li>
              <li>Create a new app and add Instagram Basic Display product</li>
              <li>Configure OAuth redirect URLs and permissions</li>
              <li>Get your app reviewed for posting permissions</li>
            </ol>
            
            <CodeBlock language="bash" title=".env.local">
{`# Instagram API Configuration
INSTAGRAM_CLIENT_ID=your_client_id_here
INSTAGRAM_CLIENT_SECRET=your_client_secret_here
INSTAGRAM_REDIRECT_URI=http://localhost:3000/api/auth/instagram/callback

# Facebook App ID (required for Instagram)
FACEBOOK_APP_ID=your_facebook_app_id_here
FACEBOOK_APP_SECRET=your_facebook_app_secret_here`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Instagram Media Upload</h4>
            <CodeBlock language="javascript" title="src/lib/instagram.js">
{`export async function postToInstagram(accessToken, imageUrl, caption) {
  const instagramAPI = 'https://graph.instagram.com'
  
  try {
    // Step 1: Create media container
    const containerResponse = await fetch(\`\${instagramAPI}/me/media\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_url: imageUrl,
        caption: caption,
        access_token: accessToken
      })
    })
    
    const containerData = await containerResponse.json()
    
    if (!containerData.id) {
      throw new Error('Failed to create media container')
    }
    
    // Step 2: Publish the media
    const publishResponse = await fetch(\`\${instagramAPI}/me/media_publish\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        creation_id: containerData.id,
        access_token: accessToken
      })
    })
    
    return await publishResponse.json()
  } catch (error) {
    throw new Error(\`Instagram posting failed: \${error.message}\`)
  }
}

export async function getInstagramMetrics(mediaId, accessToken) {
  const response = await fetch(
    \`https://graph.instagram.com/\${mediaId}?fields=like_count,comments_count,media_type,media_url,timestamp&access_token=\${accessToken}\`
  )
  return await response.json()
}`}
            </CodeBlock>
          </div>

          <InfoBox type="info" title="Instagram Requirements">
            Instagram requires images to be publicly accessible URLs. Consider using a CDN or cloud storage 
            service like Cloudinary or AWS S3 for your media files.
          </InfoBox>
        </StepCard>

        <StepCard step={4} title="Facebook Pages API">
          <p className="mb-4">Connect Facebook business pages for comprehensive social media management:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Facebook Configuration</h4>
            <CodeBlock language="bash" title=".env.local">
{`# Facebook API Configuration
FACEBOOK_APP_ID=your_app_id_here
FACEBOOK_APP_SECRET=your_app_secret_here
FACEBOOK_REDIRECT_URI=http://localhost:3000/api/auth/facebook/callback

# Page-specific tokens (obtained after user authorization)
FACEBOOK_PAGE_ID=your_page_id_here
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_token_here`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Facebook Posting</h4>
            <CodeBlock language="javascript" title="src/lib/facebook.js">
{`export async function postToFacebook(pageAccessToken, pageId, message, imageUrl = null) {
  const facebookAPI = 'https://graph.facebook.com/v18.0'
  
  try {
    let endpoint = \`\${facebookAPI}/\${pageId}/feed\`
    let payload = {
      message: message,
      access_token: pageAccessToken
    }
    
    // If image is provided, use photos endpoint instead
    if (imageUrl) {
      endpoint = \`\${facebookAPI}/\${pageId}/photos\`
      payload = {
        url: imageUrl,
        caption: message,
        access_token: pageAccessToken
      }
    }
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    
    return await response.json()
  } catch (error) {
    throw new Error(\`Facebook posting failed: \${error.message}\`)
  }
}

export async function getFacebookInsights(postId, pageAccessToken) {
  const response = await fetch(
    \`https://graph.facebook.com/v18.0/\${postId}/insights?metric=post_impressions,post_engaged_users&access_token=\${pageAccessToken}\`
  )
  return await response.json()
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={5} title="YouTube Data API">
          <p className="mb-4">Integrate YouTube for video content management and analytics:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">YouTube API Setup</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
              <li>Go to <a href="https://console.developers.google.com" className="text-blue-600 dark:text-blue-400 underline">Google Cloud Console</a></li>
              <li>Create a new project and enable YouTube Data API v3</li>
              <li>Create credentials (OAuth 2.0 client ID)</li>
              <li>Configure OAuth consent screen</li>
            </ol>
            
            <CodeBlock language="bash" title=".env.local">
{`# YouTube API Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
YOUTUBE_API_KEY=your_youtube_api_key_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">YouTube Integration</h4>
            <CodeBlock language="javascript" title="src/lib/youtube.js">
{`import { google } from 'googleapis'

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY
})

export async function uploadToYouTube(accessToken, videoFile, title, description) {
  const oauth2Client = new google.auth.OAuth2()
  oauth2Client.setCredentials({ access_token: accessToken })
  
  const youtubeAuth = google.youtube({
    version: 'v3',
    auth: oauth2Client
  })
  
  try {
    const response = await youtubeAuth.videos.insert({
      part: ['snippet', 'status'],
      requestBody: {
        snippet: {
          title,
          description,
          tags: ['social media', 'content'],
          categoryId: '22' // People & Blogs
        },
        status: {
          privacyStatus: 'public'
        }
      },
      media: {
        body: videoFile
      }
    })
    
    return response.data
  } catch (error) {
    throw new Error(\`YouTube upload failed: \${error.message}\`)
  }
}

export async function getYouTubeAnalytics(videoId) {
  try {
    const response = await youtube.videos.list({
      part: ['statistics'],
      id: [videoId]
    })
    
    return response.data.items[0]?.statistics
  } catch (error) {
    throw new Error(\`YouTube analytics failed: \${error.message}\`)
  }
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={6} title="TikTok for Business API">
          <p className="mb-4">Connect TikTok for short-form video content management:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">TikTok API Access</h4>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>Note:</strong> TikTok API access requires business approval and is primarily available 
                for advertising platforms. Content creation APIs are limited.
              </p>
            </div>
            
            <CodeBlock language="bash" title=".env.local">
{`# TikTok API Configuration (when available)
TIKTOK_CLIENT_ID=your_tiktok_client_id_here
TIKTOK_CLIENT_SECRET=your_tiktok_client_secret_here
TIKTOK_REDIRECT_URI=http://localhost:3000/api/auth/tiktok/callback`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">TikTok Analytics</h4>
            <CodeBlock language="javascript" title="src/lib/tiktok.js">
{`// TikTok analytics integration (limited API access)
export async function getTikTokInsights(accessToken) {
  try {
    // This is a simplified example - actual implementation 
    // depends on your API access level
    const response = await fetch('https://business-api.tiktok.com/open_api/v1.2/reports/integrated/get/', {
      method: 'GET',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json'
      }
    })
    
    return await response.json()
  } catch (error) {
    throw new Error(\`TikTok analytics failed: \${error.message}\`)
  }
}

// Alternative: Use TikTok embed API for displaying content
export function getTikTokEmbedCode(videoUrl) {
  const videoId = videoUrl.split('/').pop()
  return \`<blockquote class="tiktok-embed" cite="\${videoUrl}" data-video-id="\${videoId}"></blockquote>\`
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={7} title="Platform Management Dashboard">
          <p className="mb-4">Create a unified interface to manage all platform connections:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Platform Status Component</h4>
            <CodeBlock language="javascript" title="src/components/PlatformStatus.jsx">
{`export function PlatformStatus({ platforms }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {platforms.map((platform) => (
        <div key={platform.name} className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-100">{platform.name}</h3>
            </div>
            <div className={\`px-2 py-1 rounded-full text-xs font-medium \${
              platform.connected 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }\`}>
              {platform.connected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
          
          {platform.connected ? (
            <div className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              <p>Account: {platform.account}</p>
              <p>Posts this month: {platform.postsCount}</p>
              <p>Last post: {platform.lastPost}</p>
            </div>
          ) : (
            <button className="w-full bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 py-2 px-4 rounded-lg transition">
              Connect {platform.name}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Cross-Platform Posting</h4>
            <CodeBlock language="javascript" title="src/lib/crossPlatformPost.js">
{`export async function postToMultiplePlatforms(content, platforms, mediaUrl = null) {
  const results = []
  
  for (const platform of platforms) {
    try {
      let result
      
      switch (platform.type) {
        case 'twitter':
          result = await postToTwitter(content, mediaUrl ? [mediaUrl] : [])
          break
        case 'linkedin':
          result = await postToLinkedIn(platform.accessToken, content, mediaUrl)
          break
        case 'instagram':
          if (mediaUrl) {
            result = await postToInstagram(platform.accessToken, mediaUrl, content)
          }
          break
        case 'facebook':
          result = await postToFacebook(platform.accessToken, platform.pageId, content, mediaUrl)
          break
        default:
          throw new Error(\`Unsupported platform: \${platform.type}\`)
      }
      
      results.push({
        platform: platform.type,
        success: true,
        data: result
      })
    } catch (error) {
      results.push({
        platform: platform.type,
        success: false,
        error: error.message
      })
    }
  }
  
  return results
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🚀 Platform Configuration Complete!</h3>
          <p className="mb-4 opacity-90">
            Your Light-Speed 2026 platform is now connected to all major social media platforms. You can now 
            deploy to production and start managing social media content at scale.
          </p>
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
            🔧 Platform Integration Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Rate Limiting</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Each platform has different rate limits. Implement queuing and retry logic to handle API limits gracefully.
              </p>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Content Optimization</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Tailor content for each platform - Twitter favors hashtags, LinkedIn prefers professional tone, Instagram needs visuals.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Token Management</h4>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Implement secure token storage and automatic refresh mechanisms. Most platforms require periodic re-authentication.
              </p>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Error Handling</h4>
              <p className="text-stone-600 dark:text-stone-400">
                Provide clear error messages and fallback options when platform APIs are unavailable or return errors.
              </p>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}