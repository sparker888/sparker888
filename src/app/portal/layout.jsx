import { PortalHeader } from '@/components/portal/PortalHeader'
import { PortalFooter } from '@/components/portal/PortalFooter'

export const metadata = {
  title: {
    template: '%s - Light-Speed 2026 Portal',
    default: 'Light-Speed 2026 Portal'
  },
  description: 'Customer portal for Light-Speed 2026 social media management platform'
}

// Pre-generate star positions with more randomness
const generateStars = (seed = 0) => {
  const pseudoRandom = (n) => {
    const x = Math.sin(n + seed) * 10000;
    return x - Math.floor(x);
  };
  
  return Array.from({ length: 150 }, (_, i) => ({
    id: i + seed,
    left: pseudoRandom(i * 1.3) * 100,
    top: pseudoRandom(i * 2.7) * 100,
    size: pseudoRandom(i * 3.1) < 0.1 ? 'w-1 h-1' : pseudoRandom(i * 4.2) < 0.3 ? 'w-0.5 h-0.5' : 'w-px h-px',
    opacity: pseudoRandom(i * 5.3) < 0.2 ? 'opacity-100' : pseudoRandom(i * 6.4) < 0.5 ? 'opacity-70' : 'opacity-50',
    twinkle: pseudoRandom(i * 7.5) < 0.15 ? 'animate-star-twinkle' : pseudoRandom(i * 8.6) < 0.15 ? 'animate-star-twinkle-slow' : '',
    delay: pseudoRandom(i * 9.7) * 3
  }));
};

const stars1 = generateStars(0);
const stars2 = generateStars(1000);

export default function PortalLayout({ children }) {
  return (
    <div className="fixed inset-0 z-50 bg-stone-900 text-white overflow-auto">
      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Two tiled star fields for seamless movement */}
        <div className="absolute w-[200%] h-[200%] -left-full -top-full animate-star-field-seamless">
          {/* First tile */}
          <div className="absolute inset-0 w-1/2 h-1/2">
            {stars1.map((star) => (
              <div
                key={`a-${star.id}`}
                className={`absolute ${star.size} ${star.opacity} bg-stone-300 rounded-full ${star.twinkle}`}
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>
          {/* Second tile - offset */}
          <div className="absolute left-1/2 top-0 w-1/2 h-1/2">
            {stars2.map((star) => (
              <div
                key={`b-${star.id}`}
                className={`absolute ${star.size} ${star.opacity} bg-stone-300 rounded-full ${star.twinkle}`}
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>
          {/* Third tile - offset */}
          <div className="absolute left-0 top-1/2 w-1/2 h-1/2">
            {stars2.map((star) => (
              <div
                key={`c-${star.id}`}
                className={`absolute ${star.size} ${star.opacity} bg-stone-300 rounded-full ${star.twinkle}`}
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>
          {/* Fourth tile - offset */}
          <div className="absolute left-1/2 top-1/2 w-1/2 h-1/2">
            {stars1.map((star) => (
              <div
                key={`d-${star.id}`}
                className={`absolute ${star.size} ${star.opacity} bg-stone-300 rounded-full ${star.twinkle}`}
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative min-h-full flex flex-col">
        <PortalHeader />
        <main className="flex-1">
          {children}
        </main>
        <PortalFooter />
      </div>
    </div>
  )
}