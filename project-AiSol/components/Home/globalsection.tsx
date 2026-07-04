'use client';

import React from 'react';
import Image from 'next/image';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      title: "Intelligent Automation",
      description: "Architecting autonomous workflows that eliminate operational friction across enterprise systems."
    },
    {
      id: "02",
      title: "Neural Architectures",
      description: "Deploying deep learning models tailored for large-scale data synthesis and predictive analysis."
    },
    {
      id: "03",
      title: "Cognitive Ecosystems",
      description: "Connecting disparate digital nodes into a unified, self-evolving technical infrastructure."
    }
  ];

  return (
    <section className="relative  min-h-[60vh] bg-[#0a0f1c] border-amber-50 border-10 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden font-poppins">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Global network background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Ambient Glow Element */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full filter blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col gap-16">
        
        {/* Minimalist Top Border & Header System */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/[0.05] pt-12">
          <div className="space-y-3">
            
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
              Next-Gen Systems
            </h2>
          </div>
          <p className="text-slate-400 font-light text-sm max-w-sm leading-relaxed">
            Engineered for computational efficiency, scalability, and seamless deployment into modern digital infrastructures.
          </p>
        </div>

        {/* Minimalist Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 sequential-fade">
          {capabilities.map((item) => (
            <div key={item.id} className="group flex flex-col gap-5 border-l border-white/[0.03] pl-6 transition-all duration-500 hover:border-blue-500/30">
              <span className="text-xs font-light text-slate-600 tracking-widest block transition-colors duration-300 group-hover:text-blue-400/60">
                {item.id}
              </span>
              <h3 className="text-lg font-light text-white tracking-wide transition-colors duration-300 group-hover:text-blue-400">
                {item.title}
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}