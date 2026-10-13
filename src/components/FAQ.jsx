import { useState } from 'react';

const FAQS = [
  {
    q: "What's in Klub?",
    a: "Klub is a carbonated kratom beverage. Each can contains kratom extract, carbonated water, and natural flavors. We use lab-tested kratom and publish our results for every batch.",
  },
  {
    q: "How do I enjoy it?",
    a: "Chilled, straight from the can — or over ice. Klub Lite is light and crisp for easy sipping. Klub IPA is bolder, with a hop-inspired flavor profile. Both are best enjoyed with good company.",
  },
  {
    q: "Is it lab-tested?",
    a: "Yes. Every batch is third-party tested for purity (heavy metals, pesticides, microbials) and potency (alkaloid content). You can view our lab reports in the Lab Results section.",
  },
  {
    q: "Where can I find it?",
    a: "Order directly from our website for delivery, or check with your local bar, restaurant, or retail shop. We're expanding to new locations — ask your favorite spot to carry Klub.",
  },
  {
    q: "Do I need to be 21?",
    a: "Yes. Klub beverages are intended for adults 21 and older. We verify age before purchase.",
  },
  {
    q: "Does Klub contain alcohol?",
    a: "No. Klub beverages are completely non-alcoholic. They're a carbonated kratom beverage — a different kind of social drink.",
  },
  {
    q: "What's the difference between Klub Lite and Klub IPA?",
    a: "Klub Lite is our lighter, crisper option — smooth and refreshing, perfect for easy sipping. Klub IPA is bolder with a hop-inspired flavor profile for those who want something with more character. Both are carbonated kratom beverages.",
  },
  {
    q: "How much kratom is in each can?",
    a: "Each can contains a carefully measured amount of kratom extract. Exact alkaloid content is verified by third-party lab testing and printed on every label. Check our Lab Results page for batch-specific details.",
  },
  {
    q: "Is kratom legal where I live?",
    a: "Kratom is legal at the federal level but restricted in some states and localities. We only ship to areas where it's legal. If you're unsure, contact us and we'll help you figure it out.",
  },
  {
    q: "How should I store Klub?",
    a: "Store in a cool, dry place. Serve chilled for the best experience. Refrigerate after opening.",
  },
  {
    q: "Do you offer subscriptions?",
    a: "Yes! Subscribe and save on regular deliveries. Choose your frequency and never run out of Klub. Manage or cancel anytime from your account.",
  },
  {
    q: "What's your shipping policy?",
    a: "We ship to all areas where kratom is legal. Orders typically ship within 1-2 business days. Shipping is calculated at checkout based on your location.",
  },
  {
    q: "Can I return my order?",
    a: "If you're not satisfied with your purchase, contact us within 30 days and we'll make it right. See our refund policy for details.",
  },
  {
    q: "Do you wholesale to bars and shops?",
    a: "Absolutely. We partner with bars, restaurants, and retail shops. Visit our Wholesale page or email wholesale@drinkklub.com to get started.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">
            A few good questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forest">
            Get to know us.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-forest text-lg">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-forest shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-forest/70 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FAQS };
