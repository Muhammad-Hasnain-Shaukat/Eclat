import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Droplet, Globe } from 'lucide-react';

export const OurWorldPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-36 pb-20 sm:pb-24 bg-[#F7F4EE] min-h-screen text-[#171413] overflow-x-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#D8D0C3] pb-8 sm:pb-12 mb-10 sm:mb-16 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold block">
            The Atelier Ethos &amp; Terroir
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171413] tracking-tight">
            Our World
          </h1>
          <p className="font-serif text-lg sm:text-2xl italic text-[#2A221B]">
            &ldquo;A presence that lingers.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#3D332A] font-sans leading-relaxed pt-2 max-w-xl mx-auto font-medium">
            ÉCLAT was founded on a singular conviction: luxury fragrance must be architectural, tactile, and uncompromisingly restrained.
          </p>
        </div>

        {/* Cinematic Hero Perfume Still Life Banner */}
        <div className="relative w-full h-[260px] sm:h-[480px] lg:h-[560px] mb-16 sm:mb-24 overflow-hidden border border-[#D8D0C3] shadow-sm">
          <img
            src="/images/world/world-hero.jpg"
            alt="ÉCLAT Flacons resting on sunlit architectural limestone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/80 via-[#171413]/25 to-transparent flex flex-col justify-end p-5 sm:p-14">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#E5DAC6] font-semibold mb-1">
              Atmosphere &amp; Light
            </span>
            <p className="font-serif text-xl sm:text-3xl lg:text-4xl text-white font-normal max-w-xl leading-tight">
              Extraits formulated for timeless resonance on warm skin.
            </p>
          </div>
        </div>

        {/* The 3 Pillars With 100% Authentic Perfume Photography */}
        <div className="mb-16 sm:mb-28">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold">
              The Three Foundations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#171413] font-normal">
              Architecture of Scent
            </h2>
            <p className="text-xs text-[#3D332A] font-sans font-medium">
              Every creation reflects three immutable tenets of haute parfumerie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar I: Architectural Form */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs group">
              <div className="h-56 sm:h-72 overflow-hidden relative">
                <img
                  src="/images/atelier/atelier-hero.jpg"
                  alt="Architectural Perfume Flacons on Limestone Plinth"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/85 text-[#F7F4EE] text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  I. Olfactory Restraint
                </span>
              </div>
              <div className="p-5 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Architectural Form</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    We reject synthetic clutter. Every formula is constructed around high-percentage pure absolutes and botanical extraits that evolve organically across skin rather than dissipating in twenty minutes.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  High Extrait Concentration (24% &ndash; 28%)
                </div>
              </div>
            </div>

            {/* Pillar II: Generational Botanicals (Harvested Vetiver & Copper Distillation) */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs group">
              <div className="h-56 sm:h-72 overflow-hidden relative">
                <img
                  src="/images/ingredients/vetiver-roots.jpg"
                  alt="Wild Vetiver Roots and Artisanal Copper Distillation Still"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/85 text-[#F7F4EE] text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  II. Generational Botanicals
                </span>
              </div>
              <div className="p-5 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Cultivated Origin</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    From dawn-harvested Calabrian bergamot to three-year dried Florentine orris and sustainably preserved Haitian vetiver roots, our ingredients trace back to specific generational soil.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  Single-Estate Traceability
                </div>
              </div>
            </div>

            {/* Pillar III: Heavyweight Mineral Glass & Micro-Mist */}
            <div className="bg-[#FAF8F5] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between shadow-xs group">
              <div className="h-56 sm:h-72 overflow-hidden relative">
                <img
                  src="/images/atelier/atelier-nozzle-mist.jpg"
                  alt="Micro-Diffusing Nozzle and Heavy Mineral Crystal Glass"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#171413]/85 text-[#F7F4EE] text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
                  III. Tactile Flacons
                </span>
              </div>
              <div className="p-5 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171413] font-medium">Heavyweight Glass</h3>
                  <p className="text-xs text-[#3D332A] leading-relaxed font-sans pt-2">
                    Our vessels are cast with substantial mineral glass bases, cool solid brass stoppers, and micro-fine vaporizers engineered for an enveloping 18-micron particulate mist.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D8D0C3]/60 text-[10.5px] uppercase tracking-wider font-semibold text-[#857B70]">
                  400g Mineral Glass Vessel
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The Perfumer's Organ & Formulation Sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-28 p-5 sm:p-14 bg-[#FAF8F5] border border-[#D8D0C3]">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#241E19] font-semibold">
              The Creative Sanctum
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#171413] font-normal">
              The Perfumer&rsquo;s Organ
            </h2>
            <p className="text-xs sm:text-sm text-[#3D332A] leading-relaxed font-sans font-medium">
              Over two hundred raw absolutes and cold-pressed botanical essences sit in stepped tiers within our laboratory. Here, master noses compose olfactory harmony without synthetic shortcuts, balancing high-impact top notes with slow-burning woody and resinous foundations.
            </p>
            <p className="text-xs sm:text-sm text-[#3D332A] leading-relaxed font-sans font-medium">
              Every iteration is macerated in dark glass for up to twelve weeks, sampled at dawn and twilight to evaluate how humidity and temperature interact with the living formula.
            </p>
            <div className="pt-2 sm:pt-3">
              <Link
                to="/atelier"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#171413] hover:text-eclat-amber border-b border-[#171413]/40 pb-0.5"
              >
                <span>Step Inside The Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-[#D8D0C3] shadow-sm group h-[260px] sm:h-[440px]">
              <img
                src="/images/ingredients/orris-root.jpg"
                alt="Apothecary extraction with rare botanical essences"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#171413]/75 backdrop-blur-xs p-3 sm:p-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-sans uppercase tracking-wider font-semibold text-[10px] sm:text-xs">L&rsquo;Orgue &agrave; Parfums</span>
                <span className="font-serif italic text-xs sm:text-sm">Pure Botanical Palette</span>
              </div>
            </div>
          </div>

        </div>

        {/* Numbered Extraits & Dual Ateliers (Deep Espresso Contrast) */}
        <div className="bg-[#171413] text-[#F7F4EE] p-6 sm:p-16 border border-[#2B231D] mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                Numbered Extraits
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Formulated in numbered cycles. Hand-sealed in Lahore &amp; Paris.
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD4C5] font-sans leading-relaxed max-w-xl font-normal">
                To ensure raw extract stability and prevent synthetic oxidation, flacons are poured in strictly limited editions of two hundred units per cycle. Each bottle carries its unique batch number stamped in wax.
              </p>
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-6">
                <Link
                  to="/collection"
                  className="inline-flex items-center space-x-2 bg-white text-[#171413] px-6 sm:px-7 py-3 sm:py-3.5 text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#E5DAC6] transition-colors shadow-sm"
                >
                  <span>Explore The Eleven Flacons</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  to="/ingredients"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#E5DAC6] hover:text-white border-b border-[#E5DAC6]/40 pb-0.5"
                >
                  <span>Raw Extracts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-white/20 h-60 sm:h-80 shadow-md">
                <img
                  src="/images/world/world-hero.jpg"
                  alt="ÉCLAT bottles on architectural limestone plinth"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
