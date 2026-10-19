import { REPO_URL, REPORT_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-28 pb-16">
      <p className="font-mono text-sm text-accent-strong mb-6">Voice Agent Runtime</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
        A voice agent that runs entirely on a 4 GB laptop GPU.
      </h1>
      <p className="text-lg text-secondary-text leading-relaxed mb-10">
        Speech in, speech out, with no cloud inference. The median reply starts{" "}
        <span className="font-mono text-primary-text">2.07 s</span> after you stop
        talking, measured at the client over 179 turns.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#demo"
          className="px-5 py-2.5 bg-primary-text text-body rounded-lg font-medium hover:opacity-85 transition-opacity"
        >
          Watch the demo
        </a>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border bg-surface rounded-lg font-medium hover:border-accent transition-colors"
        >
          Benchmark report
        </a>
      </div>
    </section>
  );
}
