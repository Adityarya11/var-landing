"use client";

import { useState } from "react";

const VIDEO_ID = "L_OGm5YVNcc";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Public Demo</h2>
        <p className="text-neutral-400 mb-6">
          A hosted end-to-end voice session, recorded live.
        </p>
        <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Voice Agent Runtime demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 translate-x-0.5 fill-black"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
