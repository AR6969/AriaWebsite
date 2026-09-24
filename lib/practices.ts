export type Practice = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  intro: string;
  sections: { title: string; text: string }[];
  checklist: string[];
  question: string;
  answer: string;
};
export const practices: Practice[] = [
  {
    slug: "car-accidents",
    name: "Car accidents",
    title: "San Francisco Car Accident Lawyer",
    description:
      "Injured in a car accident? Talk with InstaLaw Group about insurance, your injuries, and the next steps. Free initial consultation.",
    h1: "San Francisco Car Accident Lawyer",
    summary: "Collisions involving cars, trucks, motorcycles, and pedestrians.",
    intro:
      "Treatment appointments. Missed work. Calls from an insurance adjuster. After a collision, the practical demands can arrive all at once. InstaLaw Group helps you sort through the claim so you can make informed decisions about what comes next.",
    sections: [
      {
        title: "Evidence that supports a car accident claim",
        text: "The location of the crash, the vehicles involved, photographs, witness accounts, and the incident report can all help explain what happened. Medical records and time away from work help document its impact. We review those pieces together, rather than treating the insurance company's first assessment as the whole story.",
      },
      {
        title: "Before you accept an insurance settlement offer",
        text: "A settlement decision should account for the evidence and the effect of the injuries on your life. Bring any offer, release, or insurance correspondence to the consultation. We can discuss what needs further review and the questions to resolve before deciding how to proceed.",
      },
      {
        title: "How we handle your car accident claim",
        text: "If we take your case, the work can include gathering records, assessing responsibility, communicating with insurers, and developing a demand supported by evidence. The approach depends on your injuries and the facts of the collision. We explain the proposed scope of representation at the outset.",
      },
    ],
    checklist: [
      "Date and location of the collision",
      "Incident report or report number, if available",
      "Photos, witness details, and insurance correspondence",
      "A summary of treatment and work you have missed",
    ],
    question: "Do I need an insurance offer before contacting you?",
    answer:
      "No. You can contact us before an offer arrives, while a claim is being reviewed, or when you have questions about an offer. Tell us about any deadlines in letters you have received.",
  },
  {
    slug: "medical-malpractice",
    name: "Medical malpractice",
    title: "Medical Malpractice Lawyer | California & Washington",
    description:
      "Discuss concerns about medical care with InstaLaw Group. A careful review of treatment, records, and potential next steps begins with a free consultation.",
    h1: "Medical Malpractice Lawyer in California & Washington",
    summary: "Injuries caused by negligent diagnosis, treatment, or surgery.",
    intro:
      "An unexpected medical outcome can be frightening. Understanding whether there may be a legal claim takes more than a poor result alone. InstaLaw Group reviews medical-negligence inquiries with attention to the treatment, the records, and the harm involved.",
    sections: [
      {
        title: "Start with your treatment timeline",
        text: "Write down the providers you saw, the care you received, and when you first noticed a problem. Discharge paperwork, test results, medication lists, and follow-up recommendations can help make that timeline clearer. You do not need to interpret the records yourself before contacting us.",
      },
      {
        title: "How a medical malpractice claim is evaluated",
        text: "These cases can require both legal analysis and medical expertise. Reviewing the applicable standard of care, what happened during treatment, and whether the treatment caused harm is central to evaluating a potential claim. We discuss the information needed for that review and whether further investigation is appropriate.",
      },
      {
        title: "What to expect from a case review",
        text: "We begin with your concerns and explain what the firm can assess. If representation is offered, the agreement will describe the work and fees. We avoid promising a result based on an initial description, and we encourage you to bring any notices or correspondence that mention a deadline.",
      },
    ],
    checklist: [
      "Names of facilities and treating providers",
      "Dates of treatment and follow-up visits",
      "Available medical records and discharge instructions",
      "A short description of the harm and when you noticed it",
    ],
    question: "Does an unexpected outcome always mean malpractice?",
    answer:
      "No. A disappointing outcome and negligent care are not the same thing. Evaluating a possible claim requires a review of the care, applicable standards, causation, and injury.",
  },
  {
    slug: "wrongful-death",
    name: "Wrongful death",
    title: "San Francisco Wrongful Death Lawyer",
    description:
      "InstaLaw Group helps families explore legal options after a death caused by another party's conduct. Speak with our team in a free initial consultation.",
    h1: "San Francisco Wrongful Death Lawyer",
    summary: "Claims for families who lost a loved one due to negligence.",
    intro:
      "When a loved one dies after an accident or suspected negligence, legal questions can feel impossible to take on. InstaLaw Group gives families a place to start, with a careful conversation about the circumstances and the options that may be available.",
    sections: [
      {
        title: "Starting a wrongful death inquiry",
        text: "You do not need to arrive with a legal theory or every document. Tell us what happened, your relationship to the person who died, and any information you have received from insurers, investigators, or medical providers. We will explain what additional information may be needed.",
      },
      {
        title: "Who can bring a wrongful death claim",
        text: "The people entitled to pursue a claim and the types of losses that may be considered depend on the jurisdiction and circumstances. A case review can help distinguish a family's potential claims from issues involving an estate. We discuss those questions before recommending a direction.",
      },
      {
        title: "Investigating what happened",
        text: "Incident reports, medical records, correspondence, and witness information can help clarify responsibility. Financial records may also matter to understanding the loss. If we accept representation, we explain the investigative steps and how we will communicate with the family as the matter progresses.",
      },
    ],
    checklist: [
      "Your relationship to the person who died",
      "Date, location, and circumstances of the incident",
      "Available reports and insurer correspondence",
      "Any information about an estate representative",
    ],
    question: "Can a family member make the first inquiry?",
    answer:
      "Yes. A family member can contact us to begin the conversation. We will discuss who may have authority to pursue a claim and what further information is needed.",
  },
  {
    slug: "slip-and-fall",
    name: "Slip & fall",
    title: "San Francisco Slip and Fall Lawyer",
    description:
      "Hurt by an unsafe property condition? InstaLaw Group reviews slip-and-fall injuries and premises-liability inquiries. Request a free initial consultation.",
    h1: "San Francisco Slip and Fall Lawyer",
    summary: "Injuries from unsafe floors, stairs, sidewalks, and property.",
    intro:
      "An unsafe walkway, a spill, or a poorly maintained property can lead to a serious injury. InstaLaw Group helps people understand whether the circumstances of a fall may support a claim and what information is needed to evaluate it.",
    sections: [
      {
        title: "Proving the property condition",
        text: "Where you fell, what caused the fall, and who controlled the area are useful starting points. Photos, incident reports, and witness accounts may help establish the condition at the time. Conditions can change quickly, so keep any records already available to you.",
      },
      {
        title: "Establishing property owner responsibility",
        text: "A claim can involve questions about how long a condition existed, whether it was known, and what precautions were taken. Those questions need evidence. We review the available facts and explain what further investigation may be appropriate instead of assuming every fall creates a claim.",
      },
      {
        title: "Documenting your injuries and losses",
        text: "Treatment records, bills, missed work, and changes to daily activities help describe the consequences of an injury. If the firm takes your case, we work to connect the evidence of the incident with evidence of the harm, then discuss a strategy for pursuing the claim.",
      },
    ],
    checklist: [
      "The property's address and where the fall occurred",
      "Photos of the condition, if already available",
      "An incident report and names of witnesses",
      "Treatment information and communications from the property owner",
    ],
    question: "What if I did not take pictures at the scene?",
    answer:
      "You can still contact us. Explain what you remember and whether anyone witnessed the fall or made an incident report. We can discuss other information that may be available.",
  },
  {
    slug: "workplace-accidents",
    name: "Workplace accidents",
    title: "Workplace Accident Lawyer | California & Washington",
    description:
      "Injured while working? Discuss your accident and possible legal options with InstaLaw Group. Free initial consultation for workplace injury inquiries.",
    h1: "Workplace Injury Lawyer in California & Washington",
    summary: "On-the-job injuries, including claims against third parties.",
    intro:
      "An injury at work can raise questions about treatment, income, and who is responsible. InstaLaw Group reviews workplace-accident inquiries to help identify the issues and the kind of legal assistance your situation may require.",
    sections: [
      {
        title: "Workers’ compensation vs. third-party claims",
        text: "A workplace injury may involve workers' compensation, a claim involving a third party, or other issues. These paths are not interchangeable. The relationship between the people and businesses involved matters, as do the location and circumstances of the incident.",
      },
      {
        title: "Identifying every responsible party",
        text: "Tell us who you work for, where the injury happened, and whether another business, driver, contractor, or piece of equipment was involved. Keep any incident report, claim number, and correspondence together. This helps us assess the matter without assuming that a claim against an employer is available.",
      },
      {
        title: "What representation covers",
        text: "During the consultation, we discuss the nature of the inquiry and whether the firm can assist. If representation is offered, its scope should be clear, including which claims are being handled. Ask about any notices you have received and the next steps relevant to your circumstances.",
      },
    ],
    checklist: [
      "Employer and worksite information",
      "A description of the task and incident",
      "Names of other businesses or people involved",
      "Incident reports, claim numbers, and benefit notices",
    ],
    question:
      "Is a workplace injury claim the same as a personal injury lawsuit?",
    answer:
      "Not necessarily. Workers' compensation and civil injury claims have different rules and procedures. We review the circumstances to help identify the relevant issues and whether the firm can help.",
  },
];
