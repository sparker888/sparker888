'use client'
import React, { useState, useEffect } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    const emailValue = event.target.email.value

    try {
      const response = await fetch(
        'https://assets.mailerlite.com/jsonp/404329/forms/182925151038342197/subscribe',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields: { email: emailValue } }),
        }
      )

      if (response.ok) {
        setIsSuccess(true)
        setMessage("You're in. First issue comes when there's something worth sending.")
        setEmail('')
      } else {
        console.error('Subscription error:', response.statusText)
        setMessage('Something went wrong. Try again or reach out directly.')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Something went wrong. Try again or reach out directly.')
    } finally {
      setIsLoading(false)
    }
  }

  function MailIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-amber-100 stroke-amber-400 dark:fill-amber-400/10 dark:stroke-amber-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          className="stroke-amber-400 dark:stroke-amber-500"
        />
      </svg>
    )
  }

  // Don't render until we're on the client
  if (!isClient) {
    return null
  }

  return (
    <div className="p-6 border rounded-2xl border-white/10 bg-[#1a1f2e]">
      <h2 className="flex items-center italic font-extrabold font-display text-slate-100">
        <MailIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Join my Light. Speed. <span className="text-amber-400">✨</span> Newsletter</span>
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        AI image strategy for marketers and creators — model comparisons, cost vs. quality breakdowns, and the prompts behind the work. Published when there&apos;s something worth covering.
      </p>
      {isSuccess ? (
        <p className="mt-4 text-sm font-medium text-amber-400">{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex mt-6">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              disabled={isLoading}
              data-1p-ignore
              className="min-w-0 flex-auto appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-slate-500 text-slate-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400/10 sm:text-sm disabled:opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none ml-4 px-4 py-2 text-sm font-semibold rounded-md bg-amber-400 text-slate-900 hover:bg-amber-300 disabled:opacity-50 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? '...' : 'Join'}
            </button>
          </div>
          {message && <p className="mt-2 text-sm text-red-400">{message}</p>}
          <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe any time.</p>
        </form>
      )}
    </div>
  )
}

export default Newsletter
