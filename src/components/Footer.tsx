import React from "react";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-body py-10 mt-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary-text">
            Voice Agent Runtime — Built by{" "}
            <span className="text-primary-text font-medium">Aditya Arya</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-secondary-text">
            <a
              href="https://github.com/Adityarya11/voice-agent-runtime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text flex items-center gap-1.5 transition-colors"
            >
              GitHub <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/Adityarya11/atherRTC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text flex items-center gap-1.5 transition-colors"
            >
              AetherRTC <ExternalLink size={14} />
            </a>
            <a
              href="https://medium.com/@arya050411"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text flex items-center gap-1.5 transition-colors"
            >
              Medium <ExternalLink size={14} />
            </a>
            <a
              href="https://adityarya.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text flex items-center gap-1.5 transition-colors"
            >
              Portfolio <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left text-muted font-mono text-xs">
          Open source. Consumer hardware. No cloud APIs.
        </div>
      </div>
    </footer>
  );
}
