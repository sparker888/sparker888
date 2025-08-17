'use client'

import { useState } from 'react'
import clsx from 'clsx'

export function CodeBlock({ children, language = 'bash', title }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative">
      {title && (
        <div className="bg-stone-800 text-stone-300 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-stone-700">
          {title}
        </div>
      )}
      <div className={clsx(
        'relative bg-stone-900 text-stone-100 p-4 overflow-x-auto',
        title ? 'rounded-b-lg' : 'rounded-lg'
      )}>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
        <pre className="text-sm leading-relaxed">
          <code className={`language-${language}`}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
}