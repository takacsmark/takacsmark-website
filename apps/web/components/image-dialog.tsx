'use client';

import { useEffect, useRef } from 'react';
import mediumZoom from 'medium-zoom';

type ImageSrc = string | { src: string; width?: number; height?: number };

interface ImageZoomProps {
  src: ImageSrc;
  alt?: string;
}

export function ImageDialog({ src, alt }: ImageZoomProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const resolvedSrc = typeof src === 'string' ? src : src.src;

  useEffect(() => {
    if (!imgRef.current) return;
    const zoom = mediumZoom(imgRef.current, {
      background: 'var(--background)',
      margin: 24,
    });
    return () => { zoom.detach(); };
  }, []);

  return (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt ?? ''}
      className="cursor-zoom-in rounded-md max-w-full"
    />
  );
}
