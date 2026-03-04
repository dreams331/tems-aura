'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export default function Testimonials() {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      content: 'TEMS AURA created the most beautiful custom wedding guest dress for me. The attention to detail and perfect fit exceeded all my expectations. I felt absolutely stunning!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Amara Williams',
      role: 'Fashion Blogger',
      content: 'The luxury and elegance in every piece is unmatched. Working with TEMS AURA was a dream - professional, creative, and the final result was pure perfection.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica Chen',
      role: 'CEO',
      content: 'I needed a custom gown for a gala event and TEMS AURA delivered beyond imagination. The fabric quality, fit, and design were absolutely exquisite. Worth every penny!',
      rating: 5,
    },
  ]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their most special occasions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-linear-to-br from-luxury-blush-light/30 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-luxury-gold/10"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <span className="text-luxury-gold text-5xl font-playfair leading-none">&ldquo;</span>
                <p className="text-foreground/80 leading-relaxed mt-2">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-luxury-blush/20">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-luxury-blush to-luxury-gold flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-luxury-blush-light/20 rounded-full px-8 py-4">
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-luxury-gold">100+</p>
              <p className="text-sm text-foreground/70">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-luxury-gold/30" />
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-luxury-gold">200+</p>
              <p className="text-sm text-foreground/70">Custom Pieces</p>
            </div>
            <div className="w-px h-12 bg-luxury-gold/30" />
            <div className="text-center">
              <p className="font-playfair font-bold text-3xl text-luxury-gold">5★</p>
              <p className="text-sm text-foreground/70">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
