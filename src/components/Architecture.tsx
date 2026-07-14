import React from "react";

export default function Architecture() {
    return (
        <section className="py-20 px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-12 text-center tracking-tight">
                Architecture
            </h2>

            <div className="flex flex-col items-center w-full">
                {/* Browser */}
                <div className="bg-[#232325] border border-[#2e2e30] rounded-lg py-4 px-8 text-center w-64 text-[#f0ebe6] font-medium shadow-sm">
                    Browser / Test Harness
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center my-3 text-[#6b6b6e] text-xl font-bold">
                    ↓
                </div>

                {/* Go Orchestrator */}
                <div className="bg-[#232325] border-2 border-[#c97d3a] rounded-xl p-6 w-full max-w-md shadow-[0_0_15px_rgba(201,125,58,0.1)]">
                    <h3 className="font-bold text-[#f0ebe6] text-center mb-5 tracking-widest text-sm uppercase">
                        Go Orchestrator
                    </h3>
                    <ul className="text-[#a09890] text-sm md:text-base space-y-3 text-center font-mono">
                        <li>Session lifecycle</li>
                        <li>State machine</li>
                        <li>gRPC client</li>
                    </ul>
                </div>

                {/* Bidirectional Arrow */}
                <div className="flex flex-col items-center my-5">
                    <div className="text-[#c97d3a] text-2xl font-bold">↓↑</div>
                    <div className="text-[#6b6b6e] text-xs uppercase tracking-wider mt-2 font-mono">
                        bidirectional gRPC stream
                    </div>
                </div>

                {/* Python Engine */}
                <div className="bg-[#232325] border border-[#2e2e30] rounded-xl p-6 md:p-8 w-full max-w-4xl">
                    <h3 className="font-bold text-[#f0ebe6] text-center mb-8 tracking-widest text-sm uppercase">
                        Python Inference Engine
                    </h3>

                    {/* Pipeline (Responsive Flex Row) */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-[#f0ebe6] text-sm md:text-base font-mono w-full">
                        <div className="bg-[#1a1a1b] border border-[#2e2e30] px-4 py-3 rounded-lg text-center w-full md:w-auto flex-1">
                            Silero VAD
                        </div>

                        <div className="hidden md:block text-[#6b6b6e] text-lg font-bold">→</div>
                        <div className="md:hidden text-[#6b6b6e] text-lg font-bold">↓</div>

                        <div className="bg-[#1a1a1b] border border-[#2e2e30] px-4 py-3 rounded-lg text-center w-full md:w-auto flex-1">
                            Faster-Whisper
                        </div>

                        <div className="hidden md:block text-[#6b6b6e] text-lg font-bold">→</div>
                        <div className="md:hidden text-[#6b6b6e] text-lg font-bold">↓</div>

                        {/* Highlighted the LLM as it's the heaviest component */}
                        <div className="bg-[#1a1a1b] border border-[#c97d3a] px-4 py-3 rounded-lg text-center w-full md:w-auto flex-1 text-[#c97d3a]">
                            qwen2.5:3b
                        </div>

                        <div className="hidden md:block text-[#6b6b6e] text-lg font-bold">→</div>
                        <div className="md:hidden text-[#6b6b6e] text-lg font-bold">↓</div>

                        <div className="bg-[#1a1a1b] border border-[#2e2e30] px-4 py-3 rounded-lg text-center w-full md:w-auto flex-1">
                            Piper TTS
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-[#a09890] text-center mt-12 max-w-2xl text-sm md:text-base leading-relaxed">
                    Go owns concurrency and lifecycle. Python owns inference. Neither knows the other's internals.
                </p>
            </div>
        </section>
    );
}