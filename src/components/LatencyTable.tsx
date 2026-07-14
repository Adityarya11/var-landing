import React from "react";

export default function LatencyTable() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-8 tracking-tight">
                Latency Breakdown
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#2e2e30] bg-[#232325] shadow-md">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-[#2e2e30] text-[#a09890] text-sm md:text-base bg-[#1a1a1b]/50">
                            <th className="p-4 md:p-5 font-medium w-1/4">Stage</th>
                            <th className="p-4 md:p-5 font-medium w-1/2">Metric</th>
                            <th className="p-4 md:p-5 font-medium w-1/4">Value</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#f0ebe6]">
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">VAD</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Speech boundary detection</td>
                            <td className="p-4 md:p-5 font-mono text-[#c97d3a] text-sm md:text-base">
                                real-time, per 32ms frame
                            </td>
                        </tr>
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">STT</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Transcription (warm)</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.70 – 0.82s
                            </td>
                        </tr>
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">LLM</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Time to first token</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.43 – 0.58s
                            </td>
                        </tr>
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">TTS</td>
                            <td className="p-4 md:p-5 text-[#a09890]">First chunk (warm)</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.06 – 0.18s
                            </td>
                        </tr>
                        <tr className="bg-[#1a1a1b]">
                            <td className="p-4 md:p-5 font-bold">End-to-end</td>
                            <td className="p-4 md:p-5 text-[#a09890] font-medium">STT → first audio byte</td>
                            <td className="p-4 md:p-5 font-mono font-bold text-[#c97d3a] text-sm md:text-base">
                                ~1.0 – 1.1s
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-[#6b6b6e] text-xs md:text-sm mt-4 font-mono leading-relaxed">
                Measured on RTX 3050 Mobile 4GB VRAM · Ryzen 5 6600H · 16GB DDR5. Warm model, fresh boot, idle GPU.
            </p>
        </section>
    );
}