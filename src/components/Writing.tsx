import { REPORT_URL } from "@/lib/links";

const posts = [
  {
    title: "Implementing True-Duplex for AI Voice Agent",
    source: "Medium",
    href: "https://medium.com/@arya050411/implementing-true-duplex-for-ai-voice-agent-a68e5d4afffd",
  },
  {
    title: "From Walkie-Talkie to True-Duplex: The VAD way",
    source: "Medium",
    href: "https://medium.com/@arya050411/from-walkie-talkie-to-true-duplex-49ee123894c0",
  },
  {
    title: "Benchmark report: how every number on this page is measured",
    source: "GitHub",
    href: REPORT_URL,
  },
];

export default function Writing() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Write-ups</h2>
      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-4 hover:text-accent-strong transition-colors"
            >
              <span className="font-medium">{post.title}</span>
              <span className="font-mono text-xs text-muted shrink-0">{post.source}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
