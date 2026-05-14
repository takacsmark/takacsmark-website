import type { Metadata } from 'next';
import { Separator } from '@workspace/ui/components/separator';
import { PostCard } from '@/components/post-card';
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
      <h1 className="text-3xl font-bold mb-3">Blog</h1>
      <p className="text-muted-foreground mb-8">{posts.length} posts</p>

      <Separator className="mb-8" />

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </div>
    </div>
  );
}
