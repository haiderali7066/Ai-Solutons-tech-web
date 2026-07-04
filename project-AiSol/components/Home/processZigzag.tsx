'use client';

import React, { useState } from 'react';

const steps = [
  {
    id: '01',
    title: 'Discovery Phase',
    description: 'Data-driven diagnostic and predictive app for improving outcomes. We analyze your core business data architecture to pinpoint exact automation and intelligence opportunities.',
  },
  {
    id: '02',
    title: 'Design & Development',
    description: 'We architect custom AI models, training neural networks and shaping high-fidelity interfaces tailored specifically to your enterprise operations.',
  },
  {
    id: '03',
    title: 'Testing & QA',
    description: 'Rigorous validation using custom datasets to ensure high precision, speed, and complete reliability while eliminating algorithmic biases before launch.',
  },
  {
    id: '04',
    title: 'Deployment',
    description: 'Seamlessly integrating the trained AI architectures into your production ecosystem or cloud infrastructure with secure, low-latency API endpoints.',
  },
  {
    id: '05',
    title: 'Maintenance',
    description: 'Continuous post-launch monitoring to guard against data drift, optimize compute efficiency, and routinely upgrade models to scale with your growth.',
  },
];

export default function ZigzagProcessComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 overflow-hidden font-sans select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Content & Accordion */}
        <div className="w-full xl:col-span-5 flex flex-col justify-center">
          
          {/* Animated Timeline Header */}
          <div className="relative pl-8 mb-12 sm:mb-16">
            <div className="absolute left-0 top-2 w-[2px] h-32 bg-gradient-to-b from-blue-500/80 to-blue-200/20">
              <div className="absolute -left-[5px] -top-1 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)] animate-pulse"></div>
            </div>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-600/90 uppercase mb-3">
              Working Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
              Our <span className="text-blue-500 relative inline-block">Approach</span>
            </h2>
          </div>

          {/* Accordion Wrapper */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={step.id} 
                  className={`group rounded-2xl border transition-all duration-500 ease-out ${
                    isActive 
                      ? 'bg-white shadow-[0_20px_50px_rgba(218,232,252,0.65)] border-blue-200/50 scale-[1.01]' 
                      : 'bg-transparent border-blue-200/30 hover:border-blue-300/60'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex justify-between items-center py-5 px-5 sm:px-6 text-left focus:outline-none"
                  >
                    <span className={`text-base sm:text-lg font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#0f172a]' : 'text-[#334155] group-hover:text-blue-600'
                    }`}>
                      <span className="text-blue-500/60 mr-2 font-mono font-medium">{step.id}.</span> {step.title}
                    </span>
                    <span className={`text-xl font-light transition-transform duration-300 ${
                      isActive ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {isActive ? '−' : '+'}
                    </span>
                  </button>
                  
                  {/* CSS Grid Smooth Height Wrapper */}
                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100 pb-6 px-5 sm:px-6' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Zigzag Circle Flow */}
        <div className="w-full xl:col-span-7 flex items-center justify-center pt-8 xl:pt-0">
          
          <div className="relative w-full max-w-[600px] flex justify-center">
            
            {/* Vertical timeline track connecting zigzag steps */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[90%] bg-blue-200/50 z-0"></div>

            <div className="flex flex-col gap-10 w-full z-10">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                const isEven = index % 2 !== 0; // Check if it's even index for zigzag direction

                return (
                  <div 
                    key={step.id} 
                    className={`flex items-center w-full ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* The Process Circle */}
                    <div
                      onClick={() => setActiveIndex(index)}
                      className={`
                        relative w-[180px] sm:w-[220px] aspect-square rounded-full flex flex-col items-center justify-center 
                        cursor-pointer transition-all duration-500 ease-out p-5 text-center border
                        
                        /* Zigzag horizontal offsets */
                        ${isEven ? 'lg:mr-[100px]' : 'lg:ml-[100px]'}

                        /* State Dependent Colors & Effects */
                        ${isActive 
                          ? 'bg-[#0f172a] text-white border-transparent scale-105 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)]' 
                          : 'bg-white/40 text-[#1e293b] border-slate-300/70 hover:bg-white/70 hover:scale-[1.03]'
                        }
                      `}
                    >
                      {/* Suble outer glowing ring for active state */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border border-blue-400/40 scale-105 animate-pulse -z-10"></div>
                      )}
                      
                      {/* Content inside the circle */}
                      <span className={`font-mono text-xs mb-1 font-medium tracking-widest ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>
                        {step.id}
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight leading-tight max-w-[140px]">
                        {step.title}
                      </span>
                    </div>

                    {/* Zigzag horizontal line connector (visible on larger screens) */}
                    <div 
                      className={`
                        hidden lg:block absolute h-[1px] bg-blue-200/50
                        transition-all duration-500 ease-out z-0
                        ${isEven 
                          ? 'right-1/2 w-[calc(50%-110px)] mr-[10px]' 
                          : 'left-1/2 w-[calc(50%-110px)] ml-[10px]'
                        }
                      `} 
                      style={{ top: `calc(${index * (220 + 40)}px + 110px)` }} // Dynamic positioning calculation
                    />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}