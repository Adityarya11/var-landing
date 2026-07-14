import React from "react";

export default function HardwarePlacement() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-3 tracking-tight">
                    Hardware-Aware by Design
                </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2e2e30] bg-[#232325] shadow-md">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-[#2e2e30] text-[#a09890] text-sm md:text-base bg-[#1a1a1b]/50">
                            <th className="p-4 md:p-5 font-medium w-1/4">Stage</th>
                            <th className="p-4 md:p-5 font-medium w-2/4">Component</th>
                            <th className="p-4 md:p-5 font-medium w-1/8">Device</th>
                            <th className="p-4 md:p-5 font-medium w-1/8">VRAM</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#f0ebe6]">
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">VAD</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Silero VAD (ONNX)</td>
                            <td className="p-4 md:p-5 font-mono">CPU</td>
                            <td className="p-4 md:p-5 font-mono text-[#6b6b6e]">—</td>
                        </tr>
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">STT</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Faster-Whisper int8</td>
                            <td className="p-4 md:p-5 font-mono">CPU</td>
                            <td className="p-4 md:p-5 font-mono text-[#6b6b6e]">—</td>
                        </tr>
                        <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">LLM</td>
                            <td className="p-4 md:p-5 text-[#a09890]">qwen2.5:3b via Ollama</td>
                            <td className="p-4 md:p-5 font-mono text-[#c97d3a] font-bold">GPU</td>
                            <td className="p-4 md:p-5 font-mono text-[#c97d3a]">~2.2GB</td>
                        </tr>
                        <tr className="hover:bg-[#3d2e1c] transition-colors">
                            <td className="p-4 md:p-5 font-medium">TTS</td>
                            <td className="p-4 md:p-5 text-[#a09890]">Piper TTS</td>
                            <td className="p-4 md:p-5 font-mono">CPU</td>
                            <td className="p-4 md:p-5 font-mono text-[#6b6b6e]">—</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 border-l-2 border-[#c97d3a] pl-4">
                <p className="text-[#a09890] text-sm md:text-base leading-relaxed">
                    RTX <span className="font-mono text-[#f0ebe6]">3050</span> Mobile has <span className="font-mono text-[#f0ebe6]">4GB</span>.
                    Nothing competes for it. Nothing OOMs.
                </p>
            </div>
        </section>
    );
}