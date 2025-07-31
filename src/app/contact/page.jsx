'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'

function ContactForm() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const formData = new FormData(e.target)
    
    // Check if we're in production (Netlify)
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })

        if (response.ok) {
          setStatus('success')
          e.target.reset()
        } else {
          // If we get 405, it might mean Netlify hasn't detected the form yet
          if (response.status === 405) {
            setStatus('netlify-error')
          } else {
            setStatus('error')
          }
        }
      } catch (error) {
        console.error('Form submission error:', error)
        setStatus('error')
      }
    } else {
      // Local development
      console.log('Form submission (local):', Object.fromEntries(formData))
      setStatus('local')
      setTimeout(() => {
        e.target.reset()
        setStatus('')
      }, 3000)
    }
    
    setIsSubmitting(false)
  }

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Hidden input for Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam protection */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-amber-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-amber-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-amber-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-amber-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus-visible:outline-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {/* Status messages */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-md">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-md">
          There was an error sending your message. Please try again later.
        </div>
      )}
      
      {status === 'local' && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-md">
          Local development mode: Form submission logged to console. Deploy to Netlify to enable form submissions.
        </div>
      )}
      
      {status === 'netlify-error' && (
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
          The form is not yet configured on Netlify. Please redeploy the site for the form to work properly.
        </div>
      )}
    </>
  )
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight font-display text-slate-800 sm:text-5xl dark:text-slate-100">
          Let's Connect
        </h1>
        <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
          Ready to build something fast? Have a question about my work? 
          I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <ContactForm />

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-10">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Other ways to connect
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Prefer social media? You can find me on{' '}
            <a href="https://linkedin.com/in/sparker888" className="text-sky-500 hover:text-sky-600 dark:text-amber-500 dark:hover:text-amber-600">
              LinkedIn
            </a>
            ,{' '}
            <a href="https://x.com/sparker888" className="text-sky-500 hover:text-sky-600 dark:text-amber-500 dark:hover:text-amber-600">
              X (Twitter)
            </a>
            , or{' '}
            <a href="https://github.com/sparker888" className="text-sky-500 hover:text-sky-600 dark:text-amber-500 dark:hover:text-amber-600">
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  )
}