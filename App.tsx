import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { FeatureBento } from './FeatureBento';
import { CTASection } from './CTASection';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

/**
 * App Component
 * Orchestrates the overall layout and flow of the landing page.
 * Uses a section-based pattern for clean, maintainable code.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <FeatureBento />
        <CTASection />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}