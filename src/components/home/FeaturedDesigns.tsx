'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Design {
  id: number;
  title: string;
  category: string;
  image: string;
  featured: boolean;
}

export default function FeaturedDesigns() {
  const [designs] = useState<Design[]>([
    {
      id: 1,
      title: 'Blush Evening Gown',
      category: 'Evening Wear',
      image: '/placeholder1.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Gold Cocktail Dress',
      category: 'Cocktail',
      image: '/placeholder2.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Nude Elegance',
      category: 'Custom Design',
      image: '/placeholder3.jpg',
      featured: true,
    },
    {
      id: 4,
      title: 'Rose Luxury Piece',
      category: 'Luxury Collection',
      image: '/placeholder4.jpg',
      featured: false,
    },
  ]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
            Featured Designs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our collection of bespoke luxury pieces, each crafted with 
            meticulous attention to detail and soft luxury aesthetics.
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-luxury-blush-light/20"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-blush to-luxury-nude flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-white font-playfair text-xl mb-2">
                      {design.title}
                    </p>
                    <p className="text-white/70 text-sm">
                      CMS Controlled Image
                    </p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium mb-1">{design.category}</p>
                    <h3 className="font-playfair text-2xl font-bold">{design.title}</h3>
                    <button className="mt-4 bg-white text-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-luxury-gold-light transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {design.featured && (
                  <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ✨ Featured
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="p-6 bg-white">
                <p className="text-sm text-luxury-gold font-medium mb-1">
                  {design.category}
                </p>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Designs
          </a>
        </div>
      </div>
    </section>
  );
}
