export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  alt: string;
  bio: string[];
};
export const team: TeamMember[] = [
  {
    slug: "aria-noosha",
    name: "Aria Noosha",
    role: "Founder & Attorney",
    photo: "/team/aria-office.jpg",
    alt: "Aria Noosha, founder and attorney at InstaLaw Group",
    bio: [
      "Aria earned his J.D. from Harvard Law School in 2021 and practiced at Orrick, Herrington & Sutcliffe, a global Big Law firm, in San Francisco until 2023. He founded InstaLaw Group to bring that level of preparation to injured people. He is admitted in California and Washington.",
    ],
  },
  {
    slug: "carlos-mauricio",
    name: "Carlos Mauricio",
    role: "Personal Injury Paralegal",
    photo: "/team/carlos-mauricio.jpg",
    alt: "Carlos Mauricio, personal injury paralegal at InstaLaw Group",
    bio: [
      "Carlos supports cases from intake through resolution. He gathers medical records, organizes evidence, prepares documents, and handles communication with insurance companies.",
      "His focus on detail helps keep every file complete and moving forward, so clients stay informed from start to finish.",
    ],
  },
  {
    slug: "alejandra-naranjo",
    name: "Alejandra Naranjo",
    role: "Case Manager",
    photo: "/team/alejandra-naranjo.jpg",
    alt: "Alejandra Naranjo, case manager at InstaLaw Group",
    bio: [
      "Alejandra is often a client’s first point of contact. She helps collect documents, schedules appointments, tracks case progress, and answers questions along the way.",
      "An injury can be overwhelming. Alejandra makes the process simple and clear, so clients can focus on getting better.",
    ],
  },
  {
    slug: "beau-brines",
    name: "Beau Brines",
    role: "Case Manager",
    photo: "/team/beau-brines.jpg",
    alt: "Beau Brines, case manager at InstaLaw Group",
    bio: [
      "Beau coordinates case details, manages deadlines, and keeps clients updated at every stage. He works closely with the attorney, medical providers, and insurance companies.",
      "Clients know him for quick, straightforward answers to their questions, big or small.",
    ],
  },
];
