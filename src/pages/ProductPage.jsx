import { useParams, Link } from 'react-router-dom';

const PRODUCT_DATA = {
  'klub-lite': {
    name: 'Klub Lite',
    tagline: 'Light, crisp, and endlessly refreshing.',
    description: 'Klub Lite is our everyday social sip — a light and crisp carbonated kratom beverage that\'s endlessly refreshing. Perfect for golden hour, backyard hangs, and everywhere good company gathers.',
    image: '/images/klub-lite.webp',
    imageAlt: 'Klub Lite carbonated kratom beverage cans with tropical island illustration',
    price: '24.99',
    unit: '12-pack · 12 fl oz cans',
    badge: 'Best Seller',
    details: [
      'Carbonated kratom beverage',
      'Light & crisp flavor profile',
      'Zero sugar',
      'Third-party lab tested for purity and potency',
      'Intended for adults 21+',
    ],
    ingredients: 'Carbonated water, kratom extract, natural flavors, citric acid.',
    seoKeywords: 'kratom beverage, carbonated kratom, light kratom drink, kratom seltzer, alcohol alternative',
  },
  'klub-ipa': {
    name: 'Klub IPA',
    tagline: 'Bold, hoppy, full-flavored.',
    description: 'Klub IPA is for those who like a little more — a bold, hop-inspired carbonated kratom beverage with full flavor. When Lite isn\'t enough, reach for the IPA.',
    image: '/images/klub-ipa.jpg',
    imageAlt: 'Klub IPA carbonated kratom beverage enjoyed poolside',
    price: '27.99',
    unit: '12-pack · 12 fl oz cans',
    badge: 'New',
    details: [
      'Carbonated kratom beverage',
      'Bold IPA-inspired flavor',
      'Zero sugar',
      'Third-party lab tested for purity and potency',
      'Intended for adults 21+',
    ],
    ingredients: 'Carbonated water, kratom extract, natural flavors, hops extract, citric acid.',
    seoKeywords: 'kratom IPA, bold kratom drink, hoppy kratom beverage, kratom beer alternative',
  },
};

export default function ProductPage({ onAddToCart }) {
  const { handle } = useParams();
  const product = PRODUCT_DATA[handle];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Product not found</h1>
        <Link to="/" className="text-forest underline">Back to home</Link>
      </div>
    );
  }

  return (
    <article className="bg-cream">
      {/* Breadcrumb for SEO */}
      <nav className="max-w-7xl mx-auto px-6 pt-8 text-sm text-forest/50" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-forest">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/#lineup" className="hover:text-forest">The Lineup</Link>
        <span className="mx-2">/</span>
        <span className="text-forest">{product.name}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Product info */}
          <div>
            <span className="inline-block bg-forest/10 text-forest text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              {product.badge}
            </span>
            <h1 className="font-display text-5xl text-forest mb-3">{product.name}</h1>
            <p className="text-xl text-forest/70 mb-6">{product.tagline}</p>
            <p className="text-forest/70 leading-relaxed mb-8">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <p className="text-3xl font-bold text-forest">${product.price}</p>
              <p className="text-sm text-forest/50">{product.unit}</p>
            </div>

            <button
              onClick={() => onAddToCart({ id: handle, ...product, qty: 1 })}
              className="w-full sm:w-auto px-10 py-4 bg-forest text-cream rounded-full font-semibold text-lg hover:bg-forest-light transition mb-4"
            >
              Add to Cart — ${product.price}
            </button>

            <ul className="space-y-2 mt-8">
              {product.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-forest/70">
                  <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-sand rounded-2xl">
              <h2 className="font-semibold text-forest mb-2">Ingredients</h2>
              <p className="text-sm text-forest/60">{product.ingredients}</p>
            </div>
          </div>
        </div>

        {/* Cross-sell */}
        <div className="mt-20">
          <h2 className="font-display text-3xl text-forest mb-8 text-center">You might also like</h2>
          <div className="flex justify-center">
            {Object.entries(PRODUCT_DATA)
              .filter(([key]) => key !== handle)
              .map(([key, p]) => (
                <Link
                  key={key}
                  to={`/products/${key}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition max-w-sm"
                >
                  <img src={p.image} alt={p.imageAlt} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-forest">{p.name}</h3>
                    <p className="text-forest/60 mt-1">{p.tagline}</p>
                    <p className="font-bold text-forest mt-3">${p.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Product schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `https://drinkklub.com${product.image}`,
          "brand": { "@type": "Brand", "name": "Klub" },
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://drinkklub.com/products/${handle}`,
          },
        })
      }} />
    </article>
  );
}
