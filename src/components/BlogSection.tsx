import React from "react";

export default function BlogSection() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-6 tracking-tight">
                From the blog
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden opacity-80">

                <div className="flex-1 z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                            Deep Dive
                        </span>
                        <span className="text-xs font-mono bg-body border border-border text-secondary-text px-2.5 py-1 rounded">
                            Medium
                        </span>
                        <span className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded">
                            Coming Soon
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3 leading-snug">
                        Building True Bidirectional Duplex in a Distributed Voice Pipeline
                    </h3>

                    <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                        How a three-worker Python architecture, a threading.Event gate, and an explicit proto signal replaced half-duplex voicemail exchange with a real concurrent call model.
                    </p>
                </div>

                <div className="z-10 flex-shrink-0 pt-2 md:pt-0">
                    <button
                        disabled
                        className="px-6 py-3 bg-body border border-border text-muted rounded-lg font-medium cursor-default transition-colors"
                    >
                        Read on Medium
                    </button>
                </div>

            </div>
        </section>
    );
}