import { productConfig } from '@/config/product';

const quickLinks = [
  { label: 'Produk', href: '#' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Hubungi Kami', href: '#' },
  { label: 'Polisi Penghantaran', href: '#' },
];

const policyLinks = [
  { label: 'Polisi Privasi', href: '#' },
  { label: 'Terma & Syarat', href: '#' },
  { label: 'Pertukaran / Pemulangan', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-kakleha-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading font-bold text-lg mb-3">{productConfig.brandName}</p>
            <p className="text-sm text-kakleha-sand/70 leading-relaxed">
              Seluar dalam high-waist yang lembut, anjal dan dibuat untuk keselesaan harian wanita Malaysia.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3 text-kakleha-sand/90">Pautan</p>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-kakleha-sand/60 hover:text-white transition-colors inline-block py-1.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3 text-kakleha-sand/90">Polisi</p>
            <ul className="space-y-1">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-kakleha-sand/60 hover:text-white transition-colors inline-block py-1.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3 text-kakleha-sand/90">Hubungi</p>
            <ul className="space-y-2 text-sm text-kakleha-sand/60">
              <li>[INSERT EMAIL]</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-kakleha-sand/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-kakleha-sand/40">
            &copy; {new Date().getFullYear()} {productConfig.brandName}. Semua hak terpelihara.
          </p>
          <p className="text-xs text-kakleha-sand/40">
            [MASUKKAN MAKLUMAT PERNIAGAAN]
          </p>
        </div>
      </div>
    </footer>
  );
}
