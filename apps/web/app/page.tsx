import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@workspace/ui/components/button';
import { Separator } from '@workspace/ui/components/separator';
import { PostCard } from '@/components/post-card';
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
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-3">Mark Takács</h1>
          <p className="text-muted-foreground text-lg">
            Indie AI researcher, builder, writer, and thinker on human existence.
          </p>
        </section>

        <Separator className="mb-8" />

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Writing</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">All posts</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.url} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
