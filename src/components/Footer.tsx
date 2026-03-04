import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/tems_aura', icon: '📸' },
    { name: 'Facebook', href: 'https://facebook.com', icon: '👤' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: '🎵' },
    { name: 'Snapchat', href: 'https://snapchat.com', icon: '👻' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Custom Order', href: '/custom-order' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-luxury-blush-light/30 border-t border-luxury-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-playfair italic font-bold text-3xl bg-gradient-to-r from-luxury-blush via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              TEMS AURA
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Soft luxury custom fashion designed exclusively for you. 
              Experience elegance, femininity, and perfection in every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4 text-foreground">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>
                <a
                  href="mailto:tems_aura@gmail.com"
                  className="hover:text-luxury-gold transition-colors duration-300"
                >
                  tems_aura@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+447554416005"
                  className="hover:text-luxury-gold transition-colors duration-300"
                >
                  +44 07554 416005
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-luxury-blush-light hover:bg-luxury-gold-light transition-all duration-300 flex items-center justify-center hover:scale-110 text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-blush/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} TEMS AURA. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60">
              Crafted with 💕 by TEMS AURA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
