import type { ComponentType } from 'react';
import { ImageDialog } from './image-dialog';

type MDXComponents = Record<string, ComponentType<Record<string, unknown>>>;

export function getMDXComponents(): MDXComponents {
  return {
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <ImageDialog src={src ?? ''} alt={alt} />
    ),
  };
}
