import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroMedia } from '../../config/media.config';

export const ResponsiveHero: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Responsive breakpoint listener for clean single-video mounting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      setVideoLoaded(false);
    };

    // Initial check
    handleMediaChange(mediaQuery);

    const listener = (e: MediaQueryListEvent) => handleMediaChange(e);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Check prefers-reduced-motion and save-data preferences
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hasDataSaver = (navigator as unknown as { connection?: { saveData?: boolean } })?.connection?.saveData;

    const shouldReduce = motionQuery.matches || Boolean(hasDataSaver);
    setPrefersReducedMotion(shouldReduce);

    if (shouldReduce) {
      setIsPlaying(false);
    }
  }, []);

  // Handle play/pause toggling
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Video end handling: hold final frame unless loop is configured
  const handleVideoEnded = () => {
    if (!heroMedia.options.loop && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const currentVideoSrc = isDesktop ? heroMedia.desktopVideo : heroMedia.mobileVideo;
  const currentPoster = isDesktop ? heroMedia.desktopPoster : heroMedia.mobilePoster;
  const objectPosition = isDesktop
    ? heroMedia.options.desktopObjectPosition
    : heroMedia.options.mobileObjectPosition;

  return (
    <section
      className="relative w-full h-screen h-[100dvh] min-h-[100dvh] md:h-screen md:min-h-[680px] bg-eclat-espresso text-white overflow-hidden flex items-center"
      aria-label="ÉCLAT Haute Parfumerie Hero"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Instant Poster Image to eliminate layout shift */}
        <img
          src={currentPoster}
          alt="ECLAT Fragrance Flacon"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ objectPosition }}
        />

        {/* Conditionally mounted responsive video - ONLY ONE video mounted at any time */}
        {!prefersReducedMotion && (
          <video
            key={isDesktop ? 'desktop-video' : 'mobile-video'}
            ref={videoRef}
            src={currentVideoSrc}
            poster={currentPoster}
            autoPlay={heroMedia.options.autoplay}
            muted={heroMedia.options.muted}
            playsInline={heroMedia.options.playsInline}
            loop={true}
            onLoadedData={() => {
              setVideoLoaded(true);
              setIsPlaying(true);
            }}
            onError={() => {
              console.warn('Video failed to load or autoplay; showing poster fallback.');
              setIsPlaying(false);
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition }}
          />
        )}

        {/* Subtle Atmospheric Gradient Overlay tailored to preserve bottle, cap movement & text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 md:hidden" />
      </div>

      {/* Hero Content Area - desktop centered, mobile full-height with text at top & CTA at bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between pt-16 sm:pt-20 pb-8 sm:pb-10 md:h-auto md:block md:pt-0 md:-translate-y-2 lg:-translate-y-3">
        {/* Desktop Layout: Restrained Left Composition */}
        <div className="hidden md:block max-w-xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium border-l border-eclat-gold pl-3">
            <span>Haute Parfumerie &bull; Collection No. 1</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-white leading-[1.08] text-balance">
            A presence that lingers.
          </h1>

          <p className="text-sm lg:text-base font-sans font-normal text-eclat-champagne/90 max-w-md tracking-wider leading-relaxed">
            Discover your signature scent. Architectural flacons crafted with tactile restraint, housing rare botanical extraits.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <Link
              to="/collection"
              className="inline-flex items-center space-x-3 bg-white text-eclat-espresso px-7 py-3.5 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-champagne transition-all duration-300 shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
            >
              <span>Explore Fragrances</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/our-world"
              className="text-xs uppercase tracking-ultra-wide text-white/90 hover:text-white border-b border-white/40 hover:border-white pb-1 transition-all duration-200"
            >
              Discover ÉCLAT
            </Link>
          </div>
        </div>

        {/* Mobile Layout: Top Header Text Positioned at Very Top + CTA at Bottom */}
        <div className="md:hidden flex flex-col justify-between h-full w-full">
          {/* Top text positioned right at the top */}
          <div className="space-y-1.5 max-w-md text-left pt-1">
            <div className="inline-block text-[9.5px] uppercase tracking-super-wide text-eclat-gold font-medium">
              Haute Parfumerie
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white leading-tight">
              A presence that lingers.
            </h1>

            <p className="text-[11px] sm:text-xs text-eclat-champagne/90 leading-relaxed max-w-xs font-sans">
              Discover your signature scent.
            </p>
          </div>

          {/* Bottom CTA Buttons - Positioned cleanly at the bottom in mobile view only */}
          <div className="flex flex-col gap-3 w-full max-w-md pt-6 pb-2">
            <Link
              to="/collection"
              className="inline-flex items-center justify-center space-x-2 bg-white text-eclat-espresso py-3.5 px-6 text-xs uppercase tracking-ultra-wide font-semibold shadow-lg active:bg-eclat-champagne transition-colors w-full"
            >
              <span>Explore Fragrances</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/our-world"
              className="text-center py-1.5 text-xs uppercase tracking-wider text-eclat-champagne underline underline-offset-4 font-medium"
            >
              Discover ÉCLAT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
