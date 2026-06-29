import { GalleryItem, ServicePackage, Testimonial, BlogPost, FAQItem } from './types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'p1',
    title: 'The Silent Gaze',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200',
    description: 'An intimate study of emotion and depth in portraiture, capturing subtle shadow gradients across the face.',
    location: 'Studio, Chinsurah',
    date: '2026-03-12',
    aperture: 'f/1.4',
    shutterSpeed: '1/250s',
    iso: '100'
  },
  {
    id: 'f1',
    title: 'Haute Couture Noir',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
    description: 'High-end avant-garde fashion editorial, focusing on geometric fabric silhouettes and strong key lighting.',
    location: 'Paris, France',
    date: '2026-05-18',
    aperture: 'f/2.8',
    shutterSpeed: '1/500s',
    iso: '200'
  },
  {
    id: 'w1',
    title: 'Infinite Promises',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    description: 'A cinematic moment of quiet connection as the wind catches the bridal veil under warm twilight skies.',
    location: 'Amalfi Coast, Italy',
    date: '2026-04-22',
    aperture: 'f/1.8',
    shutterSpeed: '1/200s',
    iso: '160'
  },
  {
    id: 's1',
    title: 'Midnight Reflections',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200',
    description: 'Street photography capturing glowing storefront reflections on rainy asphalt streets at midnight.',
    location: 'Tokyo, Japan',
    date: '2026-01-05',
    aperture: 'f/1.2',
    shutterSpeed: '1/80s',
    iso: '800'
  },
  {
    id: 'n1',
    title: 'The Whispering Pines',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200',
    description: 'Ethereal mist clinging to alpine pines, exploring patterns of scale, air, and deep natural stillness.',
    location: 'Yosemite, USA',
    date: '2025-10-15',
    aperture: 'f/8.0',
    shutterSpeed: '1/125s',
    iso: '100'
  },
  {
    id: 'wl1',
    title: 'The Sovereign',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=1200',
    description: 'A striking close-up of a majestic male lion, embodying pride and quiet wild authority.',
    location: 'Serengeti, Tanzania',
    date: '2025-11-04',
    aperture: 'f/4.0',
    shutterSpeed: '1/1000s',
    iso: '400'
  },
  {
    id: 't1',
    title: 'Whispering Waterways',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    description: 'A wooden boat glides across a crystalline lake nestled between towering mountain walls.',
    location: 'Hallstatt, Austria',
    date: '2026-02-28',
    aperture: 'f/5.6',
    shutterSpeed: '1/320s',
    iso: '200'
  },
  {
    id: 'p2',
    title: 'Elegance in Shadows',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200',
    description: 'Low-key lighting highlighting classic facial symmetry and reflective poise.',
    location: 'Milano, Italy',
    date: '2026-06-01',
    aperture: 'f/2.0',
    shutterSpeed: '1/160s',
    iso: '100'
  },
  {
    id: 'f2',
    title: 'Structural Silence',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    description: 'Chic editorial portrait exploring trench coat structures and dramatic shadows against raw concrete.',
    location: 'London, UK',
    date: '2026-04-10',
    aperture: 'f/2.8',
    shutterSpeed: '1/400s',
    iso: '100'
  },
  {
    id: 'w2',
    title: 'Intimate Lace',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    description: 'Macro detail focusing on delicate hand-sewn lace work of a bridal veil catches high morning rays.',
    location: 'Provence, France',
    date: '2026-05-30',
    aperture: 'f/2.4',
    shutterSpeed: '1/250s',
    iso: '200'
  },
  {
    id: 's2',
    title: 'Concrete Ascent',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Abstract high-contrast architectural framing of skyscrapers reaching into a clear winter sky.',
    location: 'Chicago, USA',
    date: '2025-12-18',
    aperture: 'f/11',
    shutterSpeed: '1/250s',
    iso: '100'
  },
  {
    id: 'n2',
    title: 'Ridge of Solitude',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
    description: 'A vast mountain range peeking through dense rolling clouds, showcasing high dynamic range details.',
    location: 'Swiss Alps',
    date: '2026-03-05',
    aperture: 'f/8.0',
    shutterSpeed: '1/500s',
    iso: '100'
  },
  {
    id: 'wl2',
    title: 'The Forest Sentry',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1200',
    description: 'A majestic deer standing alert in mist-laden woods as early morning light filters through the canopy.',
    location: 'Black Forest, Germany',
    date: '2025-09-27',
    aperture: 'f/4.0',
    shutterSpeed: '1/160s',
    iso: '400'
  },
  {
    id: 't2',
    title: 'Timeless Cliffside',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    description: 'Monochrome ocean waves battering rugged volcanic sea cliffs during a brooding summer storm.',
    location: 'Santorini, Greece',
    date: '2025-08-14',
    aperture: 'f/5.6',
    shutterSpeed: '1/800s',
    iso: '100'
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'srv-portrait',
    title: 'Editorial Portraiture',
    price: '$450',
    duration: '2 Hours Session',
    description: 'Tailored for professionals, actors, and creatives who want a highly sophisticated, cinematic, black-and-white visual profile.',
    deliverables: [
      'Pre-shoot conceptual consultation',
      'Studio or dynamic outdoor location',
      '15 high-fidelity fully retouched editorial prints',
      'Full private digital archive access',
      'Commercial usage release rights'
    ]
  },
  {
    id: 'srv-wedding',
    title: 'Luxury Wedding Stories',
    price: '$2,800',
    duration: 'Full Day Coverage',
    description: 'A bespoke service to capture every authentic, high-emotion moment of your milestone with award-winning aesthetic composition.',
    deliverables: [
      'Comprehensive full-day coverage (up to 10 hours)',
      'Photographer & professional assistant',
      '150+ hand-curated art edited images',
      'Premium custom leather-bound linen photo album',
      'Online digital gallery ready in 3 weeks'
    ],
    featured: true
  },
  {
    id: 'srv-fashion',
    title: 'High-Fashion Editorial',
    price: '$1,200',
    duration: '4 Hours Session',
    description: 'A high-impact conceptual campaign package designed specifically for designers, boutiques, models, and agency-level portfolios.',
    deliverables: [
      'Creative direction & moodboarding',
      'Multiple luxury outfits & hair/makeup setups supported',
      '30 high-contrast hand-retouched editorial masterworks',
      'Optimized digital files for social & web campaigns',
      'Full publication credits & high-res print files'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'tst-1',
    name: 'Alessandra Vance',
    role: 'Creative Director, VOGUE Art',
    quote: 'Bappa has an extraordinary, almost vintage sensitivity to light and deep contrast. His work goes far beyond mere documentation—it is authentic visual storytelling that feels timeless and deeply poetic.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: 'tst-2',
    name: 'Julian & Claire Vance',
    role: 'Amalfi Coast Wedding Client',
    quote: 'Every single picture feels like a cinematic film still from a black and white French romance. We are utterly speechless at his professionalism, stealth-like positioning, and jaw-dropping talent.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: 'tst-3',
    name: 'Marcus K.',
    role: 'Founder, K-Minimalist Studios',
    quote: 'If you want photography that demands attention and looks like high-art print, Bappa Capture is the definitive choice. Absolute geometric and framing perfection.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b-shadow',
    title: 'The Poetics of Shadow: Designing Luxury in Monochrome',
    excerpt: 'Explore how stripping color from photography shifts emphasis from the literal to the emotional. Learn how to control high-dynamic range shadows.',
    content: `Strip away color, and you immediately strip away distraction. The human brain perceives monochrome not as a missing spectrum, but as a heightened study of geometry, texture, and light.

In this editorial piece, we explore how bappa capture utilizes extreme key lighting and dramatic dark spaces to create luxury visual branding. When you compose a photo with only blacks, whites, and an infinite gradient of grays, the subject is forced into sharp focus.

Key elements of monochrome luxury:
1. **Contrast Ratio**: The transition between the brightest highlights and the deepest, ink-like shadows should feel intentional.
2. **Textural Grain**: Adding a subtle, organic silver-halide grain texture evokes a feeling of physical paper and luxury craftsmanship.
3. **Leading Lines**: Without color temperature guides, your eyes rely strictly on visual geometric leading lines.`,
    category: 'Art Theory',
    date: '2026-06-15',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b-gear',
    title: 'Chasing Cinematic Atmosphere: My Absolute Go-To Leica Gear',
    excerpt: 'An inside look at the specific optical lenses and full-frame camera setups bappa capture uses on active high-end fashion shoots.',
    content: `Many clients ask what creates the iconic, high-end "bappa capture" look. While lighting, emotion, and placement are 90% of the art, the choice of optics plays a critical role in rendering high-resolution, buttery focus falloff.

My primary setups:
- **Leica M11 Monochrom**: A dedicated digital camera designed solely to capture pure luminance without color filtering. The sharpness is unparalleled.
- **Summilux-M 50mm f/1.4 ASPH**: The absolute gold standard for portraits. Wide open, it isolates subjects with a gorgeous, gentle falloff.
- **Summicron-M 28mm f/2 ASPH**: My trusted companion for street and landscape. It renders deep, architectural leading lines with zero distortion.`,
    category: 'Gear Guide',
    date: '2026-05-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b-wedding',
    title: 'Stealth and Romance: Documenting Italian Weddings Unobtrusively',
    excerpt: 'How to capture high-emotion candids without disrupting the natural luxury rhythm of destination matrimonial ceremonies.',
    content: `A luxury wedding should never feel like a film set. The role of a high-end photographer is to behave like an invisible guest—someone who blends seamlessly into the crowd while capturing priceless moments.

Here are the key principles we follow to maintain respect, class, and absolute precision:
1. **Silent Shutter Mode**: Eliminating mechanical shutter clicks to maintain absolute auditory silence during sacred vow exchanges.
2. **Natural Lighting Focus**: Avoiding intrusive flash equipment unless completely necessary, keeping the warm, romantic ambient candles in play.
3. **Anticipating the Frame**: Studying couples' natural micro-expressions to capture the tear, the shared smile, or the gentle touch before it passes.`,
    category: 'Behind the Scenes',
    date: '2026-04-18',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I secure a booking?',
    answer: 'For luxury portraiture and editorial campaigns, we recommend booking at least 4 to 6 weeks in advance. For weddings and international travel shoots, bookings typically fill up 6 to 12 months ahead due to travel planning requirements.'
  },
  {
    id: 'faq-2',
    question: 'Do you deliver raw files or unedited photographs?',
    answer: 'To preserve our high standards of prestige and the brand integrity of bappa capture, we never deliver raw or unedited files. Every photograph you receive is hand-selected and carefully edited to reflect our signature high-contrast luxury aesthetic.'
  },
  {
    id: 'faq-3',
    question: 'Are you available for international destination travel shoots?',
    answer: 'Absolutely. We regularly photograph editorial and wedding collections worldwide, including Paris, Amalfi Coast, Tokyo, and London. Travel expenses are calculated transparently and added to the selected photography package.'
  },
  {
    id: 'faq-4',
    question: 'What happens if we need to reschedule due to unforeseen weather?',
    answer: 'For all outdoor nature or travel sessions, we actively monitor atmospheric forecasts. In the event of heavy rain or sub-optimal lighting, we offer one complimentary reschedule date within 3 months.'
  }
];
