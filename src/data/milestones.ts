export const ERAS = [
  {
    id: "nation-building",
    name: "Nation-Building",
    range: "1947–1965",
    description:
      "A young republic writes its constitution, builds its institutions and its first big industries.",
  },
  {
    id: "food-and-industry",
    name: "Food Security & Industry",
    range: "1965–1991",
    description:
      "The country feeds itself, reaches for space, and starts to build a computer industry.",
  },
  {
    id: "liberalisation",
    name: "Liberalisation & Telecom",
    range: "1991–2005",
    description:
      "The economy opens, software booms, and the phone in your pocket stops being a luxury.",
  },
  {
    id: "welfare-and-digital",
    name: "Welfare & Digital Foundations",
    range: "2005–2014",
    description:
      "Rights-based welfare arrives, and the digital rails Aadhaar and NPCI are laid for what follows.",
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
      "Adopted on 26 November 1949, in force from 26 January 1950 — universal adult franchise from day one, at a time when most of the world's democracies did not extend it to all citizens.",
    sector: "society",
    era: "nation-building",
    anchor: "constitution-1950",
  },
  {
    year: 1950,
    title: "Planning Commission and the Five Year Plans",
    summary:
      "The Planning Commission is constituted to steer a poor, agrarian economy through industrialisation — the institutional ancestor of today's NITI Aayog.",
    sector: "industry",
    era: "nation-building",
    anchor: "planning-commission-1950",
  },
  {
    year: 1951,
    title: "First IIT established at Kharagpur",
    summary:
      "The first Indian Institute of Technology opens — the start of a system that would both power India's engineering talent pipeline and become a global brand in its own right.",
    sector: "science-tech",
    era: "nation-building",
    anchor: "first-iit-1951",
  },
  {
    year: 1951,
    title: "Bhakra Nangal Dam and the big-dam era",
    summary:
      "Inaugurated by Nehru as the 'new temple of resurgent India', Bhakra and its peers brought irrigation and power to the Green Revolution's future breadbasket.",
    sector: "infrastructure",
    era: "nation-building",
    anchor: "bhakra-nangal-1951",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1952,
    title: "First general elections",
    summary:
      "Over 173 million eligible voters cast their vote across a country the size of a continent — the largest democratic exercise ever attempted at the time.",
    sector: "society",
    era: "nation-building",
    anchor: "first-elections-1952",
  },
  {
    year: 1954,
    title: "Atomic Energy Programme",
    summary:
      "Homi Bhabha founds the atomic energy programme, placing India among the few nations building civilian nuclear capability from scratch — and seeding today's ISRO.",
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
      "A Nike-Apache rocket launched from a fishing village near Thiruvananthapuram begins India's space story — carried to the pad by bicycle in its early days.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "thumba-rocket-1963",
  },
  {
    year: 1965,
    title: "Green Revolution begins",
    summary:
      "High-yield wheat varieties, fertiliser and irrigation arrive in Punjab — India moves from food-aid recipient toward feeding itself.",
    sector: "agriculture",
    era: "food-and-industry",
    anchor: "green-revolution-1965",
  },
  {
    year: 1969,
    title: "Indian Institutes of Management and bank nationalisation",
    summary:
      "Bank nationalisation takes banking to the hinterland; the IIMs begin building the managerial class a growing economy needs.",
    sector: "industry",
    era: "food-and-industry",
    anchor: "bank-nationalisation-1969",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 1969,
    title: "ISRO founded",
    summary:
      "The Indian Space Research Organisation is established under Vikram Sarabhai — with the explicit view that space technology must serve the common man.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "isro-1969",
  },
  {
    year: 1970,
    title: "Operation Flood",
    summary:
      "The White Revolution begins organising milk cooperatives nationwide — India would go on to become the world's largest milk producer.",
    sector: "agriculture",
    era: "food-and-industry",
    anchor: "operation-flood-1970",
  },
  {
    year: 1975,
    title: "Aryabhata, India's first satellite",
    summary:
      "India's first satellite is launched on a Soviet rocket — a decade later, its own ASLV programme begins learning to reach orbit on its own.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "aryabhata-1975",
  },
  {
    year: 1980,
    title: "SLV-3 puts India in orbit",
    summary:
      "Rohini RS-1 reaches orbit on an Indian launch vehicle — the country joins a very small club able to launch its own satellites.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "slv3-1980",
  },
  {
    year: 1984,
    title: "Kolkata Metro",
    summary:
      "India's first metro line opens between Esplanade and Bhowanipore — 3.4 km of it, and decades ahead of the metro boom that followed.",
    sector: "infrastructure",
    era: "food-and-industry",
    anchor: "kolkata-metro-1984",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1986,
    title: "Mission of the CSIR labs and C-DAC",
    summary:
      "C-DAC is founded to build supercomputers after technology denial — an early instance of India converting constraint into capability.",
    sector: "science-tech",
    era: "food-and-industry",
    anchor: "cdac-1986",
  },
  {
    year: 1986,
    title: "Computerised railway ticketing",
    summary:
      "Indian Railways introduces computerised ticketing and reservations — the seed of the IRCTC that would later sell more tickets than most airlines.",
    sector: "infrastructure",
    era: "food-and-industry",
    anchor: "railway-ticketing-1986",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 1991,
    title: "Economic liberalisation",
    summary:
      "A balance-of-payments crisis forces the reforms that unshackled growth: devaluation, delicensing, trade opening. The fastest growth era in Indian history begins.",
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
      "The first commercial mobile call is made in July 1995, and VSNL starts internet services the same year — teledensity then: under 1 per 100.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "first-mobile-call-1995",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 1999,
    title: "Golden Quadrilateral announced",
    summary:
      "The National Highway Development Project connects the four metros with 5,846 km of four-to-six-lane highways — the road network never looks back.",
    sector: "infrastructure",
    era: "liberalisation",
    anchor: "golden-quadrilateral-1999",
  },
  {
    year: 1999,
    title: "Kargil conflict and the IT talent signal",
    summary:
      "Through the late 90s, India's engineering colleges turn out the talent that staffs the global internet build-out — the diaspora's Google, Sun and Hotmail moments all trace back here.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "it-talent-1999",
  },
  {
    year: 2001,
    title: "Sarva Shiksha Abhiyan",
    summary:
      "Universal elementary education becomes a national mission — the programme that would take hundreds of millions of children into school.",
    sector: "society",
    era: "liberalisation",
    anchor: "ssa-2001",
  },
  {
    year: 2002,
    title: "Delhi Metro opens",
    summary:
      "The first Delhi Metro line opens on 24 December 2002 — on time and within budget, and the template for the metro boom across Indian cities.",
    sector: "infrastructure",
    era: "liberalisation",
    anchor: "delhi-metro-2002",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 2003,
    title: "Chandrayaan programme begins",
    summary:
      "ISRO approves the first lunar mission — a scientific statement of intent from a programme still flying on PSLV.",
    sector: "science-tech",
    era: "liberalisation",
    anchor: "chandrayaan-2003",
  },
  {
    year: 2005,
    title: "RTI Act",
    summary:
      "The Right to Information Act makes the state answerable to the citizen — the transparency instrument this journal's submissions habitually rely on.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "rti-2005",
  },
  {
    year: 2006,
    title: "Dedicated Freight Corridor sanctioned",
    summary:
      "The Dedicated Freight Corridor programme is sanctioned to unclog the trunk routes — the century's biggest rail infrastructure bet.",
    sector: "infrastructure",
    era: "welfare-and-digital",
    anchor: "dfc-2006",
    relatedNow: "/now/rail-electrification",
  },
  {
    year: 2008,
    title: "NPCI incorporated",
    summary:
      "The National Payments Corporation of India is set up to give India its own retail payment rails — the organisation that would later build UPI.",
    sector: "industry",
    era: "welfare-and-digital",
    anchor: "npci-2008",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 2009,
    title: "Aadhaar begins",
    summary:
      "The unique-ID project starts enrolling residents — criticised, litigated, and ultimately the identity layer beneath welfare delivery and payments.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "aadhaar-2009",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 2010,
    title: "CWG Delhi and Aadhaar-linked PDS pilots",
    summary:
      "A messy Games overshadows steady institutional work: Aadhaar-linked delivery pilots begin in public distribution, seeding the DBT revolution.",
    sector: "society",
    era: "welfare-and-digital",
    anchor: "pds-pilots-2010",
    relatedNow: "/now/jan-dhan-accounts",
  },
  {
    year: 2012,
    title: "RBI vision for payments",
    summary:
      "The RBI's vision statement commits to a safe, interoperable, inclusive payment system — the policy runway on which UPI would take off.",
    sector: "industry",
    era: "welfare-and-digital",
    anchor: "rbi-vision-2012",
    relatedNow: "/now/upi-payments",
  },
  {
    year: 2013,
    title: "Mangalyaan approved",
    summary:
      "ISRO's Mars Orbiter Mission is approved and built for less than the budget of a Hollywood space movie — it would reach Mars orbit the first time, a global first.",
    sector: "science-tech",
    era: "welfare-and-digital",
    anchor: "mangalyaan-2013",
  },
];
