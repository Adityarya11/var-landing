import React from "react";

export default function Architecture() {
    return (
        <section className="py-24 px-6 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Prose */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6 tracking-tight">
                        Architecture
                    </h2>
                    <p className="text-lg text-secondary-text leading-relaxed mb-6">
                        A clean separation of concerns. Go owns the concurrency, session lifecycle, and state machine. Python owns the heavy inference workloads.
                    </p>
                    <p className="text-lg text-secondary-text leading-relaxed mb-8">
                        Neither knows the other's internals. They communicate exclusively over a bidirectional gRPC stream, ensuring rock-solid stability even under heavy load.
                    </p>

                    <ul className="space-y-4 font-mono text-sm text-primary-text">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-accent" /> Low-overhead transport layer
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-accent" /> Strict boundary enforcement
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-accent" /> Independent environment scaling
                        </li>
                    </ul>
                </div>

                {/* Right Column: CSS Diagram */}
                <div className="flex flex-col items-center w-full bg-body p-8 rounded-2xl border border-border shadow-sm">

                    {/* Browser */}
                    <div className="bg-surface border border-border rounded-lg py-3 px-6 text-center text-primary-text font-medium w-full max-w-xs transition-colors">
                        Browser / Test Harness
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center my-2 text-muted text-lg font-bold">
                        ↓
                    </div>

                    {/* Go Orchestrator */}
                    <div className="bg-surface border-2 border-accent rounded-xl p-5 w-full shadow-[0_0_15px_rgba(201,125,58,0.1)] transition-colors">
                        <h3 className="font-bold text-primary-text text-center mb-4 tracking-widest text-xs uppercase">
                            Go Orchestrator
                        </h3>
                        <div className="flex justify-center gap-3 text-secondary-text text-xs font-mono">
                            <span>Lifecycle</span>
                            <span>•</span>
                            <span>FSM</span>
                            <span>•</span>
                            <span>gRPC</span>
                        </div>
                    </div>

                    {/* Bidirectional Arrow */}
                    <div className="flex flex-col items-center my-4 text-center">
                        <div className="text-accent text-2xl font-bold leading-none">↓↑</div>
                        <div className="text-muted text-[10px] uppercase tracking-wider mt-2 font-mono">
                            bidirectional gRPC stream
                        </div>
                    </div>

                    {/* Python Engine */}
                    <div className="bg-surface border border-border rounded-xl p-5 w-full transition-colors">
                        <h3 className="font-bold text-primary-text text-center mb-5 tracking-widest text-xs uppercase">
                            Python Inference Engine
                        </h3>

                        {/* Pipeline */}
                        <div className="flex flex-col gap-2 text-primary-text text-xs font-mono w-full">
                            <div className="bg-body border border-border py-2.5 rounded text-center w-full">
                                Silero VAD
                            </div>
                            <div className="text-muted text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-body border border-border py-2.5 rounded text-center w-full">
                                Faster-Whisper
                            </div>
                            <div className="text-muted text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-body border border-accent py-2.5 rounded text-center w-full text-accent">
                                qwen2.5:3b
                            </div>
                            <div className="text-muted text-center text-sm font-bold leading-none">↓</div>
                            <div className="bg-body border border-border py-2.5 rounded text-center w-full">
                                Piper TTS
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}