export interface IngredientStory {
  id: string;
  category: string;
  title: string;
  botanicalName: string;
  origin: string;
  harvestMethod: string;
  description: string;
  olfactoryCharacter: string;
  image: string;
  accentNote: string;
}

export const ingredientStories: IngredientStory[] = [
  {
    id: 'amber',
    category: 'The Resins',
    title: 'Fossilized Amber & Labdanum',
    botanicalName: 'Pinus succinifera / Cistus ladanifer',
    origin: 'Baltic Coast & Andalusia',
    harvestMethod: 'Hand-collected rock resin aged over twenty-four months in dry pine cellars.',
    description: 'Ancient warmth distilled into molten resin. Baltic amber yields an intimate, honeyed smokiness when paired with wild rockrose labdanum from the sun-baked hillsides of Andalusia. It forms the tactile foundation of our evening compositions.',
    olfactoryCharacter: 'Resinous, warm balsamic, golden honey, and smoked leather undertones.',
    image: '/images/ingredients/amber-resin.jpg',
    accentNote: 'Found in Ambre Velours & Oud Absolu'
  },
  {
    id: 'woods',
    category: 'The Forests',
    title: 'Aged Wild Vetiver & Birch',
    botanicalName: 'Chrysopogon zizanioides / Betula alba',
    origin: 'Les Cayes, Haiti & Nordic Birch Groves',
    harvestMethod: 'Root harvest after 18 months in volcanic soil, water-distilled over 36 hours.',
    description: 'Vetiver roots gather the quiet mineral tension of the earth. Steam-distilled slowly in copper alembics, the extract carries damp forest soil, green smoke, and an unhurried woody gravity that clings gracefully to linen and wool.',
    olfactoryCharacter: 'Earthy, dry smoke, petrichor, crushed needles, and rooted cedar.',
    image: '/images/ingredients/vetiver-roots.jpg',
    accentNote: 'Found in Bois Nocturne'
  },
  {
    id: 'florals',
    category: 'The Petals',
    title: 'Three-Year Florentine Orris',
    botanicalName: 'Iris pallida',
    origin: 'Chianti Hills, Tuscany',
    harvestMethod: 'Rhizomes dried in darkness for 36 months before slow cryogenic milling.',
    description: 'More precious by weight than gold leaf, the rhizomes of the Florentine iris must rest undisturbed in cool cellars for three full years to convert their starches into irone molecules. The result is an ethereal, powdered suede texture unlike any other floral extract.',
    olfactoryCharacter: 'Powdered silk, violet leaf, cool marble, and warm cashmere skin.',
    image: '/images/ingredients/orris-root.jpg',
    accentNote: 'Found in Fleur de Soie'
  },
  {
    id: 'citrus',
    category: 'The Groves',
    title: 'Dawn-Harvested Bergamot',
    botanicalName: 'Citrus bergamia',
    origin: 'Reggio Calabria, Southern Italy',
    harvestMethod: 'Hand-picked before sunrise to preserve the fugitive top-tier volatile terpenes.',
    description: 'Between the Ionian Sea and the Aspromonte mountains, a microclimate produces bergamot of crystalline purity. Cold-pressed directly from the golden rind, it bursts with bright aromatic light before drying down into subtle green floral tea nuances.',
    olfactoryCharacter: 'Luminous zest, bitter green rind, sun-warmed floral nectar, and ozone.',
    image: '/images/ingredients/bergamot-harvest.jpg',
    accentNote: 'Found in Citrus Lumière'
  }
];
