import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-blush-light via-white to-luxury-nude/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-luxury-blush/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 animate-[fadeIn_1s_ease-in]">
            <div className="space-y-4">
              <h1 className="font-playfair italic font-bold text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-luxury-blush via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent leading-tight">
                TEMS AURA
              </h1>
              <p className="text-2xl sm:text-3xl font-playfair text-foreground/80">
                Soft Luxury. Custom Made For You.
              </p>
            </div>

            <p className="text-lg text-foreground/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience the elegance of bespoke fashion designed exclusively for you. 
              Ultra-feminine, sophisticated, and perfectly tailored to your measurements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/custom-order"
                className="group bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              >
                Book a Custom Design
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/gallery"
                className="bg-white/80 backdrop-blur-sm border-2 border-luxury-gold text-foreground px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold-accent hover:scale-105 transition-all duration-300 text-center"
              >
                View Gallery
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <span className="text-luxury-gold text-xl">✓</span>
                <span>Custom Measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-luxury-gold text-xl">✓</span>
                <span>Luxury Fabrics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-luxury-gold text-xl">✓</span>
                <span>Worldwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative animate-[slideUp_1s_ease-out]">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-blush to-luxury-nude flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-white/90 font-playfair text-2xl mb-4">Hero Image</p>
                  <p className="text-white/70 text-sm">
                    Replace with:<br />
                    Soft luxury blush pink evening gown photoshoot,<br />
                    studio lighting, feminine fashion editorial
                  </p>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float">
              <p className="font-playfair font-bold text-luxury-gold text-3xl">100+</p>
              <p className="text-foreground/70 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-luxury-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
