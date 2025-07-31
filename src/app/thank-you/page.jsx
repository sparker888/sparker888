import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Thank you for reaching out',
  description: 'Your message has been received.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank you for your message!"
      intro="I've received your message and appreciate you taking the time to reach out. I'll get back to you within 24 hours in most cases. Looking forward to connecting with you!"
    />
  )
}
