import type { Metadata } from "next";
export const site = {
  name: "InstaLaw Group",
  phone: "888-383-8022",
  tel: "tel:+18883838022",
  email: "info@instalawgroup.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://aria-website-lyart-three.vercel.app",
};
export type Office = {
  city: string;
  state: string;
  street: string[];
  zip: string;
};
export const offices: Office[] = [
  {
    city: "San Francisco",
    state: "CA",
    street: ["985 Oak Street"],
    zip: "94117",
  },
  {
    city: "Sacramento",
    state: "CA",
    street: ["1499 12th Street"],
    zip: "95814",
  },
  {
    city: "Los Angeles",
    state: "CA",
    street: ["404 West 2nd Street"],
    zip: "90012",
  },
  {
    city: "Seattle",
    state: "WA",
    street: ["600 1st Avenue", "Ste 102, PMB 2560"],
    zip: "98104",
  },
];
export const mainOffice = offices[0];
export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "InstaLaw Group — San Francisco Personal Injury Lawyers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
export const faqs = [
  {
    q: "Is the first consultation free?",
    a: "Yes. InstaLaw offers a free initial consultation. Tell us what happened, ask your questions, and find out whether the firm can help. You do not need a complete file to start the conversation.",
  },
  {
    q: "How do attorney fees work?",
    a: "Personal injury representation is offered on a contingency-fee basis: attorney fees depend on a recovery. Before representation begins, ask us to explain the percentage, case expenses, and how those expenses are handled. The written agreement controls the terms of your case.",
  },
  {
    q: "What should I have ready when I call?",
    a: "Start with when and where the injury happened and a short description of what occurred. If you have them, keep incident reports, photographs, insurance letters, and treatment records together. You can still contact us if you do not have these documents yet.",
  },
  {
    q: "Can I call for a family member?",
    a: "Yes. You can make the first inquiry on behalf of someone you care about. We will explain what information and authorization may be needed before discussing or handling their matter.",
  },
  {
    q: "How much is my case worth?",
    a: "A useful assessment requires the facts: responsibility for the incident, medical evidence, the effect on your work and daily life, and available coverage. An online estimate cannot account for all of those details. We start by understanding your situation.",
  },
  {
    q: "Where does Aria practice?",
    a: "Aria Noosha is admitted in California and Washington. InstaLaw serves injury clients in those states and also handles immigration matters. Contact the firm to discuss your location and the type of help you need.",
  },
];
