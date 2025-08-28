'use client'

import { useState, useEffect } from 'react'

export default function TypewriterText() {
  const phrases = [
    "Let's design!",
    "Let's build!",
    "Let's test!",
    "Let's ship!",
    "Let's measure!",
    "Let's iterate!",
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
      {displayedText.split('').map((char, index) => {
        // Make emoji appear with the exclamation mark (no extra delay)
        const isEmoji = char === '✨';
        const animationDelay = isEmoji ? (index - 1) * 0.03 : index * 0.03;
        
        return (
          <span
            key={`${currentPhraseIndex}-${index}`}
            style={{
              opacity: 1,
              display: 'inline-block',
              animation: `fadeIn 0.1s ${animationDelay}s both`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
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