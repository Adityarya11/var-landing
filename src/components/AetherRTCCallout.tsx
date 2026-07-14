import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AetherRTCCallout() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <div className="bg-surface border-l-4 border-l-accent border-y border-r border-y-border border-r-border rounded-r-xl p-6 md:p-8 shadow-sm">

                <div className="text-muted text-xs font-bold tracking-widest uppercase mb-3">
                    Companion Project
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-text tracking-tight">
                        AetherRTC
                    </h2>
                    <span className="font-mono text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        In Development
                    </span>
                </div>

                <p className="text-secondary-text text-sm md:text-base leading-relaxed mb-6">
                    A standalone WebRTC edge gateway that terminates <span className="font-mono text-primary-text">SDP</span> negotiation, <span className="font-mono text-primary-text">ICE</span> traversal, <span className="font-mono text-primary-text">DTLS</span> handshakes, and <span className="font-mono text-primary-text">G.711</span> codec handling at the edge — so the Voice Agent Runtime never touches WebRTC internals. AetherRTC is the front door. VAR is the brain.
                </p>

                <div>
                    <a
                        href="https://github.com/Adityarya11/atherRTC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-text font-medium text-sm flex items-center gap-1.5 hover:text-accent transition-colors w-fit"
                    >
                        View on GitHub <ArrowUpRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
}