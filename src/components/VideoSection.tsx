"use client";

import { useState } from "react";

const VIDEO_ID = "L_OGm5YVNcc";
const START_SECONDS = 131;

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight mb-2">Demo recording</h2>
      <p className="text-secondary-text mb-6">A recording of a local run.</p>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?start=${START_SECONDS}&autoplay=1`}
            title="Voice Agent Runtime demo"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play demo video"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Voice Agent Runtime demo thumbnail"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-body/90 transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-primary-text">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
