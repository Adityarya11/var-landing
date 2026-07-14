import React from "react";

export default function AetherRTCCallout() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <div className="bg-[#232325] border-l-4 border-l-[#c97d3a] border-y border-r border-y-[#2e2e30] border-r-[#2e2e30] rounded-r-xl p-6 md:p-8 shadow-sm">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-[#f0ebe6] tracking-tight">
                        AetherRTC <span className="text-[#a09890] font-normal text-lg">— Companion Project</span>
                    </h2>
                    <span className="font-mono text-xs bg-[#c97d3a]/10 text-[#c97d3a] border border-[#c97d3a]/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        In Development
                    </span>
                </div>

                <p className="text-[#a09890] text-sm md:text-base leading-relaxed mb-6">
                    AetherRTC is the WebRTC edge gateway that will connect live browser audio to this runtime. It terminates <span className="font-mono text-[#f0ebe6]">SDP</span> negotiation, <span className="font-mono text-[#f0ebe6]">ICE</span> traversal, and <span className="font-mono text-[#f0ebe6]">G.711</span> codec handling at the edge — so the orchestrator never touches WebRTC internals.
                </p>

                <div>
                    <button
                        disabled
                        className="text-[#6b6b6e] font-medium text-sm flex items-center gap-2 cursor-not-allowed hover:text-[#a09890] transition-colors"
                    >
                        GitHub Link (Coming Soon)
                    </button>
                </div>

            </div>
        </section>
    );
}