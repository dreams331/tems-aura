import CustomOrderForm from '@/components/CustomOrderForm';

export const metadata = {
  title: 'Custom Order | TEMS AURA',
  description: 'Create your bespoke luxury piece. Submit your measurements and design inspiration for a custom-made dress that fits perfectly.',
};

export default function CustomOrderPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-luxury-blush-light/10 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
            Custom Order Form
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Fill in your details below, 
            and we&apos;ll bring your dream piece to life.
          </p>
        </div>

        {/* Form */}
        <CustomOrderForm />
      </div>
    </div>
  );
}
