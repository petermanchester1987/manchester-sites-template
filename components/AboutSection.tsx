import Image from 'next/image';
import Link from 'next/link';

interface AboutSectionProps {
  reverse?: boolean;
  subtitle?: string;
  title?: string;
  description?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  images?: string[];
  showCTA?: boolean;
}

export default function AboutSection({
  reverse = false,
  subtitle = "Who We Are",
  title = "About Our Company",
  description = "We are a passionate team dedicated to delivering excellence in every project.",
  quote,
  images = ['/about1.jpg', '/about2.jpg'],
  showCTA = true
}: AboutSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Images */}
        <div className={`grid grid-cols-2 gap-4 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="mt-8">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src={images[0]} alt="About" fill className="object-cover" />
            </div>
          </div>
          <div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src={images[1]} alt="About" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={reverse ? 'lg:order-1' : ''}>
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted mb-8">
            {description}
          </p>

          {quote && (
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mb-8">
              <p className="text-lg italic mb-4">{quote.text}</p>
              <p className="font-semibold text-primary">{quote.author}</p>
              <p className="text-sm text-muted">{quote.role}</p>
            </div>
          )}

          {showCTA && (
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}