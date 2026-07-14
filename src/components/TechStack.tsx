import React from "react";

const technologies = [
    { name: "Go", version: "1.26" },
    { name: "Python", version: "3.11" },
    { name: "gRPC / Protobuf", version: null },
    { name: "Pion WebRTC", version: null, sub: "(AetherRTC)" },
    { name: "Faster-Whisper", version: "1.2.1" },
    { name: "Ollama +", version: "qwen2.5:3b" },
    { name: "Piper TTS", version: "1.4.2" },
    { name: "Silero VAD", version: null, sub: "(ONNX)" },
    { name: "onnxruntime", version: "1.26.0" },
];

export default function TechStack() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-3 tracking-tight">
                    Tech Stack
                </h2>
                <p className="text-[#a09890] text-sm md:text-base">
                    The core engines powering the orchestration and inference pipelines.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-[#232325] border border-[#2e2e30] rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-[#3d2e1c] hover:border-[#c97d3a]/50 transition-all shadow-sm"
                    >
                        <span className="text-[#f0ebe6] font-medium text-sm md:text-base">
                            {tech.name}
                        </span>

                        {tech.version && (
                            <span className="font-mono text-[#c97d3a] mt-1 text-sm">
                                {tech.version}
                            </span>
                        )}

                        {tech.sub && (
                            <span className="text-[#6b6b6e] text-xs mt-1">
                                {tech.sub}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}