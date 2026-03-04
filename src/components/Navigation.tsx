'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/custom-order', label: 'Custom Order' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-playfair italic font-bold text-3xl bg-gradient-to-r from-luxury-blush via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              TEMS AURA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/custom-order"
              className="bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-luxury-blush-light/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-foreground" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-[slideUp_0.3s_ease-out]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-luxury-blush-light/30"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/custom-order"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-luxury-blush to-luxury-gold text-white px-6 py-3 rounded-full text-center hover:shadow-lg transition-all duration-300 font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
