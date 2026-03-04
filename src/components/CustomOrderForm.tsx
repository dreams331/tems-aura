'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  country: string;
  
  // Measurements
  bust: string;
  underbust: string;
  waist: string;
  hips: string;
  shoulderWidth: string;
  sleeveLength: string;
  armCircumference: string;
  neck: string;
  height: string;
  dressLength: string;
  additionalNotes: string;
  
  // Preferences
  fabric: string;
  occasion: string;
  timeline: string;
  
  // Files
  inspirationImage?: File;
  measurementSheet?: File;
  referencePhoto?: File;
}

export default function CustomOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    bust: '',
    underbust: '',
    waist: '',
    hips: '',
    shoulderWidth: '',
    sleeveLength: '',
    armCircumference: '',
    neck: '',
    height: '',
    dressLength: '',
    additionalNotes: '',
    fabric: '',
    occasion: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center animate-[fadeIn_0.5s_ease-in]">
        <div className="text-7xl mb-6">✨</div>
        <h2 className="font-playfair font-bold text-3xl text-foreground mb-4">
          Order Submitted Successfully!
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
          Thank you for choosing TEMS AURA! We&apos;ve received your custom order 
          and will contact you within 24 hours to discuss the next steps.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                country: '',
                bust: '',
                underbust: '',
                waist: '',
                hips: '',
                shoulderWidth: '',
                sleeveLength: '',
                armCircumference: '',
                neck: '',
                height: '',
                dressLength: '',
                additionalNotes: '',
                fabric: '',
                occasion: '',
                timeline: '',
              });
            }}
            className="bg-linear-to-r from-luxury-blush to-luxury-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Submit Another Order
          </button>
          <Link
            href="/"
            className="bg-white border-2 border-luxury-gold text-foreground px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold-accent hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-10">
      {/* Personal Information */}
      <section>
        <h2 className="font-playfair font-bold text-2xl text-foreground mb-6 pb-3 border-b-2 border-luxury-gold/30">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="+44 7554 416005"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="United Kingdom"
            />
          </div>
        </div>
      </section>

      {/* Body Measurements */}
      <section>
        <h2 className="font-playfair font-bold text-2xl text-foreground mb-6 pb-3 border-b-2 border-luxury-gold/30">
          Body Measurements (in cm or inches)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="bust" className="block text-sm font-medium text-foreground mb-2">
              Bust *
            </label>
            <input
              type="text"
              id="bust"
              name="bust"
              required
              value={formData.bust}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 90cm"
            />
          </div>

          <div>
            <label htmlFor="underbust" className="block text-sm font-medium text-foreground mb-2">
              Underbust *
            </label>
            <input
              type="text"
              id="underbust"
              name="underbust"
              required
              value={formData.underbust}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 75cm"
            />
          </div>

          <div>
            <label htmlFor="waist" className="block text-sm font-medium text-foreground mb-2">
              Waist *
            </label>
            <input
              type="text"
              id="waist"
              name="waist"
              required
              value={formData.waist}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 70cm"
            />
          </div>

          <div>
            <label htmlFor="hips" className="block text-sm font-medium text-foreground mb-2">
              Hips *
            </label>
            <input
              type="text"
              id="hips"
              name="hips"
              required
              value={formData.hips}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 95cm"
            />
          </div>

          <div>
            <label htmlFor="shoulderWidth" className="block text-sm font-medium text-foreground mb-2">
              Shoulder Width *
            </label>
            <input
              type="text"
              id="shoulderWidth"
              name="shoulderWidth"
              required
              value={formData.shoulderWidth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 40cm"
            />
          </div>

          <div>
            <label htmlFor="sleeveLength" className="block text-sm font-medium text-foreground mb-2">
              Sleeve Length *
            </label>
            <input
              type="text"
              id="sleeveLength"
              name="sleeveLength"
              required
              value={formData.sleeveLength}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 60cm"
            />
          </div>

          <div>
            <label htmlFor="armCircumference" className="block text-sm font-medium text-foreground mb-2">
              Arm Circumference *
            </label>
            <input
              type="text"
              id="armCircumference"
              name="armCircumference"
              required
              value={formData.armCircumference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 28cm"
            />
          </div>

          <div>
            <label htmlFor="neck" className="block text-sm font-medium text-foreground mb-2">
              Neck *
            </label>
            <input
              type="text"
              id="neck"
              name="neck"
              required
              value={formData.neck}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 35cm"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-foreground mb-2">
              Height *
            </label>
            <input
              type="text"
              id="height"
              name="height"
              required
              value={formData.height}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 165cm"
            />
          </div>

          <div>
            <label htmlFor="dressLength" className="block text-sm font-medium text-foreground mb-2">
              Dress Length *
            </label>
            <input
              type="text"
              id="dressLength"
              name="dressLength"
              required
              value={formData.dressLength}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
              placeholder="e.g., 110cm"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-foreground mb-2">
            Additional Measurement Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all resize-none"
            placeholder="Any special requirements or notes about your measurements..."
          />
        </div>
      </section>

      {/* Design Preferences */}
      <section>
        <h2 className="font-playfair font-bold text-2xl text-foreground mb-6 pb-3 border-b-2 border-luxury-gold/30">
          Design Preferences
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fabric" className="block text-sm font-medium text-foreground mb-2">
              Fabric Preference *
            </label>
            <select
              id="fabric"
              name="fabric"
              required
              value={formData.fabric}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all bg-white"
            >
              <option value="">Select fabric</option>
              <option value="silk">Silk</option>
              <option value="satin">Satin</option>
              <option value="chiffon">Chiffon</option>
              <option value="lace">Lace</option>
              <option value="velvet">Velvet</option>
              <option value="organza">Organza</option>
              <option value="tulle">Tulle</option>
              <option value="other">Other (discuss with designer)</option>
            </select>
          </div>

          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-foreground mb-2">
              Occasion *
            </label>
            <select
              id="occasion"
              name="occasion"
              required
              value={formData.occasion}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all bg-white"
            >
              <option value="">Select occasion</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday Party</option>
              <option value="dinner">Dinner Event</option>
              <option value="photoshoot">Photoshoot</option>
              <option value="gala">Gala/Evening Event</option>
              <option value="cocktail">Cocktail Party</option>
              <option value="prom">Prom/Formal Dance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
              When do you need it? *
            </label>
            <input
              type="date"
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* File Uploads */}
      <section>
        <h2 className="font-playfair font-bold text-2xl text-foreground mb-6 pb-3 border-b-2 border-luxury-gold/30">
          Upload Images & References
        </h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="inspirationImage" className="block text-sm font-medium text-foreground mb-2">
              Design Inspiration Image *
            </label>
            <input
              type="file"
              id="inspirationImage"
              name="inspirationImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-luxury-blush-light file:text-foreground hover:file:bg-luxury-gold-light file:cursor-pointer"
            />
            <p className="text-xs text-foreground/60 mt-1">
              Upload a photo of a design you love or want to recreate
            </p>
          </div>

          <div>
            <label htmlFor="measurementSheet" className="block text-sm font-medium text-foreground mb-2">
              Measurement Sheet (Optional)
            </label>
            <input
              type="file"
              id="measurementSheet"
              name="measurementSheet"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-luxury-blush-light file:text-foreground hover:file:bg-luxury-gold-light file:cursor-pointer"
            />
            <p className="text-xs text-foreground/60 mt-1">
              If you have a professional measurement sheet
            </p>
          </div>

          <div>
            <label htmlFor="referencePhoto" className="block text-sm font-medium text-foreground mb-2">
              Reference Dress Photo (Optional)
            </label>
            <input
              type="file"
              id="referencePhoto"
              name="referencePhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-luxury-blush-light file:text-foreground hover:file:bg-luxury-gold-light file:cursor-pointer"
            />
            <p className="text-xs text-foreground/60 mt-1">
              Photo of yourself wearing a similar dress for fit reference
            </p>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-luxury-blush to-luxury-gold text-white py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting Your Order...
            </span>
          ) : (
            'Submit Custom Order'
          )}
        </button>
        <p className="text-center text-sm text-foreground/60 mt-4">
          We&apos;ll review your order and contact you within 24 hours
        </p>
      </div>
    </form>
  );
}
