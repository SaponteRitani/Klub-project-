import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Updates <title>, meta description, and canonical per route for SEO
const PAGE_META = {
  '/': {
    title: 'Klub — Carbonated Kratom Beverages | Good Company. Great Moments.',
    description: 'Klub makes premium carbonated kratom beverages in two styles: Klub Lite and Klub IPA. Lab-tested, 21+. Find your kind of company.',
    canonical: 'https://drinkklub.com/',
  },
  '/products/klub-lite': {
    title: 'Klub Lite — Light & Crisp Carbonated Kratom Beverage | Klub',
    description: 'Klub Lite is a light, crisp carbonated kratom beverage. 12-pack of 12 fl oz cans. Lab-tested for purity. 21+.',
    canonical: 'https://drinkklub.com/products/klub-lite',
  },
  '/products/klub-ipa': {
    title: 'Klub IPA — Bold Carbonated Kratom Beverage | Klub',
    description: 'Klub IPA is a bold, hop-inspired carbonated kratom beverage. 12-pack of 12 fl oz cans. Lab-tested. 21+.',
    canonical: 'https://drinkklub.com/products/klub-ipa',
  },
  '/our-story': {
    title: 'Our Story — Why We Started Klub | Klub',
    description: 'We started Klub because good moments deserve good company. Learn about our carbonated kratom beverages and our commitment to quality.',
    canonical: 'https://drinkklub.com/our-story',
  },
  '/lab-results': {
    title: 'Lab Results — Third-Party Tested | Klub',
    description: 'Every Klub batch is third-party lab tested for purity and potency. View our results and learn about our testing process.',
    canonical: 'https://drinkklub.com/lab-results',
  },
  '/wholesale': {
    title: 'Wholesale — Carry Klub at Your Shop or Venue | Klub',
    description: 'Bring Klub carbonated kratom beverages to your bar, restaurant, or retail shop. Wholesale pricing and support available.',
    canonical: 'https://drinkklub.com/wholesale',
  },
  '/blog': {
    title: 'Blog — Kratom Education, Recipes & Culture | Klub',
    description: 'Learn about kratom, discover recipes, and explore the culture around mindful social drinking. The Klub blog.',
    canonical: 'https://drinkklub.com/blog',
  },
  '/faq': {
    title: 'FAQ — Frequently Asked Questions | Klub',
    description: 'What\'s in Klub? Is it lab-tested? Where can I find it? Answers to all your questions about our carbonated kratom beverages.',
    canonical: 'https://drinkklub.com/faq',
  },
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META['/'];

    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);

    let canonTag = document.querySelector('link[rel="canonical"]');
    if (canonTag) {
      canonTag.setAttribute('href', meta.canonical);
    } else {
      canonTag = document.createElement('link');
      canonTag.setAttribute('rel', 'canonical');
      canonTag.setAttribute('href', meta.canonical);
      document.head.appendChild(canonTag);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export { PAGE_META };
