import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Gallery | TEMS AURA',
  description: 'Explore our collection of bespoke luxury fashion pieces. Each design is crafted with meticulous attention to detail.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-luxury-blush-light/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
            Our Gallery
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Browse through our collection of stunning custom pieces. 
            Each design tells a unique story of elegance and sophistication.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
    </div>
  );
}
