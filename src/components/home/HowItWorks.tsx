export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Submit Measurements',
      description: 'Fill out our detailed measurement form or upload your measurement sheet. We guide you through every step to ensure perfect fit.',
      icon: '📏',
    },
    {
      number: '02',
      title: 'Upload Your Design Inspiration',
      description: 'Share photos of designs you love. Our team will work with your vision to create something uniquely yours.',
      icon: '📸',
    },
    {
      number: '03',
      title: 'Personal Consultation',
      description: 'We discuss fabric choices, style preferences, and any special requirements to bring your dream piece to life.',
      icon: '💬',
    },
    {
      number: '04',
      title: 'We Create & Deliver',
      description: 'Our skilled artisans craft your custom piece with precision and care. Delivered to your doorstep with luxury packaging.',
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-luxury-blush-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your journey to owning a bespoke luxury piece is simple and seamless
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-luxury-gold to-transparent -ml-4" />
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-luxury-blush/20">
                {/* Number Badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-luxury-blush to-luxury-gold rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-playfair font-bold text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/custom-order"
            className="inline-block bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}
