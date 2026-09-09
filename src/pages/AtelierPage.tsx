import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplet, Shield, Compass } from 'lucide-react';

export const AtelierPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-36 pb-20 sm:pb-24 bg-[#F7F4EE] min-h-screen text-[#171413] overflow-x-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#D8D0C3] pb-8 sm:pb-12 mb-10 sm:mb-16 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold block">
            L&rsquo;Atelier &amp; Artisanat
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171413] tracking-tight">
            The Atelier
          </h1>
          <p className="font-serif text-lg sm:text-2xl italic text-[#2A221B]">
            &ldquo;Formulated in numbered cycles. Sealed by hand.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#3D332A] font-sans leading-relaxed pt-2 max-w-xl mx-auto font-medium">
            Step into the creative sanctum where architectural flacons meet high-concentration botanical extraits, guided by dual heritage in Lahore and Paris.
          </p>
        </div>

        {/* Hero Atelier Workshop Image Banner */}
        <div className="relative w-full h-[260px] sm:h-[460px] lg:h-[540px] mb-16 sm:mb-24 overflow-hidden border border-[#D8D0C3] shadow-sm">
          <img
            src="/images/atelier/atelier-hero.jpg"
            alt="ÉCLAT Flacons resting on sunlit limestone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/75 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-12">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/90 font-semibold mb-1">
              The Sanctuary
            </span>
            <p className="font-serif text-xl sm:text-3xl text-white font-normal max-w-lg leading-tight">
              Where raw earth minerals and fugitive florals meet architectural glass.
            </p>
          </div>
        </div>

        {/* The Flacon Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-28">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold">
              Vessel Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#171413] font-normal">
              Heavyweight Mineral Glass &amp; Solid Brass
            </h2>
            <p className="text-xs sm:text-sm text-[#3D332A] leading-relaxed font-sans font-medium">
              Each ÉCLAT flacon is engineered as a tactile object of contemplation. The base is formed from ultra-dense mineral crystal, weighing over 400 grams to provide grounded stability on marble or stone.
            </p>
            
            <div className="space-y-3 sm:space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-xs text-[#3D332A]">
                <span className="w-2 h-2 rounded-full bg-[#B87834] mt-1.5 flex-shrink-0" />
                <p><strong className="text-[#171413] font-bold">Cold Brass Stopper:</strong> Machined from solid brass billet, untreated to develop a natural organic patina unique to its guardian.</p>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#3D332A]">
                <span className="w-2 h-2 rounded-full bg-[#B87834] mt-1.5 flex-shrink-0" />
                <p><strong className="text-[#171413] font-bold">Micro-Diffusing Nozzle:</strong> Delivers an ultra-fine 18-micron particulate cloud, allowing top notes to aerosolize evenly without pooling.</p>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#3D332A]">
                <span className="w-2 h-2 rounded-full bg-[#B87834] mt-1.5 flex-shrink-0" />
                <p><strong className="text-[#171413] font-bold">Numbered Batch Wax Seal:</strong> Every flacon is individually hand-stamped with genuine sealing wax designating its bottling cycle.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-[#D8D0C3] shadow-sm group">
              <img
                src="/images/atelier/atelier-nozzle-mist.jpg"
                alt="ÉCLAT Micro-Diffusing Nozzle and Fine Aerosol Mist"
                className="w-full h-[280px] sm:h-[440px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#171413]/75 backdrop-blur-xs p-3 sm:p-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-sans uppercase tracking-wider font-semibold text-[10px] sm:text-xs">Micro-Diffusion Action</span>
                <span className="font-serif italic text-xs sm:text-sm">18-Micron Particulate Mist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulation & Maturation Pillars with 100% Authentic Perfumery Photography */}
        <div className="mb-16 sm:mb-28">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold">
              The Triad Process
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#171413] font-normal">
              Formulation &amp; Maturation
            </h2>
            <p className="text-xs text-[#3D332A] font-sans font-medium">
              Three unhurried phases that transform raw botanical extraits into enduring sillage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Stage 01: Raw Amber & Resins Maceration */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="h-52 sm:h-56 overflow-hidden relative">
                <img
                  src="/images/ingredients/amber-resin.jpg"
                  alt="Raw fossilized amber resin for extraction"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  Stage 01
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Maceration</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    Raw fossilized amber, tree resins, and floral absolutes rest in dark glass vessels for six to twelve weeks, allowing volatile aromatic molecules to bind naturally without forced heat.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  Duration: 45 &ndash; 90 Days
                </div>
              </div>
            </div>

            {/* Stage 02: Micro-Diffusing Cold Extraction */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="h-52 sm:h-56 overflow-hidden relative">
                <img
                  src="/images/atelier/atelier-nozzle-mist.jpg"
                  alt="Cold Cryogenic Filtration of volatile terpenes"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  Stage 02
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Cold Filtration</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    Formulas undergo slow cryogenic filtration at 2°C to remove heavy waxes while locking in delicate volatile top terpenes and luminous resinous clarity.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  Temperature: 2&deg;C Cryogenic
                </div>
              </div>
            </div>

            {/* Stage 03: Architectural Bottling */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="h-52 sm:h-56 overflow-hidden relative">
                <img
                  src="/images/atelier/atelier-hero.jpg"
                  alt="Hand Bottling in Numbered Editions"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  Stage 03
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Hand Bottling</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    Filled in strictly numbered batches of 200 flacons in our dual ateliers in Lahore and Paris, ensuring each bottle carries absolute olfactory integrity.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  Batch Size: 200 Flacons
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Atelier Workshop Heritage - Authentic Perfumery Craft */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-20 p-5 sm:p-12 bg-[#FAF8F5] border border-[#D8D0C3]">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold">
              Dual Heritage
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#171413] font-normal">
              Lahore &amp; Paris
            </h2>
            <p className="text-xs sm:text-sm text-[#3D332A] leading-relaxed font-sans font-medium">
              Our formulation philosophy bridges the historic apothecary distillation traditions of Punjab with the rigorous aesthetic precision of French haute parfumerie. Raw attars, wild vetiver roots, and Himalayan resins are calibrated alongside Grasse jasmine and Florentine orris.
            </p>
            <div className="pt-2">
              <Link
                to="/our-world"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#171413] hover:text-eclat-amber border-b border-[#171413]/40 pb-0.5"
              >
                <span>Discover Our World</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Authentic Perfumery Imagery: Copper alembic distillation & cured Florentine orris */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden border border-[#D8D0C3] h-52 sm:h-64 relative group">
              <img
                src="/images/ingredients/vetiver-roots.jpg"
                alt="Apothecary Copper Distillation and Wild Roots"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-[#171413]/80 text-white text-[9.5px] uppercase tracking-wider px-2 py-0.5 font-semibold">
                Copper Alembic Distillation
              </div>
            </div>
            
            <div className="overflow-hidden border border-[#D8D0C3] h-52 sm:h-64 relative group">
              <img
                src="/images/ingredients/orris-root.jpg"
                alt="Cured Florentine Orris & Fine French Apothecary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-[#171413]/80 text-white text-[9.5px] uppercase tracking-wider px-2 py-0.5 font-semibold">
                Fine Floral Extraction
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Explore Collection */}
        <div className="text-center pt-8 border-t border-[#D8D0C3]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#241E19] mb-3 font-semibold">
            Explore the Creations
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center space-x-2 bg-[#171413] text-[#F7F4EE] px-7 sm:px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-semibold hover:bg-eclat-amber transition-colors shadow-sm"
          >
            <span>View The Eleven Flacons</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
