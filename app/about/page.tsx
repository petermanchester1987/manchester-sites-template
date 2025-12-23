import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';

export const metadata = {
  title: 'About Us | Your Business Name',
  description: 'Learn more about our team and our commitment to excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About Us"
        subtitle="Our Story"
        compact={true}
      />
      <AboutSection 
        quote={{
          text: "Our mission is to deliver excellence in every project we undertake.",
          author: "John Doe",
          role: "Founder & CEO"
        }}
      />
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-heading mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted mb-8">Let&apos;s create something amazing together.</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}