import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@workspace/ui/components/button';
import type { Post } from '@/lib/posts';

interface PrevNextNavProps {
  prev: Post | null;
  next: Post | null;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <div className="flex justify-between gap-4 pt-8">
      {prev ? (
        <Button variant="ghost" className="max-w-[48%] h-auto flex-col items-start text-left" asChild>
          <Link href={prev.url}>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ChevronLeft className="h-3 w-3" /> Previous
            </span>
            <span className="text-sm font-medium line-clamp-2">{prev.data.title}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button variant="ghost" className="max-w-[48%] h-auto flex-col items-end text-right ml-auto" asChild>
          <Link href={next.url}>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              Next <ChevronRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium line-clamp-2">{next.data.title}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
