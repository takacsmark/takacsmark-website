'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@workspace/ui/components/button';

const cycle = ['system', 'light', 'dark'] as const;
type Theme = (typeof cycle)[number];

const icons: Record<Theme, React.ReactNode> = {
  system: <Monitor className="h-[1.2rem] w-[1.2rem]" />,
  light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
};

const labels: Record<Theme, string> = {
  system: 'System theme',
  light: 'Light theme',
  dark: 'Dark theme',
};

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const current = cycle.includes(theme as Theme) ? (theme as Theme) : 'system';
  const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(next)} aria-label={labels[next]}>
      {icons[current]}
    </Button>
  );
}
