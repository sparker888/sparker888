'use client'
import React, { useState } from 'react';

import { Button } from '@/components/Button'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Handle success
        setMessage("You're now ninjafied!")
        setEmail('')
      } else {
        setMessage('Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
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

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Join my 🗡️Ninja newsletter!</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        As part of my Ninja Prompts for AI and the Midjourney Prompt Manager, you can stay up to date with the latest news and info.
      </p>
      <div className="mt-6 flex">
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
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
      {message && <div className="mt-2 text-sm text-amber-700 dark:text-amber-500">{message}</div>}
    </form>
  )
}

export default Newsletter
