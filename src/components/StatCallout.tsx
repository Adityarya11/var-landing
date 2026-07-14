import React from "react";

export default function StatCallout() {
    return (
        <section className="flex justify-center px-6 py-20 mb-12 border-y border-border bg-body">
            <div className="w-full max-w-5xl flex flex-col items-center text-center">

                <div className="text-8xl md:text-9xl font-mono font-bold text-accent mb-6 tracking-tighter drop-shadow-sm">
                    ~1.0s
                </div>

                <h2 className="text-2xl md:text-3xl text-primary-text font-medium mb-6 max-w-3xl leading-relaxed">
                    STT to first audio byte, warm, on consumer hardware. No cloud APIs.
                </h2>

                <p className="text-secondary-text text-base md:text-lg max-w-3xl">
                    Faster-Whisper on CPU. qwen2.5:3b on GPU via Ollama. Piper TTS on CPU.
                    Nothing fights for VRAM. Everything runs completely locally without external dependencies.
                </p>

            </div>
        </section>
    );
}