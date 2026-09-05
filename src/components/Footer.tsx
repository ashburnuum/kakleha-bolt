import { brandConfig } from '@/config/brand';

const quickLinks = [
  { label: 'Shop', href: '#collections' },
  { label: 'Koleksi Baru', href: '#new-arrivals' },
  { label: 'Pilihan Terlaris', href: '#best-sellers' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Hubungi Kami', href: '#' },
];

const policyLinks = [
  { label: 'Polisi Penghantaran', href: brandConfig.policies.shipping },
  { label: 'Polisi Pemulangan', href: brandConfig.policies.returns },
  { label: 'Polisi Privasi', href: brandConfig.policies.privacy },
  { label: 'Terma & Syarat', href: brandConfig.policies.terms },
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
    <footer className="bg-ms-charcoal-light text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <span className="font-heading text-xl font-semibold text-white mb-4 block">
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
                  className="text-xs text-white/50 hover:text-ms-gold-light transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Pautan Pantas</h4>
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
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Polisi</h4>
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
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Hubungi</h4>
            <ul className="space-y-3 text-sm">
              <li>{brandConfig.contact.email}</li>
              <li>
                <a href={brandConfig.contact.whatsapp} className="hover:text-ms-gold-light transition-colors">
                  WhatsApp Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} {brandConfig.name}. Hak cipta terpelihara.
            </p>
            <div className="flex items-center gap-3">
              {paymentMethods.map((method) => (
                <span key={method} className="text-[10px] px-2.5 py-1 rounded border border-white/10 text-white/40">
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
