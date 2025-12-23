import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection 
        quote={{
          text: "Working with this team transformed our business. Their attention to detail is unmatched.",
          author: "Jane Smith",
          role: "CEO, Tech Company"
        }}
      />
      <AboutSection 
        reverse={true}
        subtitle="Our Approach"
        title="How We Work"
        description="We believe in a collaborative approach, working closely with you every step of the way."
        showCTA={false}
      />
      <ReviewsSection />
    </>
  );
}