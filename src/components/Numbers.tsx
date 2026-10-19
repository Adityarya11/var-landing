import { REPORT_URL } from "@/lib/links";

const tiles = [
  { value: "2.07 s", label: "Median, end of speech to first audio", note: "p95 2.52 s" },
  { value: "1.27 s", label: "Same, without the 0.8 s silence window", note: "median" },
  { value: "0.28 s", label: "LLM time to first token", note: "p95 0.44 s" },
  { value: "2.1 GB", label: "Peak VRAM, of 4 GB", note: "the LLM only" },
];

const parts = [
  { label: "Silence window", seconds: 0.8, className: "bg-accent-strong" },
  { label: "Speech to text, CPU", seconds: 0.67, className: "bg-accent" },
  { label: "Waiting for the first LLM sentence", seconds: 0.42, className: "bg-[#dda468]" },
  { label: "Speech synthesis", seconds: 0.11, className: "bg-[#e8c39d]" },
  { label: "Everything else", seconds: 0.08, className: "bg-border" },
];

export default function Numbers() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Measured</h2>

      <div className="grid grid-cols-2 gap-4 mb-12">
        {tiles.map((tile) => (
          <div key={tile.label} className="bg-surface border border-border rounded-xl p-5">
            <div className="font-mono text-3xl font-bold mb-2">{tile.value}</div>
            <div className="text-sm text-secondary-text leading-snug">{tile.label}</div>
            <div className="font-mono text-xs text-muted mt-2">{tile.note}</div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Where the 2.07 seconds go</h3>
      <div className="flex w-full h-8 rounded-lg overflow-hidden border border-border mb-4">
        {parts.map((part) => (
          <div
            key={part.label}
            className={part.className}
            style={{ flexGrow: part.seconds, flexBasis: 0 }}
            title={`${part.label}: ${part.seconds.toFixed(2)} s`}
          />
        ))}
      </div>
      <ul className="space-y-2 mb-10">
        {parts.map((part) => (
          <li key={part.label} className="flex items-center gap-3 text-sm">
            <span className={`inline-block w-3 h-3 rounded-sm border border-border ${part.className}`} />
            <span className="flex-1 text-secondary-text">{part.label}</span>
            <span className="font-mono">{part.seconds.toFixed(2)} s</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-secondary-text leading-relaxed mb-4">
        Each part is its own median, so they add to about 2.07 s and not exactly.
        About 40% of the delay is waiting to be sure you have stopped speaking, and
        about a third is transcription on the CPU. The models are not the bottleneck.
      </p>
      <p className="text-xs text-muted leading-relaxed">
        179 of 180 turns across three fresh-start runs, 12 pre-recorded utterances,
        RTX 3050 Laptop 4 GB, Ryzen 5 6600H. The speech is synthetic and single-voice,
        and the client is a gRPC client, not a browser, so browser capture and WebRTC
        playout are not included. One call at a time. Faster-Whisper base on the CPU,
        Qwen2.5 3B through Ollama on the GPU, Piper on the CPU.{" "}
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary-text"
        >
          How each number is measured
        </a>
        .
      </p>
    </section>
  );
}
