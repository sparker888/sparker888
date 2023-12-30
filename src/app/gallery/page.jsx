import { GalleryCard } from '@/components/GalleryCard'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import image1 from '@/images/photos/image35.jpg'
import image2 from '@/images/photos/image12.jpg'
import image3 from '@/images/photos/image36.png'
import image4 from '@/images/photos/image31.jpg'
import image5 from '@/images/photos/image33.jpg'

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
      <GalleryCard.Title as="h3" href={href}>
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
            href="#"
            title="World-renown stained glass artists"
            description="I've worked with John Emery and Jerry Preston over the years to stage and shoot some of their best work."
            event="Preston Studios"
            cta="Coming Soon"
          />
        </GallerySection>
        <GallerySection title="Surfing">
          <Gallery
            imageSrc={image2}
            href="#"
            title="Chasing hurricane swells"
            description="On the east coast of Florida, we dream of extreme ocean swells. I'm always ready to capture the action!"
            event="Water Sports"
            cta="Visit Gallery"
          />
        </GallerySection>
        <GallerySection title="Midjourney">
          <Gallery
            imageSrc={image3}
            href="#"
            title="We're into v6 beta and it's stunning"
            description="My current focus is on becoming a master at using Midjourney for digital branding and helping others along the way."
            event="AI Imagery"
            cta="Coming Soon"
          />
        </GallerySection>
      <GallerySection title="Space Coast">
          <Gallery
            imageSrc={image4}
            href="#"
            title="Florida's East Coast is the best coast"
            description="I'm lucky enough to live in bird photography paradise, but I capture much more on Florida's space coast."
            event="Wildlife and Water"
            cta="Coming Soon"
          />
        </GallerySection>
        <GallerySection title="Aerial">
          <Gallery
            imageSrc={image5}
            href="#"
            title="Breathtaking views of the earth"
            description="I'm still blown away by the stunning vistas that we pilots capture from a small, lightweight piece of flying technology."
            event="Drones gone Wild"
            cta="Coming Soon"
          />
        </GallerySection>
        
      </div>
    </SimpleLayout>
  )
}
