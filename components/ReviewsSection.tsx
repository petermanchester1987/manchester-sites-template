interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

const defaultReviews: Review[] = [
  {
    name: 'John Doe',
    role: 'Marketing Director',
    rating: 5,
    text: 'Exceptional service and outstanding results. They exceeded all expectations.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    rating: 5,
    text: 'Professional, creative, and reliable. Highly recommend!',
  },
];

export default function ReviewsSection({ reviews = defaultReviews, showAll = false }: { reviews?: Review[], showAll?: boolean }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.slice(0, showAll ? reviews.length : 2).map((review, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-semibold text-lg">{review.name}</p>
                <p className="text-muted text-sm">{review.role}</p>
              </div>
              <div className="text-yellow-400 text-xl">
                {'★'.repeat(review.rating)}
              </div>
            </div>
            <p className="text-muted">{review.text}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-block text-primary font-semibold hover:underline"
          >
            View All Reviews →
          </a>
        </div>
      )}
    </section>
  );
}