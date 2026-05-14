'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@workspace/ui/components/dialog';

interface ImageDialogProps {
  src: string;
  alt?: string;
}

export function ImageDialog({ src, alt }: ImageDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt ?? ''}
        className="cursor-zoom-in rounded-md max-w-full"
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-2 bg-background/95">
          <DialogTitle className="sr-only">{alt ?? 'Image'}</DialogTitle>
          <img src={src} alt={alt ?? ''} className="w-full h-auto rounded" />
        </DialogContent>
      </Dialog>
    </>
  );
}
