// SARITA PUJARI Fashion Designer Portfolio Data
// Authentic assets directly structured from portfolio archive

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "tops" | "bottoms" | "dresses" | "co-ord-sets" | "collaborations" | "experiments";
  categoryLabel: string;
  year: string;
  coverImage: string;
  allImages: string[];
  galleryImages?: string[];
  detailImage?: string | null;
  concept: string;
  craftDetails: string;
  featured?: boolean;
  isExperiment?: boolean;
}

export const DESIGNER_INFO = {
  name: "SARITA PUJARI",
  titleLine1: "SARITA",
  titleLine2: "PUJARI",
  tagline: "Fashion Designer · Garment Maker",
  roleHeadline: "Fashion Designer · Garment Maker · Creative Explorer",
  locationBadge: "INDEPENDENT FASHION DESIGNER & GARMENT MAKER",
  signatureStatement: [
    "I make clothes.",
    "I collect ideas.",
    "I create stories."
  ],
  heroIntro: "I explore silhouettes, textures, movement and the relationship between fabric and the human body, transforming ideas into garments designed to be worn and experienced.",
  heroStatementLarge: "CLOTHES ARE MORE THAN SOMETHING WE WEAR.",
  philosophyHeadline: "Every garment begins with a question.",
  philosophyText: "I explore how an abstract thought translates through tension lines, seam margins, and textile weight into something tangible. Clothing is both personal architecture and tactile expression, crafted with patience, fitted to real bodies, and built to endure beyond fast cycles.",
  portrait: "/portfolio/profile/sarita-pujari.png",
  location: "India",
  marqueeItems: [
    "GARMENT MAKING",
    "TEXTILE EXPLORATION",
    "STUDIO ARCHIVE",
    "PATTERN CUTTING",
    "CIRCULAR UPCYCLING",
    "BESPOKE CRAFTSMANSHIP",
    "TAILORED SILHOUETTES",
    "MATERIAL CURIOSITY"
  ],
  bioIntro: "Design begins with observation.",
  bioDescription: "My connection to fashion began at home, watching my mother stitch clothing with quiet precision. What began as curiosity with needlework and embroidery during school grew into a lifelong fascination with construction, silhouettes, and fabric behavior.",
  collaborativeJourney: "A few years later, three girls and I co-founded Kifayat Co., an independent thrift initiative. I looked after the garment side: sorting, deconstructing, repairing, and tailoring reworked vintage pieces into fresh wearable silhouettes. That hands-on experience deepened my devotion to craftsmanship, leading me to develop my own independent garment practice focused on bespoke making, textile exploration, and thoughtful design.",
  closingQuote: "I create to understand how an idea can become something tangible.",
  philosophyBlocks: [
    {
      number: "01",
      title: "FORM",
      description: "Exploring silhouettes, proportions, balance, and the intimate way garments interact with the moving human body.",
      image: "/portfolio/practice/inclusive-design.jpg"
    },
    {
      number: "02",
      title: "MATERIAL",
      description: "Understanding fabric hand feel, texture, weave density, surface friction, and how raw material guides silhouette.",
      image: "/portfolio/practice/textile-exploration.jpg"
    },
    {
      number: "03",
      title: "MAKING",
      description: "Turning sketches and thoughts into physical garments through paper pattern drafting, construction, fitting, and refinement.",
      image: "/portfolio/practice/garment-making.jpg"
    }
  ],
  studioArchiveCollage: [
    { title: "Sewing Machine Tailoring", image: "/portfolio/practice/garment-making.jpg", caption: "Direct needlework" },
    { title: "Textile Surface Exploration", image: "/portfolio/practice/textile-exploration.jpg", caption: "Fiber hand feel" },
    { title: "Upcycled Denim Vest Study", image: "/portfolio/practice/upcycling-reworking.jpg", caption: "Deconstruction" },
    { title: "Adaptive Fitting Silhouette", image: "/portfolio/practice/inclusive-design.jpg", caption: "Proportion balance" },
    { title: "Hardware Safety Pin Accent", image: "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg", caption: "Hardware detail" },
    { title: "Textile Waste Redirection", image: "/portfolio/practice/textile-waste-to-lifestyle.jpg", caption: "Zero-waste offcuts" }
  ]
};

