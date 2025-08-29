'use client'

import { useEffect } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className="flex flex-col items-center justify-center min-h-[50vh] py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Something went wrong!
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button
          onClick={() => reset()}
          className="inline-flex items-center gap-2"
        >
          Try again
        </Button>
      </div>
    </Container>
  )
}