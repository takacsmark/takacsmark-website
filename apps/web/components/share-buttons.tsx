'use client';

import { useEffect, useState } from 'react';
import { Button } from '@workspace/ui/components/button';

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`,
    },
    {
      label: 'Bluesky',
      href: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encoded}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: 'Telegram',
      href: `https://t.me/share/url?url=${encoded}&text=${encodedTitle}`,
    },
    {
      label: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encoded}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {shares.map(({ label, href }) => (
        <Button key={label} variant="outline" size="sm" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </Button>
      ))}
    </div>
  );
}
