import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@workspace/ui/components/separator';
import { Badge } from '@workspace/ui/components/badge';
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
                {post.data.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
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
