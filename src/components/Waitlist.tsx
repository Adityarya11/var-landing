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
            // Calls the serverless function defined in src/app/api/waitlist/route.ts
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                throw new Error("Failed to insert email");
            }

            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="waitlist" className="py-24 px-6 max-w-2xl mx-auto w-full text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0ebe6] mb-4 tracking-tight">
                Join the Waitlist
            </h2>
            <p className="text-[#a09890] text-sm md:text-base mb-8 leading-relaxed">
                The runtime is not publicly hosted yet. Leave your email and I'll reach out when a live demo is available.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-[#1a1a1b] border border-[#2e2e30] rounded-lg px-4 py-3 text-[#f0ebe6] placeholder:text-[#6b6b6e] focus:outline-none focus:border-[#c97d3a] transition-colors disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="px-6 py-3 bg-[#c97d3a] text-[#1a1a1b] rounded-lg font-medium hover:bg-[#b06828] transition-colors disabled:opacity-50 disabled:hover:bg-[#c97d3a] flex items-center justify-center min-w-[140px]"
                >
                    {status === "loading" ? "Joining..." : status === "success" ? "Joined ✓" : "Join Waitlist"}
                </button>
            </form>

            {status === "error" && (
                <p className="text-red-400 text-sm mt-4">
                    Something went wrong. Please try again.
                </p>
            )}
        </section>
    );
}