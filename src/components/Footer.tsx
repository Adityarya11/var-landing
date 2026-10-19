import { ExternalLink } from "lucide-react";
import {
  GITHUB_PROFILE_URL,
  LICENSE_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
} from "@/lib/links";

const links = [
  { label: "GitHub", href: GITHUB_PROFILE_URL },
  { label: "Portfolio", href: PORTFOLIO_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface mt-8">
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-medium">Aditya Arya</div>
            <div className="text-sm text-secondary-text">Open to roles.</div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-secondary-text hover:text-primary-text transition-colors"
              >
                {link.label} <ExternalLink size={14} />
              </a>
            ))}
          </nav>
        </div>
        <a
          href={LICENSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-primary-text transition-colors w-fit"
        >
          Voice Agent Runtime is licensed under Apache 2.0
        </a>
      </div>
    </footer>
  );
}
