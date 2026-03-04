import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | TEMS AURA',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-blush-light/20 via-white to-luxury-nude/20 px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Animation */}
        <div className="space-y-4">
          <h1 className="font-playfair italic font-bold text-9xl bg-gradient-to-r from-luxury-blush via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent animate-float">
            404
          </h1>
          <p className="text-3xl font-playfair text-foreground">
            Oops! Page Not Found
          </p>
        </div>

        {/* Message */}
        <p className="text-lg text-foreground/70 leading-relaxed">
          It seems this page has wandered off the runway. 
          But don&apos;t worry, there&apos;s plenty more beauty to explore!
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            ← Back to Home
          </Link>
          <Link
            href="/gallery"
            className="bg-white border-2 border-luxury-gold text-foreground px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold-accent hover:scale-105 transition-all duration-300"
          >
            Browse Gallery
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="pt-8">
          <p className="text-6xl animate-bounce">✨</p>
        </div>
      </div>
    </div>
  );
}
