import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@workspace/ui/components/badge';
import { Separator } from '@workspace/ui/components/separator';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { ShareButtons } from '@/components/share-buttons';
import { PrevNextNav } from '@/components/prev-next-nav';
import { getMDXComponents } from '@/components/mdx-components';
import { blogSource } from '@/lib/source';
import { getAllPosts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);
  if (!page) return {};

  const { title, description, pubDate } = page.data;
  const url = `https://takacsmark.com/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      publishedTime: pubDate.toISOString(),
    },
    twitter: { title, description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);
  if (!page) notFound();

  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slugs[0] === slug);
  const prev = (idx < allPosts.length - 1 ? allPosts[idx + 1] : null) ?? null;
  const next = (idx > 0 ? allPosts[idx - 1] : null) ?? null;

  const { title, description, pubDate, updatedDate, tags } = page.data;
  const url = `https://takacsmark.com/blog/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: pubDate.toISOString(),
    url,
    author: { '@type': 'Person', name: 'Mark Takács' },
  };

  const MDXContent = page.data.body;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">
            {pubDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {updatedDate && (
              <span className="ml-3">
                Updated{' '}
                {updatedDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </p>
          <h1 className="text-3xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </header>

        <Separator className="mb-8" />

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent components={getMDXComponents()} />
        </div>

        <Separator className="my-8" />

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                <Badge variant="secondary">{tag}</Badge>
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter */}
        <div className="mb-8">
          <NewsletterSignup />
        </div>

        {/* Share */}
        <div className="mb-8">
          <p className="text-sm font-medium mb-3">Share this post</p>
          <ShareButtons title={title} />
        </div>

        {/* Prev / Next */}
        <PrevNextNav prev={prev} next={next} />
      </article>
    </>
  );
}
