export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  photo: string;
  /** Tailwind object-position class — needed where the source photo isn't face-centred. */
  focus?: string;
  bio?: string[];
  highlights?: { label: string; value: string }[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "mohandass-s-nair",
    name: "Dato' Mohandass S Nair",
    role: "Senior Consultant & Director",
    credentials: "B.E. (Hons) Electrical (University Malaya), MBA",
    photo: "/images/mohandass.jpg",
    highlights: [
      {
        label: "Qualifications",
        value: "B.E. (Hons) Electrical, University Malaya · MBA",
      },
      {
        label: "Recognition",
        value: "DSPN (Penang) · TNB APS Award for meritorious service",
      },
      {
        label: "Current role",
        value: "Adjunct Professor, Universiti Tenaga Nasional",
      },
    ],
    bio: [
      "Adjunct Professor Dato' Mohandass Sathukutty Nair is the Senior Consultant and Director of MCUBES Consultancy Sdn. Bhd. He has worked in Lembaga Letrik Negara and Tenaga Nasional Berhad for more than 30 years, with extensive knowledge of the power utility business having served in many key positions within the organisation in Kuala Lumpur, Perak, Selangor and Penang.",
      "Prior to retirement in mid-2019, he headed TNB's revolutionary project spearheading the roll-out of smart meters in Malaysia, which re-defined the process of metering and billing customers. In this position he also demonstrated the ability to set up a new functional organisation and meet challenging timelines with customer satisfaction and quality.",
      "Earlier, holding key positions in the states of Penang and Selangor as General Manager and Chief Engineer, he was fully responsible for all distribution-level matters related to technical, commercial and stakeholder management — including coordination with Transmission, overseeing employee strengths exceeding 650 staff.",
      "He has attended many international conferences and has presented papers at several of them. He has also undertaken extensive benchmarking visits to Japan, Australia, India, Hong Kong, the United States, the United Kingdom, France, Spain and most countries in the ASEAN region, to derive the best options for the utility after assessing state-of-the-art practices.",
      "He was awarded the DSPN, carrying the title Dato', by the state of Penang, and TNB's APS award for outstanding meritorious service spanning over 30 years. Dato' Mohandass is currently an Adjunct Professor at Universiti Tenaga Nasional and is sought after by international companies looking to do business in Malaysia, especially in the energy space.",
    ],
  },
  {
    slug: "malathi-marimuthu",
    name: "Datin Malathi Marimuthu",
    role: "Director",
    credentials: "LLB, LLM (University Malaya)",
    photo: "/images/malathi.jpg",
  },
  {
    slug: "girrja-mohandass",
    name: "Girrja Mohandass",
    role: "Consultant",
    credentials: "MEng. (Hons) Mechanical (Imperial College London)",
    photo: "/images/girrja.jpg",
  },
  {
    slug: "deepa-mohandass",
    name: "Deepa Mohandass",
    role: "Administrative Assistant",
    credentials: "Masters of Education (Advanced) — Special Education",
    photo: "/images/deepa.jpg",
  },
];
