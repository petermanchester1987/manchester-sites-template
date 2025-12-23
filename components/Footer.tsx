import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-4">
              YourLogo
            </h3>
            <p className="text-background/70 mb-6">
              Creating exceptional digital experiences for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition">
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Sitemap</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-background/70 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-primary transition">About</Link></li>
              <li><Link href="/gallery" className="text-background/70 hover:text-primary transition">Gallery</Link></li>
              <li><Link href="/reviews" className="text-background/70 hover:text-primary transition">Reviews</Link></li>
              <li><Link href="/blog" className="text-background/70 hover:text-primary transition">Blog</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>Design</li>
              <li>Development</li>
              <li>Consulting</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@example.com" className="text-background/70 hover:text-primary transition">hello@example.com</a></li>
              <li><a href="tel:+1234567890" className="text-background/70 hover:text-primary transition">+1 (234) 567-890</a></li>
              <li className="text-background/70">123 Business St<br />City, Country</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/50">
          <p>&copy; 2024 YourBusiness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}