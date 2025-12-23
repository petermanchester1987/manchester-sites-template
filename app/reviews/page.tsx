import Hero from '@/components/Hero';
import ReviewsSection from '@/components/ReviewsSection';
import { client } from '@/lib/sanity.client';

export const metadata = {
  title: 'Reviews | Your Business Name',
  description: 'What our clients say about us.',
};

async function getReviews() {
  const query = `*[_type == "review"] | order(_createdAt desc) {
    _id,
    name,
    role,
    rating,
    text
  }`;
  
  return client.fetch(query);
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Hero 
        title="Client Reviews"
        subtitle="Testimonials"
        description="Hear what our clients have to say"
        compact={true}
      />
      <ReviewsSection reviews={reviews} showAll={true} />
    </>
  );
}