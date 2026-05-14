import { getAllPosts } from '@/lib/posts';

const SITE_URL = 'https://takacsmark.com';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const pubDate = post.data.pubDate.toUTCString();
      const link = `${SITE_URL}${post.url}`;
      return `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Mark Takács</title>
    <description>Indie AI researcher, builder, writer, and thinker on human existence.</description>
    <link>${SITE_URL}</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
