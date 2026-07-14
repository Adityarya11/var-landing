import React from "react";

export default function Architecture() {
    return (
        <section className="py-24 px-6 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Prose */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f0ebe6] mb-6 tracking-tight">
                        Architecture
                    </h2>
                    <p className="text-lg text-[#a09890] leading-relaxed mb-6">
                        A clean separation of concerns. Go owns the concurrency, session lifecycle, and state machine. Python owns the heavy inference workloads.
                    </p>
                    <p className="text-lg text-[#a09890] leading-relaxed mb-8">
                        Neither knows the other's internals. They communicate exclusively over a bidirectional gRPC stream, ensuring rock-solid stability even under heavy load.
                    </p>

                    <ul className="space-y-4 font-mono text-sm text-[#f0ebe6]">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#c97d3a]" /> Low-overhead transport layer
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#c97d3a]" /> Strict boundary enforcement
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#c97d3a]" /> Independent environment scaling
                        </li>
                    </ul>
                </div>

                {/* Right Column: CSS Diagram */}
                <div className="flex flex-col items-center w-full bg-[#1a1a1b] p-8 rounded-2xl border border-[#2e2e30] shadow-sm">

                    {/* Browser */}
                    <div className="bg-[#232325] border border-[#2e2e30] rounded-lg py-3 px-6 text-center text-[#f0ebe6] font-medium w-full max-w-xs">
                        Browser / Test Harness
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center my-2 text-[#6b6b6e] text-lg font-bold">
                        ↓
                    </div>

                    {/* Go Orchestrator */}
                    <div className="bg-[#232325] border-2 border-[#c97d3a] rounded-xl p-5 w-full shadow-[0_0_15px_rgba(201,125,58,0.1)]">
                        <h3 className="font-bold text-[#f0ebe6] text-center mb-4 tracking-widest text-xs uppercase">
                            Go Orchestrator
                        </h3>
                        <div className="flex justify-center gap-3 text-[#a09890] text-xs font-mono">
                            <span>Lifecycle</span>
                            <span>•</span>
                            <span>FSM</span>
                            <span>•</span>
                            <span>gRPC</span>
                        </div>
                    </div>

                    {/* Bidirectional Arrow */}
                    <div className="flex flex-col items-center my-4 text-center">
                        <div className="text-[#c97d3a] text-2xl font-bold leading-none">↓↑</div>
                        <div className="text-[#6b6b6e] text-[10px] uppercase tracking-wider mt-2 font-mono">
                            bidirectional gRPC stream
                        </div>
                    </div>

                    {/* Python Engine */}
                    <div className="bg-[#232325] border border-[#2e2e30] rounded-xl p-5 w-full">
                        <h3 className="font-bold text-[#f0ebe6] text-center mb-5 tracking-widest text-xs uppercase">
                            Python Inference Engine
                        </h3>

                        {/* Pipeline (Stacked for column layout) */}
                        <div className="flex flex-col gap-2 text-[#f0ebe6] text-xs font-mono w-full">
                            <div className="bg-[#1a1a1b] border border-[#2e2e30] py-2.5 rounded text-center w-full">
                                Silero VAD
                            </div>
                            <div className="text-[#6b6b6e] text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-[#1a1a1b] border border-[#2e2e30] py-2.5 rounded text-center w-full">
                                Faster-Whisper
                            </div>
                            <div className="text-[#6b6b6e] text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-[#1a1a1b] border border-[#c97d3a] py-2.5 rounded text-center w-full text-[#c97d3a]">
                                qwen2.5:3b
                            </div>
                            <div className="text-[#6b6b6e] text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-[#1a1a1b] border border-[#2e2e30] py-2.5 rounded text-center w-full">
                                Piper TTS
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}