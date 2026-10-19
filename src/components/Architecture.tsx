import { AETHER_URL } from "@/lib/links";

const stages = [
  { name: "Browser", detail: "Microphone and speaker", device: "client" },
  { name: "AetherRTC", detail: "Go, WebRTC, G.711 audio", device: "CPU" },
  { name: "Orchestrator", detail: "Go, session state, gRPC", device: "CPU" },
  { name: "Inference", detail: "Silero VAD, Faster-Whisper, Piper", device: "CPU" },
  { name: "Language model", detail: "Qwen2.5 3B through Ollama", device: "GPU" },
];

export default function Architecture() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight mb-6">How it is built</h2>
      <p className="text-secondary-text leading-relaxed mb-4">
        A browser connects to{" "}
        <a
          href={AETHER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary-text hover:text-accent-strong"
        >
          AetherRTC
        </a>
        , a WebRTC gateway written in Go, integrated with this runtime. It passes
        audio to a Go orchestrator over gRPC, and the orchestrator streams it to a
        Python inference engine over a second bidirectional gRPC stream. Audio keeps
        arriving while a slow model is busy, and replies are spoken sentence by
        sentence as the model writes them.
      </p>
      <p className="text-secondary-text leading-relaxed mb-8">
        The GPU has 4 GB, so only the language model uses it. Speech recognition,
        speech synthesis and voice activity detection run on the CPU.
      </p>

      <ol className="space-y-2">
        {stages.map((stage, index) => (
          <li
            key={stage.name}
            className="flex items-center gap-4 bg-surface border border-border rounded-lg px-4 py-3"
          >
            <span className="font-mono text-xs text-muted w-4">{index + 1}</span>
            <span className="font-medium w-36">{stage.name}</span>
            <span className="flex-1 text-sm text-secondary-text">{stage.detail}</span>
            <span
              className={`font-mono text-xs px-2 py-1 rounded ${
                stage.device === "GPU"
                  ? "bg-accent text-primary-text"
                  : "border border-border text-muted"
              }`}
            >
              {stage.device}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
