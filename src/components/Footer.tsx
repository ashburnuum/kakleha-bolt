import { brandConfig } from '@/config/brand';

const quickLinks = [
  { label: 'Shop', href: '#collections' },
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
  { label: 'Instagram', href: brandConfig.contact.instagram },
  { label: 'Facebook', href: brandConfig.contact.facebook },
  { label: 'TikTok', href: brandConfig.contact.tiktok },
  { label: 'WhatsApp', href: brandConfig.contact.whatsapp },
];

const paymentMethods = ['Visa', 'Mastercard', 'FPX', 'GrabPay', 'TnG'];

export default function Footer() {
  return (
    <footer className="bg-ms-ivory border-t border-ms-champagne text-ms-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <span className="font-heading text-xl font-bold text-ms-charcoal mb-4 block">
              {brandConfig.name}
            </span>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              {brandConfig.description}
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs text-ms-grey-light hover:text-ms-gold transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ms-grey-muted mb-5 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-ms-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ms-grey-muted mb-5 font-medium">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-ms-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ms-grey-muted mb-5 font-medium">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>{brandConfig.contact.email}</li>
              <li>
                <a href={brandConfig.contact.whatsapp} className="hover:text-ms-gold transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ms-champagne">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ms-grey-light">
              &copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentMethods.map((method) => (
                <span key={method} className="text-[10px] px-2.5 py-1 rounded border border-ms-champagne text-ms-grey-muted">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
