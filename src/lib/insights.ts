export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const articles: Article[] = [
  {
    slug: "why-more-seo-traffic-doesnt-mean-more-business",
    title: "Why more SEO traffic doesn't mean more business",
    description: "Traffic is a means to an end. If the people arriving aren't the right ones, volume doesn't help.",
    date: "2026-07-15",
  },
  {
    slug: "turning-offline-reputation-into-online-evidence",
    title: "Turning offline reputation into online evidence",
    description: "Strong word-of-mouth and a weak web presence are surprisingly common together. Here's why that gap exists and how to close it.",
    date: "2026-07-08",
  },
  {
    slug: "the-audience-hierarchy-method-explained",
    title: "The audience-hierarchy method, explained",
    description: "How I identify which audience segment should anchor a business's online positioning — and why the answer is rarely the most obvious one.",
    date: "2026-06-28",
  },
  {
    slug: "why-ai-citations-cant-be-guaranteed",
    title: "Why AI citations can't be guaranteed — and what actually influences them",
    description: "No one controls whether an AI system cites a business. But there are signals that make it more or less likely.",
    date: "2026-06-18",
  },
  {
    slug: "traffic-but-no-leads-the-real-causes",
    title: "Traffic but no leads: the real causes",
    description: "When organic traffic is healthy but leads aren't converting, the problem is almost never the volume. It's the audience, the message, or the match.",
    date: "2026-06-05",
  },
];
