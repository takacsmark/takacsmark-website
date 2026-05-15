import type { Metadata } from 'next';
import { Separator } from '@workspace/ui/components/separator';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Mark Takács — indie AI researcher, builder, writer, and thinker on human existence.',
  alternates: {
    canonical: 'https://takacsmark.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://takacsmark.com/about',
    title: 'About | Mark Takács',
    description: 'Learn more about Mark Takács — indie AI researcher, builder, writer, and thinker on human existence.',
  },
  twitter: {
    title: 'About | Mark Takács',
    description: 'Learn more about Mark Takács — indie AI researcher, builder, writer, and thinker on human existence.',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">About</h1>
      <p className="text-muted-foreground mb-8">
        Builder, indie researcher, program director, thinker, artist based in Budapest.
      </p>

      <Separator className="mb-8" />

      <div className="prose dark:prose-invert max-w-none">
        <section>
          <h2>What I Do</h2>
          <p>Building with AI, experimenting, running my own indie research.</p>
          <p>Regularly leading large scale enterprise business transformation programs. Consultant at heart. Feel free to inquire about my availability.</p>
          <p>Internationally exhibited digital artist, NFT portfolio coming soon to this site.</p>
        </section>

        <section>
          <h2>What I Think About</h2>
          <p>The questions that drive my work aren&apos;t purely technical. I&apos;m interested in:</p>
          <ul>
            <li>AI changes human contribution in the creative process — we shift towards the vision from execution.</li>
            <li>What skills will be essential to humans in the decades to come — are we the dreamers of dreams in an AI-run world?</li>
            <li>How AI challenges the role of leadership and the profile of leaders — will all humans become leaders of agents? Or are we going to follow?</li>
            <li>How AI changes society and core beliefs about what it means to be human — what society are we building when AI can do most of the work?</li>
          </ul>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>
            I&apos;m always interested in unique projects, conversations about AI, and the philosophical implications of what we&apos;re building.
          </p>
          <p>
            Reach me at{' '}
            <a href="mailto:mark@takacsmark.com">mark@takacsmark.com</a>{' '}
            or on{' '}
            <a href="https://www.linkedin.com/in/takacsmark/" target="_blank" rel="noopener">LinkedIn</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
