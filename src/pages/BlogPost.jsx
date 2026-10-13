import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from './BlogList';
import Newsletter from '../components/Newsletter';

const POST_CONTENT = {
  'what-is-kratom': {
    body: [
      'Kratom (Mitragyna speciosa) is a tropical tree native to Southeast Asia. For centuries, people in Thailand, Malaysia, and Indonesia have chewed its leaves or brewed them into tea for their stimulating and relaxing properties.',
      'The leaves contain naturally occurring compounds called alkaloids — primarily mitragynine and 7-hydroxymitragynine. These interact with receptors in the body, producing effects that range from energizing to calming depending on the amount and strain.',
      'At Klub, we use carefully sourced kratom extract in our carbonated beverages. Every batch is third-party lab tested for purity and potency, so you know exactly what you\'re getting.',
      'If you\'re new to kratom, start with Klub Lite — our lighter, more approachable option. And as always, enjoy responsibly and only if you\'re 21 or older.',
    ],
  },
  'kratom-vs-alcohol': {
    body: [
      'Let\'s be honest: alcohol has been the default social beverage for centuries. But more and more people are looking for alternatives — something they can enjoy with friends without the next-day regret.',
      'Kratom beverages offer a different kind of social experience. Where alcohol is a depressant, kratom\'s effects are more nuanced — many people describe feeling sociable and relaxed without the loss of coordination or clarity.',
      'There\'s no hangover. No empty calories from alcohol. And you stay present for the conversation.',
      'We\'re not here to tell you what to drink. But if you\'re curious about an alternative, Klub is a damn good place to start.',
    ],
  },
  'kratom-mocktail-recipes': {
    body: [
      'Klub is great straight from the can, but it also makes an incredible base for mocktails. Here are five recipes to try at your next gathering:',
      '1. Klub Lite + fresh lime + mint over ice. Simple, crisp, perfect.',
      '2. Klub IPA + grapefruit juice + rosemary sprig. Bold meets botanical.',
      '3. Klub Lite + coconut water + pineapple. Tropical vibes, zero effort.',
      '4. Klub IPA + ginger beer + lime wedge. A Moscow Mule\'s cooler cousin.',
      '5. Half Klub Lite, half Klub IPA + orange slice. The best of both worlds.',
    ],
  },
  'is-kratom-legal': {
    body: [
      'Kratom\'s legal status in the United States is complicated. It\'s legal at the federal level, but several states and municipalities have restricted or banned it.',
      'As of 2026, kratom is banned or restricted in states including Alabama, Arkansas, Indiana, Rhode Island, Vermont, and Wisconsin, among others. Always check your local laws before purchasing.',
      'At Klub, we only ship to areas where kratom is legal. We stay up to date on regulations and are committed to operating responsibly.',
      'If you\'re unsure about your area, feel free to contact us and we\'ll help you figure it out.',
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const content = POST_CONTENT[slug];

  if (!post || !content) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Post not found</h1>
        <Link to="/blog" className="text-forest underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-forest/50 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-forest">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-forest">{post.title}</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs font-bold tracking-wider uppercase text-accent">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-forest mt-3 mb-4">
            {post.title}
          </h1>
          <p className="text-forest/50 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            {' · '}{post.readTime}
          </p>
        </div>

        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-sand mb-10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {content.body.map((para, i) => (
            <p key={i} className="text-forest/80 leading-relaxed mb-6 text-lg">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 p-8 bg-sand rounded-3xl text-center">
          <h2 className="font-display text-2xl text-forest mb-3">Try Klub today</h2>
          <p className="text-forest/60 mb-6">Lab-tested carbonated kratom beverages, delivered to your door.</p>
          <Link
            to="/#lineup"
            className="inline-block px-8 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition"
          >
            Shop the lineup
          </Link>
        </div>
      </div>

      <Newsletter />

      {/* Article schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": { "@type": "Organization", "name": "Klub" },
        })
      }} />
    </article>
  );
}
