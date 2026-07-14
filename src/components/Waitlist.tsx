"use client";

import React, { useState } from "react";

export default function Waitlist() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error("Failed to insert email");

            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="waitlist" className="py-24 px-6 max-w-2xl mx-auto w-full text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-4 tracking-tight">
                Stay in the loop
            </h2>
            <p className="text-secondary-text text-sm md:text-base mb-8 leading-relaxed">
                The runtime is not publicly hosted yet. Leave your email — I'll reach out when a live demo is available.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-body border border-border rounded-lg px-4 py-3 text-primary-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="px-6 py-3 bg-accent text-[#1a1a1b] rounded-lg font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:hover:bg-accent flex items-center justify-center min-w-[140px]"
                >
                    {status === "loading" ? "Joining..." : status === "success" ? "You're on the list." : "Join Waitlist"}
                </button>
            </form>

            {status === "error" && (
                <p className="text-red-400 text-sm mt-4">
                    Something went wrong. Try again.
                </p>
            )}
        </section>
    );
}