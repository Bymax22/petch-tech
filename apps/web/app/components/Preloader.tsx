'use client';

import { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0); // 0-3 for loading steps

  useEffect(() => {
    const steps = [0, 1, 2, 3];
    
    // Animate through loading steps
    steps.forEach((step, index) => {
      setTimeout(() => {
        setLoadingStep(step);
      }, index * 500);
    });

    // Complete loading after all steps
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#1185AE] rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-[#BD2227] rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-[#1185AE]" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-[#BD2227]" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Main loader container */}
          <div className="relative">
            {/* Outer square frame */}
            <div className="w-32 h-32 border-2 border-slate-800 rounded-xl flex items-center justify-center">
              
              {/* Inner loading animation */}
              <div className="relative w-24 h-24">
                
                {/* Progress lines */}
                <div className="absolute inset-0">
                  {/* Top line */}
                  <div 
                    className={`absolute top-0 left-0 h-1 bg-[#1185AE] transition-all duration-500 ease-out ${
                      loadingStep >= 1 ? 'w-full' : 'w-0'
                    }`}
                  />
                  
                  {/* Right line */}
                  <div 
                    className={`absolute top-0 right-0 w-1 bg-[#1185AE] transition-all duration-500 ease-out ${
                      loadingStep >= 2 ? 'h-full' : 'h-0'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                  />
                  
                  {/* Bottom line */}
                  <div 
                    className={`absolute bottom-0 right-0 h-1 bg-[#BD2227] transition-all duration-500 ease-out ${
                      loadingStep >= 3 ? 'w-full' : 'w-0'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  />
                  
                  {/* Left line */}
                  <div 
                    className={`absolute bottom-0 left-0 w-1 bg-[#BD2227] transition-all duration-500 ease-out ${
                      loadingStep >= 4 ? 'h-full' : 'h-0'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                  />
                </div>

                {/* Center logo/icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center gap-2">
                    {/* DN letters */}
                    <div className="relative">
                      <div className="w-8 h-12 bg-[#1185AE] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">D</span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-[#BD2227] transition-all duration-300 ${
                        loadingStep >= 2 ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                    
                    <div className="relative">
                      <div className="w-8 h-12 bg-[#BD2227] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">N</span>
                      </div>
                      <div className={`absolute -top-1 -left-1 w-4 h-4 bg-[#1185AE] transition-all duration-300 ${
                        loadingStep >= 3 ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Completion checkmark */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              loadingStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
              <div className="w-20 h-20 rounded-full bg-[#1185AE] flex items-center justify-center">
                <FiCheck className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Loading text and progress */}
          <div className="text-center space-y-4">
            {/* Company name */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                DN Multi Services
              </h1>
              <p className="text-sm text-slate-400">
                Industrial Solutions Provider
              </p>
            </div>

            {/* Loading steps indicator */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    step <= loadingStep 
                      ? step % 2 === 0 
                        ? 'bg-[#BD2227] scale-125' 
                        : 'bg-[#1185AE] scale-125'
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>

            {/* Loading text */}
            <p className="text-sm text-slate-400 font-medium">
              {loadingStep < 1 && 'Initializing...'}
              {loadingStep === 1 && 'Loading assets...'}
              {loadingStep === 2 && 'Preparing interface...'}
              {loadingStep === 3 && 'Finalizing...'}
              {loadingStep >= 4 && 'Ready!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}