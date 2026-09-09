export interface FragranceSize {
  volume: string; // e.g. '50ml', '100ml', '15ml'
  price: number;  // Price in PKR
  description: string;
}

export interface Product {
  id: string;
  collectionNumber: string;
  slug: string;
  name: string;
  subtitle: string;
  scentFamily: string;
  shortDescription: string;
  longDescription: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  concentration: string;
  mood: string;
  occasion: string;
  sizes: FragranceSize[];
  bottleImage: string;
  detailImage: string;
  ingredientHeroImage: string;
  featured: boolean;
  intensity: number;
  longevity: string;
}

export const fragrances: Product[] = [
  {
    id: 'eclat-01',
    collectionNumber: '01',
    slug: 'vetiver-sauvage',
    name: 'Vetiver Sauvage',
    subtitle: 'Wild Haitian Vetiver & Coastal Cypress',
    scentFamily: 'Woody · Aromatic',
    shortDescription: 'Untamed forestry captured through crisp pine needles, damp green vetiver, and smoky birch bark.',
    longDescription: 'Vetiver Sauvage opens with a surge of damp cypress foliage and bitter angelica root, grounded in eighteen-month wild Haitian vetiver roots distilled slowly in copper alembics.',
    topNotes: ['Damp Cypress Needle', 'Bitter Angelica Root', 'Crisp Pine Resins'],
    heartNotes: ['Haitian Vetiver Roots', 'Smoked Birch Bark', 'Dark Patchouli'],
    baseNotes: ['Fumed Oakwood', 'Spanish Guaiac', 'Black Ambergris'],
    concentration: 'Extrait de Parfum (26% Concentration)',
    mood: 'Mysterious & Deep',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 42000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 28000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 12000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-9.webp',
    detailImage: '/images/products/bois-nocturne-detail.jpg',
    ingredientHeroImage: '/images/ingredients/vetiver-roots.jpg',
    featured: true,
    intensity: 4,
    longevity: '12+ Hours'
  },
  {
    id: 'eclat-02',
    collectionNumber: '02',
    slug: 'ambre-velours',
    name: 'Ambre Velours',
    subtitle: 'Warm Baltic Amber & Bourbon Vanilla',
    scentFamily: 'Amber · Oriental',
    shortDescription: 'Golden resinous warmth enveloped in velvety benzoin, toasted cardamom, and Bourbon vanilla.',
    longDescription: 'Ambre Velours evokes the twilight hush of a stone atelier in Provence. Rare fossilized amber harmonizes with dry labdanum, cushioned by the tactile richness of whole vanilla pods and smoked Atlas cedar.',
    topNotes: ['Crushed Pink Pepper', 'Bergamot Peel', 'Sun-Dried Cardamom'],
    heartNotes: ['Golden Amber Resin', 'Cistus Labdanum', 'Smoked Benzoin'],
    baseNotes: ['Bourbon Vanilla Bean', 'White Musk', 'Atlas Cedarwood'],
    concentration: 'Extrait de Parfum (28% Concentration)',
    mood: 'Intimate & Warm',
    occasion: 'Evening',
    sizes: [
      { volume: '100ml', price: 46000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 31000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 14000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-8.webp',
    detailImage: '/images/products/ambre-velours-detail.jpg',
    ingredientHeroImage: '/images/ingredients/amber-resin.jpg',
    featured: true,
    intensity: 4,
    longevity: '14+ Hours'
  },
  {
    id: 'eclat-03',
    collectionNumber: '03',
    slug: 'fleur-de-soie',
    name: 'Fleur de Soie',
    subtitle: 'Florentine Orris & Silk Peony Bloom',
    scentFamily: 'Floral · Musky',
    shortDescription: 'A powdery veil of rare Florentine iris butter, white peony, and whisper-soft cashmere musk.',
    longDescription: 'Tactile and serene, Fleur de Soie captures the sensation of cool silk grazing warm skin. Three-year aged Florentine orris root provides a creamy, powdered depth brightened by white peony petals and clean cashmere wood.',
    topNotes: ['White Nectarine Skin', 'Morning Dew Peony', 'Ambrette Seed'],
    heartNotes: ['Aged Florentine Orris', 'Turkish Rose Water', 'Magnolia Bloom'],
    baseNotes: ['Cashmere Woods', 'Powdered Heliotrope', 'Clean Skin Musk'],
    concentration: 'Extrait de Parfum (25% Concentration)',
    mood: 'Romantic & Ethereal',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 38000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 26000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 11000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-1.webp',
    detailImage: '/images/products/fleur-de-soie-detail.jpg',
    ingredientHeroImage: '/images/ingredients/orris-root.jpg',
    featured: true,
    intensity: 3,
    longevity: '9+ Hours'
  },
  {
    id: 'eclat-04',
    collectionNumber: '04',
    slug: 'bois-nocturne',
    name: 'Bois Nocturne',
    subtitle: 'Smoked Birch & Dark Haitian Patchouli',
    scentFamily: 'Woody · Amber',
    shortDescription: 'Midnight forestry captured through dark cypress leaves, charred birch, and earthy vetiver roots.',
    longDescription: 'A sanctuary in the deep woods at midnight. Bois Nocturne opens with damp Mediterranean pine needles before descending into smoldering birch tar and wild patchouli leaves.',
    topNotes: ['Pine Resin', 'Crushed Juniper', 'Bitter Angelica'],
    heartNotes: ['Smoked Birch Tar', 'Dark Patchouli', 'Vetiver Root'],
    baseNotes: ['Fumed Oak', 'Spanish Guaiac', 'Black Ambergris'],
    concentration: 'Eau de Parfum (22% Concentration)',
    mood: 'Mysterious & Deep',
    occasion: 'Evening',
    sizes: [
      { volume: '100ml', price: 44000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 29000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 13000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-4.webp',
    detailImage: '/images/products/bois-nocturne-detail.jpg',
    ingredientHeroImage: '/images/ingredients/vetiver-roots.jpg',
    featured: false,
    intensity: 4,
    longevity: '11+ Hours'
  },
  {
    id: 'eclat-05',
    collectionNumber: '05',
    slug: 'iris-celeste',
    name: 'Iris Celeste',
    subtitle: 'Violet Leaf & Tuscan Iris Butter',
    scentFamily: 'Floral · Powdery',
    shortDescription: 'Powdered suede texture paired with violet leaf and clean white cedarwood.',
    longDescription: 'Crafted around rare Tuscan iris rhizomes cured for three years, Iris Celeste delivers an aristocratic sillage reminiscent of library leather, powdered suede, and pale dawn sunlight.',
    topNotes: ['Violet Leaf', 'Ozone Dew', 'Cardamom Pod'],
    heartNotes: ['Tuscan Iris Butter', 'Heliotrope', 'Mimosa Nectar'],
    baseNotes: ['White Cedarwood', 'Ambrette Seed', 'Clean Musks'],
    concentration: 'Extrait de Parfum (27% Concentration)',
    mood: 'Romantic & Ethereal',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 41000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 27000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 12000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-10.webp',
    detailImage: '/images/products/fleur-de-soie-detail.jpg',
    ingredientHeroImage: '/images/ingredients/orris-root.jpg',
    featured: false,
    intensity: 3,
    longevity: '10+ Hours'
  },
  {
    id: 'eclat-06',
    collectionNumber: '06',
    slug: 'santal-azur',
    name: 'Santal Azur',
    subtitle: 'Australian Sandalwood & Cold Sea Minerals',
    scentFamily: 'Spicy · Woody',
    shortDescription: 'Creamy Australian sandalwood enveloped in cool cardamom, sea salt, and mineral amber.',
    longDescription: 'A meeting of arid coastal desert and azure ocean currents. Creamy sandalwood timber is freshened by crushed green cardamom, sea foam, and golden ambergris.',
    topNotes: ['Cold Green Cardamom', 'Sea Salt Crystals', 'Pink Peppercorn'],
    heartNotes: ['Australian Sandalwood', 'Blue Cypress', 'Papyrus'],
    baseNotes: ['Mineral Amber', 'Grey Ambergris', 'Smoked Vetiver'],
    concentration: 'Eau de Parfum (24% Concentration)',
    mood: 'Confident & Bold',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 45000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 30000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 13500, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-6.webp',
    detailImage: '/images/products/citrus-lumiere-detail.jpg',
    ingredientHeroImage: '/images/ingredients/vetiver-roots.jpg',
    featured: false,
    intensity: 4,
    longevity: '11+ Hours'
  },
  {
    id: 'eclat-07',
    collectionNumber: '07',
    slug: 'citrus-lumiere',
    name: 'Citrus Lumière',
    subtitle: 'Calabrian Bergamot & Sunlit Petitgrain',
    scentFamily: 'Fresh · Citrus',
    shortDescription: 'Radiant morning citrus harvested at dawn, tempered with orange blossom and white amber.',
    longDescription: 'Cold-pressed Calabrian bergamot zest and bitter orange petitgrain marry fragile neroli blossoms and an airy crystalline cedar baseline.',
    topNotes: ['Cold-Pressed Bergamot', 'Green Mandarin', 'Sicilian Lemon'],
    heartNotes: ['Tunisian Neroli', 'Orange Blossom Absolute', 'Mint Leaf'],
    baseNotes: ['Sunlit Petitgrain', 'White Amber', 'Clean Cedar'],
    concentration: 'Eau de Parfum (20% Concentration)',
    mood: 'Crisp & Luminous',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 36000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 24000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 10500, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-2.webp',
    detailImage: '/images/products/citrus-lumiere-detail.jpg',
    ingredientHeroImage: '/images/ingredients/bergamot-harvest.jpg',
    featured: false,
    intensity: 3,
    longevity: '8+ Hours'
  },
  {
    id: 'eclat-08',
    collectionNumber: '08',
    slug: 'rose-minerale',
    name: 'Rose Minérale',
    subtitle: 'Damascena Rose & Wet Ocean Slate',
    scentFamily: 'Mineral · Floral',
    shortDescription: 'A modern, untamed rose blooming against ocean cliffs, infused with saline breeze and cold stone.',
    longDescription: 'Wild Bulgarian Damascena roses stripped of conventional sweetness, blended with wet coastal slate, sea salt crystals, and cold pink pepper.',
    topNotes: ['Sea Salt Spray', 'Cold Pink Pepper', 'Ozone Breeze'],
    heartNotes: ['Bulgarian Damascena Rose', 'Geranium Leaf', 'Wet Slate Accord'],
    baseNotes: ['Grey Ambergris', 'Mineral Frankincense', 'Sheer Sandalwood'],
    concentration: 'Extrait de Parfum (25% Concentration)',
    mood: 'Confident & Bold',
    occasion: 'Evening',
    sizes: [
      { volume: '100ml', price: 39000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 26500, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 11500, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-5.webp',
    detailImage: '/images/products/rose-minerale-detail.jpg',
    ingredientHeroImage: '/images/ingredients/damask-rose.jpg',
    featured: false,
    intensity: 4,
    longevity: '11+ Hours'
  },
  {
    id: 'eclat-09',
    collectionNumber: '09',
    slug: 'oud-absolu',
    name: 'Oud Absolu',
    subtitle: '7-Year Wild Cambodian Agarwood & Thyme Honey',
    scentFamily: 'Smoky · Oriental',
    shortDescription: 'Aristocratic wild agarwood aged in teak barrels, enriched with dark leather, honey, and myrrh.',
    longDescription: 'Sustainably sourced wild Cambodian agarwood aged for seven years, producing a profound woody depth bathed in mountain honey and smoky Somalian myrrh.',
    topNotes: ['Smoked Cardamom', 'Wild Thyme Honey', 'Saffron Threads'],
    heartNotes: ['Aged Cambodian Agarwood', 'Somalian Myrrh', 'Cypriol Nagarmotha'],
    baseNotes: ['Burnished Leather', 'Dark Tonka Bean', 'Smoldering Labdanum'],
    concentration: 'Extrait de Parfum (30% Concentration)',
    mood: 'Regal & Magnetic',
    occasion: 'Special Occasion',
    sizes: [
      { volume: '100ml', price: 52000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 36000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 16000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-11.webp',
    detailImage: '/images/products/oud-absolu-detail.jpg',
    ingredientHeroImage: '/images/ingredients/oud-wood.jpg',
    featured: false,
    intensity: 5,
    longevity: '14+ Hours'
  },
  {
    id: 'eclat-10',
    collectionNumber: '10',
    slug: 'cedre-blanc',
    name: 'Cèdre Blanc',
    subtitle: 'Atlas Cedar & Crushed White Pepper',
    scentFamily: 'Crisp · Woody',
    shortDescription: 'Pristine mountain cedarwood infused with white pepper, dry juniper, and sheer resin.',
    longDescription: 'High altitude mountain clarity. Cèdre Blanc distills sunlight reflecting on limestone peaks, featuring wild Atlas cedarwood softened by juniper berry and sheer white musks.',
    topNotes: ['White Peppercorn', 'Juniper Berry', 'Bitter Bergamot'],
    heartNotes: ['Atlas Cedarwood', 'Nutmeg', 'Frankincense Tears'],
    baseNotes: ['Clean Sandalwood', 'White Resins', 'Cashmere Wool'],
    concentration: 'Eau de Parfum (22% Concentration)',
    mood: 'Crisp & Luminous',
    occasion: 'Everyday',
    sizes: [
      { volume: '100ml', price: 37000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 25000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 11000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-7.webp',
    detailImage: '/images/products/bois-nocturne-detail.jpg',
    ingredientHeroImage: '/images/ingredients/vetiver-roots.jpg',
    featured: false,
    intensity: 3,
    longevity: '9+ Hours'
  },
  {
    id: 'eclat-11',
    collectionNumber: '11',
    slug: 'cuir-imperial',
    name: 'Cuir Impérial',
    subtitle: 'Tuscan Suede & Golden Saffron',
    scentFamily: 'Leather · Warm',
    shortDescription: 'Tactile suede, golden Persian saffron threads, and smoked Osmanthus flowers.',
    longDescription: 'An olfactory tribute to artisanal saddlery. Soft Tuscan suede is bathed in precious saffron, apricot-tinged Osmanthus petals, and dark birch tar.',
    topNotes: ['Persian Saffron', 'Wild Raspberry', 'Thyme Leaf'],
    heartNotes: ['Tuscan Suede', 'Osmanthus Flower', 'Smoked Birch'],
    baseNotes: ['Dark Leather', 'Ambergris', 'Vanilla Pod'],
    concentration: 'Extrait de Parfum (28% Concentration)',
    mood: 'Regal & Magnetic',
    occasion: 'Evening',
    sizes: [
      { volume: '100ml', price: 48000, description: 'Signature Atelier Vessel' },
      { volume: '50ml', price: 33000, description: 'Sculpted Flacon with Brass Stopper' },
      { volume: '15ml', price: 15000, description: 'Travel Atomizer in Leather Sheath' }
    ],
    bottleImage: '/images/products/p-3.webp',
    detailImage: '/images/products/ambre-velours-detail.jpg',
    ingredientHeroImage: '/images/ingredients/amber-resin.jpg',
    featured: false,
    intensity: 5,
    longevity: '13+ Hours'
  }
];

export const SCENT_FAMILIES = [
  'All Families',
  'Woody · Aromatic',
  'Amber · Oriental',
  'Floral · Musky',
  'Woody · Amber',
  'Floral · Powdery',
  'Spicy · Woody',
  'Fresh · Citrus',
  'Mineral · Floral',
  'Smoky · Oriental',
  'Crisp · Woody',
  'Leather · Warm'
] as const;
