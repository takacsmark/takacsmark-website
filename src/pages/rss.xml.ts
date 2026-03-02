import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Mark Takács',
    description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
    })),
  });
}
