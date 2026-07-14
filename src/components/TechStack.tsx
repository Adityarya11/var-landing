import React from "react";

export default function TechStack() {
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto w-full">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-text tracking-tight mb-2">
                    Stack
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Column 1 */}
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm transition-colors hover:border-accent/50">
                    <h3 className="text-accent text-xs uppercase tracking-widest font-mono mb-5">
                        Transport & Orchestration
                    </h3>
                    <ul className="text-primary-text text-sm space-y-3">
                        <li>Go 1.26</li>
                        <li>gRPC / Protocol Buffers</li>
                        <li>Pion WebRTC (AetherRTC)</li>
                        <li>gorilla/websocket</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm transition-colors hover:border-accent/50">
                    <h3 className="text-accent text-xs uppercase tracking-widest font-mono mb-5">
                        Inference
                    </h3>
                    <ul className="text-primary-text text-sm space-y-3">
                        <li>Python 3.11</li>
                        <li>Faster-Whisper 1.2.1</li>
                        <li>Ollama 0.6.2 + qwen2.5:3b</li>
                        <li>Piper TTS 1.4.2</li>
                        <li>Silero VAD (ONNX)</li>
                        <li>onnxruntime 1.26.0</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm transition-colors hover:border-accent/50">
                    <h3 className="text-accent text-xs uppercase tracking-widest font-mono mb-5">
                        Infrastructure
                    </h3>
                    <ul className="text-primary-text text-sm space-y-3">
                        <li>grpcio 1.81.0</li>
                        <li>Protocol Buffers 6.33.6</li>
                        <li>numpy 2.4.6</li>
                        <li>scipy (resampling pipeline)</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}