export interface ProcessStage {
  step: string;
  phase: string;
  name: string;
  title: string;
  description: string;
  visualType: string;
  image: string;
  caption: string;
  studioNote: string;
  keyDisciplines: string[];
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    phase: "PHASE 01",
    name: "INSPIRATION",
    title: "Observing everyday geometry and tactile sparks.",
    description: "Every garment begins long before a pattern is cut. It starts with observation: the spontaneous drape of street clothes, weathered historic architecture, or the accidental crease of raw linen left over a worktable.",
    visualType: "Mood photographs, architectural forms, natural textures.",
    image: "/portfolio/practice/textile-exploration.jpg",
    caption: "STUDIO ARCHIVE // FIG. 01: SURFACE STUDY & FIBER GRAIN",
    studioNote: "Ideas arrive uninvited; the designer's job is simply to notice when fabric wants to move differently.",
    keyDisciplines: ["Field Observation", "Texture Collecting", "Everyday Geometry", "Silhouettes in Motion"]
  },
  {
    step: "02",
    phase: "PHASE 02",
    name: "RESEARCH",
    title: "Historical silhouettes and functional ergonomics.",
    description: "Investigating how garments interact with the human body across hours of movement. Researching seam placements that relieve tension, historical workwear resilience, and proportion formulas that feel grounded yet effortless.",
    visualType: "Research notes, vintage silhouettes, garment ergonomic studies.",
    image: "/portfolio/practice/inclusive-design.jpg",
    caption: "STUDIO ARCHIVE // FIG. 02: BODY PROPORTIONS & EASE BALANCE",
    studioNote: "A beautiful garment is useless if it restrains the body. Structure must yield to breath.",
    keyDisciplines: ["Ergonomic Mapping", "Historical Silhouettes", "Ease Allowances", "Movement Analysis"]
  },
  {
    step: "03",
    phase: "PHASE 03",
    name: "MOODBOARD",
    title: "Collating textures, hardware accents, and tonal harmonies.",
    description: "Pinning together torn paper, hardware elements, safety pins, thread spools, and washed fabric swatches. The moodboard is where the sensory palette of the collection coalesces into a coherent visual rhythm.",
    visualType: "Hardware accents, safety pins, raw thread spools, tone palettes.",
    image: "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg",
    caption: "STUDIO ARCHIVE // FIG. 03: HARDWARE PINNING & TACTILE SWATCHES",
    studioNote: "Contrast gives clothing personality: rough against smooth, heavy hardware against soft drape.",
    keyDisciplines: ["Hardware Exploration", "Color Harmony", "Texture Juxtaposition", "Sensory Palette"]
  },
  {
    step: "04",
    phase: "PHASE 04",
    name: "SKETCH",
    title: "Translating fleeting thoughts into structural paper lines.",
    description: "Rapid pencil sketches on studio paper sheets, testing neckline cascades, armhole depths, and hemline sweeps. From initial gestural sketches, flat technical working drawings emerge to guide the cutting table.",
    visualType: "Flat technical flats, pencil explorations, pattern geometry.",
    image: "/portfolio/practice/upcycling-reworking.jpg",
    caption: "STUDIO ARCHIVE // FIG. 04: STRUCTURAL SKETCHING & PANEL MAPPING",
    studioNote: "The pencil solves on paper what shears could ruin on cloth. Every line is a promise of shape.",
    keyDisciplines: ["Gestural Sketching", "Technical Flats", "Line & Proportion", "Dart Trajectories"]
  },
  {
    step: "05",
    phase: "PHASE 05",
    name: "FABRIC",
    title: "Inspecting weave, weight, yarn response, and grainline fall.",
    description: "Handling raw bolts on the studio table. Evaluating yarn density, bias elasticity, how light catches the weave, and how different textiles react when washed, pressed, or deconstructed into raw-edge hems.",
    visualType: "Fabric swatches, hand feel tests, bias drape response.",
    image: "/portfolio/practice/textile-waste-to-lifestyle.jpg",
    caption: "STUDIO ARCHIVE // FIG. 05: TEXTILE SELECTION & BIAS ANALYSIS",
    studioNote: "You cannot force a fabric to be what it is not. The cloth dictates the seam.",
    keyDisciplines: ["Yarn Density", "Bias Drape Testing", "Prewash Shrinkage", "Edge Finishing Response"]
  },
  {
    step: "06",
    phase: "PHASE 06",
    name: "CONSTRUCTION",
    title: "Pattern drafting, shear cutting, and needle negotiations.",
    description: "Drafting master patterns on heavy brown paper, aligning grainlines with surgical care, cutting through fabric plies, and moving to the sewing machine. Every seam is pressed open with dry iron heat to lock in structure.",
    visualType: "Sewing machine needlework, shears, pattern papers, pressed seams.",
    image: "/portfolio/practice/garment-making.jpg",
    caption: "STUDIO ARCHIVE // FIG. 06: SEWING MACHINE CRAFTSMANSHIP & ASSEMBLY",
    studioNote: "Construction is the honesty of clothing. Hidden seams tell the real truth about a maker.",
    keyDisciplines: ["Master Pattern Drafting", "Grainline Cutting", "Tailored Stitching", "Iron Seam Pressing"]
  },
  {
    step: "07",
    phase: "PHASE 07",
    name: "FITTING",
    title: "Balancing comfort, poise, and silhouette tension.",
    description: "Placing the garment on the body or dress form. Pinning excess fullness, checking shoulder slope balance, verifying walk allowance, and listening to how the wearer moves and breathes inside the garment.",
    visualType: "Live pin fitting, balance checks, shoulder line tuning.",
    image: "/portfolio/collection/tops/boho-mosaic-denim-top/1.png",
    caption: "STUDIO ARCHIVE // FIG. 07: LIVE FITTING & BALANCE REFINEMENT",
    studioNote: "A garment is incomplete until a human stands inside it. The fitting is where paper becomes a second skin.",
    keyDisciplines: ["Live Fitting", "Dart Manipulation", "Balance Adjustments", "Comfort Verification"]
  },
  {
    step: "08",
    phase: "PHASE 08",
    name: "FINAL GARMENT",
    title: "A wearable creation ready to be lived in and cherished.",
    description: "Final hand-sewn button loops, hem blind-stitching, comprehensive thread snipping, and steam pressing. The finished garment enters the studio archive, a tangible conversation between thought, fabric, and human hands.",
    visualType: "Completed garment, studio editorial photograph, finished piece.",
    image: "/portfolio/collection/co-ord-sets/sunday-bloom-set/1.jpg",
    caption: "STUDIO ARCHIVE // FIG. 08: COMPLETED PIECE IN STUDIO ARCHIVE",
    studioNote: "The journey ends not on a hanger, but when the wearer walks out the studio door.",
    keyDisciplines: ["Hand Finishing", "Studio Steam Pressing", "Archive Cataloguing", "Wearable Art"]
  }
];

