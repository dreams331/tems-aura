'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  featured: boolean;
}

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Evening Dresses', 'Wedding Guest', 'Custom Designs', 'Luxury Pieces'];

  const [galleryItems] = useState<GalleryItem[]>([
    { id: 1, title: 'Blush Evening Gown', category: 'Evening Dresses', image: '/gallery1.jpg', featured: true },
    { id: 2, title: 'Gold Cocktail Dress', category: 'Luxury Pieces', image: '/gallery2.jpg', featured: true },
    { id: 3, title: 'Nude Elegance', category: 'Custom Designs', image: '/gallery3.jpg', featured: false },
    { id: 4, title: 'Rose Luxury Piece', category: 'Luxury Pieces', image: '/gallery4.jpg', featured: true },
    { id: 5, title: 'Champagne Dream', category: 'Wedding Guest', image: '/gallery5.jpg', featured: false },
    { id: 6, title: 'Soft Pink Perfection', category: 'Evening Dresses', image: '/gallery6.jpg', featured: false },
    { id: 7, title: 'Golden Hour', category: 'Custom Designs', image: '/gallery7.jpg', featured: false },
    { id: 8, title: 'Pearl Elegance', category: 'Wedding Guest', image: '/gallery8.jpg', featured: false },
  ]);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase().replace(' ', '-'))}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.toLowerCase().replace(' ', '-')
                  ? 'bg-gradient-to-r from-luxury-blush to-luxury-gold text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-luxury-blush/30 text-foreground hover:border-luxury-gold hover:bg-luxury-blush-light/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-luxury-blush-light/10"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-blush to-luxury-nude flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-white font-playfair text-xl mb-2">{item.title}</p>
                  <p className="text-white/70 text-sm">{item.category}</p>
                  <p className="text-white/50 text-xs mt-4">CMS Controlled</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-foreground px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  View Details
                </button>
              </div>

              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                  <span>✨</span>
                  <span>Featured This Week</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 bg-white">
              <p className="text-sm text-luxury-gold font-medium mb-1">{item.category}</p>
              <h3 className="font-playfair text-lg font-bold text-foreground">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-in]"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors shadow-lg"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-luxury-blush to-luxury-nude flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-white font-playfair text-3xl mb-4">{selectedImage.title}</p>
                <p className="text-white/80 text-lg mb-2">{selectedImage.category}</p>
                <p className="text-white/60 text-sm">Full resolution image controlled by CMS</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 space-y-4">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-foreground mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-luxury-gold font-medium">{selectedImage.category}</p>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Share this design:</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-[#E1306C] to-[#F56040] text-white py-3 rounded-full font-medium hover:shadow-lg transition-all">
                    📸 Instagram
                  </button>
                  <button className="flex-1 bg-[#1877F2] text-white py-3 rounded-full font-medium hover:shadow-lg transition-all">
                    👤 Facebook
                  </button>
                  <button className="flex-1 bg-black text-white py-3 rounded-full font-medium hover:shadow-lg transition-all">
                    🎵 TikTok
                  </button>
                  <button className="flex-1 bg-[#FFFC00] text-black py-3 rounded-full font-medium hover:shadow-lg transition-all">
                    👻 Snapchat
                  </button>
                </div>
                <p className="text-xs text-foreground/60 text-center">
                  &quot;New luxury piece by TEMS AURA ✨&quot;
                </p>
              </div>

              {/* CTA */}
              <a
                href="/custom-order"
                className="block w-full bg-gradient-to-r from-luxury-blush to-luxury-gold text-white text-center py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Order Similar Design
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
