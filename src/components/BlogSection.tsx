import React from "react";

export default function BlogSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-6 tracking-tight">
        From the blog
      </h2>

      <div className="flex flex-col gap-6">
        {/* Article 1 */}
        <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden transition-colors hover:border-primary-text/30">
          <div className="flex-1 z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                Deep Dive
              </span>
              <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                Medium
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3 leading-snug">
              Implementing True-Duplex for AI Voice Agent
            </h3>

            <p className="text-secondary-text text-sm md:text-base leading-relaxed">
              A deep dive into the architecture, threading, and engineering
              required to build a real concurrent call model for AI voice
              agents.
            </p>
          </div>

          <div className="z-10 flex-shrink-0 pt-2 md:pt-0">
            <a
              href="https://medium.com/@arya050411/implementing-true-duplex-for-ai-voice-agent-a68e5d4afffd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-body border border-border text-primary-text hover:bg-border transition-colors rounded-lg font-medium"
            >
              Read on Medium
            </a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden transition-colors hover:border-primary-text/30">
          <div className="flex-1 z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                Architecture
              </span>
              <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                Medium
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3 leading-snug">
              From Walkie-Talkie to True-Duplex: The VAD way
            </h3>

            <p className="text-secondary-text text-sm md:text-base leading-relaxed">
              Exploring how Voice Activity Detection (VAD) transforms
              half-duplex voicemail exchanges into seamless, concurrent
              conversations.
            </p>
          </div>

          <div className="z-10 flex-shrink-0 pt-2 md:pt-0">
            <a
              href="https://medium.com/@arya050411/from-walkie-talkie-to-true-duplex-49ee123894c0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-body border border-border text-primary-text hover:bg-border transition-colors rounded-lg font-medium"
            >
              Read on Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
