'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@workspace/ui/components/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@workspace/ui/components/sheet';
import { Separator } from '@workspace/ui/components/separator';
import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function SiteHeader() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm hover:opacity-80 transition-opacity">
          takacsmark.com
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-1">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" className="justify-start" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
