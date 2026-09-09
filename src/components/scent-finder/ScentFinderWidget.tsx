import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, RotateCcw, ChevronLeft, Check, ShoppingBag } from 'lucide-react';
import { fragrances, Product } from '../../data/products';
import { formatPrice } from '../../utils/currency';
import { useBag } from '../../context/BagContext';

interface ScentFinderWidgetProps {
  isEmbedded?: boolean;
}

export const ScentFinderWidget: React.FC<ScentFinderWidgetProps> = ({ isEmbedded = false }) => {
  const [step, setStep] = useState<number>(1);
  const [familyChoice, setFamilyChoice] = useState<string>('');
  const [moodChoice, setMoodChoice] = useState<string>('');
  const [occasionChoice, setOccasionChoice] = useState<string>('');
  const [matchedProduct, setMatchedProduct] = useState<Product | null>(null);
  const [matchReason, setMatchReason] = useState<string>('');

  const { addItem } = useBag();
  const [added, setAdded] = useState(false);

  const handleNext = () => {
    if (step === 1 && familyChoice) {
      setStep(2);
    } else if (step === 2 && moodChoice) {
      setStep(3);
    } else if (step === 3 && occasionChoice) {
      calculateResult();
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(1);
    setFamilyChoice('');
    setMoodChoice('');
    setOccasionChoice('');
    setMatchedProduct(null);
    setMatchReason('');
    setAdded(false);
  };

  const calculateResult = () => {
    // Deterministic scoring matrix
    const scores: Record<string, number> = {
      'ambre-velours': 0,
      'bois-nocturne': 0,
      'fleur-de-soie': 0,
      'citrus-lumiere': 0,
      'rose-minerale': 0,
      'oud-absolu': 0
    };

    // 1. Scent family weight
    if (familyChoice === 'amber') {
      scores['ambre-velours'] += 5;
      scores['oud-absolu'] += 2;
    } else if (familyChoice === 'woody') {
      scores['bois-nocturne'] += 5;
      scores['oud-absolu'] += 3;
    } else if (familyChoice === 'floral') {
      scores['fleur-de-soie'] += 5;
      scores['rose-minerale'] += 3;
    } else if (familyChoice === 'citrus') {
      scores['citrus-lumiere'] += 5;
    } else if (familyChoice === 'oriental') {
      scores['oud-absolu'] += 5;
      scores['ambre-velours'] += 2;
    }

    // 2. Mood weight
    if (moodChoice === 'warm') {
      scores['ambre-velours'] += 4;
    } else if (moodChoice === 'mysterious') {
      scores['bois-nocturne'] += 4;
      scores['oud-absolu'] += 2;
    } else if (moodChoice === 'ethereal') {
      scores['fleur-de-soie'] += 4;
    } else if (moodChoice === 'luminous') {
      scores['citrus-lumiere'] += 4;
    } else if (moodChoice === 'bold') {
      scores['rose-minerale'] += 4;
      scores['oud-absolu'] += 2;
    } else if (moodChoice === 'regal') {
      scores['oud-absolu'] += 5;
    }

    // 3. Occasion weight
    if (occasionChoice === 'everyday') {
      scores['citrus-lumiere'] += 3;
      scores['fleur-de-soie'] += 3;
      scores['bois-nocturne'] += 2;
    } else if (occasionChoice === 'evening') {
      scores['ambre-velours'] += 4;
      scores['rose-minerale'] += 3;
    } else if (occasionChoice === 'special') {
      scores['oud-absolu'] += 5;
      scores['ambre-velours'] += 2;
    }

    // Find highest score
    let highestSlug = 'ambre-velours';
    let maxScore = -1;
    for (const [slug, val] of Object.entries(scores)) {
      if (val > maxScore) {
        maxScore = val;
        highestSlug = slug;
      }
    }

    const found = fragrances.find(f => f.slug === highestSlug) || fragrances[0];
    setMatchedProduct(found);

    // Formulate concise deterministic explanation
    const reasons: Record<string, string> = {
      'ambre-velours': 'Your preference for golden warmth and intimate twilight presence pairs flawlessly with the labdanum, Bourbon vanilla, and fossilized amber core of Ambre Velours.',
      'bois-nocturne': 'Your inclination toward mysterious woody depth and grounded forestry resonates with the Haitian vetiver, dark cypress, and charred birch architecture of Bois Nocturne.',
      'fleur-de-soie': 'Your desire for an ethereal, tactile, powdered skin veil harmonizes with the rare three-year Florentine orris and white silk peony of Fleur de Soie.',
      'citrus-lumiere': 'Your pursuit of crisp, radiant morning light and effortless elegance perfectly matches the cold-pressed Calabrian bergamot and neroli blossoms of Citrus Lumière.',
      'rose-minerale': 'Your taste for architectural florals and bold confidence aligns with the saline mineral breeze and Bulgarian Damascena rose of Rose Minérale.',
      'oud-absolu': 'Your preference for regal magnetism and opulent nocturnal trails matches the aged Cambodian wild agarwood and dark honey in Oud Absolu.'
    };

    setMatchReason(reasons[found.slug] || reasons['ambre-velours']);
  };

  const handleAddMatched = () => {
    if (!matchedProduct) return;
    addItem(matchedProduct, matchedProduct.sizes[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={`w-full max-w-3xl mx-auto bg-eclat-ivory border border-eclat-champagne/60 rounded-sm shadow-sm ${
      isEmbedded ? 'p-6 sm:p-10' : 'p-6 sm:p-12'
    }`}>
      {/* Step Header */}
      {step < 4 ? (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-eclat-slate uppercase tracking-ultra-wide mb-3 font-medium">
            <span>Step {step} of 3</span>
            <div className="flex space-x-1.5">
              {[1, 2, 3].map(s => (
                <div
                  key={s}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    s === step ? 'w-6 bg-eclat-amber' : s < step ? 'w-3 bg-eclat-gold' : 'w-3 bg-eclat-champagne/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-eclat-espresso font-light">
            {step === 1 && 'What olfactory family draws you in?'}
            {step === 2 && 'What mood or presence do you wish to project?'}
            {step === 3 && 'When do you envision wearing your flacon?'}
          </h3>
          <p className="text-xs text-eclat-slate mt-1 font-sans">
            {step === 1 && 'Select the foundational accord that anchors your sensory memory.'}
            {step === 2 && 'Fragrance is an invisible garment; choose its emotional tone.'}
            {step === 3 && 'Consider whether you seek a daily signature or an evening ceremonial trail.'}
          </p>
        </div>
      ) : (
        <div className="mb-8 pb-6 border-b border-eclat-champagne/40 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium block">
              Olfactory Diagnosis
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-eclat-espresso font-light">
              Your Signature Flacon
            </h3>
          </div>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center space-x-1 text-xs text-eclat-slate hover:text-eclat-espresso uppercase tracking-wider transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Over</span>
          </button>
        </div>
      )}

      {/* Step 1: Scent Family */}
      {step === 1 && (
        <div className="space-y-3">
          {[
            { id: 'amber', title: 'Golden Amber & Spices', desc: 'Warm resins, Bourbon vanilla, toasted cardamom, and glowing hearths.' },
            { id: 'woody', title: 'Deep Forests & Vetiver', desc: 'Charred birch, damp cypress needles, dark earth, and grounded roots.' },
            { id: 'floral', title: 'Powdery Orris & Silk Peony', desc: 'Tactile iris root, soft cashmere petals, and cool marble elegance.' },
            { id: 'citrus', title: 'Calabrian Bergamot & Sunlit Neroli', desc: 'Crystalline zest, green mandarin, and Mediterranean daylight.' },
            { id: 'oriental', title: 'Wild Agarwood & Dark Honey', desc: 'Seven-year aged oud, Somalian myrrh, and burnished saddle leather.' }
          ].map(opt => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFamilyChoice(opt.id)}
              className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                familyChoice === opt.id
                  ? 'border-eclat-espresso bg-eclat-limestone text-eclat-espresso shadow-sm ring-1 ring-eclat-espresso'
                  : 'border-eclat-champagne/60 hover:border-eclat-pebble bg-white/50 text-eclat-espresso'
              }`}
            >
              <div>
                <span className="font-serif text-lg block">{opt.title}</span>
                <span className="text-xs text-eclat-slate font-sans mt-0.5 block">{opt.desc}</span>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 ${
                familyChoice === opt.id ? 'border-eclat-espresso bg-eclat-espresso' : 'border-eclat-champagne'
              }`}>
                {familyChoice === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Desired Mood */}
      {step === 2 && (
        <div className="space-y-3">
          {[
            { id: 'warm', title: 'Intimate & Warm', desc: 'Welcoming, sensual warmth that draws others close.' },
            { id: 'mysterious', title: 'Mysterious & Deep', desc: 'Shadowy, intellectual gravity with an enigmatic finish.' },
            { id: 'luminous', title: 'Crisp & Luminous', desc: 'Vibrant, sharp, and sun-drenched mental clarity.' },
            { id: 'ethereal', title: 'Romantic & Ethereal', desc: 'Whisper-soft suede texture, soothing and poetic.' },
            { id: 'bold', title: 'Confident & Untamed', desc: 'Striking mineral edge that commands quiet attention.' },
            { id: 'regal', title: 'Regal & Magnetic', desc: 'Opulent, unforgettable presence with majestic sillage.' }
          ].map(opt => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setMoodChoice(opt.id)}
              className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                moodChoice === opt.id
                  ? 'border-eclat-espresso bg-eclat-limestone text-eclat-espresso shadow-sm ring-1 ring-eclat-espresso'
                  : 'border-eclat-champagne/60 hover:border-eclat-pebble bg-white/50 text-eclat-espresso'
              }`}
            >
              <div>
                <span className="font-serif text-lg block">{opt.title}</span>
                <span className="text-xs text-eclat-slate font-sans mt-0.5 block">{opt.desc}</span>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 ${
                moodChoice === opt.id ? 'border-eclat-espresso bg-eclat-espresso' : 'border-eclat-champagne'
              }`}>
                {moodChoice === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 3: Everyday vs Occasion */}
      {step === 3 && (
        <div className="space-y-3">
          {[
            { id: 'everyday', title: 'Daily Signature', desc: 'Refined, versatile, comfortable on skin from dawn to dusk.' },
            { id: 'evening', title: 'Evening & Intimate', desc: 'Deeper dry-down tailored for close gatherings and dinner.' },
            { id: 'special', title: 'Ceremonial & Nocturnal', desc: 'High-concentration sillage designed to leave a lasting room presence.' }
          ].map(opt => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setOccasionChoice(opt.id)}
              className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                occasionChoice === opt.id
                  ? 'border-eclat-espresso bg-eclat-limestone text-eclat-espresso shadow-sm ring-1 ring-eclat-espresso'
                  : 'border-eclat-champagne/60 hover:border-eclat-pebble bg-white/50 text-eclat-espresso'
              }`}
            >
              <div>
                <span className="font-serif text-lg block">{opt.title}</span>
                <span className="text-xs text-eclat-slate font-sans mt-0.5 block">{opt.desc}</span>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 ${
                occasionChoice === opt.id ? 'border-eclat-espresso bg-eclat-espresso' : 'border-eclat-champagne'
              }`}>
                {occasionChoice === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step Controls (1 to 3) */}
      {step < 4 && (
        <div className="mt-8 pt-6 border-t border-eclat-champagne/40 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center space-x-1.5 text-xs text-eclat-slate hover:text-eclat-espresso uppercase tracking-wider"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : <div />}

          <button
            type="button"
            disabled={
              (step === 1 && !familyChoice) ||
              (step === 2 && !moodChoice) ||
              (step === 3 && !occasionChoice)
            }
            onClick={handleNext}
            className="inline-flex items-center space-x-2 bg-eclat-espresso text-eclat-ivory px-6 py-3 text-xs uppercase tracking-ultra-wide font-medium disabled:opacity-40 disabled:pointer-events-none hover:bg-eclat-espresso-light transition-colors rounded-sm"
          >
            <span>{step === 3 ? 'Reveal Match' : 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 4: Recommended Fragrance Match */}
      {step === 4 && matchedProduct && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Bottle Image on Plinth */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-gradient-to-b from-eclat-limestone/40 to-eclat-limestone/80 p-6 rounded-sm relative min-h-[260px]">
              <img
                src={matchedProduct.bottleImage}
                alt={matchedProduct.name}
                className="w-44 h-auto max-h-[260px] object-contain drop-shadow-xl"
              />
              <div className="w-28 h-3 rounded-full bg-black/10 blur-[4px] mt-2" />
            </div>

            {/* Match Information */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
                <span>{matchedProduct.collectionNumber}</span>
                <span>&bull;</span>
                <span>{matchedProduct.scentFamily}</span>
              </div>

              <h4 className="font-serif text-3xl text-eclat-espresso font-light">
                {matchedProduct.name}
              </h4>
              <p className="text-xs font-serif italic text-eclat-slate">
                {matchedProduct.subtitle}
              </p>

              {/* Deterministic Explanation */}
              <div className="p-3.5 bg-eclat-limestone/70 border-l-2 border-eclat-amber rounded-r text-xs text-eclat-espresso/90 leading-relaxed font-sans">
                {matchReason}
              </div>

              <div className="pt-2 text-xs text-eclat-slate space-y-1 font-sans">
                <p><span className="font-medium text-eclat-espresso">Key Notes:</span> {matchedProduct.topNotes[0]}, {matchedProduct.heartNotes[0]}, {matchedProduct.baseNotes[0]}</p>
                <p><span className="font-medium text-eclat-espresso">Starting from:</span> {formatPrice(matchedProduct.sizes[0].price)} ({matchedProduct.sizes[0].volume})</p>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/product/${matchedProduct.slug}`}
                  className="inline-flex items-center justify-center space-x-2 bg-eclat-espresso text-eclat-ivory px-5 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light transition-colors text-center"
                >
                  <span>Explore Flacon Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={handleAddMatched}
                  className="inline-flex items-center justify-center space-x-2 border border-eclat-espresso text-eclat-espresso hover:bg-eclat-espresso hover:text-white px-5 py-3 text-xs uppercase tracking-ultra-wide font-medium transition-colors"
                >
                  {added ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add {matchedProduct.sizes[0].volume} to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
