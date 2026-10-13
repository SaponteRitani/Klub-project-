import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ cartCount, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'The Lineup', href: '/#lineup' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Lab Results', href: '/lab-results' },
    { label: 'Blog', href: '/blog' },
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-forest/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center">
          <img src="/images/klub-logo.png" alt="Klub" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 4).map(l => (
            <Link key={l.href} to={l.href} className="text-sm font-medium text-forest/80 hover:text-forest transition">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="relative p-2 text-forest hover:text-forest-light"
            aria-label={`Cart, ${cartCount} items`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            to="/#lineup"
            className="hidden sm:inline-flex px-5 py-2.5 bg-forest text-cream rounded-full text-sm font-semibold hover:bg-forest-light transition items-center gap-2"
          >
            Find Your Klub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            className="p-2 text-forest"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Hamburger menu — all pages */}
      {mobileOpen && (
        <div className="border-t border-forest/10 bg-cream shadow-lg">
          <nav className="px-6 py-4 space-y-1" aria-label="Mobile navigation">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-forest font-semibold border-b border-forest/5"
            >
              Home
            </Link>
            {links.map(l => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-forest/80 font-medium border-b border-forest/5 hover:text-forest"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-forest/40 mb-3">Products</p>
              <Link
                to="/products/klub-lite"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-forest/80 hover:text-forest"
              >
                Klub Lite
              </Link>
              <Link
                to="/products/klub-ipa"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-forest/80 hover:text-forest"
              >
                Klub IPA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
