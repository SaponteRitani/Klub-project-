import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Klaviyo/Mailchimp
    setDone(true);
  };

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl text-forest mb-4">Join the Klub.</h2>
        <p className="text-forest/70 mb-8">
          Get 10% off your first order, plus early access to new flavors and drops.
        </p>
        {done ? (
          <p className="text-forest font-semibold text-lg">
            Welcome to the Klub — check your inbox for 10% off.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-forest/20 bg-white focus:outline-none focus:border-forest"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
