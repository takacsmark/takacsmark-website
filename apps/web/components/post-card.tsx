import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@workspace/ui/components/card';
import { Badge } from '@workspace/ui/components/badge';
import type { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const date = post.data.pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={post.url} className="block hover:no-underline group">
      <Card className="transition-colors group-hover:bg-muted/50">
        <CardHeader>
          <div className="text-xs text-muted-foreground mb-1">{date}</div>
          <CardTitle className="text-lg leading-snug">{post.data.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {post.data.description}
          </CardDescription>
        </CardHeader>
        {post.data.tags && post.data.tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {post.data.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
