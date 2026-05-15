import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@workspace/ui/components/card';
import type { Post } from '@/lib/posts';

interface PrevNextNavProps {
  prev: Post | null;
  next: Post | null;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-2 gap-4 pt-8">
      {prev ? (
        <Link href={prev.url} className="group hover:no-underline">
          <Card className="h-full transition-colors group-hover:bg-muted/50">
            <CardContent className="flex flex-col gap-1 pt-4">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ChevronLeft className="h-3 w-3" /> Previous
              </span>
              <span className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {prev.data.title}
              </span>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.url} className="group hover:no-underline">
          <Card className="h-full transition-colors group-hover:bg-muted/50">
            <CardContent className="flex flex-col items-end gap-1 pt-4">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                Next <ChevronRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium leading-snug text-right line-clamp-2 group-hover:text-primary transition-colors">
                {next.data.title}
              </span>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
