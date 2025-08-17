import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Customer Dashboard Preview - Light-Speed 2026 Portal',
  description: 'Interactive preview of the Light-Speed 2026 customer dashboard and user experience'
}

export default function CustomerDashboardPage() {
  return (
    <div>
      
      {/* Dashboard Header */}
      <div className="bg-stone-800 border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Light-Speed 2026</h1>
                <p className="text-sm text-stone-400">Social Media Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" className="text-sm bg-stone-700 text-white border-stone-600">
                📊 Analytics
              </Button>
              <Button className="text-sm bg-purple-600 hover:bg-purple-700">
                ✨ Create Post
              </Button>
              <div className="w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                <span className="text-stone-300 text-sm">👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome back, Sarah! 👋</h2>
            <p className="text-purple-100 mb-4">
              Your social media campaigns are performing great this week. Here's your dashboard overview.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm opacity-90">Posts Scheduled</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">15.2K</div>
                <div className="text-sm opacity-90">Total Engagement</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">8.4%</div>
                <div className="text-sm opacity-90">Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 hover:border-stone-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">✍️</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Create Post</h3>
            <p className="text-stone-400 text-sm">Draft and schedule your next social media post</p>
          </div>

          <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 hover:border-stone-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-2xl">📅</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Content Calendar</h3>
            <p className="text-stone-400 text-sm">View and manage your posting schedule</p>
          </div>

          <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 hover:border-stone-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Analytics</h3>
            <p className="text-stone-400 text-sm">Track performance across all platforms</p>
          </div>

          <div className="bg-stone-800 border border-stone-700 rounded-lg p-6 hover:border-stone-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-orange-600 dark:text-orange-400 text-2xl">⚙️</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Settings</h3>
            <p className="text-stone-400 text-sm">Manage accounts and preferences</p>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">📈 Recent Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-stone-700 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-sm">📸</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">Instagram Post Published</h4>
                      <span className="text-xs text-stone-400">2 hours ago</span>
                    </div>
                    <p className="text-stone-400 text-sm">
                      "5 Tips for Better Morning Routine" - 234 likes, 18 comments
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-stone-400">
                      <span>❤️ 234 likes</span>
                      <span>💬 18 comments</span>
                      <span>📤 12 shares</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-stone-700 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">🐦</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">Twitter Thread Scheduled</h4>
                      <span className="text-xs text-stone-400">4 hours ago</span>
                    </div>
                    <p className="text-stone-400 text-sm">
                      "Productivity hacks for entrepreneurs" thread scheduled for tomorrow 9 AM
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-stone-400">
                      <span>🕘 Scheduled for 9:00 AM</span>
                      <span>📝 8 tweets</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-stone-700 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">💼</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">LinkedIn Article Published</h4>
                      <span className="text-xs text-stone-400">Yesterday</span>
                    </div>
                    <p className="text-stone-400 text-sm">
                      "The Future of Remote Work" - 89 reactions, 23 comments
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-stone-400">
                      <span>👍 89 reactions</span>
                      <span>💬 23 comments</span>
                      <span>👀 1.2K views</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="secondary" className="text-sm bg-stone-700 text-white border-stone-600">
                  View All Activity
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Connected Accounts */}
            <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">🔗 Connected Accounts</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📸</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Instagram</div>
                      <div className="text-xs text-stone-400">@sarah_wellness</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🐦</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Twitter</div>
                      <div className="text-xs text-stone-400">@sarah_tips</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💼</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">LinkedIn</div>
                      <div className="text-xs text-stone-400">Sarah Johnson</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🎵</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">TikTok</div>
                      <div className="text-xs text-stone-400">Not connected</div>
                    </div>
                  </div>
                  <Button variant="secondary" className="text-xs px-3 py-1 bg-stone-700 text-white border-stone-600">
                    Connect
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">📊 This Week</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">Posts Published</span>
                  <span className="font-semibold text-white">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">Total Reach</span>
                  <span className="font-semibold text-white">24.8K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">Engagement</span>
                  <span className="font-semibold text-white">1.9K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">New Followers</span>
                  <span className="font-semibold text-white">+47</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-900/20 border border-green-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-sm">📈</span>
                  <span className="text-green-200 text-sm font-medium">
                    +23% vs last week
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Posts */}
            <div className="bg-stone-800 border border-stone-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">⏰ Upcoming Posts</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xs">📸</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">Morning Motivation</div>
                    <div className="text-xs text-stone-400">Today, 9:00 AM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-xs">💼</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">Career Tips Article</div>
                    <div className="text-xs text-stone-400">Tomorrow, 2:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xs">🐦</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">Weekly Thread</div>
                    <div className="text-xs text-stone-400">Friday, 11:00 AM</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button variant="secondary" className="w-full text-sm bg-stone-700 text-white border-stone-600">
                  View Calendar
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Back to Portal */}
        <div className="mt-12 text-center">
          <div className="bg-stone-800 border border-stone-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">✨ This is Your Customer Experience</h2>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              This dashboard preview shows what your customers will experience when using Light-Speed 2026. 
              The actual platform includes advanced features, real-time data, and full social media management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/portal/documentation">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  📚 View Documentation
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="secondary" className="bg-stone-700 text-white border-stone-600">
                  ← Back to Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}