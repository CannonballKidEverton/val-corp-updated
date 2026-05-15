import Link from 'next/link';
import { PrimaryNav } from './PrimaryNav';
import { StatusNode } from './StatusNode';
import { TOTAL_ACTIVE_MANDATES } from '@/content/engagements';

export function Header() {
  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'h-[var(--header)] bg-bg',
        'border-b border-hairline',
      ].join(' ')}
    >
      <div className="h-full px-[var(--margin)] grid grid-cols-[auto_1fr_auto] items-center gap-12">
        <Link
          href="/"
          className="font-sans font-[800] text-[19px] tracking-[0.005em] text-ink no-underline"
        >
          Valantai
        </Link>

        <PrimaryNav />

        <StatusNode mandateCount={TOTAL_ACTIVE_MANDATES} />
      </div>
    </header>
  );
}
