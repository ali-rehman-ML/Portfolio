import { Hero } from "../Hero";
import { Services } from "../Services";
import { Benefits } from "../Benefits";
import { UseCases } from "../UseCases";
import { CTA } from "../CTA";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <Benefits />
      <UseCases />
      <CTA />
    </>
  );
}
