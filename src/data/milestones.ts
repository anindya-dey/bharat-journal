export const ERAS = [
  {
    id: "nation-building",
    name: "Nation-Building",
    range: "1947–1965",
    description:
      "A young republic writes its constitution and builds its first institutions and industries.",
  },
  {
    id: "food-and-industry",
    name: "Food Security & Industry",
    range: "1965–1991",
    description:
      "The country feeds itself, reaches for space, and starts building a computer industry.",
  },
  {
    id: "liberalisation",
    name: "Liberalisation & Telecom",
    range: "1991–2005",
    description:
      "The economy opens, software booms, and the phone stops being a luxury.",
  },
  {
    id: "welfare-and-digital",
    name: "Welfare & Digital Foundations",
    range: "2005–2014",
    description:
      "Rights-based welfare arrives, and the digital rails — Aadhaar, NPCI — are laid for what follows.",
  },
] as const;

export const SECTORS = [
  { id: "agriculture", name: "Agriculture" },
  { id: "industry", name: "Industry" },
  { id: "science-tech", name: "Science & Tech" },
  { id: "infrastructure", name: "Infrastructure" },
  { id: "society", name: "Society" },
  { id: "health", name: "Health" },
] as const;

export type EraId = (typeof ERAS)[number]["id"];
export type SectorId = (typeof SECTORS)[number]["id"];

