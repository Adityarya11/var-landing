export function Metrics() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full space-y-16">

            {/* Latency Breakdown */}
            <div>
                <h2 className="text-2xl font-bold text-[#f0ebe6] mb-6">Latency Breakdown</h2>
                <div className="overflow-x-auto rounded-xl border border-[#2e2e30] bg-[#232325]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#2e2e30] text-[#a09890] text-sm">
                                <th className="p-4 font-medium">Stage</th>
                                <th className="p-4 font-medium">Metric</th>
                                <th className="p-4 font-medium">Value</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#f0ebe6]">
                            <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                                <td className="p-4">VAD</td>
                                <td className="p-4 text-[#a09890]">Speech boundary detection</td>
                                <td className="p-4 font-mono text-[#c97d3a]">real-time, per 32ms frame</td>
                            </tr>
                            <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                                <td className="p-4">STT</td>
                                <td className="p-4 text-[#a09890]">Transcription (warm)</td>
                                <td className="p-4 font-mono">0.70 – 0.82s</td>
                            </tr>
                            <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                                <td className="p-4">LLM</td>
                                <td className="p-4 text-[#a09890]">Time to first token</td>
                                <td className="p-4 font-mono">0.43 – 0.58s</td>
                            </tr>
                            <tr className="border-b border-[#2e2e30] hover:bg-[#3d2e1c] transition-colors">
                                <td className="p-4">TTS</td>
                                <td className="p-4 text-[#a09890]">First chunk (warm)</td>
                                <td className="p-4 font-mono">0.06 – 0.18s</td>
                            </tr>
                            <tr className="bg-[#1a1a1b]">
                                <td className="p-4 font-bold">End-to-end</td>
                                <td className="p-4 text-[#a09890] font-medium">STT → first audio byte</td>
                                <td className="p-4 font-mono font-bold text-[#c97d3a]">~1.0 – 1.1s</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-[#6b6b6e] text-xs mt-3 font-mono">
                    Measured on RTX 3050 Mobile 4GB VRAM · Ryzen 5 6600H · 16GB DDR5. Warm model, fresh boot, idle GPU.
                </p>
            </div>

            {/* Hardware Aware By Design */}
            <div>
                <h2 className="text-2xl font-bold text-[#f0ebe6] mb-6">Hardware-Aware by Design</h2>
                <div className="overflow-x-auto rounded-xl border border-[#2e2e30] bg-[#232325]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#2e2e30] text-[#a09890] text-sm">
                                <th className="p-4 font-medium">Stage</th>
                                <th className="p-4 font-medium">Component</th>
                                <th className="p-4 font-medium">Device</th>
                                <th className="p-4 font-medium">VRAM</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#f0ebe6]">
                            <tr className="border-b border-[#2e2e30]">
                                <td className="p-4">VAD</td>
                                <td className="p-4 text-[#a09890]">Silero VAD (ONNX)</td>
                                <td className="p-4 font-mono">CPU</td>
                                <td className="p-4 font-mono text-[#6b6b6e]">—</td>
                            </tr>
                            <tr className="border-b border-[#2e2e30]">
                                <td className="p-4">STT</td>
                                <td className="p-4 text-[#a09890]">Faster-Whisper int8</td>
                                <td className="p-4 font-mono">CPU</td>
                                <td className="p-4 font-mono text-[#6b6b6e]">—</td>
                            </tr>
                            <tr className="border-b border-[#2e2e30]">
                                <td className="p-4">LLM</td>
                                <td className="p-4 text-[#a09890]">qwen2.5:3b via Ollama</td>
                                <td className="p-4 font-mono text-[#c97d3a]">GPU</td>
                                <td className="p-4 font-mono">~2.2GB</td>
                            </tr>
                            <tr>
                                <td className="p-4">TTS</td>
                                <td className="p-4 text-[#a09890]">Piper TTS</td>
                                <td className="p-4 font-mono">CPU</td>
                                <td className="p-4 font-mono text-[#6b6b6e]">—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-[#a09890] text-sm mt-4">
                    RTX <span className="font-mono">3050</span> Mobile has <span className="font-mono">4GB</span>. Nothing competes for it. Nothing OOMs.
                </p>
            </div>

        </section>
    );
}