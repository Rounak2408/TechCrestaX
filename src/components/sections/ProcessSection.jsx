import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import IsometricWorkflow3D from '../visuals/IsometricWorkflow3D';
import { companyData } from '../../data/companyData';

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0b1120] relative transition-colors" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionHeading
            eyebrow="Delivery Methodology"
            title="A structured process for"
            highlight="predictable results"
            description="We eliminate ambiguity through transparent, milestone-driven sprints. You know exactly what is being designed, built, and tested at every stage."
          />
        </div>

        {/* 3D Isometric Interactive Pathway Workflow */}
        <IsometricWorkflow3D steps={companyData.processSteps} />
      </div>
    </section>
  );
}
