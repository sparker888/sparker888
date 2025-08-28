'use client'

import { useState, useEffect } from 'react'

export default function TypewriterText() {
  const phrases = [
    "Let's promote! ✨",
    "Let's design! ✨",
    "Let's build! ✨",
    "Let's prompt! ✨",
    "Let's ship! ✨",
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (!isDeleting) {
      // Typing characters in
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        }, 80) // Fast typing speed
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, hold for 2 seconds
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting characters out
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 40) // Faster deletion speed
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }
  }, [displayedText, currentPhraseIndex, isDeleting, phrases])

  return (
    <span className="inline-block">
      {displayedText.split('').map((char, index) => (
        <span
          key={`${currentPhraseIndex}-${index}`}
          style={{
            opacity: 1,
            display: 'inline-block',
            animation: `fadeIn 0.1s ${index * 0.03}s both`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className="inline-block ml-1 text-amber-500 animate-pulse">
        |
      </span>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </span>
  )
}