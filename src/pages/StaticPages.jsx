import { Link } from 'react-router-dom';

export function StoryPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="text-sm text-forest/50 mb-8">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-forest">Our Story</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src="/images/story-terrace.jpg" alt="Friends toasting with Klub beverages" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">Our Story</p>
            <h1 className="font-display text-5xl text-forest mb-6">A little more Klub.</h1>
            <div className="space-y-4 text-forest/70 text-lg leading-relaxed">
              <p>We started Klub because good moments deserve good company — and a drink that keeps up. Our carbonated kratom beverages are crafted for the golden hour, the rooftop, the backyard, wherever your people gather.</p>
              <p>Every batch is lab-tested for purity and consistency. No shortcuts, no mystery ingredients. Just a clean, refreshing beverage made for adults who want something different.</p>
              <p>We're building something more than a beverage brand. We're building a Klub — a community of people who choose to be present, to connect, and to enjoy the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LabResultsPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="text-sm text-forest/50 mb-8">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-forest">Lab Results</span>
        </nav>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">Transparency</p>
          <h1 className="font-display text-5xl text-forest mb-4">Know your Klub.</h1>
          <p className="text-forest/70 text-lg">Every batch is third-party lab tested. We publish the results because transparency isn't optional — it's the whole point.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Purity Tested', desc: 'Screened for heavy metals, pesticides, and microbial contaminants.' },
            { title: 'Potency Verified', desc: 'Alkaloid content confirmed to match what\'s on the label.' },
            { title: 'Batch Tracked', desc: 'Every can traces back to its tested production batch.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-xl text-forest mb-2">{item.title}</h3>
              <p className="text-forest/60">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-forest/60 mb-6">Full lab reports available on request.</p>
          <a href="mailto:hello@drinkklub.com" className="px-8 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition">
            Request Lab Reports
          </a>
        </div>
      </div>
    </div>
  );
}

export function WholesalePage() {
  return (
    <div className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="text-sm text-cream/50 mb-8">
          <Link to="/" className="hover:text-cream">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-cream">Wholesale</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/50 mb-3">For shops & venues</p>
            <h1 className="font-display text-5xl mb-6">Good company, at your place.</h1>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">Bring Klub to your bar, restaurant, retail shop, or venue. We offer competitive wholesale pricing, marketing support, and a product your customers will ask for by name.</p>
            <a href="mailto:wholesale@drinkklub.com" className="inline-block px-8 py-4 bg-cream text-forest rounded-full font-semibold hover:bg-white transition">
              Contact Wholesale
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src="/images/wholesale-bar.jpg" alt="Klub beverages at a premium bar" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQPage() {
  const faqs = [
    { q: "What's in Klub?", a: "Klub is a carbonated kratom beverage. Each can contains kratom extract, carbonated water, and natural flavors." },
    { q: "How do I enjoy it?", a: "Chilled, straight from the can — or over ice. Klub Lite is light and crisp. Klub IPA is bolder." },
    { q: "Is it lab-tested?", a: "Yes. Every batch is third-party tested for purity and potency." },
    { q: "Where can I find it?", a: "Order from our website or check with local bars, restaurants, and shops." },
    { q: "Do I need to be 21?", a: "Yes. Klub is intended for adults 21 and older." },
    { q: "Does it contain alcohol?", a: "No. Klub beverages are non-alcoholic." },
    { q: "How should I store it?", a: "Store in a cool, dry place. Refrigerate after opening and enjoy chilled." },
  ];

  return (
    <div className="bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-forest/50 mb-8">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-forest">FAQ</span>
        </nav>
        <h1 className="font-display text-5xl text-forest mb-4 text-center">Frequently asked questions.</h1>
        <p className="text-forest/60 text-center mb-12">Everything you need to know about Klub.</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-forest text-lg mb-2">{faq.q}</h2>
              <p className="text-forest/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        })
      }} />
    </div>
  );
}
