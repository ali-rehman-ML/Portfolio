import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { UseCases } from "./components/UseCases";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Benefits />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
}
