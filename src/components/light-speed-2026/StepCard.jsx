export function StepCard({ step, title, children, variant = 'default' }) {
  const variants = {
    default: 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700',
    success: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
  }

  const stepColors = {
    default: 'bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  }

  return (
    <div className={`rounded-lg p-6 ${variants[variant]}`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${stepColors[variant]}`}>
          {step}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
            {title}
          </h3>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function InfoBox({ type = 'info', title, children }) {
  const styles = {
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
      title: 'text-blue-800 dark:text-blue-200',
      content: 'text-blue-700 dark:text-blue-300',
      icon: '💡'
    },
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800',
      title: 'text-green-800 dark:text-green-200',
      content: 'text-green-700 dark:text-green-300',
      icon: '✅'
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800',
      title: 'text-yellow-800 dark:text-yellow-200',
      content: 'text-yellow-700 dark:text-yellow-300',
      icon: '⚠️'
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800',
      title: 'text-red-800 dark:text-red-200',
      content: 'text-red-700 dark:text-red-300',
      icon: '❌'
    }
  }

  const style = styles[type]

  return (
    <div className={`rounded-lg p-6 ${style.container}`}>
      <h3 className={`font-semibold mb-2 ${style.title}`}>
        <span className="mr-2">{style.icon}</span>
        {title}
      </h3>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}