import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  compact?: boolean;
}

export default function Hero({ 
  title = "Welcome to Our Business",
  subtitle = "Excellence in Every Detail",
  description = "We provide exceptional services tailored to your unique needs.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  image = "/hero.jpg",
  compact = false
}: HeroProps) {
  return (
    <section className={`relative ${compact ? 'min-h-[60vh]' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
          {subtitle}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
          {title}
        </h1>
        {!compact && (
          <>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-10">
              {description}
            </p>
            <Link
              href={ctaLink}
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              {ctaText}
            </Link>
          </>
        )}
      </div>
    </section>
  );
}