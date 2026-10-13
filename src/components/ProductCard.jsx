export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-wider text-forest">
          {product.badge}
        </span>
      </div>

      <div className="p-8">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-forest/50 mb-2">
          {product.number} / {product.style}
        </p>
        <h3 className="font-display text-3xl text-forest mb-2">{product.name}</h3>
        <p className="text-forest/70 mb-4">{product.tagline}</p>

        <ul className="space-y-1.5 mb-6 text-sm text-forest/60">
          {product.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-forest">${product.price}</p>
            <p className="text-xs text-forest/50">{product.unit}</p>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="px-6 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition flex items-center gap-2"
          >
            Add to cart
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
