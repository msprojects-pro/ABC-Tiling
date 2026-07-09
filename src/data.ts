import { Service, GalleryItem, Testimonial } from './types';

// Let's import our generated image assets. 
// We will write normal imports for these since we know their paths.
const heroImage = '/images/hero_tiling_project_1783622047404.jpg';
const kitchenImage = '/images/kitchen_tiling_1783622067209.jpg';
const floorImage = '/images/floor_tiling_1783622085570.jpg';
const bathroomImage = '/images/bathroom_tiling_1783622102706.jpg';

export const BUSINESS_INFO = {
  name: 'ABC Tiling Kent',
  tagline: 'Friendly • Reliable • Professional Tiling Services',
  description: 'Professional tiling specialists covering Greenhithe, Dartford, Gravesend, Longfield, Bean, New Barn and surrounding areas in Kent.',
  location: 'Greenhithe, Kent, United Kingdom',
  phone: '+44 7961 795424',
  phoneDisplay: '07961 795424',
  email: 'info.abctiling@gmail.com',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
  areasCovered: [
    'Greenhithe',
    'Dartford',
    'Gravesend',
    'Longfield',
    'Bean',
    'New Barn',
    'Swanscombe',
    'Ebbsfleet',
    'Stone',
    'Northfleet',
    'Southfleet',
    'Hartley'
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'bathroom',
    title: 'Bathroom Tiling',
    description: 'From luxury walk-in wet rooms to classic family bathrooms, we deliver flawless waterproofing and precision tile layouts.',
    icon: 'Bath',
    image: bathroomImage,
    features: [
      'Complete tanking & waterproofing',
      'Walk-in wetroom construction',
      'Niche & custom recess tiling',
      'Mosaic & accent walls'
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Tiling',
    description: 'Transform your kitchen with beautiful splashbacks, feature walls, and durable food-safe tiled surfaces.',
    icon: 'UtensilsCrossed',
    image: kitchenImage,
    features: [
      'Herringbone, metro, and brick bonds',
      'Splashbacks & cooking zones',
      'Kitchen island cladding',
      'Heat-resistant backing installation'
    ]
  },
  {
    id: 'floor',
    title: 'Floor Tiling',
    description: 'Stunning and durable tiled floors for high-traffic areas, including hallways, kitchens, open-plan spaces, and conservatories.',
    icon: 'Grid',
    image: floorImage,
    features: [
      'Perfect self-leveling preparation',
      'Symmetric tile layout patterns',
      'Anti-crack matting installation',
      'Flexible grouting for warmth shift'
    ]
  },
  {
    id: 'wall',
    title: 'Wall Tiling',
    description: 'Feature walls, decorative panels, and protective vertical surfaces tiled with artistic detail and crisp lines.',
    icon: 'Layers',
    image: bathroomImage, // fallback/reuse
    features: [
      'Perfect vertical alignment',
      'Mitered external corners (45-degree)',
      'Subway, hexagonal & chevron styles',
      'Full height or half-wall options'
    ]
  },
  {
    id: 'porcelain-ceramic',
    title: 'Porcelain & Ceramic',
    description: 'Expert installation of highly durable ceramic and porcelain tiles, utilizing specialist wet-cutting tools for clean edges.',
    icon: 'Hammer',
    image: heroImage,
    features: [
      'Specially cured wet-cutting techniques',
      'Large format porcelain (up to 1200mm)',
      'High-durability grout selections',
      'Glazed or unglazed tile specialists'
    ]
  },
  {
    id: 'natural-stone',
    title: 'Natural Stone Tiling',
    description: 'Exquisite installations of marble, limestone, travertine, granite, and slate tiles that add timeless organic value to your home.',
    icon: 'Gem',
    image: floorImage,
    features: [
      'Specialist sealing & protection',
      'Travertine, marble & limestone care',
      'Character matching & stone blending',
      'Stain-resistant defense seals'
    ]
  },
  {
    id: 'underfloor-heating',
    title: 'Underfloor Heating',
    description: 'Electric underfloor heating mat installation paired with thermal backer boards, providing cosy winter comfort underfoot.',
    icon: 'Flame',
    image: heroImage,
    features: [
      'Insulated tile backer board prep',
      'Electric heating mat layout',
      'Thermostat & sensor integration',
      'Thermal efficiency optimization'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Tiling',
    description: 'Professional, commercial-grade tiling services for showrooms, restaurants, retail units, and offices in Kent.',
    icon: 'Briefcase',
    image: floorImage,
    features: [
      'High-traffic slip-rated tiling',
      'Epoxy chemical-resistant grouting',
      'Flexible night & weekend scheduling',
      'Full health, safety & insurance compliance'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Luxury Wetroom & Custom Tiled Bath',
    category: 'bathroom',
    description: 'High-end charcoal tiling with geometric accents and warm mood lighting in a Greenhithe residence.',
    image: bathroomImage,
    size: 'Large-Format Porcelain'
  },
  {
    id: 'g2',
    title: 'Herringbone Kitchen Splashback',
    category: 'kitchen',
    description: 'Stunning white kitchen backsplash in herringbone style with crisp terracotta accents.',
    image: kitchenImage,
    size: 'Handmade Ceramic Metro'
  },
  {
    id: 'g3',
    title: 'Open Plan Ground Floor & Hallway',
    category: 'floor',
    description: 'Perfectly leveled slate-effect porcelain flooring extending throughout the open plan space.',
    image: floorImage,
    size: '900mm x 900mm Slate Porcelain'
  },
  {
    id: 'g4',
    title: 'Modern Floating Shower Niche',
    category: 'bathroom',
    description: 'Precision mitered bathroom niche with brass trim detailing and custom marble backing.',
    image: heroImage,
    size: 'Italian Calacatta Marble'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah L.',
    location: 'Greenhithe, Kent',
    rating: 5,
    text: 'ABC Tiling completely transformed our main bathroom. The herringbone layout they suggested is absolutely flawless, and they left our home spotless every day. Highly recommended!',
    service: 'Bathroom Tiling',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'David M.',
    location: 'Dartford, Kent',
    rating: 5,
    text: 'Extremely reliable, friendly, and exceptional quality of work. They tiled our large open-plan kitchen and living area perfectly. The terracotta trim highlights look stunning!',
    service: 'Kitchen Splashback & Floor Tiling',
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'James & Clara K.',
    location: 'New Barn, Kent',
    rating: 5,
    text: 'We had electric underfloor heating installed alongside large-format porcelain tiles in our new conservatory. They arrived right on time, stayed on budget, and the warm floor feels amazing. 5-star service.',
    service: 'Underfloor Heating & Floor Tiling',
    date: 'April 2026'
  },
  {
    id: 't4',
    name: 'Robert H.',
    location: 'Gravesend, Kent',
    rating: 5,
    text: 'Professional, efficient tiling contractor. Tiled our office reception and kitchen showroom on short notice. Clean grout lines, perfectly aligned, and did not disrupt our trading. Highly professional.',
    service: 'Commercial Showroom Tiling',
    date: 'March 2026'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Do you provide free tiling quotes in Kent?',
    answer: 'Yes! We offer 100% free, no-obligation site visits and detailed quotes for clients in Greenhithe, Dartford, Gravesend, and all surrounding Kent areas.'
  },
  {
    question: 'Which tiling materials can you install?',
    answer: 'We are certified specialists installing all types of tiles, including Porcelain, Ceramic, Marble, Granite, Limestone, Travertine, Slate, Terracotta, and Mosaic tiles.'
  },
  {
    question: 'Can you supply the tiles, adhesive, and grout?',
    answer: 'We typically supply premium-grade adhesives, waterproof tanking membranes, levelling systems, and matching professional grouts. We can either help you source the perfect tiles at trade discounts or install tiles you have already purchased.'
  },
  {
    question: 'Are you fully insured for domestic and commercial tiling?',
    answer: 'Yes, ABC Tiling Kent is fully covered by comprehensive Public Liability Insurance up to £5,000,000, giving you total peace of mind.'
  },
  {
    question: 'How long does a typical bathroom tiling project take?',
    answer: 'An average-sized bathroom tiling project usually takes between 3 to 5 working days. This includes surface preparation, water-proofing (tanking), tile layout, precision cutting, tile setting, overnight curing, grouting, and high-performance silicone sealing.'
  }
];
