
export type PitchDeckSlide = {
  number: string;
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;

  content: string[];

  highlight: string;

  image?: string;

  stages?: {
    label: string;
    value: string;
  }[];

  closing?: string;
};

export const pitchDeckSlides: PitchDeckSlide[] = [
{
  number: "01",
  slug: "title",
  label: "Cover / Vision",
  eyebrow: "Luxe & Pristine",
  title: "Cleaning Intelligence for Hospitality Operations",
  subtitle:
    "The AI-powered operating system transforming short-term rental turnovers into scalable, data-driven hospitality experiences.",
content: [
  "Born from real STR operations, built to empower the companies and people who make every stay possible.",
],
  highlight: "From Cleaners → Operators → Owners",
  image: "/people/hero-team.png",
  stages: [
    {
      label: "Today",
      value: "Short-Term Rental Turnover Operations",
    },
    {
      label: "Tomorrow",
      value: "Cleaning Intelligence Platform",
    },
    {
      label: "Future",
      value: "AI + Financial Infrastructure for Hospitality Workers",
    },
  ],
  closing:
    "Empowering the next generation of hospitality entrepreneurs.",
},

  {
  number: "02",
  slug: "problem",
  label: "The Big Problem + Market Opportunity",
  eyebrow: "The Problem",
  title: "Hospitality became digital. The physical experience did not.",
  subtitle:
    "Short-term rentals transformed how people travel, but the operational layer that makes every stay possible remains fragmented, manual, and invisible.",
  content: [
    "The new challenge is not only occupancy. It is Turnover Excellence.",
  ],
  highlight:
    "PMS platforms manage reservations. They do not manage physical readiness.",
  image: "/people/pristine-readiness.png",
  stages: [
    {
      label: "Gap 01",
      value: "WhatsApp + Photos + Spreadsheets + Human Memory",
    },
    {
      label: "Gap 02",
      value: "Cleaning companies remain vendors, not infrastructure",
    },
    {
      label: "Gap 03",
      value: "The workforce behind every stay remains invisible",
    },
  ],
  closing:
    "The opportunity: connect Properties → STR Operators → Cleaning Companies → Service Workers.",
},

  {
    number: "03",
    slug: "solution",
    label: "The Unique Solution",
    eyebrow: "Our Solution",
    title:
      "The operating system for short-term rental readiness.",
    subtitle:
      "A platform connecting operators, cleaners, workflows, and execution data.",
    content: [
      "Built from real turnover operations.",
      "Designed for STR operators.",
      "Powered by operational intelligence.",
    ],
    highlight:
      "From cleaning service → infrastructure layer.",
  },

  {
    number: "04",
    slug: "product",
    label: "Product Teaser",
    eyebrow: "The Product",
    title:
      "One platform to control every turnover.",
    subtitle:
      "Scheduling, cleaners, incidents, laundry, payments, and operational insights.",
    content: [
      "Daily operations dashboard.",
      "Cleaner workflow management.",
      "Building-level intelligence.",
    ],
    highlight:
      "Turning daily execution into scalable data.",
  },

  {
    number: "05",
    slug: "business-model",
    label: "Business Model Highlight",
    eyebrow: "Business Model",
    title:
      "Execution today. Software and financial infrastructure tomorrow.",
    subtitle:
      "A model built from operational demand, not assumptions.",
    content: [
      "Turnover execution revenue.",
      "SaaS operational platform.",
      "Cleaner payment infrastructure.",
    ],
    highlight:
      "Operations create the network. Software scales it.",
  },

  {
    number: "06",
    slug: "traction",
    label: "Traction",
    eyebrow: "Validation",
    title:
      "Already operating inside Miami’s STR ecosystem.",
    subtitle:
      "Real units. Real operators. Real operational complexity.",
    content: [
      "Active short-term rental turnovers.",
      "Brickell & Downtown Miami buildings.",
      "Live operational platform.",
    ],
    highlight:
      "Built in the field, not in a presentation.",
  },

  {
    number: "07",
    slug: "competition",
    label: "Competitive Landscape",
    eyebrow: "Why Different",
    title:
      "Existing tools manage properties. We manage execution.",
    subtitle:
      "The missing layer between software and the physical guest experience.",
    content: [
      "Property managers focus on bookings.",
      "Cleaning companies focus on labor.",
      "L&P connects operations.",
    ],
    highlight:
      "The STR execution layer.",
  },

  {
    number: "08",
    slug: "team",
    label: "Team",
    eyebrow: "The Builders",
    title:
      "Operators building software from the problem itself.",
    subtitle:
      "A team combining execution, systems thinking, and hospitality operations.",
    content: [
      "Operational experience.",
      "Technology development.",
      "STR market knowledge.",
    ],
    highlight:
      "We are not observing the problem. We live it daily.",
  },

  {
    number: "09",
    slug: "vision",
    label: "Vision",
    eyebrow: "The Future",
    title:
      "The infrastructure layer powering modern hospitality operations.",
    subtitle:
      "From cleaners to operators, buildings, guests, and financial flows.",
    content: [
      "Operational intelligence.",
      "Human-centered workforce.",
      "Hospitality infrastructure.",
    ],
    highlight:
      "Building the future operating system for STR.",
  },

  {
    number: "10",
    slug: "call-to-action",
    label: "Call To Action",
    eyebrow: "Join The Journey",
    title:
      "Help us build the next hospitality operating layer.",
    subtitle:
      "A growing market needs a new execution infrastructure.",
    content: [
      "Scale operations.",
      "Expand technology.",
      "Transform STR execution.",
    ],
    highlight:
      "Let’s build what powers the stay.",
  },
];


export function getSlideBySlug(slug: string) {
  return pitchDeckSlides.find((slide) => slide.slug === slug);
}


export function getSlideIndex(slug: string) {
  return pitchDeckSlides.findIndex(
    (slide) => slide.slug === slug
  );
}