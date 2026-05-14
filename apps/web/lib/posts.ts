import { blogSource } from './source';

export type Post = ReturnType<typeof blogSource.getPages>[number];

export function getAllPosts(): Post[] {
  return blogSource.getPages().sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) =>
    post.data.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllPosts().forEach((post) => {
    post.data.tags?.forEach((t) => tagSet.add(t.toLowerCase()));
  });
  return Array.from(tagSet).sort();
}

export function getTagLabel(tag: string, posts: Post[] = getAllPosts()): string {
  for (const post of posts) {
    const match = post.data.tags?.find((t) => t.toLowerCase() === tag.toLowerCase());
    if (match) return match;
  }
  return tag;
}
