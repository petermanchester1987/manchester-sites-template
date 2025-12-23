interface Service {
  icon: string;
  title: string;
  description: string;
}

const defaultServices: Service[] = [
  {
    icon: '🎨',
    title: 'Design Excellence',
    description: 'Creating beautiful, functional designs that capture your brand essence.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Lightning-fast websites optimized for speed and SEO.',
  },
  {
    icon: '🚀',
    title: 'Development',
    description: 'Custom solutions built with cutting-edge technology.',
  },
];

export default function ServicesSection({ services = defaultServices }: { services?: Service[] }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
          What We Offer
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
            <p className="text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}