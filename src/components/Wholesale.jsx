export default function Wholesale() {
  return (
    <section id="wholesale" className="py-24 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/50 mb-3">
              For shops & venues
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Good company, at your place.
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Bring Klub to your bar, restaurant, retail shop, or venue. We offer
              competitive wholesale pricing, marketing support, and a product
              your customers will ask for by name.
            </p>
            <a
              href="mailto:wholesale@drinkklub.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-forest rounded-full font-semibold hover:bg-white transition"
            >
              Carry Klub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/wholesale-bar.jpg"
              alt="Klub beverages stocked at a premium bar"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
