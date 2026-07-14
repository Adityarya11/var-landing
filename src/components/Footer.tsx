import React from "react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#2e2e30] bg-[#1a1a1b] py-8 mt-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-6 text-sm font-medium text-[#a09890]">
                    <a
                        href="https://github.com/adityarya11/var"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#f0ebe6] transition-colors"
                    >
                        GitHub
                    </a>
                    <span className="cursor-not-allowed text-[#6b6b6e] flex items-center gap-1.5">
                        Medium
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#c97d3a] border border-[#c97d3a]/20 bg-[#c97d3a]/10 px-1.5 py-0.5 rounded">
                            Coming Soon
                        </span>
                    </span>
                </div>

                <div className="text-sm text-[#6b6b6e]">
                    Built by <span className="text-[#a09890] font-medium">Aditya Arya</span>
                </div>

            </div>
        </footer>
    );
}