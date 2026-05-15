import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@workspace/ui/components/badge';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Mark Takács',
  description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
  alternates: {
    canonical: 'https://takacsmark.com',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Mark Takács' }],
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://takacsmark.com',
    title: 'Mark Takács',
    description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
  },
  twitter: {
    title: 'Mark Takács',
    description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mark Takács',
  url: 'https://takacsmark.com',
  description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
  author: {
    '@type': 'Person',
    name: 'Mark Takács',
  },
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link key={post.url} href={post.url} className="block group hover:no-underline">
              <p className="text-xs text-muted-foreground mb-1">
                {post.data.pubDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="text-lg font-semibold leading-snug mb-1 group-hover:text-primary transition-colors">
                {post.data.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {post.data.description}
              </p>
              {post.data.tags && post.data.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.data.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
