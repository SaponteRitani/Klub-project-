import { Link } from 'react-router-dom';

export const BLOG_POSTS = [
  {
    slug: 'what-is-kratom',
    title: 'What Is Kratom? A Beginner\'s Guide',
    excerpt: 'Everything you need to know about kratom — what it is, where it comes from, and how it\'s enjoyed.',
    date: '2026-10-01',
    readTime: '5 min read',
    image: '/images/blog-kratom-guide.jpg',
    category: 'Education',
  },
  {
    slug: 'kratom-vs-alcohol',
    title: 'Kratom vs. Alcohol: A Social Drinker\'s Comparison',
    excerpt: 'How does a kratom beverage compare to a night of drinking? We break it down honestly.',
    date: '2026-09-15',
    readTime: '4 min read',
    image: '/images/blog-vs-alcohol.jpg',
    category: 'Culture',
  },
  {
    slug: 'kratom-mocktail-recipes',
    title: '5 Kratom Mocktail Recipes for Your Next Gathering',
    excerpt: 'Elevate your Klub with these easy, crowd-pleasing mocktail recipes.',
    date: '2026-09-01',
    readTime: '6 min read',
    image: '/images/blog-mocktails.jpg',
    category: 'Recipes',
  },
  {
    slug: 'is-kratom-legal',
    title: 'Is Kratom Legal? State-by-State Guide 2026',
    excerpt: 'Kratom legality varies by state. Here\'s what you need to know.',
    date: '2026-08-20',
    readTime: '7 min read',
    image: '/images/blog-legal.jpg',
    category: 'Education',
  },
];

export default function BlogList() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest/50 mb-3">
            The Klub Blog
          </p>
          <h1 className="font-display text-5xl text-forest mb-4">
            Stories, guides & recipes.
          </h1>
          <p className="text-forest/70 text-lg max-w-2xl mx-auto">
            Learn about kratom, discover new ways to enjoy Klub, and explore
            the culture of mindful social drinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="aspect-[16/9] overflow-hidden bg-sand">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-forest/40">{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl text-forest mb-2 group-hover:text-forest-light transition">
                  {post.title}
                </h2>
                <p className="text-forest/60">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
