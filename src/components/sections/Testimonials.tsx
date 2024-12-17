import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Customer Service Manager',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    quote: 'Divo.ai increased our customer satisfaction by 35% in under 6 months. The AI\'s natural conversation flow is incredible.',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    quote: 'We\'ve reduced response times from hours to seconds. Our team can now focus on strategic tasks instead of routine inquiries.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    quote: 'The ROI with Divo.ai was immediate. We\'ve seen a 50% reduction in customer service costs while improving quality.',
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Businesses Like Yours
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how companies are transforming their customer experience with Divo.ai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800"
            >
              <div className="flex gap-1 text-cyber-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyber-blue">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;