export const metadata = {
  title: 'About | TEMS AURA',
  description: 'Learn about TEMS AURA - a soft luxury fashion brand dedicated to creating bespoke custom pieces that celebrate femininity and elegance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-luxury-blush-light/20 to-luxury-nude/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-playfair italic font-bold text-5xl sm:text-6xl bg-gradient-to-r from-luxury-blush via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              TEMS AURA
            </h1>
            <p className="text-2xl font-playfair text-foreground/80">
              Where Soft Luxury Meets Bespoke Elegance
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe every woman deserves to feel absolutely extraordinary. 
              TEMS AURA creates custom luxury pieces that celebrate your unique beauty, 
              personality, and style.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-blush to-luxury-gold flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-white font-playfair text-2xl mb-4">Our Story</p>
                  <p className="text-white/80 text-sm">
                    Luxury female fashion designer studio aesthetic,<br />
                    sewing machine, blush tones, gold accents
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-4xl text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  TEMS AURA was born from a passion for creating pieces that make women 
                  feel confident, beautiful, and uniquely themselves. We understand that 
                  every body is different, and every occasion is special.
                </p>
                <p>
                  Our journey began with a simple belief: luxury fashion should be 
                  accessible, personal, and perfectly tailored to you. We combine 
                  traditional craftsmanship with modern design sensibilities to create 
                  pieces that are both timeless and contemporary.
                </p>
                <p>
                  Each TEMS AURA creation is meticulously handcrafted using premium 
                  fabrics and materials. We take pride in our attention to detail, 
                  ensuring every stitch, seam, and silhouette is absolutely perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-luxury-blush-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              To empower women through bespoke luxury fashion that celebrates 
              individuality and craftsmanship
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-luxury-gold/10 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-3">
                Soft Luxury
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe luxury should feel effortless and natural. Our designs 
                embrace soft femininity with elegant, understated sophistication.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-luxury-gold/10 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👗</div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-3">
                Custom Made
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Every piece is created specifically for you, with your exact measurements 
                and preferences. No mass production, only personal attention.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-luxury-gold/10 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-3">
                Quality First
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We use only premium fabrics and materials, combined with expert 
                craftsmanship to ensure each piece is nothing short of perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
              The TEMS AURA Experience
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From concept to creation, we&apos;re with you every step of the way
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Personal Consultation',
                description: 'We discuss your vision, occasion, and style preferences to understand exactly what you need.',
                icon: '💬',
              },
              {
                title: 'Design Development',
                description: 'Our designers create sketches and fabric selections tailored to your inspiration and requirements.',
                icon: '✏️',
              },
              {
                title: 'Expert Craftsmanship',
                description: 'Skilled artisans bring your design to life with meticulous attention to every detail.',
                icon: '✂️',
              },
              {
                title: 'Perfect Fit Guarantee',
                description: 'We ensure your piece fits perfectly with your custom measurements and final adjustments if needed.',
                icon: '✨',
              },
              {
                title: 'Luxury Delivery',
                description: 'Your finished piece arrives in beautiful packaging, ready for your special moment.',
                icon: '🎁',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-luxury-blush-light/10 rounded-2xl p-6 hover:bg-luxury-blush-light/20 transition-colors"
              >
                <div className="text-4xl flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-blush-light/30 to-luxury-nude/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-playfair font-bold text-4xl text-foreground">
            Ready to Create Your Dream Piece?
          </h2>
          <p className="text-lg text-foreground/70">
            Let&apos;s bring your vision to life. Start your custom order journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/custom-order"
              className="bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Custom Order
            </a>
            <a
              href="/gallery"
              className="bg-white border-2 border-luxury-gold text-foreground px-10 py-4 rounded-full font-semibold hover:bg-luxury-gold-accent hover:scale-105 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
