import React from "react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center text-center pt-32 pb-20 px-6 overflow-hidden">

            {/* Radial gradient background matching the dark theme */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3d2e1c]/20 via-[#1a1a1b] to-[#1a1a1b] -z-10" />

            {/* Eyebrow label */}
            <div className="font-mono text-xs md:text-sm text-[#c97d3a] tracking-widest uppercase mb-8 border border-[#c97d3a]/30 bg-[#c97d3a]/10 px-4 py-1.5 rounded-full">
                Open Source · Consumer Hardware · No Cloud APIs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0ebe6] tracking-tight max-w-4xl mb-6">
                A distributed, real-time voice agent runtime.<br className="hidden md:block" /> Built from scratch on consumer hardware.
            </h1>

            <p className="text-lg md:text-xl text-[#a09890] max-w-2xl mb-6 leading-relaxed">
                Go orchestrator. Python inference engine. gRPC bidirectional stream.
                Sub-<span className="font-mono text-[#f0ebe6]">1.1s</span> end-to-end latency on an RTX <span className="font-mono">3050</span> Mobile.
            </p>

            {/* Directional note */}
            <p className="text-sm text-[#6b6b6e] max-w-lg mb-10 italic">
                Capable of true bidirectional duplex, intelligent barge-in, and dynamic domain switching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="https://github.com/adityarya11/voice-agent-runtime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#c97d3a] text-[#1a1a1b] rounded-lg hover:bg-[#b06828] transition-colors font-medium flex items-center justify-center shadow-lg shadow-[#c97d3a]/10"
                >
                    View on GitHub
                </a>
                <a
                    href="#waitlist"
                    className="px-6 py-3 bg-[#232325] text-[#f0ebe6] border border-[#2e2e30] rounded-lg hover:bg-[#3d2e1c] transition-colors font-medium flex items-center justify-center"
                >
                    Join Waitlist
                </a>
            </div>
        </section>
    );
}