import React from "react";

export default function LatencyTable() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-text tracking-tight mb-2">
                    Latency Breakdown
                </h2>
                <p className="text-secondary-text text-sm md:text-base">
                    Every stage measured. No synthetic benchmarks.
                </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-md">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-border text-secondary-text text-sm md:text-base bg-body/50">
                            <th className="p-4 md:p-5 font-medium w-1/4">Stage</th>
                            <th className="p-4 md:p-5 font-medium w-1/2">Metric</th>
                            <th className="p-4 md:p-5 font-medium w-1/4">Value</th>
                        </tr>
                    </thead>
                    <tbody className="text-primary-text">
                        <tr className="border-b border-border hover:bg-hover transition-colors">
                            <td className="p-4 md:p-5 font-medium">VAD</td>
                            <td className="p-4 md:p-5 text-secondary-text">Speech boundary detection</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                real-time, per 32ms
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-hover transition-colors">
                            <td className="p-4 md:p-5 font-medium">STT</td>
                            <td className="p-4 md:p-5 text-secondary-text">Transcription (warm)</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.70 – 0.82s
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-hover transition-colors">
                            <td className="p-4 md:p-5 font-medium">LLM</td>
                            <td className="p-4 md:p-5 text-secondary-text">Time to first token</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.43 – 0.58s
                            </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-hover transition-colors">
                            <td className="p-4 md:p-5 font-medium">TTS</td>
                            <td className="p-4 md:p-5 text-secondary-text">First chunk (warm)</td>
                            <td className="p-4 md:p-5 font-mono text-sm md:text-base">
                                0.06 – 0.18s
                            </td>
                        </tr>
                        <tr className="bg-body/30">
                            <td className="p-4 md:p-5 font-bold">End-to-end</td>
                            <td className="p-4 md:p-5 text-secondary-text font-medium">STT → first audio byte</td>
                            <td className="p-4 md:p-5 font-mono font-bold text-accent text-sm md:text-base">
                                ~1.0 – 1.1s
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-muted text-xs md:text-sm mt-4 font-mono leading-relaxed">
                Measured on RTX 3050 Mobile 4GB VRAM · Ryzen 5 6600H · 16GB DDR5. Warm model, fresh boot, idle GPU.
            </p>
        </section>
    );
}