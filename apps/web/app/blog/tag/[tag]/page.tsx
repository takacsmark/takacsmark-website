import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Separator } from '@workspace/ui/components/separator';
import { PostCard } from '@/components/post-card';
import { getAllTags, getPostsByTag, getTagLabel } from '@/lib/posts';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = getTagLabel(tag);
  const url = `https://takacsmark.com/blog/tag/${tag}`;

  return {
    title: `#${label}`,
    description: `Posts tagged with ${label} by Mark Takács.`,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `#${label} | Mark Takács`,
      description: `Posts tagged with ${label} by Mark Takács.`,
    },
    twitter: {
      title: `#${label} | Mark Takács`,
      description: `Posts tagged with ${label} by Mark Takács.`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  const label = getTagLabel(tag, posts);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">#{label}</h1>
      <p className="text-muted-foreground mb-8">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>

      <Separator className="mb-8" />

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </div>
    </div>
  );
}
