import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { CodeBlock } from '@/components/light-speed-2026/CodeBlock'
import { StepCard, InfoBox } from '@/components/light-speed-2026/StepCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'FitLife Social - Fitness Industry Example - Light-Speed 2026 Documentation',
  description: 'Complete example of customizing Light-Speed 2026 for fitness professionals, gyms, and wellness coaches'
}

export default function FitnessExamplePage() {
  return (
    <DocumentationLayout 
      title="FitLife Social - Fitness Industry Example" 
      description="See how Light-Speed 2026 transforms into a specialized platform for fitness professionals and wellness coaches"
    >
      <div className="space-y-8">
        
        <InfoBox type="success" title="Industry-Specific Platform">
          <p className="mb-3">
            FitLife Social is a complete transformation of Light-Speed 2026 for the fitness industry. This example 
            shows how to customize branding, add fitness-specific features, and integrate with health/wellness APIs.
          </p>
          <p>
            Perfect for personal trainers, gyms, nutritionists, and wellness coaches who want to manage their social media presence.
          </p>
        </InfoBox>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
            🏋️ FitLife Social Platform Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💪</span>
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Workout Content</h4>
              <p className="text-sm text-green-700 dark:text-green-300">Schedule and share workout videos, fitness tips, and transformation posts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Client Analytics</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">Track engagement from potential clients and fitness enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Lead Generation</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Convert social media followers into paying clients</p>
            </div>
          </div>
        </div>

        <StepCard step={1} title="Fitness Branding Transformation">
          <p className="mb-4">Transform the platform with fitness-focused branding and color scheme:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Fitness Color Palette</h4>
            <CodeBlock language="javascript" title="tailwind.config.js">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary fitness brand colors
        fitness: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Main fitness green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Energy/motivation color
        energy: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Energetic orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Wellness/calm color
        wellness: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Calming blue
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
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Logo and Visual Identity</h4>
            <CodeBlock language="javascript" title="src/components/FitnessLogo.jsx">
{`import Image from 'next/image'

export function FitnessLogo({ size = 'default' }) {
  const sizes = {
    small: { width: 120, height: 30 },
    default: { width: 180, height: 45 },
    large: { width: 240, height: 60 }
  }
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <Image
          src="/brand/fitlife-logo.svg"
          alt="FitLife Social"
          width={sizes[size].width}
          height={sizes[size].height}
          className="h-auto"
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-fitness-600 dark:text-fitness-400 text-sm font-medium">
          Social Media for Fitness Pros
        </div>
      </div>
    </div>
  )
}

// Fitness-themed icon components
export function FitnessIcons() {
  return {
    Dumbbell: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    ),
    Heart: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    Target: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    )
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Homepage Hero Section</h4>
            <CodeBlock language="javascript" title="src/components/FitnessHero.jsx">
{`export function FitnessHero() {
  return (
    <div className="relative bg-gradient-to-br from-fitness-500 via-energy-500 to-wellness-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Grow Your</span>
              <span className="block text-energy-200">Fitness Business</span>
              <span className="block">with Social Media</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              The complete social media management platform designed specifically for 
              fitness professionals, personal trainers, and wellness coaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-fitness-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-fitness-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/fitness/hero-trainer.jpg" 
              alt="Fitness trainer using FitLife Social"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-fitness-600 p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-stone-600">Fitness Pros Trust Us</div>
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

        <StepCard step={2} title="Fitness-Specific Content Templates">
          <p className="mb-4">Pre-built content templates tailored for fitness professionals:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Workout Post Templates</h4>
            <CodeBlock language="javascript" title="src/data/fitnessTemplates.js">
{`export const fitnessTemplates = {
  workoutOfTheDay: {
    title: "Workout of the Day",
    template: \`💪 WORKOUT OF THE DAY 💪

🎯 Target: {targetMuscles}
⏱️ Duration: {duration} minutes
🔥 Difficulty: {difficulty}

{exerciseList}

💡 Pro tip: {tip}

Tag a friend who needs to see this! 👇

#WorkoutWednesday #FitnessMotivation #PersonalTrainer #FitLife\`,
    variables: ['targetMuscles', 'duration', 'difficulty', 'exerciseList', 'tip'],
    category: 'workout'
  },
  
  transformationTuesday: {
    title: "Transformation Tuesday",
    template: \`🔥 TRANSFORMATION TUESDAY 🔥

Meet {clientName} - {transformationStory}

📈 Results:
• {metric1}
• {metric2}  
• {metric3}

🎯 Key to success: {successFactor}

Your transformation starts with a single decision. Ready to make yours?

Book your consultation link in bio! 💪

#TransformationTuesday #FitnessResults #PersonalTraining #SuccessStory\`,
    variables: ['clientName', 'transformationStory', 'metric1', 'metric2', 'metric3', 'successFactor'],
    category: 'transformation'
  },
  
  nutritionTip: {
    title: "Nutrition Tip",
    template: \`🥗 NUTRITION TIP #{tipNumber} 🥗

{nutritionTopic}

✅ Why it works: {explanation}

📝 How to implement:
{implementationSteps}

🍎 Try this: {practicalExample}

Questions? Drop them below! 👇

#NutritionTip #HealthyEating #WellnessCoach #FitnessTips\`,
    variables: ['tipNumber', 'nutritionTopic', 'explanation', 'implementationSteps', 'practicalExample'],
    category: 'nutrition'
  },
  
  motivationMonday: {
    title: "Motivation Monday",
    template: \`🌟 MOTIVATION MONDAY 🌟

"{motivationalQuote}"

{personalStory}

💪 This week's challenge: {weeklyChallenge}

Who's in? Comment "I'M IN" below! 👇

Let's crush this week together! 🔥

#MotivationMonday #FitnessMotivation #WeeklyChallenge #YouGotThis\`,
    variables: ['motivationalQuote', 'personalStory', 'weeklyChallenge'],
    category: 'motivation'
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Template Editor Component</h4>
            <CodeBlock language="javascript" title="src/components/FitnessTemplateEditor.jsx">
{`import { useState } from 'react'
import { fitnessTemplates } from '@/data/fitnessTemplates'

export function FitnessTemplateEditor({ onSave }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [variables, setVariables] = useState({})
  const [generatedContent, setGeneratedContent] = useState('')

  const generateContent = () => {
    if (!selectedTemplate) return
    
    let content = selectedTemplate.template
    
    // Replace variables with user input
    Object.entries(variables).forEach(([key, value]) => {
      content = content.replace(new RegExp(\`{\${key}}\`, 'g'), value || \`[{\${key}}]\`)
    })
    
    setGeneratedContent(content)
  }

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
        🏋️ Fitness Content Templates
      </h3>
      
      {/* Template Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {Object.entries(fitnessTemplates).map(([key, template]) => (
          <div
            key={key}
            onClick={() => setSelectedTemplate(template)}
            className={\`p-4 border-2 rounded-lg cursor-pointer transition-colors \${
              selectedTemplate?.title === template.title
                ? 'border-fitness-500 bg-fitness-50 dark:bg-fitness-900/20'
                : 'border-stone-200 dark:border-stone-700 hover:border-fitness-300'
            }\`}
          >
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
              {template.title}
            </h4>
            <span className={\`inline-block px-2 py-1 text-xs rounded-full \${
              template.category === 'workout' ? 'bg-fitness-100 text-fitness-800 dark:bg-fitness-900/30 dark:text-fitness-300' :
              template.category === 'nutrition' ? 'bg-energy-100 text-energy-800 dark:bg-energy-900/30 dark:text-energy-300' :
              template.category === 'transformation' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
              'bg-wellness-100 text-wellness-800 dark:bg-wellness-900/30 dark:text-wellness-300'
            }\`}>
              {template.category}
            </span>
          </div>
        ))}
      </div>

      {/* Variable Input Form */}
      {selectedTemplate && (
        <div className="space-y-4 mb-6">
          <h4 className="font-semibold text-stone-900 dark:text-stone-100">
            Fill in the details:
          </h4>
          {selectedTemplate.variables.map((variable) => (
            <div key={variable}>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {variable.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                type="text"
                value={variables[variable] || ''}
                onChange={(e) => setVariables(prev => ({ ...prev, [variable]: e.target.value }))}
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-fitness-500 focus:border-transparent dark:bg-stone-700 dark:text-stone-100"
                placeholder={\`Enter \${variable}...\`}
              />
            </div>
          ))}
          <button
            onClick={generateContent}
            className="bg-fitness-500 hover:bg-fitness-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Generate Content
          </button>
        </div>
      )}

      {/* Generated Content Preview */}
      {generatedContent && (
        <div className="bg-stone-50 dark:bg-stone-900 p-4 rounded-lg">
          <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Preview:</h4>
          <div className="whitespace-pre-wrap text-stone-700 dark:text-stone-300 mb-4">
            {generatedContent}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onSave(generatedContent)}
              className="bg-fitness-500 hover:bg-fitness-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Use This Content
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(generatedContent)}
              className="bg-stone-500 hover:bg-stone-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Copy to Clipboard
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

        <StepCard step={3} title="Client Progress Tracking">
          <p className="mb-4">Add client progress tracking and transformation showcase features:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Client Progress Database Schema</h4>
            <CodeBlock language="javascript" title="pb_schema/client_progress.js">
{`// PocketBase schema for client progress tracking
export const clientProgressSchema = {
  name: "client_progress",
  type: "base",
  schema: [
    {
      name: "client_name",
      type: "text",
      required: true,
      options: {
        min: 2,
        max: 100
      }
    },
    {
      name: "start_date",
      type: "date",
      required: true
    },
    {
      name: "current_weight",
      type: "number",
      options: {
        min: 0,
        max: 1000
      }
    },
    {
      name: "starting_weight",
      type: "number",
      options: {
        min: 0,
        max: 1000
      }
    },
    {
      name: "body_fat_percentage",
      type: "number",
      options: {
        min: 0,
        max: 100
      }
    },
    {
      name: "measurements",
      type: "json",
      // Store: { chest: 40, waist: 32, hips: 38, arms: 14, thighs: 24 }
    },
    {
      name: "progress_photos",
      type: "file",
      options: {
        maxSelect: 10,
        maxSize: 5242880, // 5MB
        mimeTypes: ["image/jpeg", "image/png", "image/webp"]
      }
    },
    {
      name: "goals",
      type: "text",
      options: {
        max: 500
      }
    },
    {
      name: "achievements",
      type: "json",
      // Store array of milestone achievements
    },
    {
      name: "notes",
      type: "text",
      options: {
        max: 1000
      }
    },
    {
      name: "privacy_consent",
      type: "bool",
      required: true
    },
    {
      name: "social_media_consent",
      type: "bool"
    }
  ]
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Progress Tracking Component</h4>
            <CodeBlock language="javascript" title="src/components/ClientProgressTracker.jsx">
{`import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

export function ClientProgressTracker({ clientId }) {
  const [progressData, setProgressData] = useState([])
  const [selectedMetric, setSelectedMetric] = useState('weight')

  const metrics = {
    weight: { label: 'Weight (lbs)', color: 'rgb(34, 197, 94)' },
    bodyFat: { label: 'Body Fat %', color: 'rgb(249, 115, 22)' },
    muscle: { label: 'Muscle Mass', color: 'rgb(59, 130, 246)' }
  }

  const chartData = {
    labels: progressData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: metrics[selectedMetric].label,
        data: progressData.map(entry => entry[selectedMetric]),
        borderColor: metrics[selectedMetric].color,
        backgroundColor: metrics[selectedMetric].color + '20',
        tension: 0.4,
        fill: true
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: \`\${metrics[selectedMetric].label} Progress\`,
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
          📊 Progress Tracking
        </h3>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          className="px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-fitness-500 dark:bg-stone-700 dark:text-stone-100"
        >
          {Object.entries(metrics).map(([key, metric]) => (
            <option key={key} value={key}>{metric.label}</option>
          ))}
        </select>
      </div>

      {/* Progress Chart */}
      <div className="mb-6">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-fitness-50 dark:bg-fitness-900/20 p-4 rounded-lg">
          <div className="text-2xl font-bold text-fitness-600 dark:text-fitness-400">-15 lbs</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Weight Lost</div>
        </div>
        <div className="bg-energy-50 dark:bg-energy-900/20 p-4 rounded-lg">
          <div className="text-2xl font-bold text-energy-600 dark:text-energy-400">-5%</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Body Fat Reduced</div>
        </div>
        <div className="bg-wellness-50 dark:bg-wellness-900/20 p-4 rounded-lg">
          <div className="text-2xl font-bold text-wellness-600 dark:text-wellness-400">+8 lbs</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">Muscle Gained</div>
        </div>
      </div>

      {/* Create Transformation Post Button */}
      <button className="w-full bg-gradient-to-r from-fitness-500 to-energy-500 hover:from-fitness-600 hover:to-energy-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
        🎉 Create Transformation Post
      </button>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={4} title="Fitness Industry Integrations">
          <p className="mb-4">Connect with popular fitness apps and platforms:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">MyFitnessPal Integration</h4>
            <CodeBlock language="javascript" title="src/lib/integrations/myfitnesspal.js">
{`// MyFitnessPal API integration for nutrition data
export class MyFitnessPalIntegration {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.myfitnesspal.com/v2'
  }

  async getClientNutritionData(userId, date) {
    try {
      const response = await fetch(\`\${this.baseUrl}/diary/\${userId}/\${date}\`, {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      })
      
      const data = await response.json()
      
      return {
        calories: data.calories.value,
        protein: data.protein.value,
        carbs: data.carbohydrates.value,
        fat: data.fat.value,
        fiber: data.fiber.value,
        sugar: data.sugar.value,
        meals: data.meals.map(meal => ({
          name: meal.name,
          calories: meal.calories,
          foods: meal.foods
        }))
      }
    } catch (error) {
      throw new Error(\`MyFitnessPal sync failed: \${error.message}\`)
    }
  }

  async generateNutritionPost(nutritionData) {
    const { calories, protein, carbs, fat } = nutritionData
    
    return \`🥗 NUTRITION SPOTLIGHT 🥗

Today's fuel breakdown:
🔥 Calories: \${calories}
💪 Protein: \${protein}g
🍞 Carbs: \${carbs}g
🥑 Fat: \${fat}g

Remember: Your body is a machine, and food is your fuel! 
Quality nutrition = quality results.

What's your favorite post-workout meal? 👇

#NutritionMatters #FuelYourBody #HealthyEating #FitnessNutrition\`
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Strava Workout Integration</h4>
            <CodeBlock language="javascript" title="src/lib/integrations/strava.js">
{`// Strava API integration for workout data
export class StravaIntegration {
  constructor(accessToken) {
    this.accessToken = accessToken
    this.baseUrl = 'https://www.strava.com/api/v3'
  }

  async getRecentActivities(limit = 10) {
    try {
      const response = await fetch(\`\${this.baseUrl}/athlete/activities?per_page=\${limit}\`, {
        headers: {
          'Authorization': \`Bearer \${this.accessToken}\`
        }
      })
      
      return await response.json()
    } catch (error) {
      throw new Error(\`Strava sync failed: \${error.message}\`)
    }
  }

  async generateWorkoutPost(activity) {
    const activityType = activity.type.toLowerCase()
    const distance = (activity.distance / 1000).toFixed(2) // Convert to km
    const duration = Math.round(activity.moving_time / 60) // Convert to minutes
    const averageSpeed = (activity.average_speed * 3.6).toFixed(1) // Convert to km/h

    const workoutEmojis = {
      run: '🏃‍♂️',
      ride: '🚴‍♂️',
      swim: '🏊‍♂️',
      workout: '💪',
      yoga: '🧘‍♀️',
      hike: '🥾'
    }

    const emoji = workoutEmojis[activityType] || '💪'

    return \`\${emoji} WORKOUT COMPLETE \${emoji}

📋 Activity: \${activity.name}
📏 Distance: \${distance} km
⏱️ Time: \${duration} minutes
💨 Avg Speed: \${averageSpeed} km/h
🔥 Calories: ~\${Math.round(activity.distance * 0.06)} burned

\${this.getMotivationalMessage(activityType)}

What's your favorite way to stay active? Drop it below! 👇

#FitnessJourney #WorkoutComplete #StayActive #FitnessMotivation\`
  }

  getMotivationalMessage(activityType) {
    const messages = {
      run: "Every step forward is progress! 🏃‍♂️",
      ride: "Pedal your way to greatness! 🚴‍♂️",
      swim: "Making waves in the pool! 🏊‍♂️",
      workout: "Strength doesn't come from comfort zones! 💪",
      yoga: "Find your balance, find your strength! 🧘‍♀️",
      hike: "Nature's gym never disappoints! 🥾"
    }
    
    return messages[activityType] || "Consistency is the key to success! 💪"
  }
}`}
            </CodeBlock>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Fitness App Integration Dashboard</h4>
            <CodeBlock language="javascript" title="src/components/FitnessIntegrations.jsx">
{`export function FitnessIntegrations() {
  const integrations = [
    {
      name: 'MyFitnessPal',
      icon: '🥗',
      status: 'connected',
      description: 'Sync nutrition data and create meal posts',
      lastSync: '2 hours ago'
    },
    {
      name: 'Strava',
      icon: '🏃‍♂️',
      status: 'connected',
      description: 'Auto-post workout achievements',
      lastSync: '1 hour ago'
    },
    {
      name: 'Apple Health',
      icon: '❤️',
      status: 'disconnected',
      description: 'Track daily activity and health metrics',
      lastSync: 'Never'
    },
    {
      name: 'Fitbit',
      icon: '⌚',
      status: 'disconnected',
      description: 'Sync step count and sleep data',
      lastSync: 'Never'
    }
  ]

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
        🔗 Fitness App Integrations
      </h3>
      
      <div className="space-y-4">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex items-center justify-between p-4 border border-stone-200 dark:border-stone-600 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{integration.icon}</div>
              <div>
                <h4 className="font-semibold text-stone-900 dark:text-stone-100">
                  {integration.name}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {integration.description}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-500">
                  Last sync: {integration.lastSync}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={\`px-2 py-1 rounded-full text-xs font-medium \${
                integration.status === 'connected'
                  ? 'bg-fitness-100 text-fitness-800 dark:bg-fitness-900/30 dark:text-fitness-300'
                  : 'bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-300'
              }\`}>
                {integration.status}
              </div>
              <button className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
                integration.status === 'connected'
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-stone-300'
                  : 'bg-fitness-500 hover:bg-fitness-600 text-white'
              }\`}>
                {integration.status === 'connected' ? 'Configure' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <StepCard step={5} title="Lead Generation Features">
          <p className="mb-4">Convert social media followers into paying clients:</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Lead Capture Forms</h4>
            <CodeBlock language="javascript" title="src/components/FitnessLeadMagnet.jsx">
{`export function FitnessLeadMagnet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fitnessGoal: '',
    experience: '',
    interests: []
  })

  const fitnessGoals = [
    'Lose Weight',
    'Build Muscle',
    'Improve Endurance',
    'Increase Flexibility',
    'General Fitness',
    'Sport-Specific Training'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Submit lead data to PocketBase
    try {
      await pb.collection('fitness_leads').create({
        ...formData,
        source: 'social_media',
        lead_magnet: 'free_workout_plan',
        created: new Date().toISOString()
      })
      
      // Send welcome email with free workout plan
      await sendWelcomeEmail(formData.email, formData.name)
      
      // Redirect to thank you page
      router.push('/thank-you/workout-plan')
    } catch (error) {
      console.error('Lead capture failed:', error)
    }
  }

  return (
    <div className="bg-gradient-to-br from-fitness-500 to-energy-500 text-white p-8 rounded-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">
          🎁 FREE 30-Day Workout Plan
        </h3>
        <p className="text-fitness-100">
          Get a personalized workout plan designed just for your fitness goals!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="px-4 py-3 rounded-lg text-stone-900 placeholder-stone-500 focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="px-4 py-3 rounded-lg text-stone-900 placeholder-stone-500 focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <select
          value={formData.fitnessGoal}
          onChange={(e) => setFormData(prev => ({ ...prev, fitnessGoal: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg text-stone-900 focus:ring-2 focus:ring-white"
          required
        >
          <option value="">Select Your Primary Goal</option>
          {fitnessGoals.map(goal => (
            <option key={goal} value={goal}>{goal}</option>
          ))}
        </select>

        <select
          value={formData.experience}
          onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg text-stone-900 focus:ring-2 focus:ring-white"
          required
        >
          <option value="">Your Fitness Experience</option>
          <option value="beginner">Beginner (0-6 months)</option>
          <option value="intermediate">Intermediate (6-24 months)</option>
          <option value="advanced">Advanced (2+ years)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-white text-fitness-600 hover:bg-fitness-50 py-4 px-6 rounded-lg font-bold text-lg transition-colors"
        >
          📋 Get My FREE Workout Plan
        </button>

        <p className="text-xs text-fitness-100 text-center">
          No spam ever. Unsubscribe anytime. Your email is safe with us.
        </p>
      </form>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </StepCard>

        <div className="bg-gradient-to-r from-fitness-500 to-energy-500 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">🏋️ FitLife Social Implementation Complete!</h3>
          <p className="mb-4 opacity-90">
            You've seen how Light-Speed 2026 transforms into a specialized fitness platform. This example demonstrates 
            the power of industry-specific customization for maximum client value.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/examples/ecommerce">
              <Button className="bg-white text-fitness-600 hover:bg-fitness-50">
                Next: E-commerce Example →
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🚀 Build Your Fitness Platform
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
            💡 FitLife Social Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Content Templates</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>• Workout of the Day posts</li>
                <li>• Transformation Tuesday showcases</li>
                <li>• Nutrition tips and meal ideas</li>
                <li>• Motivation Monday challenges</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Client Management</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>• Progress photo management</li>
                <li>• Measurement tracking</li>
                <li>• Achievement milestones</li>
                <li>• Privacy consent management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">App Integrations</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400 mb-3">
                <li>• MyFitnessPal nutrition sync</li>
                <li>• Strava workout auto-posts</li>
                <li>• Apple Health data integration</li>
                <li>• Fitbit activity tracking</li>
              </ul>
              
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">Lead Generation</h4>
              <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                <li>• Free workout plan lead magnets</li>
                <li>• Consultation booking forms</li>
                <li>• Email sequence automation</li>
                <li>• Client conversion tracking</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}