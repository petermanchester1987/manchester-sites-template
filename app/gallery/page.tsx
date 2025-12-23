import Hero from '@/components/Hero';
import Image from 'next/image';
import { client } from '@/lib/sanity.client';

export const metadata = {
  title: 'Gallery | Your Business Name',
  description: 'Browse our portfolio of work.',
};

async function getGalleryImages() {
  const query = `*[_type == "gallery"] | order(order asc) {
    _id,
    title,
    image,
    category
  }`;
  
  return client.fetch(query);
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <Hero 
        title="Our Gallery"
        subtitle="Portfolio"
        description="Showcasing our finest work"
        compact={true}
      />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {images.map((item: any) => (
            <div key={item._id} className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}