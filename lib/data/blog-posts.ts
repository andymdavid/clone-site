export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: number;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ai",
    title: "The Future of AI Automation: How It’s Changing Business Operations",
    description:
      "From autonomous workflows to AI copilots, learn how operations teams are rethinking efficiency.",
    date: "2024-11-01",
    author: "Clone Team",
    category: "Article",
    readingTime: 4,
    body: [
      "AI automation is moving beyond scripts and macros into fully fledged copilots that orchestrate work. The next evolution pairs process intelligence with human oversight so every team member has a 24/7 assistant.",
      "Why it matters:",
      "• Speed: routine updates flow automatically between tools.",
      "• Clarity: assistants summarize threads so leaders act faster.",
      "• Consistency: best practices get encoded once and reused everywhere.",
      "What’s next:",
      "Expect more embedded AI surfaces inside CRMs, ticketing tools, and project dashboards—all powered by the same orchestration layer you control.",
    ],
  },
  {
    slug: "ai-tools",
    title: "5 Must-Have AI Tools to Streamline Your Business Tasks",
    description:
      "A curated toolkit for teams that want instant leverage without heavy engineering overhead.",
    date: "2024-10-12",
    author: "Clone Team",
    category: "Resources",
    readingTime: 3,
    body: [
      "Here are five battle-tested tools we install in nearly every engagement:",
      "1. Workflow orchestrator to map triggers and actions.",
      "2. Knowledge base search to answer questions from docs.",
      "3. Inbox copilot for drafting replies.",
      "4. Analytics summarizer for Monday morning recaps.",
      "5. Scheduling assistant that books meetings with the right prep context.",
      "Each assistant reduces context switching and keeps teams aligned.",
    ],
  },
  {
    slug: "ai-vs-manual",
    title: "AI vs. Manual Work: Which One Saves More Time & Money?",
    description:
      "A side-by-side breakdown of costs, accuracy, and scalability between manual and AI-first flows.",
    date: "2024-09-05",
    author: "Clone Team",
    category: "Article",
    readingTime: 3,
    body: [
      "Manual workflows break down once you scale past a handful of operators. AI-first flows excel because they run 24/7 without overtime, leave an audit trail every time, and learn from feedback loops.",
      "Manual work can still win when empathy or complex judgment is required, but pairing humans with automation gives you the best of both worlds.",
    ],
  },
];
