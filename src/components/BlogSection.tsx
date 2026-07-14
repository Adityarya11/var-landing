import React from "react";

export default function BlogSection() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-6 tracking-tight">
                From the Blog
            </h2>

            <div className="bg-[#232325] border border-[#2e2e30] rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">

                <div className="flex-1 z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono bg-[#1a1a1b] border border-[#2e2e30] text-[#a09890] px-2.5 py-1 rounded">
                            Medium
                        </span>
                        <span className="text-xs font-mono bg-[#c97d3a]/10 text-[#c97d3a] border border-[#c97d3a]/20 px-2.5 py-1 rounded">
                            Coming Soon
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#f0ebe6] mb-3 leading-snug">
                        Building True Bidirectional Duplex in a Distributed Voice Pipeline
                    </h3>

                    <p className="text-[#a09890] text-sm md:text-base leading-relaxed">
                        A deep dive into managing gRPC streams, handling barge-in, and coordinating VAD state across the Go orchestrator and Python inference engine.
                    </p>
                </div>

                <div className="z-10 flex-shrink-0 pt-2 md:pt-0">
                    <button
                        disabled
                        className="px-6 py-3 bg-[#1a1a1b] border border-[#2e2e30] text-[#6b6b6e] rounded-lg font-medium cursor-not-allowed transition-colors"
                    >
                        Read Article
                    </button>
                </div>

            </div>
        </section>
    );
}