import React from "react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center text-center pt-32 pb-20 px-6 overflow-hidden">

            {/* Eyebrow label */}
            <div className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-8 border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full">
                Open Source · Consumer Hardware · No Cloud APIs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight max-w-4xl mb-6">
                A distributed, real-time voice agent runtime.<br className="hidden md:block" /> Built from scratch on consumer hardware.
            </h1>

            <p className="text-lg md:text-xl text-secondary-text max-w-2xl mb-6 leading-relaxed">
                Go orchestrator. Python inference engine. gRPC bidirectional stream.
                Sub-<span className="font-mono text-primary-text">1.1s</span> end-to-end latency on an RTX <span className="font-mono">3050</span> Mobile.
            </p>

            {/* Directional note */}
            <p className="text-sm text-muted max-w-lg mb-10 italic">
                Capable of true bidirectional duplex, intelligent barge-in, and dynamic domain switching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="https://github.com/adityarya11/voice-agent-runtime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent text-[#1a1a1b] rounded-lg hover:bg-accent-hover transition-colors font-medium flex items-center justify-center shadow-lg shadow-accent/20"
                >
                    View on GitHub
                </a>
                <a
                    href="#waitlist"
                    className="px-6 py-3 bg-surface text-primary-text border border-border rounded-lg hover:bg-hover transition-colors font-medium flex items-center justify-center"
                >
                    Join Waitlist
                </a>
            </div>
        </section>
    );
}