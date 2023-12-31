import { GalleryCard } from '@/components/GalleryCard'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import image1 from '@/images/photos/image35.jpg'
import image2 from '@/images/photos/image12.jpg'
import image3 from '@/images/photos/image36.png'
import image4 from '@/images/photos/image31.jpg'
import image5 from '@/images/photos/image34.jpg'

function GallerySection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Gallery({ title, description, event, cta, href, imageSrc }) { // Rename the 'image' prop to 'imageSrc'
  console.log(imageSrc); // Log the correct prop
  return (
    <GalleryCard as="gallery" imageSrc={imageSrc}>
      <GalleryCard.Title as="h3" href={href} target="_blank">
        {title}
      </GalleryCard.Title>
      <GalleryCard.Eyebrow decorate>{event}</GalleryCard.Eyebrow>
      <GalleryCard.Description>{description}</GalleryCard.Description>
      <GalleryCard.Cta>{cta}</GalleryCard.Cta>
    </GalleryCard>
  )
}

export const metadata = {
  title: 'Gallery',
  description:
    'Work of sparker888 -- Photography, aerial photography and Midjourney prompt studies.',
}

export default function Photography() {
  return (
    <SimpleLayout
      title="My work as a photographer, drone pilot and Midjourney image creator."
      intro="Creating imagery that promotes great work, provides a different perspective or captures something truly unique and memorable is my passion."
    >
      <div className="space-y-20">
      <GallerySection title="Art">
          <Gallery
            imageSrc={image1}
            href="https://art-image-gallery.vercel.app/"
            title="World-renown stained glass artists"
            description="I've worked with John Emery and Jerry Preston over the years to stage and shoot some of their best work."
            event="Preston Studios"
            cta="Visit Gallery"
          />
        </GallerySection>
        <GallerySection title="Surfing">
          <Gallery
            imageSrc={image2}
            href="https://surfing-image-gallery.vercel.app/"
            title="Chasing hurricane swells"
            description="On the east coast of Florida, we dream of big surf and strong wind. I'm always ready to capture the action!"
            event="Space Coast water sports"
            cta="Visit Gallery"
          />
        </GallerySection>
        <GallerySection title="Midjourney">
          <Gallery
            imageSrc={image3}
            href="https://midjourney-image-gallery.vercel.app/"
            title="v5 gallery. V6 gallery coming soon!"
            description="I seek to become a master with Midjourney for digital storytelling and help others along the way."
            event="AI Imagery from Midjourney"
            cta="Visit Gallery"
          />
        </GallerySection>
      <GallerySection title="Space Coast">
          <Gallery
            imageSrc={image4}
            href="https://space-coast-image-gallery.vercel.app/"
            title="Florida's East Coast is the best coast"
            description="By water or by air I'm always on the lookout for wildlife and spectacular views on Florida's space coast."
            event="Wildlife and Aerial Adventure"
            cta="Visit Gallery"
          />
        </GallerySection>
        <GallerySection title="Real Estate">
          <Gallery
            imageSrc={image5}
            href="https://real-estate-gallery.vercel.app/"
            title="Breathtaking Florida Homes"
            description="Check out some pro photography of several beautiful homes found here in Central Florida."
            event="Winter Park to Lansing Island"
            cta="Visit Gallery"
          />
        </GallerySection>
        
      </div>
    </SimpleLayout>
  )
}
