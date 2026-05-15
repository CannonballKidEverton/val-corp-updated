import type { Metadata } from 'next';
import { OpeningZone }     from '@/components/zones/OpeningZone';
import { ThesisZone }      from '@/components/zones/ThesisZone';
import { EngagementsZone } from '@/components/zones/EngagementsZone';
import { SolutionsZone }   from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
import { PartnersZone }    from '@/components/zones/PartnersZone';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';

export const metadata: Metadata = {
  title: 'Valantai — From idea to exit',
};

export default function HomePage() {
  return (
    <>
      <OpeningZone />
      <ThesisZone />
      <EngagementsZone />

      {/* Spatial pacing — 18vh of intentional air */}
      <div className="h-[18vh] min-h-[140px]" aria-hidden="true" />

      <SolutionsZone />
      <IntelligenceZone />
      <PartnersZone />
      <EngagementBlock />
    </>
  );
}
