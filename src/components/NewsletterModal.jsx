'use client'
import React, { useState } from 'react';
import { Button } from '@/components/Button'

function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development'
    
    try {
      if (isDevelopment) {
        // In development, simulate success after a short delay
        setTimeout(() => {
          setMessage("Thanks. You're now subscribed!")
          setEmail('')
          setTimeout(() => {
            onClose()
            setMessage('')
          }, 2000)
        }, 500)
        return
      }

      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Handle success
        setMessage("Thanks. You're now subscribed!")
        setEmail('')
        setTimeout(() => {
          onClose()
          setMessage('')
        }, 2000)
      } else {
        setMessage('Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Subscription failed. Please try again.')
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
          className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          className="stroke-slate-400 dark:stroke-slate-500"
        />
      </svg>
    )
  }

  function CloseIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        </button>

        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="p-6"
        >
          <h2 className="flex italic font-extrabold font-display text-slate-900 dark:text-slate-100">
            <MailIcon className="flex-none w-6 h-6" />
            <span className="ml-3">Join my Light. Speed.✨ Newsletter!</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Join my newsletter for insights on developing fast websites and apps as a solopreneur and working remotely in Latin America. I work hard on producing quality content. No spam, just value!
          </p>
          <div className="flex mt-6">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              data-1p-ignore
              className="min-w-0 flex-auto appearance-none rounded-md border border-slate-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:border-slate-700 dark:bg-slate-700/[0.15] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-amber-400 dark:focus:ring-amber-400/10 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="flex-none ml-4">
              Join
            </Button>
          </div>
          {message && <div className="mt-2 text-sm text-amber-700 dark:text-amber-500">{message}</div>}
        </form>
      </div>
    </div>
  )
}

export default NewsletterModal