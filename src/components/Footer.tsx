import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { brandConfig } from '@/config/brand';

const quickLinks = [
  { label: 'Shop All', href: '#collections' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#' },
];

const policyLinks = [
  { label: 'Shipping Policy', href: brandConfig.policies.shipping },
  { label: 'Return Policy', href: brandConfig.policies.returns },
  { label: 'Privacy Policy', href: brandConfig.policies.privacy },
  { label: 'Terms & Conditions', href: brandConfig.policies.terms },
];

const socials = [
  { label: 'Instagram', href: brandConfig.contact.instagram, icon: Instagram },
  { label: 'Facebook', href: brandConfig.contact.facebook, icon: Facebook },
  { label: 'WhatsApp', href: brandConfig.contact.whatsapp, icon: MessageCircle },
];

const paymentMethods = [
  { name: 'Visa', letters: 'VISA' },
  { name: 'Mastercard', letters: 'MC' },
  { name: 'FPX', letters: 'FPX' },
  { name: 'GrabPay', letters: 'GP' },
  { name: 'TnG', letters: 'TnG' },
];

export default function Footer() {
  return (
    <footer className="bg-ms-charcoal text-white/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <span className="font-heading text-xl font-bold text-white mb-4 block">
              {brandConfig.name}
            </span>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-white/50">
              {brandConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-ms-gold hover:text-ms-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-ms-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5 font-medium">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-ms-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-5 font-medium">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/50">{brandConfig.contact.email}</li>
              <li>
                <a href={brandConfig.contact.whatsapp} className="hover:text-ms-gold-light transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method.name}
                  className="text-[10px] w-10 h-6 flex items-center justify-center rounded border border-white/10 text-white/40 font-bold tracking-wide"
                >
                  {method.letters}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