export interface Milestone {
  year: number;
  date?: string;
  title: string;
  summary: string;
  sector: SectorId;
  era: EraId;
  anchor: string;
  relatedNow?: string;
  relatedNext?: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: 1950,
    title: "The Constitution of India",
    summary:
      "Adopted in November 1949, in force from 26 January 1950. Universal adult franchise from day one — unusual for a poor country at the time.",
    sector: "society",
    era: "nation-building",
    anchor: "constitution-1950",
  },
  {
    year: 1950,
    title: "Planning Commission and the Five Year Plans",
    summary:
      "A new body to steer a young, agrarian economy through industrialisation. Today it lives on as NITI Aayog.",
    sector: "industry",
    era: "nation-building",
    anchor: "planning-commission-1950",
  },
  {
    year: 1951,
    title: "First IIT established at Kharagpur",
    summary:
      "The first IIT opens at Kharagpur. The system grows into India's engineering pipeline and a global brand.",
    sector: "science-tech",
    era: "nation-building",
    anchor: "first-iit-1951",
  },
  {
    year: 1951,
    title: "Bhakra Nangal Dam and the big-dam era",
    summary:
      "Nehru calls dams the 'new temples of resurgent India'. Bhakra brings irrigation and power to the future breadbasket.",
    sector: "infrastructure",
    era: "nation-building",
    anchor: "bhakra-nangal-1951",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1952,
    title: "First general elections",
    summary:
      "Over 173 million eligible voters. The largest democratic exercise ever attempted at the time.",
    sector: "society",
    era: "nation-building",
    anchor: "first-elections-1952",
  },
  {
    year: 1954,
    title: "Atomic Energy Programme",
    summary:
      "Homi Bhabha starts the atomic energy programme. India builds nuclear capability from scratch — and this seeds ISRO.",
    sector: "science-tech",
    era: "nation-building",
    anchor: "atomic-energy-1954",
  },
  {
    year: 1955,
    title: "State Bank of India and public-sector banking",
    summary:
      "The Imperial Bank becomes the State Bank of India, beginning the spread of banking into India's villages.",
    sector: "industry",
    era: "nation-building",
    anchor: "sbi-1955",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 1956,
    title: "Integral Coach Factory, Madras",
    summary:
      "India starts building its own passenger coaches at ICF Perambur — the same factory that, decades later, would build the Vande Bharat trainsets.",
    sector: "industry",
    era: "nation-building",
    anchor: "icf-1956",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1960,
    title: "First 25 kV AC electric traction",
    summary:
      "After the 1925 Bombay suburban electrification on DC, Indian Railways adopts 25 kV AC traction — the technology standard that today's electrification drive is completing.",
    sector: "infrastructure",
    era: "nation-building",
    anchor: "ac-traction-1960",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1963,
    title: "First sounding rocket from Thumba",
    summary:
      "A rocket launched from a fishing village near Thiruvananthapuram begins India's space story. Early rockets went to the pad by bicycle.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "thumba-rocket-1963",
  },
  {
    year: 1965,
    title: "Green Revolution begins",
    summary:
      "High-yield wheat, fertiliser and irrigation arrive in Punjab. India stops being a food-aid recipient.",
    sector: "agriculture",
    era: "food-and-industry",
    anchor: "green-revolution-1965",
  },
  {
    year: 1969,
    title: "Indian Institutes of Management and bank nationalisation",
    summary:
      "Bank nationalisation takes banking to the hinterland. The IIMs start building the managers a growing economy needs.",
    sector: "industry",
    era: "food-and-industry",
    anchor: "bank-nationalisation-1969",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 1969,
    title: "ISRO founded",
    summary:
      "ISRO is established under Vikram Sarabhai. Its founding view: space technology must serve the common man.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "isro-1969",
  },
  {
    year: 1970,
    title: "Operation Flood",
    summary:
      "Operation Flood organises milk cooperatives nationwide. India goes on to become the world's largest milk producer.",
    sector: "agriculture",
    era: "food-and-industry",
    anchor: "operation-flood-1970",
  },
  {
    year: 1975,
    title: "Aryabhata, India's first satellite",
    summary:
      "India's first satellite, on a Soviet rocket. A decade later, its own launch programme begins.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "aryabhata-1975",
  },
  {
    year: 1980,
    title: "SLV-3 puts India in orbit",
    summary:
      "Rohini RS-1 reaches orbit on an Indian launch vehicle. India joins a small club that can launch its own satellites.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "slv3-1980",
  },
  {
    year: 1984,
    title: "Kolkata Metro",
    summary:
      "India's first metro line opens in Kolkata — 3.4 km, decades ahead of the metro boom.",
    sector: "infrastructure",
    era: "food-and-industry",
    anchor: "kolkata-metro-1984",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1986,
    title: "Mission of the CSIR labs and C-DAC",
    summary:
      "C-DAC is founded to build supercomputers after technology denial. Constraint becomes capability.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "cdac-1986",
  },
  {
    year: 1986,
    title: "Computerised railway ticketing",
    summary:
      "Indian Railways introduces computerised ticketing. The seed of IRCTC.",
    sector: "infrastructure",
    era: "food-and-industry",
    anchor: "railway-ticketing-1986",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1991,
    title: "Economic liberalisation",
    summary:
      "India opens its economy: devaluation, delicensing, trade opening. The fastest growth era in Indian history begins.",
    sector: "industry",
    era: "liberalisation",
    anchor: "liberalisation-1991",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 1991,
    title: "Software services go global",
    summary:
      "Around the 1991 turn, Indian software firms shift from body-shopping to building global delivery networks — TCS, Infosys, Wipro become household names.",
    sector: "industry",
    era: "liberalisation",
    anchor: "software-1991",
  },
  {
    year: 1994,
    title: "All India Radio and Doordarshan reach the masses",
    summary:
      "The public broadcaster's expansion through the 80s and early 90s brings a shared national information sphere to a diverse, multilingual country.",
    sector: "society",
    era: "liberalisation",
    anchor: "broadcasting-1994",
  },
  {
    year: 1995,
    title: "The first mobile call and internet for the public",
    summary:
      "The first commercial mobile call is made. VSNL starts public internet the same year. Teledensity: under 1 per 100.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "first-mobile-call-1995",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 1999,
    title: "Golden Quadrilateral announced",
    summary:
      "The National Highway Development Project connects the four metros with 5,846 km of widened highways.",
    sector: "infrastructure",
    era: "liberalisation",
    anchor: "golden-quadrilateral-1999",
  },
  {
    year: 1999,
    title: "The Indian tech diaspora goes global",
    summary:
      "Through the late 90s, India's engineering colleges turn out the talent that staffs the global internet build-out — the diaspora's Google, Sun and Hotmail moments all trace back to this pipeline.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "it-talent-1999",
  },
  {
    year: 2001,
    title: "Sarva Shiksha Abhiyan",
    summary:
      "Universal elementary education becomes a national mission. Hundreds of millions of children enter school.",
    sector: "society",
    era: "liberalisation",
    anchor: "ssa-2001",
  },
  {
    year: 2002,
    title: "Delhi Metro opens",
    summary:
      "Delhi Metro's first line opens — on time and within budget. The template for every metro that follows.",
    sector: "infrastructure",
    era: "liberalisation",
    anchor: "delhi-metro-2002",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 2003,
    title: "Chandrayaan programme begins",
    summary:
      "ISRO approves its first lunar mission while still flying on PSLV.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "chandrayaan-2003",
  },
  {
    year: 2005,
    title: "RTI Act",
    summary:
      "The Right to Information Act makes the state answerable to the citizen. This journal's follow-ups rely on it.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "rti-2005",
  },
  {
    year: 2006,
    title: "Dedicated Freight Corridor sanctioned",
    summary:
      "The Dedicated Freight Corridor programme is sanctioned — the century's biggest rail infrastructure bet.",
    sector: "infrastructure",
    era: "welfare-and-digital",
    anchor: "dfc-2006",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 2008,
    title: "NPCI incorporated",
    summary:
      "NPCI is set up to give India its own payment rails. It later builds UPI.",
    sector: "industry",
    era: "welfare-and-digital",
    anchor: "npci-2008",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 2009,
    title: "Aadhaar begins",
    summary:
      "Aadhaar starts enrolling residents. It becomes the identity layer beneath welfare and payments.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "aadhaar-2009",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 2010,
    title: "CWG Delhi and Aadhaar-linked PDS pilots",
    summary:
      "Aadhaar-linked delivery pilots begin in public distribution — seeding DBT.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "pds-pilots-2010",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 2012,
    title: "RBI vision for payments",
    summary:
      "The RBI commits to a safe, interoperable, inclusive payment system. The runway for UPI.",
    sector: "industry",
    era: "welfare-and-digital",
    anchor: "rbi-vision-2012",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 2013,
    title: "Mangalyaan approved",
    summary:
      "The Mars Orbiter Mission is approved — built for less than a Hollywood space movie. It reaches Mars orbit first try.",
    sector: "science-tech",
    era: "welfare-and-digital",
    anchor: "mangalyaan-2013",
  },
  {
    year: 1973,
    title: "Project Tiger",
    summary:
      "Project Tiger launches — one of the world's most successful conservation programmes.",
    sector: "society",
    era: "food-and-industry",
    anchor: "project-tiger-1973",
  },
  {
    year: 1974,
    title: "India demonstrates nuclear capability",
    summary:
      "The Smiling Buddha test at Pokhran establishes India's nuclear capability — built entirely with homegrown science.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "pokhran-1974",
  },
  {
    year: 1975,
    title: "SITE: satellite television for education",
    summary:
      "SITE beams educational TV to thousands of villages — the world's first large-scale satellite education experiment.",
    sector: "society",
    era: "food-and-industry",
    anchor: "site-1975",
  },
  {
    year: 1983,
    title: "INSAT-1B and the communications revolution",
    summary:
      "INSAT-1B transforms telecom, broadcasting and weather forecasting — the backbone behind Doordarshan's reach.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "insat-1983",
  },
  {
    year: 1984,
    title: "Rakesh Sharma reaches space",
    summary:
      "Rakesh Sharma becomes the first Indian in space — nine years after India's first satellite.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "rakesh-sharma-1984",
  },
  {
    year: 1998,
    title: "Pokhran-II and strategic self-reliance",
    summary:
      "Pokhran-II confirms India's complete nuclear capability, built on decades of indigenous science.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "pokhran-1998",
  },
  {
    year: 2005,
    title: "MGNREGA: a legal right to work",
    summary:
      "MGNREGA creates a legal guarantee of 100 days of wage employment a year — the largest such programme in the world.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "mgnrega-2005",
  },
  {
    year: 2008,
    title: "Chandrayaan-1 finds water on the Moon",
    summary:
      "Chandrayaan-1 confirms water molecules on the Moon — a discovery that reshaped lunar science.",
    sector: "science-tech",
    era: "welfare-and-digital",
    anchor: "chandrayaan-1-2008",
  },
  {
    year: 2009,
    title: "Right to Education Act",
    summary:
      "Free and compulsory education becomes a fundamental right for every child aged 6–14.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "rte-2009",
  },
  {
    year: 2013,
    title: "National Food Security Act",
    summary:
      "The right to food is written into law — subsidised foodgrain for roughly two-thirds of the population.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "nfsa-2013",
  },
  {
    year: 1953,
    title: "National Malaria Control Programme",
    summary:
      "A nationwide campaign against malaria — then one of India's biggest killers — begins.",
    sector: "health",
    era: "nation-building",
    anchor: "malaria-programme-1953",
  },
  {
    year: 1956,
    title: "AIIMS established",
    summary:
      "AIIMS opens in New Delhi — the standard-setter for medical education and care.",
    sector: "health",
    era: "nation-building",
    anchor: "aiims-1956",
    relatedNow: "/now/life-expectancy",
  },
  {
    year: 1962,
    title: "National Tuberculosis Programme",
    summary:
      "A national programme against tuberculosis launches, scaling diagnosis and treatment nationwide.",
    sector: "health",
    era: "nation-building",
    anchor: "tb-programme-1962",
  },
  {
    year: 1977,
    title: "Smallpox eradicated in India",
    summary:
      "India records its last smallpox case and is certified free of the disease — one of history's great public-health victories.",
    sector: "health",
    era: "food-and-industry",
    anchor: "smallpox-eradicated-1977",
    relatedNow: "/now/life-expectancy",
  },
  {
    year: 1978,
    title: "Expanded Programme on Immunization",
    summary:
      "The Expanded Programme on Immunization makes childhood vaccines available nationwide.",
    sector: "health",
    era: "food-and-industry",
    anchor: "epi-1978",
  },
  {
    year: 1983,
    title: "First National Health Policy",
    summary:
      "The first National Health Policy sets a framework for primary healthcare and 'Health for All'.",
    sector: "health",
    era: "food-and-industry",
    anchor: "national-health-policy-1983",
  },
  {
    year: 1985,
    title: "Universal Immunization Programme",
    summary:
      "The Universal Immunization Programme scales vaccination to the whole country.",
    sector: "health",
    era: "food-and-industry",
    anchor: "universal-immunization-1985",
  },
  {
    year: 1992,
    title: "National AIDS Control Organisation",
    summary:
      "NACO is established to lead the national response to HIV/AIDS.",
    sector: "health",
    era: "liberalisation",
    anchor: "naco-1992",
  },
  {
    year: 1995,
    title: "Pulse Polio Immunization",
    summary:
      "Pulse Polio launches — an annual drive to immunise every child under five, reaching hundreds of millions.",
    sector: "health",
    era: "liberalisation",
    anchor: "pulse-polio-1995",
  },
  {
    year: 2005,
    title: "National Rural Health Mission",
    summary:
      "The National Rural Health Mission strengthens primary healthcare in rural India.",
    sector: "health",
    era: "welfare-and-digital",
    anchor: "nrhm-2005",
  },
  {
    year: 2011,
    title: "India is polio-free",
    summary:
      "India records its last case of wild poliovirus and is certified polio-free.",
    sector: "health",
    era: "welfare-and-digital",
    anchor: "polio-free-2011",
    relatedNow: "/now/life-expectancy",
  },
];
