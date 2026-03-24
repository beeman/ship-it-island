import type { ProgramConfig } from "@/types/program";

export const programConfig: ProgramConfig = {
  about: {
    description:
      "Quan has spent 3+ years building wellness and performance programming for Web3 builders and creators, from morning runs at Solana Breakpoint to recovery sessions at major conferences across Dubai, Bangkok, HCMC, and Da Nang. Through PILLED Movement Systems, he's worked with nomad communities, builder houses, and conference organizers to design activations that help people perform better, not just feel good. Ship It Island is the next evolution: a focused execution sprint where projects don't just learn, they ship.",
    highlights: [
      "Builder house wellness integration in Bangkok, HCMC, and Da Nang",
      "Conference wellness programming across TOKEN2049, Breakpoint, and regional Web3 events",
      "Morning run series with 100+ participants across Southeast Asia",
      'Solana Breakpoint "Leg Day" activation',
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
          options: [
            {
              label: "Twitter/X",
              value: "Twitter/X",
            },
            {
              label: "Telegram",
              value: "Telegram",
            },
            {
              label: "Friend/referral",
              value: "Friend/referral",
            },
            {
              label: "Island DAO",
              value: "Island DAO",
            },
            {
              label: "Other event",
              value: "Other event",
            },
            {
              label: "Other (please specify)",
              value: "Other (please specify)",
            },
          ],
          required: true,
          type: "select",
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
          description:
            "If you do not have a public site yet, link to a demo, deck, or video.",
          label: "Website or app link",
          name: "projectLink",
          placeholder: "https:// or a demo link",
          required: false,
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
          label: "Which cohort are you available for?",
          name: "cohortAvailability",
          options: [
            {
              label: "Cohort 1 (June 2–16)",
              value: "Cohort 1 (June 2–16)",
            },
            {
              label: "Cohort 2 (June 21–July 5)",
              value: "Cohort 2 (June 21–July 5)",
            },
            {
              label: "Either cohort works",
              value: "Either cohort works",
            },
            {
              label: "Both — I want to do the full month",
              value: "Both — I want to do the full month",
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
              label: "Early Bird — private room included ($2,000)",
              value: "Early Bird — private room included ($2,000)",
            },
            {
              label: "Regular — shared room ($2,400)",
              value: "Regular — shared room ($2,400)",
            },
            {
              label: "Regular — private room upgrade ($2,800)",
              value: "Regular — private room upgrade ($2,800)",
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
          label: "What's one skill or strength your team brings?",
          name: "teamStrength",
          placeholder: "Engineering, growth, product sense, community, design",
          required: false,
          type: "text",
        },
        {
          label: "What's one skill or area where you want more support?",
          name: "supportNeeded",
          placeholder: "Acquisition, onboarding, narrative, monetization",
          required: false,
          type: "text",
        },
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
          required: true,
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
          required: true,
          type: "select",
        },
        {
          label:
            "Can you commit to 14 full days in Koh Samui for your selected cohort?",
          name: "canCommit",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "Likely, pending travel logistics",
              value: "Likely, pending travel logistics",
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
        "They have a working product but 50 daily users and no acquisition strategy. They don't need more dev time. They need someone who's built growth systems to sit with them and build one.",
      title: "A DeFi protocol",
    },
    {
      description:
        "They have solid tech but a confusing onboarding flow that's killing retention. They don't need advice. They need a product person to rebuild the flow with them over two weeks.",
      title: "A wallet team",
    },
    {
      description:
        "They have an audience but no revenue. They don't need a course. They need to build the offer, test it, and ship it with someone who's done it.",
      title: "A content project",
    },
  ],
  cohort: {
    applySummary:
      "Koh Samui, Thailand · Cohort 1: June 2–16 · Cohort 2: June 21–July 5 · Apply for either or both.",
    duration: "14 days",
    heroSnapshot: {
      dates: "Cohort 1: June 2–16 · Cohort 2: June 21–July 5",
      pricing: "Early Bird $2,000 (private room included) · Regular $2,400",
      timingNote: "Timed with Island DAO",
    },
    limitedSpots: "6 participants minimum to run",
    location: "Koh Samui, Thailand",
    summary:
      "14 days of focused execution with senior practitioners in Koh Samui.",
    timeframe: "June / July 2026",
  },
  cohortsCallout: {
    description:
      "Cohort 1: June 2–16 · Cohort 2: June 21–July 5. Two back-to-back 14-day sprints in Koh Samui, timed with Island DAO. Teams can apply for either or both.",
    note: "A lot of people who went to Island DAO said they didn't get what they came for. Ship It Island is designed to fix that — focused execution with real outcomes, not just networking and vibes.",
    title: "Two Cohorts — June / July 2026",
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
        "Two weeks in Koh Samui for Web3 projects that are stuck. You come in with something real. We find the blocker, fix it with you, and ship before you leave.",
      title: "What is Ship It Island?",
    },
    {
      description:
        "Web3 and crypto projects with something live. It's for teams stuck on growth, conversion, onboarding, or monetization and ready to fix that with someone hands-on.",
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
        "14 nights accommodation, 12 group meals, 10+ hours of pre-sprint diagnostic work, all production and specialist fees, wellness programming, and 90-day follow-up.",
      title: "What's included in the price?",
    },
    {
      description:
        "Flights, personal spending, and the two solo exploration days are not included.",
      title: "What's not included?",
    },
    {
      description:
        "Early Bird is $2,000 per person with a private room included for the first 6 people or 3 teams in each cohort. Regular is $2,400 per person with a shared room, or $2,800 with a private room upgrade.",
      title: "How much does it cost?",
    },
    {
      description:
        "Koh Samui, Thailand, with easy access from Bangkok, Singapore, and other major Asian hubs.",
      title: "Where is it?",
    },
    {
      description:
        "Cohort 1 runs June 2–16, 2026. Cohort 2 runs June 21–July 5, 2026. You can apply for either or both.",
      title: "When is it?",
    },
    {
      description:
        "It's timed with Island DAO, but Ship It Island is built to fix what many people felt was missing: focused execution with real outcomes, not just networking and vibes.",
      title: "Why Koh Samui in June?",
    },
    {
      description:
        "Small and curated. We only need 6 participants to run a cohort, and the first 6 people or 3 teams in each cohort get Early Bird pricing.",
      title: "How many projects are in each cohort?",
    },
    {
      description:
        "Every application is reviewed, then shortlisted teams can be interviewed and matched to the most relevant focus area.",
      title: "How are cohorts selected?",
    },
    {
      description:
        "Something live: a shipped feature, a working growth system, a rebuilt onboarding flow, or a launch, plus launch assets, a metrics baseline, and 90-day follow-up.",
      title: "What will I leave with?",
    },
    {
      description:
        "Mornings center on wellness and standups, midday is deep work and specialist sessions, and evenings are for showcases and cross-project learning.",
      title: "What's the daily schedule like?",
    },
    {
      description:
        "No. Two days during the sprint are intentionally unstructured. There are no group meals or programming on those days, so you can explore the island, rest, or keep working on your own.",
      title: "Are all 14 days fully programmed?",
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
        "Join the waitlist and we'll share future cohorts if June 2–16 or June 21–July 5 doesn't work for you.",
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
  grantCallout: {
    description:
      "Depending on sponsors, grant rewards available for the team(s) that execute the highest ROI — money back on registration, free spot in a future cohort, or priority placement.",
    title: "The Ship It Grant",
  },
  included: [
    "10+ hour pre-sprint diagnostic",
    "All production and specialist fees included",
    "12 group meals",
    "14 nights accommodation",
    "90-day post-sprint follow-up",
    "Specialist support throughout the sprint",
    "Wellness programming",
  ],
  notIncluded: [
    "Flights",
    "Group meals or programming during two unstructured days",
    "Personal spending",
  ],
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
  pricingAddon:
    "We only need 6 participants to run a cohort. If a larger protocol backs the initiative, costs come down for every team — or become free.",
  pricingOptions: [
    {
      description:
        "For context: most people going to Koh Samui in June are already spending $700-1,200 on a room. This covers accommodation, meals, specialists, production, and 90-day follow-up.",
      featured: true,
      note: "Private room included. All-inclusive.",
      price: "$2,000 / person",
      title: "Early Bird",
    },
    {
      description: "Shared room. All-inclusive.",
      note: "Private room upgrade: +$400.",
      price: "$2,400 / person",
      title: "Regular",
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
  sprintTimeline: {
    after: {
      description:
        "Check-ins at 30, 60, and 90 days. Alumni community access. Continued specialist access. Fundraising introductions where relevant.",
      title: "After the Sprint",
    },
    intro:
      "Every day is built around execution — not workshops, not lectures, not vibes.",
    steps: [
      {
        description:
          "We do the homework so you don't waste Day 1. 10+ hours of diagnostic research on your project — product, users, metrics, competitors, gaps. You arrive to a full diagnostic and a matched specialist team ready to work.",
        title: "Before You Arrive (1 Week Pre-Sprint)",
      },
      {
        description:
          'Present findings from pre-arrival research. Confirm the blocker. Define what "shipped" means by Day 14. Meet your specialists and your cohort.',
        title: "Days 1–2: Diagnosis + Roadmap",
      },
      {
        description:
          "Daily standups. Deep work blocks with specialist support. Hands-on sessions — not advice, actual building alongside you. Peer feedback rounds. Real-world testing at local venues. Two solo days built in — no programming, explore or keep building.",
        title: "Days 3–10: Deep Execution",
      },
      {
        description:
          "Final iterations on the core deliverable. Launch prep. Demo rehearsal. Metrics baseline for post-sprint tracking.",
        title: "Days 11–13: Polish + Ship Prep",
      },
      {
        description:
          "Go live. Cohort demo day — present what you built. Timed with Island DAO — advisors and builders in the room. Transition to 90-day follow-up support.",
        title: "Day 14: Ship Day",
      },
    ],
    title: "Your 14 Days",
  },
  valuePoints: [
    {
      description:
        "You don't have to know what's wrong. We spend 10+ hours researching your project before you arrive — product, users, metrics, competitors. We find the blocker. Day 1 is execution, not figuring out what to work on.",
      title: "Deep diagnostic",
    },
    {
      description:
        "You're placed with projects at a similar stage but different verticals. You learn from people solving adjacent problems without competing.",
      title: "Curated cohort",
    },
    {
      description:
        "These aren't advisors who tell you what to do and leave. They sit with your team and build alongside you for two weeks.",
      title: "Hands-on specialists",
    },
    {
      description:
        "You leave with something live — a shipped feature, a working growth system, a rebuilt onboarding flow, a launch. Not a plan. The thing itself.",
      title: "Ship before you leave",
    },
  ],
  waitlist: {
    description:
      "If you're not ready to apply yet or neither June 2–16 nor June 21–July 5 works for you, leave your email and we'll share future cohorts.",
    successMessage:
      "You are on the waitlist. We'll review and reach out with future cohort details.",
    title: "Not ready to apply yet?",
  },
};
