import { ServiceItem, ReviewItem, BlogPost } from '../types';

export const BUSINESS_INFO = {
  name: "Koebel's Roofing",
  slogan: "Protecting Homes With Integrity Since 2014",
  phone: "(226) 338-2088",
  phoneRaw: "+12263382088",
  email: "info@koebelsroofing.ca",
  location: "Kitchener - Waterloo, Ontario",
  serviceAreas: [
    "Kitchener",
    "Waterloo",
    "Cambridge",
    "Guelph",
    "Elmira",
    "Baden",
    "New Hamburg",
    "St. Jacobs",
    "Woolwich"
  ],
  foundedYear: 2014,
  founder: "Lloyd Koebel",
  founderExperience: "Over 20 years of hands-on experience in construction and roofing",
  rating: 5.0,
  reviewCount: 98,
  certifications: [
    {
      name: "Velux Certified Installer",
      specialty: "Leak-proof skylights and sun tunnels"
    },
    {
      name: "Malarkey Certified Installer",
      specialty: "Sustainable, high-durability roofing shingles"
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "roof-replacements",
    title: "Roof Replacements",
    shortDesc: "Complete architectural roof replacements engineered for Ontario weather with premium materials, full deck inspection, and meticulous cleanup.",
    fullDesc: "If your roof is showing signs of wear, frequent leaks, or has aged beyond 19 years, it might be time for a full replacement. We guide you in choosing the right materials and systems—balancing durability, curb appeal, and budget.",
    category: "replacement",
    signsOrProblems: [
      "Cracked, curling, or buckled shingles",
      "Missing mineral granules clogging gutters",
      "Interior water stains on ceilings or attic drywall",
      "Roof aged beyond 18–20 years",
      "Repeated recurring localized leaks"
    ],
    benefits: [
      "Malarkey high-performance impact-resistant shingle systems",
      "Complete deck tear-off with rotten plywood replacement",
      "Synthetic ice & water barrier shield at eaves and valleys",
      "Complete magnet-sweep clean-up around gardens & driveways",
      "Direct installation oversight by Lloyd Koebel"
    ],
    image: "/assets/completed-roof-replacement.jpg",
    imageAlt: "Completed architectural roof replacement in Kitchener-Waterloo",
    tag: "Core Specialty",
    certifications: ["Malarkey Certified"]
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    shortDesc: "Honest diagnostics and lasting fixes for missing shingles, flashing problems, chimney leaks, and localized wear that extend your roof's life.",
    fullDesc: "Small issues can lead to bigger problems if ignored. Whether from storm damage or natural wear and tear, our repair team offers honest assessments and quality fixes that extend your roof's life.",
    category: "repair",
    signsOrProblems: [
      "Isolated roof leaks during heavy rain or snowmelt",
      "Loose, cracked, or wind-lifted shingles",
      "Damaged or rusted metal chimney & valley flashing",
      "Water ponding around low slopes or dormers",
      "Critter or animal intrusion points around soffits"
    ],
    benefits: [
      "Prompt response to prevent water damage spread",
      "Honest assessment—we never push a replacement when a repair suffices",
      "Seamless shingle matching with existing roof palette",
      "Detailed photographic documentation of issue & repair",
      "Guaranteed watertight seal on all repaired zones"
    ],
    image: "/assets/roof-repair-service.jpg",
    imageAlt: "Precision roof repair and flashing inspection",
    tag: "Rapid Response"
  },
  {
    id: "leak-repairs-storm-damage",
    title: "Leak Repairs & Storm Damage",
    shortDesc: "Specialized diagnostics for storm impact, wind lift, ice dams, and persistent mystery leaks across Kitchener-Waterloo homes.",
    fullDesc: "High winds, hail storms, and heavy Ontario winter freezes can compromise even sturdy roofs. We provide rapid inspections, storm damage mitigation, and permanent watertight repairs.",
    category: "repair",
    signsOrProblems: [
      "Sudden active leaks during high-wind rainfall",
      "Shingles blown into yard after high gusts",
      "Winter ice damming backing moisture behind fascia",
      "Tree branch impact or exterior impact damage",
      "Attic moisture and damp insulation odors"
    ],
    benefits: [
      "Fast dispatch to mitigate active interior water damage",
      "Clear, honest assessment with transparent pricing",
      "Reinforced nailing and heavy-wind fastening specs",
      "Ice and water membrane integration",
      "Comprehensive structural moisture inspection"
    ],
    image: "/assets/roof_inspection_repair_1790182776037.jpg",
    imageAlt: "Koebel's Roofing storm damage repair and completed residential project",
    tag: "Watertight Defense"
  },
  {
    id: "new-roof-construction",
    title: "New Roof Construction",
    shortDesc: "Partnering with reputable home builders and general contractors for custom homes and major residential additions.",
    fullDesc: "Building from scratch or adding an addition? We collaborate with reputable home builders and contractors to install roofing systems that stand the test of time.",
    category: "construction",
    signsOrProblems: [
      "Custom new home build requiring certified installation",
      "Second-story addition or garage extension",
      "Complex architectural roof pitch requiring precision flashing",
      "Need for scheduled builder coordination without delays"
    ],
    benefits: [
      "Seamless collaboration with project managers & framers",
      "Strict adherence to Ontario Building Code & manufacturer specs",
      "Architectural alignment with home aesthetics",
      "Punctual scheduling respecting builder construction phases",
      "Comprehensive manufacturer warranty coverage"
    ],
    image: "/assets/completed-shingle-detail.jpg",
    imageAlt: "Lloyd Koebel on-site coordinating new roof construction",
    tag: "Builder Partner"
  },
  {
    id: "skylights-sun-tunnels",
    title: "Skylights & Sun Tunnels",
    shortDesc: "Natural illumination by an official Velux Certified Installer. Leak-proof, energy-efficient skylights and tubular sun tunnels.",
    fullDesc: "Brighten your home naturally. As a Velux Certified Installer, we offer skylight and sun tunnel installations that are leak-proof, energy-efficient, and beautifully integrated.",
    category: "skylights",
    signsOrProblems: [
      "Dark interior hallways, stairwells, or windowless bathrooms",
      "Old foggy, condensation-filled acrylic dome skylights",
      "Water dripping around interior skylight drywall frame",
      "Desire for fresh air ventilation through solar-powered skylights"
    ],
    benefits: [
      "Velux Certified 10-year No-Leak installation warranty",
      "Energy-efficient Low-E glass that blocks UV heat while welcoming light",
      "Sun tunnels channeling daylight into small spaces with minimal ceiling footprint",
      "Integrated flashing kits custom engineered for Canadian weather",
      "Seamless indoor drywall and trim integration"
    ],
    image: "/assets/skylight_natural_light_1790182765761.jpg",
    imageAlt: "Natural light illuminating room via Velux skylight and sun tunnel",
    tag: "Velux Certified",
    certifications: ["Velux Certified"]
  },
  {
    id: "vents-gutter-installation",
    title: "Vents & Gutter Installation",
    shortDesc: "Balanced attic airflow ventilation systems and heavy-duty seamless gutters to protect roof decking and home foundations.",
    fullDesc: "A great roof requires balanced ventilation and proper drainage. We configure intake and exhaust venting (ridge vents, static louvers) and install durable gutters to shed water safely.",
    category: "components",
    signsOrProblems: [
      "Overheating attic in summer driving up AC utility bills",
      "Winter attic frost buildup causing moisture damage to wood deck",
      "Gutters overflowing, sagging, or pulling away from the fascia",
      "Eaves trough leaks pouring water directly against basement foundation"
    ],
    benefits: [
      "Balanced attic airflow calculation prevents premature shingle bake",
      "Heavy-gauge seamless aluminum gutters with secure brackets",
      "Downspouts positioned to channel water safely away from foundations",
      "Attic baffles and ridge vent systems for continuous circulation",
      "Durable leaf guard options to minimize maintenance"
    ],
    image: "/assets/lloyd-team-work.jpg",
    imageAlt: "Ridge vent and gutter installation on residential roof",
    tag: "Ventilation & Drainage"
  }
];

export const THREE_STEP_PROCESS = [
  {
    step: "01",
    title: "In-Person Meeting",
    desc: "We assess your roof, talk through your needs, and answer any questions directly on-site.",
    highlights: [
      "Thorough roof & attic ventilation inspection",
      "Discussion of style, material durability, and budget",
      "No high-pressure sales reps—honest conversation"
    ]
  },
  {
    step: "02",
    title: "Detailed Quote",
    desc: "You'll receive a clear estimate with our recommended solution — no guesswork, no pressure.",
    highlights: [
      "Itemized breakdown of materials, flashing, and labor",
      "Transparent timeline and warranty documentation",
      "Upfront recommendations matching your home's needs"
    ]
  },
  {
    step: "03",
    title: "Plan & Install",
    desc: "We coordinate the timeline and handle the job with precision, care, and clean-up you can count on.",
    highlights: [
      "Property protection for gardens, driveways, and walls",
      "Meticulous installation adhering to manufacturer specs",
      "Thorough magnetic nail sweep & final client walkthrough"
    ]
  }
];

export const SIX_STEP_INSTALLATION_JOURNEY = [
  {
    step: "Step 1",
    title: "Initial Consultation & Estimate",
    description: "We start with an in-person inspection to assess your current roof, discuss your concerns, and understand your goals. From there, we provide a clear, detailed estimate—no hidden fees or upselling. You'll know exactly what to expect."
  },
  {
    step: "Step 2",
    title: "Material Selection & Scheduling",
    description: "Once you're ready to move forward, we help you select materials that suit your style, home, and budget. We'll walk you through shingle types, colours, warranties, and performance. Then we lock in your installation date and send a prep checklist so you feel fully ready."
  },
  {
    step: "Step 3",
    title: "Job Site Setup",
    description: "On installation day, our team arrives promptly, sets up safety equipment, and protects your landscaping, driveway, and surrounding areas. We treat your property with respect—always."
  },
  {
    step: "Step 4",
    title: "Tear-Off & Inspection",
    description: "We remove your old roofing materials down to the deck. During this stage, we check for any hidden issues, such as rotting wood or inadequate ventilation, and address them before moving forward."
  },
  {
    step: "Step 5",
    title: "Precision Installation",
    description: "This is where the transformation happens. We install your new roofing system with precision and care following manufacturer specs and best practices. This includes underlayment, flashing, shingles, and ridge vents for proper airflow."
  },
  {
    step: "Step 6",
    title: "Cleanup & Final Walkthrough",
    description: "We clean up all debris, magnet-sweep for nails, and leave your property looking spotless. Once the work is complete, we'll walk through the final result with you, answer any questions, and ensure you're 100% satisfied before we leave."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dave & Sarah M.",
    location: "Kitchener, ON",
    service: "Full Roof Replacement (Malarkey Shingles)",
    rating: 5,
    date: "August 2025",
    text: "Lloyd is fantastic to work with! Honest communication, on-time delivery, and our property was left spotless. Easily the best roofing contractor in Kitchener-Waterloo. He explained every detail from underlayment to ridge ventilation.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Robert T.",
    location: "Waterloo, ON",
    service: "Roof Replacement & Attic Ventilation",
    rating: 5,
    date: "July 2025",
    text: "Replaced our 22-year-old shingle roof in Waterloo. Lloyd came personally to inspect, explained the ventilation needs, and provided an honest quote. The crew was respectful, skilled, and took incredible care protecting our gardens.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Elena K.",
    location: "Cambridge, ON",
    service: "Leak Repairs & Storm Damage",
    rating: 5,
    date: "June 2025",
    text: "Had storm damage on our roof with missing shingles after high winds. Koebel's Roofing responded quickly, did a thorough assessment without pushing unnecessary work, and completed the repair flawlessly.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Mark & Jennifer S.",
    location: "Kitchener, ON",
    service: "Velux Skylight & Sun Tunnel Installation",
    rating: 5,
    date: "May 2025",
    text: "The Velux sun tunnel installation transformed our dark upper hallway into a naturally lit space. Professional installation, zero leaks, beautifully finished drywall collar. True Velux certified craftsmanship.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Gordon B.",
    location: "Guelph, ON",
    service: "Roof Shingle Replacement",
    rating: 5,
    date: "April 2025",
    text: "A neighbor recommended Lloyd Koebel after having their roof done. Now I understand why most of their work is referral-based. Zero sales games, punctual timeline, and top-tier Malarkey shingles installed with care.",
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "how-to-choose-contractor",
    slug: "how-to-choose-the-right-roofing-contractor-in-kitchener-waterloo-and-what-to-avoid",
    title: "How to Choose the Right Roofing Contractor in Kitchener-Waterloo (And What to Avoid)",
    date: "August 22, 2025",
    author: "Lloyd Koebel",
    category: "Homeowner Roofing Guides",
    readTime: "4 min read",
    image: "/assets/lloyd-inspection-truck.jpg",
    excerpt: "Hiring a roofer in Kitchener-Waterloo? Learn what to ask, what to avoid, and how to choose a roofing contractor you can trust. Koebel's Roofing shares expert tips.",
    content: [
      "Hiring a roofing contractor is one of the most critical decisions you will make for your home. Your roof protects your largest investment and your family inside it.",
      "Here are the essential things to look for when choosing a contractor in the Kitchener-Waterloo area:",
      "1. Hands-on Accountability: Ask who actually installs and oversees the job. When the business owner or certified supervisor is physically on-site, the standard of craftsmanship remains consistently high.",
      "2. Certified Installer Status: Manufacturers like Velux and Malarkey only certify contractors who demonstrate strict adherence to technical installation standards and warranty guidelines.",
      "3. Transparent Itemized Quotes: Avoid vague 'lump-sum' estimates that omit underlayment details, flashing replacement, or cleanup policies. A reputable roofer puts every scope detail in writing.",
      "4. Nail Cleanup Standards: A quality contractor will run multiple magnetic sweeps through driveways, walkways, and lawns to ensure no sharp hazards are left behind for pets or children."
    ]
  },
  {
    id: "repair-or-replace",
    slug: "is-it-better-to-repair-or-replace-your-roof",
    title: "Is It Better to Repair or Replace Your Roof? Here's How to Decide",
    date: "August 18, 2025",
    author: "Lloyd Koebel",
    category: "Roof Repair & Replacement Advice",
    readTime: "3 min read",
    image: "/assets/roof-repair-service.jpg",
    excerpt: "Not sure if you should repair or replace your roof? Discover expert advice from Koebel's Roofing in Kitchener-Waterloo. Free inspections.",
    content: [
      "When a leak appears or shingles blow off in a windstorm, homeowners immediately ask: Can this simply be repaired, or do I need an entire replacement?",
      "When a Repair Makes Sense: If your roof is under 15 years old, shingles still retain their mineral granules, and the leak is confined to a localized area (such as a pipe boot, chimney flashing, or isolated wind-lifted shingle), an honest repair can add 5–10 years to your roof's lifespan.",
      "When Replacement Is Necessary: If the shingles are curling, cracking, losing substantial granules, or the roof has exceeded 18–20 years in service, isolated repairs often become a game of whack-a-mole.",
      "At Koebel's Roofing, we always conduct an honest assessment. If a repair solves the problem safely, that is what we recommend."
    ]
  },
  {
    id: "roof-installation-process",
    slug: "what-to-expect-during-a-roof-installation-a-step-by-step-guide",
    title: "What to Expect During a Roof Installation: A Step-by-Step Guide",
    date: "August 15, 2025",
    author: "Lloyd Koebel",
    category: "Roof Installation Process",
    readTime: "5 min read",
    image: "/assets/lloyd-craftsman-ladder.jpg",
    excerpt: "Wondering what happens during a roof installation? Koebel's Roofing walks you through the step-by-step process, from inspection to cleanup. Serving Kitchener-Waterloo with care, clarity, and craftsmanship.",
    content: [
      "Replacing your roof is a major project, but with the right team and clear expectations, it doesn't have to be overwhelming.",
      "At Koebel's Roofing, we take pride in offering a smooth, transparent experience from start to finish.",
      "Most residential installations take 2 to 4 days depending on roof dimensions, pitch complexity, and weather conditions.",
      "From initial consultation to material selection, tarps and grounds protection, tear-off down to the plywood decking, precision shingle and flashing installation, to our spotless magnet-sweep cleanup, you will always know what is happening on your home."
    ]
  },
  {
    id: "when-to-replace",
    slug: "how-to-know-when-its-time-to-replace-your-roof",
    title: "How to Know When It's Time to Replace Your Roof",
    date: "August 11, 2025",
    author: "Lloyd Koebel",
    category: "Roofing Tips & Advice",
    readTime: "4 min read",
    image: "/assets/completed-roof-replacement.jpg",
    excerpt: "Is your roof trying to tell you something? Discover the top signs it's time for a replacement—straight from Koebel's Roofing, trusted roofing contractors in Kitchener-Waterloo.",
    content: [
      "Roofs often give subtle warning signals long before water drips onto your living room floor.",
      "Watch for: 1) Curling shingle edges and cupping in direct sunlight; 2) Dark bald spots where protective granules have washed into downspouts; 3) Daylight visible through roof boards in the attic; 4) Soft, spongy feel underfoot when walking on the roof deck.",
      "Catching these signs early prevents interior mold, rot in roof rafters, and compromised insulation."
    ]
  },
  {
    id: "raising-the-standard",
    slug: "koebels-roofing-raising-the-standard-one-roof-at-a-time",
    title: "Koebel's Roofing: Raising the Standard One Roof at a Time",
    date: "August 4, 2025",
    author: "Lloyd Koebel",
    category: "About Us",
    readTime: "3 min read",
    excerpt: "Get to know Koebel's Roofing. Your trusted roofing contractor in Kitchener-Waterloo. Learn our story, values, and what makes us Ontario's go-to team for roof installations.",
    content: [
      "Koebel's Roofing was founded in 2014 with a clear mission: to bring genuine integrity, craftsmanship, and transparency to the roofing industry in Kitchener, Waterloo, and surrounding communities.",
      "With over two decades of hands-on experience in construction, founder Lloyd Koebel leads the company with a simple belief: when you care deeply about your work, people notice.",
      "We partner with industry-leading manufacturers like Velux and Malarkey, treat every home like it shelters our own families, and take pride in knowing that the vast majority of our work comes from homeowner referrals."
    ]
  }
];

export const FAQS = [
  {
    q: "How do I know if I need a full roof replacement or just a repair?",
    a: "If your roof is under 15 years old and experiencing a localized leak from damaged flashing or a few wind-blown shingles, a professional repair is typically sufficient. If shingles are curling, losing significant granules across slopes, or the roof is aged beyond 18–20 years, a full replacement is generally the more cost-effective long-term investment. Lloyd Koebel conducts on-site inspections and provides honest, pressure-free advice on which path makes sense."
  },
  {
    q: "What areas does Koebel's Roofing serve?",
    a: "We proudly serve homeowners and builders throughout Kitchener, Waterloo, Cambridge, Guelph, Elmira, St. Jacobs, Baden, New Hamburg, and surrounding Waterloo Region communities."
  },
  {
    q: "What certifications does Koebel's Roofing hold?",
    a: "We are an official Velux Certified Installer for leak-proof skylights and sun tunnels, and a Malarkey Certified Installer for high-performance architectural shingle systems. These certifications reflect rigorous manufacturer training, strict installation standards, and access to enhanced warranties."
  },
  {
    q: "How long does a typical roof replacement take?",
    a: "Most residential roof replacements are completed in 2 to 4 working days, depending on roof size, pitch complexity, and weather conditions. We provide a clear schedule before starting and keep you informed every step of the way."
  },
  {
    q: "How do you protect my driveway, gardens, and landscaping during work?",
    a: "Job site care is central to our values. Before tear-off begins, we lay heavy protective tarps over landscaping, gardens, decks, and driveways. Following installation, our crew conducts thorough magnetic sweeps across the entire property to capture stray nails and leaves the grounds spotless."
  },
  {
    q: "How do I get an estimate from Lloyd Koebel?",
    a: "You can book a free consultation online, request a detailed quote, schedule a discovery call, or call Lloyd directly at (226) 338-2088. We schedule an in-person visit to inspect your roof and discuss your options without sales pressure."
  }
];
