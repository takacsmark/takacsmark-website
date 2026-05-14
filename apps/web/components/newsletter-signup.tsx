'use client';

import { useId, useState } from 'react';
import { Input } from '@workspace/ui/components/input';
import { Button } from '@workspace/ui/components/button';

const MC_ACTION =
  'https://takacsmark.us3.list-manage.com/subscribe/post-json?u=ced6e070ab6dca9ddc1f65334&id=3983723c21&v_id=5137&f_id=007424e2f0';

export function NewsletterSignup() {
  const formId = useId();
  const emailId = `email-${formId}`;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    const cbName = `__mcCallback_${Date.now()}`;
    const url = `${MC_ACTION}&EMAIL=${encodeURIComponent(email)}&c=${cbName}`;

    (window as unknown as Record<string, unknown>)[cbName] = (data: {
      result: string;
      msg?: string;
    }) => {
      delete (window as unknown as Record<string, unknown>)[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);

      if (data.result === 'success') {
        setStatus('success');
        setMessage('Subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage((data.msg ?? 'Something went wrong').replace(/^\d+ - /, ''));
      }
    };

    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  }

  return (
    <div className="border rounded-lg p-6 space-y-3">
      <p className="text-sm font-medium">Stay updated with new writing on AI, research, and human existence.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <Input
          id={emailId}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="flex-1 min-w-48"
          aria-label="Email address"
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </form>
      {message && (
        <p
          className={`text-sm ${status === 'success' ? 'text-primary' : 'text-destructive'}`}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
}
