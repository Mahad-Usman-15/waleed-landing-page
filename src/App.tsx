import { AboutSection } from './components/AboutSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CtaBanner } from './components/CtaBanner';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { ShowreelSection } from './components/ShowreelSection';
import { SkillsMarquee } from './components/SkillsMarquee';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full text-on-surface bg-surface selection:bg-primary selection:text-on-primary font-body-md overflow-x-hidden">
          <Hero />
          <SkillsMarquee />
          <AboutSection />
          <ShowreelSection />
          <CaseStudiesSection />
          <ServicesSection />
          <ProcessSection />
          <ReviewsSection />
          <FaqSection />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