export const CONTACT_INFO = {
  label: "LET’S TALK",
  headingLine1: "HAVE AN",
  headingLine2: "IDEA?",
  headingLine3: "LET’S MAKE",
  headingLine4: "SOMETHING.",
  introText: "I’m always open to thoughtful collaborations, interesting materials, design inquiries, and projects that give me something to explore.",
  email: "saritapujari868@gmail.com",
  phone: "+91 98679 87494",
  phoneDisplay: "+91 98679 87494",
  location: "India",
  availabilityTitle: "CURRENTLY OPEN TO",
  availabilityItems: [
    "SELECT FREELANCE INQUIRIES",
    "GARMENT COMMISSIONS",
    "DESIGN COLLABORATIONS",
    "CUSTOM FIT & TEXTILE SOLUTIONS"
  ]
};

export const ALL_PROJECTS: Project[] = [
  {
    "id": "cloud-nine-set",
    "title": "Cloud Nine Set",
    "category": "co-ord-sets",
    "categoryLabel": "Coord Sets",
    "coverImage": "/portfolio/collection/co-ord-sets/cloud-nine-set/1.jpg",
    "allImages": [
      "/portfolio/collection/co-ord-sets/cloud-nine-set/1.jpg",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/2.jpg",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/3.png",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/co-ord-sets/cloud-nine-set/1.jpg",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/2.jpg",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/3.png",
      "/portfolio/collection/co-ord-sets/cloud-nine-set/4.png"
    ],
    "slug": "cloud-nine-set",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A coordinated two-piece silhouette designed to be worn as a unified visual statement or deconstructed and styled independently across everyday wear.",
    "craftDetails": "Color-matched top and bottom panels, complementary seam detailing, and adjustable ease for custom fit."
  },
  {
    "id": "cloud-set",
    "title": "Cloud Set",
    "category": "co-ord-sets",
    "categoryLabel": "Coord Sets",
    "coverImage": "/portfolio/collection/co-ord-sets/cloud-set/1.jpg",
    "allImages": [
      "/portfolio/collection/co-ord-sets/cloud-set/1.jpg",
      "/portfolio/collection/co-ord-sets/cloud-set/2.jpg",
      "/portfolio/collection/co-ord-sets/cloud-set/3.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/co-ord-sets/cloud-set/1.jpg",
      "/portfolio/collection/co-ord-sets/cloud-set/2.jpg",
      "/portfolio/collection/co-ord-sets/cloud-set/3.jpg"
    ],
    "slug": "cloud-set",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A coordinated two-piece silhouette designed to be worn as a unified visual statement or deconstructed and styled independently across everyday wear.",
    "craftDetails": "Color-matched top and bottom panels, complementary seam detailing, and adjustable ease for custom fit."
  },
  {
    "id": "creamsicle-set",
    "title": "Creamsicle Set",
    "category": "co-ord-sets",
    "categoryLabel": "Coord Sets",
    "coverImage": "/portfolio/collection/co-ord-sets/creamsicle-set/1.jpg",
    "allImages": [
      "/portfolio/collection/co-ord-sets/creamsicle-set/1.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/2.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/3.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/co-ord-sets/creamsicle-set/1.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/2.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/3.jpg",
      "/portfolio/collection/co-ord-sets/creamsicle-set/4.jpg"
    ],
    "slug": "creamsicle-set",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A coordinated two-piece silhouette designed to be worn as a unified visual statement or deconstructed and styled independently across everyday wear.",
    "craftDetails": "Color-matched top and bottom panels, complementary seam detailing, and adjustable ease for custom fit."
  },
  {
    "id": "ivory-affair-set",
    "title": "Ivory Affair Set",
    "category": "co-ord-sets",
    "categoryLabel": "Coord Sets",
    "coverImage": "/portfolio/collection/co-ord-sets/ivory-affair-set/1.jpg",
    "allImages": [
      "/portfolio/collection/co-ord-sets/ivory-affair-set/1.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/2.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/3.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/co-ord-sets/ivory-affair-set/1.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/2.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/3.jpg",
      "/portfolio/collection/co-ord-sets/ivory-affair-set/4.png"
    ],
    "slug": "ivory-affair-set",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A coordinated two-piece silhouette designed to be worn as a unified visual statement or deconstructed and styled independently across everyday wear.",
    "craftDetails": "Color-matched top and bottom panels, complementary seam detailing, and adjustable ease for custom fit."
  },
  {
    "id": "sunday-bloom-set",
    "title": "Sunday Bloom Set",
    "category": "co-ord-sets",
    "categoryLabel": "Coord Sets",
    "coverImage": "/portfolio/collection/co-ord-sets/sunday-bloom-set/1.jpg",
    "allImages": [
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/1.jpg",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/2.jpg",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/3.png",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/1.jpg",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/2.jpg",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/3.png",
      "/portfolio/collection/co-ord-sets/sunday-bloom-set/4.png"
    ],
    "slug": "sunday-bloom-set",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A coordinated two-piece silhouette designed to be worn as a unified visual statement or deconstructed and styled independently across everyday wear.",
    "craftDetails": "Color-matched top and bottom panels, complementary seam detailing, and adjustable ease for custom fit."
  },
  {
    "id": "after-dark-pants",
    "title": "After Dark Pants",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/after-dark-pants/1.jpg",
    "allImages": [
      "/portfolio/collection/bottoms/after-dark-pants/1.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/2.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/3.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/after-dark-pants/1.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/2.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/3.jpg",
      "/portfolio/collection/bottoms/after-dark-pants/4.jpg"
    ],
    "slug": "after-dark-pants",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A tailored trouser silhouette reconciling architectural drape with fluid everyday ease. Engineered to break cleanly over footwear while allowing natural bodily movement.",
    "craftDetails": "Structured tailored waistband, deep French-seamed pocket bags, balanced inseam grainlines, and bar-tacked stress joins."
  },
  {
    "id": "boho-belle-skirt",
    "title": "Boho Belle Skirt",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/boho-belle-skirt/1.jpg",
    "allImages": [
      "/portfolio/collection/bottoms/boho-belle-skirt/1.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/2.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/3.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/4.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/5.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/boho-belle-skirt/1.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/2.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/3.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/4.jpg",
      "/portfolio/collection/bottoms/boho-belle-skirt/5.jpg"
    ],
    "slug": "boho-belle-skirt",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An unconstrained silhouette celebrating textile movement and surface breeze. Sits gently on the natural waist, releasing rhythmic pleats and cascades.",
    "craftDetails": "Concealed side placket closure, continuous waistband facing, and hand-blind-stitched hem finish."
  },
  {
    "id": "desi-daydream-pants",
    "title": "Desi Daydream Pants",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/desi-daydream-pants/1.jpg",
    "allImages": [
      "/portfolio/collection/bottoms/desi-daydream-pants/1.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/2.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/3.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/desi-daydream-pants/1.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/2.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/3.jpg",
      "/portfolio/collection/bottoms/desi-daydream-pants/4.jpg"
    ],
    "slug": "desi-daydream-pants",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A tailored trouser silhouette reconciling architectural drape with fluid everyday ease. Engineered to break cleanly over footwear while allowing natural bodily movement.",
    "craftDetails": "Structured tailored waistband, deep French-seamed pocket bags, balanced inseam grainlines, and bar-tacked stress joins."
  },
  {
    "id": "maroon-moon-pants",
    "title": "Maroon Moon Pants",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/maroon-moon-pants/1.jpg",
    "allImages": [
      "/portfolio/collection/bottoms/maroon-moon-pants/1.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/2.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/3.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/maroon-moon-pants/1.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/2.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/3.jpg",
      "/portfolio/collection/bottoms/maroon-moon-pants/4.jpg"
    ],
    "slug": "maroon-moon-pants",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A tailored trouser silhouette reconciling architectural drape with fluid everyday ease. Engineered to break cleanly over footwear while allowing natural bodily movement.",
    "craftDetails": "Structured tailored waistband, deep French-seamed pocket bags, balanced inseam grainlines, and bar-tacked stress joins."
  },
  {
    "id": "peach-please-skirt",
    "title": "Peach Please Skirt",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/peach-please-skirt/1.png",
    "allImages": [
      "/portfolio/collection/bottoms/peach-please-skirt/1.png",
      "/portfolio/collection/bottoms/peach-please-skirt/2.png",
      "/portfolio/collection/bottoms/peach-please-skirt/3.png",
      "/portfolio/collection/bottoms/peach-please-skirt/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/peach-please-skirt/1.png",
      "/portfolio/collection/bottoms/peach-please-skirt/2.png",
      "/portfolio/collection/bottoms/peach-please-skirt/3.png",
      "/portfolio/collection/bottoms/peach-please-skirt/4.jpg"
    ],
    "slug": "peach-please-skirt",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An unconstrained silhouette celebrating textile movement and surface breeze. Sits gently on the natural waist, releasing rhythmic pleats and cascades.",
    "craftDetails": "Concealed side placket closure, continuous waistband facing, and hand-blind-stitched hem finish."
  },
  {
    "id": "wild-muse-skirt",
    "title": "Wild Muse Skirt",
    "category": "bottoms",
    "categoryLabel": "Bottoms",
    "coverImage": "/portfolio/collection/bottoms/wild-muse-skirt/1.jpg",
    "allImages": [
      "/portfolio/collection/bottoms/wild-muse-skirt/1.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/2.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/3.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/bottoms/wild-muse-skirt/1.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/2.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/3.jpg",
      "/portfolio/collection/bottoms/wild-muse-skirt/4.jpg"
    ],
    "slug": "wild-muse-skirt",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An unconstrained silhouette celebrating textile movement and surface breeze. Sits gently on the natural waist, releasing rhythmic pleats and cascades.",
    "craftDetails": "Concealed side placket closure, continuous waistband facing, and hand-blind-stitched hem finish."
  },
  {
    "id": "aura-ruffle-top",
    "title": "AURA Ruffle Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/aura-ruffle-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/aura-ruffle-top/1.jpg",
      "/portfolio/collection/tops/aura-ruffle-top/2.png",
      "/portfolio/collection/tops/aura-ruffle-top/3.png",
      "/portfolio/collection/tops/aura-ruffle-top/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/aura-ruffle-top/1.jpg",
      "/portfolio/collection/tops/aura-ruffle-top/2.png",
      "/portfolio/collection/tops/aura-ruffle-top/3.png",
      "/portfolio/collection/tops/aura-ruffle-top/4.png"
    ],
    "slug": "aura-ruffle-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An inquiry into kinetic fabric volume and organic cascading folds. Cut on the bias to encourage dynamic air displacement and liquid silhouette response in movement.",
    "craftDetails": "Hand-rolled micro-hems, graduated gather densities, and internal stay stitching balancing volume without structural weight."
  },
  {
    "id": "after-hours-top",
    "title": "After Hours Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/after-hours-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/after-hours-top/1.jpg",
      "/portfolio/collection/tops/after-hours-top/2.jpg",
      "/portfolio/collection/tops/after-hours-top/3.jpg",
      "/portfolio/collection/tops/after-hours-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/after-hours-top/1.jpg",
      "/portfolio/collection/tops/after-hours-top/2.jpg",
      "/portfolio/collection/tops/after-hours-top/3.jpg",
      "/portfolio/collection/tops/after-hours-top/4.jpg"
    ],
    "slug": "after-hours-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "blue-hour-affair-top",
    "title": "Blue Hour Affair Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/blue-hour-affair-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/blue-hour-affair-top/1.jpg",
      "/portfolio/collection/tops/blue-hour-affair-top/2.png",
      "/portfolio/collection/tops/blue-hour-affair-top/3.png",
      "/portfolio/collection/tops/blue-hour-affair-top/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/blue-hour-affair-top/1.jpg",
      "/portfolio/collection/tops/blue-hour-affair-top/2.png",
      "/portfolio/collection/tops/blue-hour-affair-top/3.png",
      "/portfolio/collection/tops/blue-hour-affair-top/4.png"
    ],
    "slug": "blue-hour-affair-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "blueberry-bliss-top",
    "title": "Blueberry Bliss Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/blueberry-bliss-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/blueberry-bliss-top/1.png",
      "/portfolio/collection/tops/blueberry-bliss-top/2.jpg",
      "/portfolio/collection/tops/blueberry-bliss-top/3.png",
      "/portfolio/collection/tops/blueberry-bliss-top/4.jpg",
      "/portfolio/collection/tops/blueberry-bliss-top/5.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/blueberry-bliss-top/1.png",
      "/portfolio/collection/tops/blueberry-bliss-top/2.jpg",
      "/portfolio/collection/tops/blueberry-bliss-top/3.png",
      "/portfolio/collection/tops/blueberry-bliss-top/4.jpg",
      "/portfolio/collection/tops/blueberry-bliss-top/5.jpg"
    ],
    "slug": "blueberry-bliss-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "boho-mosaic-denim-top",
    "title": "Boho Mosaic Denim Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/boho-mosaic-denim-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/boho-mosaic-denim-top/1.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/2.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/3.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/boho-mosaic-denim-top/1.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/2.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/3.png",
      "/portfolio/collection/tops/boho-mosaic-denim-top/4.png"
    ],
    "slug": "boho-mosaic-denim-top",
    "year": "Studio Archive",
    "isExperiment": true,
    "concept": "An exploration of textile longevity and zero waste geometric synthesis. Discarded studio balances and deadstock denim panels are deconstructed and re-engineered into architectural tops.",
    "craftDetails": "Flat-felled joining seams, multi-pass topstitching, grainline counter-balancing, and reinforced armholes."
  },
  {
    "id": "cherry-on-top",
    "title": "Cherry on Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/cherry-on-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/cherry-on-top/1.jpg",
      "/portfolio/collection/tops/cherry-on-top/2.jpg",
      "/portfolio/collection/tops/cherry-on-top/3.jpg",
      "/portfolio/collection/tops/cherry-on-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/cherry-on-top/1.jpg",
      "/portfolio/collection/tops/cherry-on-top/2.jpg",
      "/portfolio/collection/tops/cherry-on-top/3.jpg",
      "/portfolio/collection/tops/cherry-on-top/4.jpg"
    ],
    "slug": "cherry-on-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "daisy-darling-top",
    "title": "Daisy Darling Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/daisy-darling-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/daisy-darling-top/1.jpg",
      "/portfolio/collection/tops/daisy-darling-top/2.jpg",
      "/portfolio/collection/tops/daisy-darling-top/3.jpg",
      "/portfolio/collection/tops/daisy-darling-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/daisy-darling-top/1.jpg",
      "/portfolio/collection/tops/daisy-darling-top/2.jpg",
      "/portfolio/collection/tops/daisy-darling-top/3.jpg",
      "/portfolio/collection/tops/daisy-darling-top/4.jpg"
    ],
    "slug": "daisy-darling-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "flora-affair-top",
    "title": "Flora Affair Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/flora-affair-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/flora-affair-top/1.jpg",
      "/portfolio/collection/tops/flora-affair-top/2.jpg",
      "/portfolio/collection/tops/flora-affair-top/3.jpg",
      "/portfolio/collection/tops/flora-affair-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/flora-affair-top/1.jpg",
      "/portfolio/collection/tops/flora-affair-top/2.jpg",
      "/portfolio/collection/tops/flora-affair-top/3.jpg",
      "/portfolio/collection/tops/flora-affair-top/4.jpg"
    ],
    "slug": "flora-affair-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "golden-hour-top",
    "title": "Golden Hour Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/golden-hour-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/golden-hour-top/1.png",
      "/portfolio/collection/tops/golden-hour-top/2.png",
      "/portfolio/collection/tops/golden-hour-top/3.png",
      "/portfolio/collection/tops/golden-hour-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/golden-hour-top/1.png",
      "/portfolio/collection/tops/golden-hour-top/2.png",
      "/portfolio/collection/tops/golden-hour-top/3.png",
      "/portfolio/collection/tops/golden-hour-top/4.jpg"
    ],
    "slug": "golden-hour-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "honey-daze-top",
    "title": "Honey Daze Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/honey-daze-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/honey-daze-top/1.jpg",
      "/portfolio/collection/tops/honey-daze-top/2.jpg",
      "/portfolio/collection/tops/honey-daze-top/3.jpg",
      "/portfolio/collection/tops/honey-daze-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/honey-daze-top/1.jpg",
      "/portfolio/collection/tops/honey-daze-top/2.jpg",
      "/portfolio/collection/tops/honey-daze-top/3.jpg",
      "/portfolio/collection/tops/honey-daze-top/4.jpg"
    ],
    "slug": "honey-daze-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "ivory-ribbed-pin-crop-top",
    "title": "Ivory Ribbed Pin Crop Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/1.png",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/2.jpg",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/3.jpg",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/1.png",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/2.jpg",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/3.jpg",
      "/portfolio/collection/tops/ivory-ribbed-pin-crop-top/4.jpg"
    ],
    "slug": "ivory-ribbed-pin-crop-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A structural garment study investigating industrial hardware motifs and tension lines across neutral jersey. Hand-placed safety pin alignments function simultaneously as mechanical fastening and visual rebellion.",
    "craftDetails": "Reinforced edge margins, stabilized stress points, handmade pattern geometry, and hand-finished hems."
  },
  {
    "id": "lace-affair-top",
    "title": "Lace Affair Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/lace-affair-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/lace-affair-top/1.jpg",
      "/portfolio/collection/tops/lace-affair-top/2.jpg",
      "/portfolio/collection/tops/lace-affair-top/3.jpg",
      "/portfolio/collection/tops/lace-affair-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/lace-affair-top/1.jpg",
      "/portfolio/collection/tops/lace-affair-top/2.jpg",
      "/portfolio/collection/tops/lace-affair-top/3.jpg",
      "/portfolio/collection/tops/lace-affair-top/4.jpg"
    ],
    "slug": "lace-affair-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "liggi-top",
    "title": "Liggi Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/liggi-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/liggi-top/1.jpg",
      "/portfolio/collection/tops/liggi-top/2.jpg",
      "/portfolio/collection/tops/liggi-top/3.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/liggi-top/1.jpg",
      "/portfolio/collection/tops/liggi-top/2.jpg",
      "/portfolio/collection/tops/liggi-top/3.jpg"
    ],
    "slug": "liggi-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "midnight-bloom-top",
    "title": "Midnight Bloom Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/midnight-bloom-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/midnight-bloom-top/1.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/2.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/3.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/midnight-bloom-top/1.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/2.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/3.jpg",
      "/portfolio/collection/tops/midnight-bloom-top/4.jpg"
    ],
    "slug": "midnight-bloom-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "patchwork-paradise-top",
    "title": "Patchwork Paradise Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/patchwork-paradise-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/patchwork-paradise-top/1.png",
      "/portfolio/collection/tops/patchwork-paradise-top/2.png",
      "/portfolio/collection/tops/patchwork-paradise-top/3.png",
      "/portfolio/collection/tops/patchwork-paradise-top/4.png",
      "/portfolio/collection/tops/patchwork-paradise-top/img_2232.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/patchwork-paradise-top/1.png",
      "/portfolio/collection/tops/patchwork-paradise-top/2.png",
      "/portfolio/collection/tops/patchwork-paradise-top/3.png",
      "/portfolio/collection/tops/patchwork-paradise-top/4.png"
    ],
    "slug": "patchwork-paradise-top",
    "year": "Studio Archive",
    "isExperiment": true,
    "concept": "An exploration of textile longevity and zero waste geometric synthesis. Discarded studio balances and deadstock denim panels are deconstructed and re-engineered into architectural tops.",
    "craftDetails": "Flat-felled joining seams, multi-pass topstitching, grainline counter-balancing, and reinforced armholes."
  },
  {
    "id": "safety-pin-rebellion-tee",
    "title": "Safety Pin Rebellion Tee",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg",
      "/portfolio/collection/tops/safety-pin-rebellion-tee/2.jpg",
      "/portfolio/collection/tops/safety-pin-rebellion-tee/3.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg",
      "/portfolio/collection/tops/safety-pin-rebellion-tee/2.jpg",
      "/portfolio/collection/tops/safety-pin-rebellion-tee/3.jpg"
    ],
    "slug": "safety-pin-rebellion-tee",
    "year": "Studio Archive",
    "isExperiment": true,
    "concept": "A structural garment study investigating industrial hardware motifs and tension lines across neutral jersey. Hand-placed safety pin alignments function simultaneously as mechanical fastening and visual rebellion.",
    "craftDetails": "Reinforced edge margins, stabilized stress points, handmade pattern geometry, and hand-finished hems."
  },
  {
    "id": "sindoor-block-print-halter-top",
    "title": "Sindoor Block-Print Halter Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/sindoor-block-print-halter-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/sindoor-block-print-halter-top/1.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/2.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/3.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/sindoor-block-print-halter-top/1.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/2.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/3.jpg",
      "/portfolio/collection/tops/sindoor-block-print-halter-top/4.jpg"
    ],
    "slug": "sindoor-block-print-halter-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "Bridging indigenous earthen pigment block-printing heritage with contemporary summer halterneck architecture. Natural madder/sindoor tones anchor a sculpted backless cut.",
    "craftDetails": "Hand-carved block motif alignment, hand-stitched bias ties, and double-turned clean interior facings."
  },
  {
    "id": "the-burgundy-muse-top",
    "title": "The Burgundy Muse Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/the-burgundy-muse-top/1.png",
    "allImages": [
      "/portfolio/collection/tops/the-burgundy-muse-top/1.png",
      "/portfolio/collection/tops/the-burgundy-muse-top/2.jpg",
      "/portfolio/collection/tops/the-burgundy-muse-top/3.jpg",
      "/portfolio/collection/tops/the-burgundy-muse-top/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/the-burgundy-muse-top/1.png",
      "/portfolio/collection/tops/the-burgundy-muse-top/2.jpg",
      "/portfolio/collection/tops/the-burgundy-muse-top/3.jpg",
      "/portfolio/collection/tops/the-burgundy-muse-top/4.jpg"
    ],
    "slug": "the-burgundy-muse-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "the-ocean-muse-top",
    "title": "The Ocean Muse Top",
    "category": "tops",
    "categoryLabel": "Tops",
    "coverImage": "/portfolio/collection/tops/the-ocean-muse-top/1.jpg",
    "allImages": [
      "/portfolio/collection/tops/the-ocean-muse-top/1.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/2.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/3.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/tops/the-ocean-muse-top/1.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/2.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/3.jpg",
      "/portfolio/collection/tops/the-ocean-muse-top/4.png"
    ],
    "slug": "the-ocean-muse-top",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An independent garment study balancing fabric texture, pattern drafting, and wearable craftsmanship.",
    "craftDetails": "Handmade paper pattern drafting, grainline alignment, and durable seam construction."
  },
  {
    "id": "checkmate-mini-dress",
    "title": "Checkmate Mini Dress",
    "category": "dresses",
    "categoryLabel": "Dresses",
    "coverImage": "/portfolio/collection/dresses/checkmate-mini-dress/1.png",
    "allImages": [
      "/portfolio/collection/dresses/checkmate-mini-dress/1.png",
      "/portfolio/collection/dresses/checkmate-mini-dress/2.jpg",
      "/portfolio/collection/dresses/checkmate-mini-dress/3.jpg",
      "/portfolio/collection/dresses/checkmate-mini-dress/4.png"
    ],
    "galleryImages": [
      "/portfolio/collection/dresses/checkmate-mini-dress/1.png",
      "/portfolio/collection/dresses/checkmate-mini-dress/2.jpg",
      "/portfolio/collection/dresses/checkmate-mini-dress/3.jpg",
      "/portfolio/collection/dresses/checkmate-mini-dress/4.png"
    ],
    "slug": "checkmate-mini-dress",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A complete one-piece silhouette harmonizing neckline geometry, proportion breaks, and expressive textile drape. An intentional statement of form and comfort.",
    "craftDetails": "Bespoke bust dart shaping, lightweight bodice interfacing, and clean fluid hemline fall."
  },
  {
    "id": "espresso-ruffle-mini-dress",
    "title": "Espresso Ruffle Mini  Dress",
    "category": "dresses",
    "categoryLabel": "Dresses",
    "coverImage": "/portfolio/collection/dresses/espresso-ruffle-mini-dress/1.png",
    "allImages": [
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/1.png",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/2.jpg",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/3.jpg",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/1.png",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/2.jpg",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/3.jpg",
      "/portfolio/collection/dresses/espresso-ruffle-mini-dress/4.jpg"
    ],
    "slug": "espresso-ruffle-mini-dress",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "An inquiry into kinetic fabric volume and organic cascading folds. Cut on the bias to encourage dynamic air displacement and liquid silhouette response in movement.",
    "craftDetails": "Hand-rolled micro-hems, graduated gather densities, and internal stay stitching balancing volume without structural weight."
  },
  {
    "id": "midnight-in-blue-dress",
    "title": "Midnight in Blue Dress",
    "category": "dresses",
    "categoryLabel": "Dresses",
    "coverImage": "/portfolio/collection/dresses/midnight-in-blue-dress/1.jpg",
    "allImages": [
      "/portfolio/collection/dresses/midnight-in-blue-dress/1.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/2.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/3.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/dresses/midnight-in-blue-dress/1.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/2.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/3.jpg",
      "/portfolio/collection/dresses/midnight-in-blue-dress/4.jpg"
    ],
    "slug": "midnight-in-blue-dress",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A complete one-piece silhouette harmonizing neckline geometry, proportion breaks, and expressive textile drape. An intentional statement of form and comfort.",
    "craftDetails": "Bespoke bust dart shaping, lightweight bodice interfacing, and clean fluid hemline fall."
  },
  {
    "id": "wildflower-romance-dress",
    "title": "Wildflower Romance Dress",
    "category": "dresses",
    "categoryLabel": "Dresses",
    "coverImage": "/portfolio/collection/dresses/wildflower-romance-dress/1.jpg",
    "allImages": [
      "/portfolio/collection/dresses/wildflower-romance-dress/1.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/2.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/3.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/4.jpg"
    ],
    "galleryImages": [
      "/portfolio/collection/dresses/wildflower-romance-dress/1.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/2.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/3.jpg",
      "/portfolio/collection/dresses/wildflower-romance-dress/4.jpg"
    ],
    "slug": "wildflower-romance-dress",
    "year": "Studio Archive",
    "isExperiment": false,
    "concept": "A complete one-piece silhouette harmonizing neckline geometry, proportion breaks, and expressive textile drape. An intentional statement of form and comfort.",
    "craftDetails": "Bespoke bust dart shaping, lightweight bodice interfacing, and clean fluid hemline fall."
  },
  {
    "id": "kifayat-co-reworks",
    "slug": "kifayat-co-reworks",
    "title": "Kifayat Co. \u2014 Thrift & Rework Collective",
    "category": "collaborations",
    "categoryLabel": "Collaborative Project",
    "year": "Creative Collective",
    "isExperiment": false,
    "coverImage": "/portfolio/kifayat/founders.png",
    "allImages": [
      "/portfolio/kifayat/founders.png",
      "/portfolio/kifayat/kifayat-piece-1.png",
      "/portfolio/kifayat/kifayat-piece-2.png",
      "/portfolio/kifayat/kifayat-piece-3.jpg",
      "/portfolio/kifayat/kifayat-piece-4.jpg",
      "/portfolio/kifayat/kifayat-piece-5.jpg",
      "/portfolio/kifayat/kifayat-piece-6.jpg",
      "/portfolio/kifayat/kifayat-piece-7.jpg",
      "/portfolio/kifayat/kifayat-piece-8.jpg"
    ],
    "galleryImages": [
      "/portfolio/kifayat/founders.png",
      "/portfolio/kifayat/kifayat-piece-1.png",
      "/portfolio/kifayat/kifayat-piece-2.png",
      "/portfolio/kifayat/kifayat-piece-3.jpg",
      "/portfolio/kifayat/kifayat-piece-4.jpg",
      "/portfolio/kifayat/kifayat-piece-5.jpg",
      "/portfolio/kifayat/kifayat-piece-6.jpg",
      "/portfolio/kifayat/kifayat-piece-7.jpg",
      "/portfolio/kifayat/kifayat-piece-8.jpg"
    ],
    "detailImage": null,
    "concept": "Co-founded by four girls, Kifayat Co. was born out of a desire to make fashion circular and accessible. Sarita looked after the clothing side of things\u2014from sorting and deconstructing pre-loved garments to stitching, tailoring, and bringing final reworked pieces together.",
    "craftDetails": "Structural repairs on second-hand garments, re-cut necklines, customized fit modifications, and hybrid patchworks.",
    "featured": true
  },
  {
    "id": "textile-lifestyle-objects",
    "slug": "textile-lifestyle-objects",
    "title": "Textile Lifestyle & Home Solutions",
    "category": "experiments",
    "categoryLabel": "Zero Waste Experiments",
    "year": "Material Exploration",
    "isExperiment": true,
    "coverImage": "/portfolio/fabric-decor/table-cloth-runner.jpg",
    "allImages": [
      "/portfolio/fabric-decor/table-cloth-runner.jpg",
      "/portfolio/fabric-decor/coasters.jpg",
      "/portfolio/fabric-decor/curtains.jpg",
      "/portfolio/fabric-decor/scrunchies.jpg",
      "/portfolio/fabric-decor/handbags.jpg",
      "/portfolio/fabric-decor/photoframes.jpg",
      "/portfolio/fabric-decor/covers.jpg",
      "/portfolio/fabric-decor/handkerchiefs.jpg",
      "/portfolio/fabric-decor/accessories.jpg"
    ],
    "galleryImages": [
      "/portfolio/fabric-decor/table-cloth-runner.jpg",
      "/portfolio/fabric-decor/coasters.jpg",
      "/portfolio/fabric-decor/curtains.jpg",
      "/portfolio/fabric-decor/scrunchies.jpg",
      "/portfolio/fabric-decor/handbags.jpg",
      "/portfolio/fabric-decor/photoframes.jpg",
      "/portfolio/fabric-decor/covers.jpg",
      "/portfolio/fabric-decor/handkerchiefs.jpg",
      "/portfolio/fabric-decor/accessories.jpg"
    ],
    "detailImage": null,
    "concept": "Transforming leftover studio cutting remnants, selvage edges, and deadstock balances into functional lifestyle and home solutions. Handcrafted made to order for individuals and customizable in bulk for mindful B2B collaborations.",
    "craftDetails": "Multi-ply quilted textile coasters, table runners, rolled-hem handkerchiefs, padded keepsakes, and reinforced remnant carryalls.",
    "featured": true
  }
];
