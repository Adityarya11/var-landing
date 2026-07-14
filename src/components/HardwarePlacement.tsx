import React from "react";

export default function HardwarePlacement() {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                {/* Left Column: Prose (5 columns wide) */}
                <div className="lg:col-span-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4 tracking-tight">
                        Hardware-Aware by Design
                    </h2>
                    <p className="text-lg text-secondary-text leading-relaxed mb-6">
                        Most voice pipelines fail locally because they cram STT, LLMs, and TTS entirely into VRAM, causing out-of-memory crashes on consumer cards.
                    </p>
                    <div className="border-l-2 border-accent pl-4 mt-8">
                        <p className="text-primary-text font-medium text-lg leading-relaxed">
                            The RTX <span className="font-mono text-primary-text">3050</span> Mobile has just <span className="font-mono text-primary-text">4GB</span> of VRAM.
                        </p>
                        <p className="text-secondary-text mt-2 text-sm md:text-base">
                            By intentionally placing Whisper and Piper on the CPU, the LLM has exclusive access to the GPU. Nothing competes. Nothing OOMs.
                        </p>
                    </div>
                </div>

                {/* Right Column: Table (7 columns wide) */}
                <div className="lg:col-span-7 overflow-x-auto rounded-xl border border-border bg-surface shadow-sm w-full">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                            <tr className="border-b border-border text-secondary-text text-sm md:text-base bg-body/50">
                                <th className="p-4 md:p-5 font-medium">Stage</th>
                                <th className="p-4 md:p-5 font-medium">Component</th>
                                <th className="p-4 md:p-5 font-medium">Device</th>
                                <th className="p-4 md:p-5 font-medium">VRAM</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary-text">
                            <tr className="border-b border-border hover:bg-hover transition-colors">
                                <td className="p-4 md:p-5 font-medium">VAD</td>
                                <td className="p-4 md:p-5 text-secondary-text">Silero VAD (ONNX)</td>
                                <td className="p-4 md:p-5 font-mono">CPU</td>
                                <td className="p-4 md:p-5 font-mono text-muted">—</td>
                            </tr>
                            <tr className="border-b border-border hover:bg-hover transition-colors">
                                <td className="p-4 md:p-5 font-medium">STT</td>
                                <td className="p-4 md:p-5 text-secondary-text">Faster-Whisper int8</td>
                                <td className="p-4 md:p-5 font-mono">CPU</td>
                                <td className="p-4 md:p-5 font-mono text-muted">—</td>
                            </tr>
                            {/* Highlighted GPU Row */}
                            <tr className="border-b border-border bg-hover/60 hover:bg-hover transition-colors">
                                <td className="p-4 md:p-5 font-medium">LLM</td>
                                <td className="p-4 md:p-5 text-secondary-text">qwen2.5:3b via Ollama</td>
                                <td className="p-4 md:p-5 font-mono text-accent font-bold">GPU</td>
                                <td className="p-4 md:p-5 font-mono text-accent">~2.2GB</td>
                            </tr>
                            <tr className="hover:bg-hover transition-colors">
                                <td className="p-4 md:p-5 font-medium">TTS</td>
                                <td className="p-4 md:p-5 text-secondary-text">Piper TTS</td>
                                <td className="p-4 md:p-5 font-mono">CPU</td>
                                <td className="p-4 md:p-5 font-mono text-muted">—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}