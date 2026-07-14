import React from "react";

type MilestoneStatus = "complete" | "in-progress" | "deferred";

interface Milestone {
    title: string;
    description: string;
    status: MilestoneStatus;
}

const milestones: Milestone[] = [
    { title: "gRPC Bridge", description: "Bidirectional stream, proved transport layer", status: "complete" },
    { title: "Local Inference Pipeline", description: "STT → LLM → TTS, no external APIs", status: "complete" },
    { title: "Dynamic Agent Profiling", description: "YAML personas, runtime domain switching", status: "complete" },
    { title: "Session State Machine", description: "Mutex-protected FSM, validated transitions", status: "complete" },
    { title: "Token Streaming", description: "Sentence-boundary chunking, parallel TTS", status: "complete" },
    { title: "True Bidirectional Duplex", description: "Open stream across utterance boundaries", status: "complete" },
    { title: "VAD Integration", description: "Silero VAD, four-state debounce, lookback buffer", status: "complete" },
    { title: "Monitor Goroutine", description: "Barge-in, timeout, context cancellation", status: "in-progress" },
    { title: "AetherRTC Bridge", description: "WebRTC edge gateway → orchestrator", status: "in-progress" },
    { title: "Public Demo", description: "Hosted end-to-end voice session", status: "in-progress" }
];

export default function MilestoneTimeline() {
    return (
        <section className="py-16 px-6 max-w-3xl mx-auto w-full">
            <div className="mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-3 tracking-tight">
                    What's Been Built
                </h2>
                <p className="text-secondary-text text-sm md:text-base">
                    The milestone timeline. Green is shipped. Amber is actively building.
                </p>
            </div>

            <div className="relative border-l border-border ml-3 md:ml-4 space-y-8">
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`relative pl-8 md:pl-10 transition-opacity duration-300 ${milestone.status !== "complete" ? "opacity-60 hover:opacity-100" : "opacity-100"
                            }`}
                    >
                        {/* Timeline Marker */}
                        <div
                            className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-body ${milestone.status === "complete"
                                    ? "bg-[#4a9b6f]"
                                    : milestone.status === "in-progress"
                                        ? "bg-transparent border-2 border-accent"
                                        : "bg-muted"
                                }`}
                        />

                        {/* Content */}
                        <div>
                            <h3 className={`font-medium mb-1 ${milestone.status === "complete" ? "text-primary-text" : "text-primary-text/80"
                                }`}>
                                {milestone.title}
                            </h3>
                            <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                                {milestone.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}