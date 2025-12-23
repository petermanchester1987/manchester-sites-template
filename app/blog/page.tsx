import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity.client';

export const metadata = {
  title: 'Blog | Your Business Name',
  description: 'Latest news and insights.',
};

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name}
  }`;
  
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Hero 
        title="Our Blog"
        subtitle="Insights & News"
        description="Stay updated with our latest thoughts"
        compact={true}
      />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {posts.map((post: any) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted mb-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-muted">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}