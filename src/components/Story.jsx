export default function Story() {
  return (
    <section id="story" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/story-terrace.jpg"
              alt="Friends toasting with Klub beverages on a sunlit Mediterranean terrace"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">
              A shared identity
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
              A little more Klub.
            </h2>
            <div className="space-y-4 text-forest/70 text-lg leading-relaxed">
              <p>
                We started Klub because good moments deserve good company — and a drink
                that keeps up. Our carbonated kratom beverages are crafted for the
                golden hour, the rooftop, the backyard, wherever your people gather.
              </p>
              <p>
                Every batch is lab-tested for purity and consistency. No shortcuts,
                no mystery ingredients. Just a clean, refreshing beverage made for
                adults who want something different.
              </p>
            </div>
            <a
              href="#lab-results"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border-2 border-forest text-forest rounded-full font-semibold hover:bg-forest hover:text-cream transition"
            >
              See our lab results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
