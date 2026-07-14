import React from "react";

export default function StatCallout() {
    return (
        <section className="flex justify-center px-6 py-8 mb-16">
            <div className="w-full max-w-4xl bg-[#232325] border border-[#2e2e30] rounded-2xl p-8 md:p-12 shadow-lg flex flex-col items-center text-center">
                <div className="text-5xl md:text-7xl font-mono font-bold text-[#c97d3a] mb-4 tracking-tighter">
                    ~1.0s
                </div>

                <h2 className="text-xl md:text-2xl text-[#f0ebe6] font-medium mb-4 max-w-2xl leading-relaxed">
                    STT to first audio byte, warm, on consumer hardware. No cloud APIs.
                </h2>

                <p className="text-[#a09890] text-sm md:text-base max-w-2xl">
                    Faster-Whisper on CPU. qwen2.5:3b on GPU via Ollama. Piper TTS on CPU.
                    Nothing fights for VRAM.
                </p>
            </div>
        </section>
    );
}