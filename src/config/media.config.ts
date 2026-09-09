/**
 * Central Media Configuration for ECLAT
 * 
 * All hero background videos and posters are defined here.
 * To replace media assets, simply update the paths or settings below.
 */

export interface HeroMediaConfig {
  desktopVideo: string;
  mobileVideo: string;
  desktopPoster: string;
  mobilePoster: string;
  options: {
    loop: boolean;           // By default false (plays cap-fall once and holds final frame)
    muted: boolean;
    autoplay: boolean;
    playsInline: boolean;
    desktopObjectPosition: string;
    mobileObjectPosition: string;
  };
}

export const heroMedia: HeroMediaConfig = {
  desktopVideo: '/media/eclat-hero-desktop.mp4',
  mobileVideo: '/media/eclat-hero-mobile.mp4',
  desktopPoster: '/media/eclat-hero-desktop-poster.webp',
  mobilePoster: '/media/eclat-hero-mobile-poster.webp',
  options: {
    loop: true,              // Continuously loops video as requested
    muted: true,
    autoplay: true,
    playsInline: true,
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
  }
};
