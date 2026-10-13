import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    id: 'klub-lite',
    name: 'Klub Lite',
    style: 'LITE',
    number: '01',
    badge: 'Best Seller',
    tagline: 'Light, crisp, and endlessly refreshing. Your everyday social sip.',
    image: '/images/klub-lite.webp',
    imageAlt: 'Klub Lite carbonated kratom beverage cans with tropical island illustration',
    price: '24.99',
    unit: '12-pack · 12 fl oz cans',
    highlights: [
      'Carbonated kratom beverage',
      'Light & crisp flavor profile',
      'Lab-tested for purity',
      '21+ only',
    ],
  },
  {
    id: 'klub-ipa',
    name: 'Klub IPA',
    style: 'IPA',
    number: '02',
    badge: 'New',
    tagline: 'Bold, hoppy, full-flavored. For those who like a little more.',
    image: '/images/klub-ipa.jpg',
    imageAlt: 'Klub IPA carbonated kratom beverage enjoyed poolside',
    price: '27.99',
    unit: '12-pack · 12 fl oz cans',
    highlights: [
      'Carbonated kratom beverage',
      'Bold IPA-inspired flavor',
      'Lab-tested for purity',
      '21+ only',
    ],
  },
];

export default function ProductLineup({ onAddToCart }) {
  return (
    <section id="lineup" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">
              Klub Lite & Klub IPA
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest">
              Find your kind of company.
            </h2>
          </div>
          <a href="#wholesale" className="hidden md:inline-flex items-center gap-2 text-forest font-semibold hover:gap-3 transition-all">
            The lineup
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
