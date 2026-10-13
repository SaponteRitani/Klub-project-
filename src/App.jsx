import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SEO from './components/SEO';

// Homepage sections
import Hero from './components/Hero';
import ProductLineup from './components/ProductLineup';
import Story from './components/Story';
import LabResults from './components/LabResults';
import Wholesale from './components/Wholesale';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';

// Pages
import ProductPage from './pages/ProductPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import { StoryPage, LabResultsPage, WholesalePage, FAQPage } from './pages/StaticPages';

function HomePage({ onAddToCart }) {
  return (
    <main>
      <Hero />
      <ProductLineup onAddToCart={onAddToCart} />
      <Story />
      <LabResults />
      <Wholesale />
      <FAQ />
      <Newsletter />
    </main>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const handleCheckout = () => {
    // TODO: Connect to Shopify checkout via Storefront API
    // See src/lib/shopify.js for setup instructions
    alert('Checkout: connect your Shopify Storefront API token in src/lib/shopify.js');
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream">
        <SEO />
        <AgeGate />
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/products/:handle" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/lab-results" element={<LabResultsPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />

        <CartDrawer
          cart={cart}
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </BrowserRouter>
  );
}
