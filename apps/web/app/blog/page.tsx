import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@workspace/ui/components/badge';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All writing by Mark Takács on AI, research, leadership, and human existence.',
  alternates: {
    canonical: 'https://takacsmark.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://takacsmark.com/blog',
    title: 'Blog | Mark Takács',
    description: 'All writing by Mark Takács on AI, research, leadership, and human existence.',
  },
  twitter: {
    title: 'Blog | Mark Takács',
    description: 'All writing by Mark Takács on AI, research, leadership, and human existence.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
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
  );
}
