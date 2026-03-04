'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: 'https://instagram.com/tems_aura' },
    { name: 'Facebook', icon: '👤', href: 'https://facebook.com' },
    { name: 'TikTok', icon: '🎵', href: 'https://tiktok.com' },
    { name: 'Snapchat', icon: '👻', href: 'https://snapchat.com' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-blush-light/20 via-white to-luxury-nude/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground">
                Get In Touch
              </h2>
              <p className="text-lg text-foreground/70">
                Ready to create your dream piece? We&apos;d love to hear from you. 
                Reach out and let&apos;s bring your vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gold-light/30 flex items-center justify-center text-2xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:tems_aura@gmail.com"
                    className="text-luxury-gold hover:text-luxury-gold-light transition-colors"
                  >
                    tems_aura@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gold-light/30 flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+447554416005"
                    className="text-luxury-gold hover:text-luxury-gold-light transition-colors"
                  >
                    +44 07554 416005
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gold-light/30 flex items-center justify-center text-2xl flex-shrink-0">
                  ⏰
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Response Time</p>
                  <p className="text-foreground/70">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-luxury-blush/20">
              <p className="font-semibold text-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-blush to-luxury-gold text-white flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300 shadow-md"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-luxury-gold/10">
            {submitted ? (
              <div className="text-center py-12 animate-[fadeIn_0.5s_ease-in]">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-foreground/70">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
                    placeholder="Your name"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-blush/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your dream piece..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-luxury-blush to-luxury-gold text-white py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
