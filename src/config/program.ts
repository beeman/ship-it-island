import type { ProgramConfig } from "@/types/program";

export const programConfig: ProgramConfig = {
  about: {
    description:
      "Ship It Island is hosted by Quan. The launch site keeps this section concise until the final long-form bio, credentials, and approved media assets are ready.",
    highlights: [
      "Founder story and credentials can expand here without changing the site structure.",
      "Breakpoint, PILLED, and related activations can drop into the trust block as approved assets arrive.",
      "Partner references can be added later without redesigning the core experience.",
    ],
    title: "About Quan",
  },
  applicationSections: [
    {
      fields: [
        {
          autocomplete: "name",
          label: "Your name",
          name: "yourName",
          placeholder: "Jane Founder",
          required: true,
          type: "text",
        },
        {
          autocomplete: "organization-title",
          label: "Your role",
          name: "yourRole",
          placeholder: "Founder, Co-founder, Product Lead",
          required: true,
          type: "text",
        },
        {
          autocomplete: "email",
          label: "Email",
          name: "email",
          placeholder: "you@project.xyz",
          required: true,
          type: "email",
        },
        {
          label: "Telegram handle",
          name: "telegramHandle",
          placeholder: "@handle",
          required: true,
          type: "text",
        },
        {
          label: "How did you hear about Ship It Island?",
          name: "heardAbout",
          placeholder: "Referral, event, X, friend, community",
          required: true,
          type: "text",
        },
      ],
      title: "Section 1: About You",
    },
    {
      fields: [
        {
          label: "Project name",
          name: "projectName",
          placeholder: "Your project",
          required: true,
          type: "text",
        },
        {
          label: "One-line description",
          name: "projectDescription",
          placeholder: "What does it do?",
          required: true,
          type: "text",
        },
        {
          label: "Website or app link",
          name: "projectLink",
          placeholder: "https://",
          required: true,
          type: "url",
        },
        {
          label: "Current stage",
          name: "currentStage",
          options: [
            {
              label: "Pre-revenue, live product",
              value: "Pre-revenue, live product",
            },
            {
              label: "Some traction but stalled",
              value: "Some traction but stalled",
            },
            {
              label: "Growing but need to level up",
              value: "Growing but need to level up",
            },
            {
              label: "Preparing for raise or major launch",
              value: "Preparing for raise or major launch",
            },
          ],
          required: true,
          type: "select",
        },
        {
          label: "How many active users/customers do you have?",
          name: "activeUsers",
          placeholder: "A rough estimate is fine",
          required: true,
          type: "text",
        },
        {
          label: "What's the #1 thing blocking your growth right now?",
          name: "primaryBlocker",
          placeholder: "1-2 sentences",
          required: true,
          rows: 4,
          type: "textarea",
        },
      ],
      title: "Section 2: About Your Project",
    },
    {
      fields: [
        {
          label: "What do you want to ship or improve during the 14 days?",
          name: "sprintGoal",
          placeholder: "Be as specific as you can",
          required: true,
          rows: 4,
          type: "textarea",
        },
        {
          label: "Which focus area fits best?",
          name: "focusArea",
          options: [
            {
              label: "Ship a feature or improvement",
              value: "Ship a feature or improvement",
            },
            {
              label: "Growth / user acquisition system",
              value: "Growth / user acquisition system",
            },
            {
              label: "Business model / monetization",
              value: "Business model / monetization",
            },
            {
              label: "Not sure yet",
              value: "Not sure yet",
            },
          ],
          required: true,
          type: "select",
        },
        {
          label: "How many people from your team would attend?",
          name: "teamSize",
          options: [
            {
              label: "1 (solo)",
              value: "1 (solo)",
            },
            {
              label: "2",
              value: "2",
            },
            {
              label: "3+",
              value: "3+",
            },
          ],
          required: true,
          type: "select",
        },
        {
          label: "Room preference",
          name: "roomPreference",
          options: [
            {
              label: "Shared room ($1,200/person)",
              value: "Shared room ($1,200/person)",
            },
            {
              label: "Private room ($2,000/person)",
              value: "Private room ($2,000/person)",
            },
            {
              label: "Flexible / no preference",
              value: "Flexible / no preference",
            },
          ],
          required: true,
          type: "select",
        },
      ],
      title: "Section 3: The Sprint",
    },
    {
      fields: [
        {
          label: "Are you open to feedback from other projects in the cohort?",
          name: "openToFeedback",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "Depends",
              value: "Depends",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          required: false,
          type: "select",
        },
        {
          label:
            "Are you comfortable being documented/filmed for case studies and content?",
          name: "caseStudyComfort",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "Maybe, let's discuss",
              value: "Maybe, let's discuss",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          required: false,
          type: "select",
        },
        {
          label: "Can you commit to 14 full days in Koh Samui in June 2026?",
          name: "canCommit",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "Likely, pending final dates",
              value: "Likely, pending final dates",
            },
            {
              label: "Not sure",
              value: "Not sure",
            },
          ],
          required: true,
          type: "select",
        },
      ],
      title: "Section 4: Fit",
    },
    {
      fields: [
        {
          label: "Anything else you want us to know?",
          name: "anythingElse",
          placeholder: "Optional context",
          required: false,
          rows: 4,
          type: "textarea",
        },
        {
          label: "Link to your Twitter/X or LinkedIn",
          name: "socialProfile",
          placeholder: "https://",
          required: false,
          type: "url",
        },
      ],
      title: "Section 5: Anything Else",
    },
  ],
  audiences: [
    {
      description:
        "Web3 teams with a live product and a clear blocker. Two to three people is the sweet spot for the sprint.",
      title: "Project teams",
    },
    {
      description:
        "Solo builders are welcome if they already have something live and know they need outside perspective plus focused execution.",
      title: "Solo founders",
    },
    {
      description:
        "Potential sponsors and partners can use the application flow or manual outreach until dedicated partner pages exist.",
      title: "Partners",
    },
  ],
  cohort: {
    duration: "14 days",
    limitedSpots: "4-6 projects max · around 10-12 people total",
    location: "Koh Samui, Thailand",
    summary:
      "A focused execution sprint for Web3 projects ready to ship a real improvement before they leave.",
    timeframe: "June 2026",
  },
  ctas: {
    apply: {
      href: "/apply",
      label: "Apply now",
    },
    waitlist: {
      href: "/#waitlist",
      label: "Join waitlist",
    },
  },
  dailyRhythm: [
    {
      description:
        "Wellness session, daily standup, and priorities locked before the deeper work starts.",
      title: "Morning",
    },
    {
      description:
        "Deep work with your team, specialist sessions, and structured peer feedback rounds.",
      title: "Work blocks",
    },
    {
      description:
        "Progress showcases, cross-project learnings, and flexible time to decompress or keep shipping.",
      title: "Evening",
    },
  ],
  diagnosticSteps: [
    "Product audit and user flow analysis",
    "Metrics and performance review",
    "Competitive landscape mapping",
    "Community and social presence audit",
    "Growth blockers identified before arrival",
    "Specialist matching based on the gaps we find",
  ],
  faqItems: [
    {
      description:
        "A 14-day execution sprint for Web3 projects. You arrive with a clear blocker, work with specialists on product, growth, and narrative, and ship a real improvement before you leave.",
      title: "What is Ship It Island?",
    },
    {
      description:
        "Web3 and crypto projects with something live. Ideal team size is two to three people, but solo founders are welcome too.",
      title: "Who is this for?",
    },
    {
      description:
        "You need something built already. This is not for ideas or early prototypes; it is for teams with a live product, some users, and a blocker they need help diagnosing and fixing.",
      title: "What stage should my project be at?",
    },
    {
      description:
        "We do 10+ hours of research before you arrive: product audit, metrics review, competitive analysis, and community review. Day 1 starts with a diagnosis already prepared.",
      title: "What happens before the sprint?",
    },
    {
      description:
        "Senior practitioners across product and UX strategy, growth and user acquisition, narrative and positioning, and marketing and social engagement.",
      title: "What specialists will be available?",
    },
    {
      description:
        "14 nights accommodation, 12 group meals, 10+ hours of pre-sprint diagnostic work, specialist support throughout, a $1,200 production budget per team, wellness programming, and 90-day follow-up.",
      title: "What's included in the price?",
    },
    {
      description:
        "Flights, personal spending, and the two solo exploration days are not included.",
      title: "What's not included?",
    },
    {
      description:
        "Shared rooms are $1,200 per person. Private rooms are $2,000 per person. Teams of three or more can request a custom quote.",
      title: "How much does it cost?",
    },
    {
      description:
        "Koh Samui, Thailand, with easy access from Bangkok, Singapore, and other major Asian hubs.",
      title: "Where is it?",
    },
    {
      description:
        "June 2026. Two 14-day sprints. Exact dates can stay centralized in config until applications close and scheduling is finalized.",
      title: "When is it?",
    },
    {
      description:
        "It aligns with Island DAO activity so advisors, builders, and potential partners are already nearby.",
      title: "Why Koh Samui in June?",
    },
    {
      description:
        "Small and curated: four to six projects, roughly 10 to 12 people total.",
      title: "How many projects are in each cohort?",
    },
    {
      description:
        "Every application is reviewed, then shortlisted teams can be interviewed and matched to the most relevant focus area.",
      title: "How are cohorts selected?",
    },
    {
      description:
        "A blocker addressed, a real improvement shipped, refined pitch materials, launch assets, a metrics baseline, and 90-day follow-up.",
      title: "What will I leave with?",
    },
    {
      description:
        "Mornings center on wellness and standups, midday is deep work and specialist sessions, and evenings are for showcases and cross-project learning.",
      title: "What's the daily schedule like?",
    },
    {
      description:
        "Yes. Solo founders are welcome, though two to three people from the core team is ideal.",
      title: "Can I send just one person from my team?",
    },
    {
      description:
        "Apply anyway. The review process is meant to tell you honestly whether this is the right fit now.",
      title: "What if I'm not sure I'm ready?",
    },
    {
      description:
        "Join the waitlist and future cohorts can be shared once later dates open.",
      title: "What if I can't make June?",
    },
  ],
  focusAreas: [
    {
      description:
        "Polish and launch a specific product improvement that is real, scoped, and ready to ship.",
      tag: "Track 1",
      title: "Ship a Feature",
    },
    {
      description:
        "Build the user acquisition engine: funnels, channels, loops, and operating rhythms that actually move growth.",
      tag: "Track 2",
      title: "Growth System",
    },
    {
      description:
        "Define and test monetization, pricing, and a sustainable business model around what the product is already proving.",
      tag: "Track 3",
      title: "Business Model",
    },
  ],
  included: [
    "10+ hour pre-sprint diagnostic",
    "$1,200 production budget per team",
    "12 group meals",
    "14 nights accommodation",
    "90-day post-sprint follow-up",
    "Specialist support throughout the sprint",
    "Wellness programming",
  ],
  notIncluded: ["Flights", "Personal spending", "Two solo exploration days"],
  outcomes: [
    {
      description:
        "Address the core blocker and leave with a feature, system, or improvement live plus a metrics baseline for follow-up.",
      title: "Shipped",
    },
    {
      description:
        "Get demo videos, launch graphics, refined pitch materials, and content-ready assets that help the work travel further.",
      title: "Assets",
    },
    {
      description:
        "Continue with 90-day follow-up, alumni context, and async access to the people helping you during the sprint.",
      title: "Support",
    },
  ],
  pricingOptions: [
    {
      description:
        "For founders comfortable sharing a room while keeping the full sprint experience and included benefits.",
      price: "$1,200",
      title: "Shared room",
    },
    {
      description:
        "For attendees who want a private room without changing the rest of the sprint structure.",
      price: "$2,000",
      title: "Private room",
    },
    {
      description:
        "Teams of three or more can request a custom quote based on rooming and support needs.",
      note: "Custom quote available",
      price: "Ask us",
      title: "Larger teams",
    },
  ],
  problemPoints: [
    {
      description:
        "You are too close to the work to see what is actually broken.",
      title: "Too close to see it",
    },
    {
      description:
        "The people around you often do not understand Web3 well enough to give clear, useful feedback.",
      title: "No real feedback loop",
    },
    {
      description:
        "There is activity everywhere, but the underlying metrics are not moving.",
      title: "Busy, not moving",
    },
    {
      description:
        "You can feel the blocker, but naming it and fixing it has stayed fuzzy.",
      title: "Can't pinpoint the problem",
    },
  ],
  selectionCriteria: [
    "A live product, not a pure idea or early prototype",
    "A clear blocker around product, growth, or monetization",
    "Openness to hands-on feedback from specialists and peers",
    "Readiness to commit to the full 14-day sprint in Koh Samui",
  ],
  specialists: [
    {
      description:
        "User flows, prioritization, and experience design from people who have shipped real products.",
      title: "Product / UX strategy",
    },
    {
      description:
        "Distribution, funnels, conversion, and acquisition systems built for Web3 audiences.",
      title: "Growth / user acquisition",
    },
    {
      description:
        "Messaging hierarchy, positioning, and pitch clarity that help teams explain the real value of what they are building.",
      title: "Narrative / positioning",
    },
    {
      description:
        "Content strategy and social systems focused on meaningful engagement rather than vanity metrics.",
      title: "Marketing / social",
    },
  ],
  trustAssets: [
    {
      description:
        "Reserved space for final approved founder copy, credentials, and context once that material is signed off.",
      label: "Copy slot",
      title: "Founder bio",
    },
    {
      description:
        "Reserved media slot for Breakpoint, PILLED, and related event photography or video once assets are cleared for launch.",
      label: "Media slot",
      title: "Past activations",
    },
    {
      description:
        "Reserved partner reference slot so Island DAO or other logos can be added only after confirmation.",
      label: "Trust slot",
      title: "Partners",
    },
  ],
  valuePoints: [
    {
      description:
        "We do the homework before you arrive so the sprint starts with a diagnosis, not a long explanation.",
      title: "Deep diagnostic",
    },
    {
      description:
        "You are placed in a small cohort of adjacent-stage projects with similar gaps and useful peer pressure.",
      title: "Curated cohort",
    },
    {
      description:
        "Specialists work alongside your team instead of acting like distant advisors.",
      title: "Hands-on specialists",
    },
    {
      description:
        "The sprint is designed around shipping before you leave, not collecting more ideas.",
      title: "Ship before you leave",
    },
  ],
  waitlist: {
    description:
      "If you are not ready to apply yet or cannot make the June 2026 window, leave your email and future cohorts will come to you.",
    successMessage:
      "You are on the waitlist. We'll review and reach out with future cohort details.",
    title: "Not ready to apply yet?",
  },
};
