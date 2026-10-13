export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-coastal.jpg"
          alt="Friends enjoying Klub beverages on a coastal terrace at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <p className="text-cream/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Good company. Great moments.
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-cream leading-tight mb-6 max-w-2xl">
          Welcome to the Klub.
        </h1>
        <p className="text-cream/90 text-lg md:text-xl max-w-xl mb-8">
          A carbonated kratom beverage. Two styles. A world of good company.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#lineup"
            className="px-8 py-4 bg-cream text-forest rounded-full font-semibold hover:bg-white transition shadow-lg"
          >
            Explore the lineup
          </a>
          <a
            href="#story"
            className="px-8 py-4 border-2 border-cream/60 text-cream rounded-full font-semibold hover:border-cream hover:bg-cream/10 transition"
          >
            Our story
          </a>
        </div>
      </div>
    </section>
  );
}
