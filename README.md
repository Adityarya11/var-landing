# var-landing

Landing page for the Voice Agent Runtime (VAR) project.

Built with Next.js 15 (App Router), Tailwind CSS v4, and Supabase for waitlist storage.
Deployed on Vercel.

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in `src/app/globals.css` via Tailwind v4's
`@theme inline` block. Do not introduce arbitrary hex values in components — reference these
tokens or their Tailwind equivalents.

**Dark (default):**

- Body background: `#1a1a1b` — use as `bg-[#1a1a1b]`
- Surface / card: `#232325` — use as `bg-[#232325]`
- Hover / accent surface: `#3d2e1c` — use as `bg-[#3d2e1c]`
- Border: `#2e2e30`
- Muted text: `#6b6b6e`
- Primary text: `#f0ebe6`
- Secondary text: `#a09890`

**Accent:**

- Primary: `#c97d3a` (warm amber)
- Hover: `#b06828`
- Muted surface: `#3d2e1c`

**Status indicators (milestone timeline):**

- Complete: `#4a9b6f` (green)
- In progress: `#c97d3a` (amber, same as accent)
- Deferred: `#6b6b6e` (muted grey)

### Typography

- Font: Geist Sans (body), Geist Mono (code/metrics)
- Both loaded via `next/font/google` in `layout.tsx`
- Mono font is used for all latency values, version numbers, and code snippets

### Spacing

- Max content width: `max-w-6xl` with `mx-auto px-6` on all sections
- Section vertical padding: `py-24` minimum
- Internal card padding: `p-6` or `p-8`

---

## Component Map

Each component lives in `src/components/`. They are imported in order in `src/app/page.tsx`.
Build them in this order — each is self-contained with no cross-dependencies.

### 1. `Hero.tsx`

Full-viewport opening section.

**Content:**

- Eyebrow label: `Open Source · Consumer Hardware · No Cloud APIs`
- Headline: `A distributed, real-time voice agent runtime.`
- Subheadline: `Go orchestrator. Python inference engine. gRPC bidirectional stream.
Sub-1.1s end-to-end latency on an RTX 3050 Mobile.`
- Directional note (smaller, muted): `Designed to evolve — tools, memory, RAG, and
agent capabilities are on the roadmap. Today it speaks. Tomorrow it acts.`
- Two CTAs:
  - Primary: `View on GitHub` → `https://github.com/Adityarya11/voice-agent-runtime`
    (opens in new tab)
  - Secondary: `Join Waitlist` → smooth scroll to `#waitlist`
- Background: `#1a1a1b` with a very subtle radial gradient from `#3d2e1c` at center,
  fading out. Keep it restrained — not a glow, just warmth.
- No hero image. Typography-first.

---

### 2. `StatCallout.tsx`

Single large metric — the number that stops a developer scrolling.

**Content:**

- Large display number: `~1.0s`
- Label: `STT to first audio byte`
- Supporting line: `Faster-Whisper on CPU · qwen2.5:3b on GPU via Ollama · Piper TTS on CPU`
- Sub-note: `Warm model, idle GPU, consumer laptop. No cloud inference.`

**Design:**

- Dark section (`#1a1a1b` or slightly lighter `#1e1e1f`)
- The `~1.0s` number should be very large — `text-8xl` or `text-9xl` — in accent color
  `#c97d3a`, font-mono
- Centered, full-width, generous padding
- Thin top and bottom border lines in `#2e2e30` to separate it visually

---

### 3. `Architecture.tsx`

System architecture diagram + prose explanation.

**Content:**
Left column — prose:

- Section title: `How it's built`
- Paragraph: `The runtime is split across two independently deployable services connected
by a custom gRPC bidirectional stream. Go owns session lifecycle, concurrency, and
transport. Python owns all inference — VAD, STT, LLM, TTS. Neither service has any
knowledge of the other's internals.`
- Second paragraph: `A unified Event proto with a oneof payload means the protocol can
evolve — transcripts, tool calls, memory updates — without breaking the transport
contract.`

Right column — visual diagram (pure CSS/HTML, no image):

```

┌─────────────────────────┐
│ GO ORCHESTRATOR │
│ │
│ Session State Machine │
│ Mutex-protected FSM │
│ writePump / readPump │
│ gRPC Client │
└───────────┬─────────────┘
│
│ gRPC Bidirectional Stream
│ unified Event proto
│ oneof: audio | transcript | control
│
┌───────────▼─────────────┐
│ PYTHON INFERENCE │
│ │
│ Silero VAD (ONNX) │
│ Faster-Whisper (STT) │
│ qwen2.5:3b via Ollama │
│ Piper TTS │
└─────────────────────────┘

```

Render this as styled divs with borders, not a `<pre>` block.
Use `#232325` for card backgrounds, `#c97d3a` for the connecting line/arrow.

**Layout:** Two columns on desktop (`grid grid-cols-2 gap-16`), stacked on mobile.

---

### 4. `LatencyTable.tsx`

Latency breakdown table.

**Content:**

| Stage      | Metric                       | Value                   |
| ---------- | ---------------------------- | ----------------------- |
| VAD        | Speech boundary detection    | real-time · 32ms frames |
| STT        | Transcription latency (warm) | 0.70 – 0.82s            |
| LLM        | Time to first token (TTFT)   | 0.43 – 0.58s            |
| TTS        | First chunk (warm)           | 0.06 – 0.18s            |
| End-to-end | STT → first audio byte       | ~1.0 – 1.1s             |

Caption below table:
`Measured on RTX 3050 Mobile 4GB VRAM · Ryzen 5 6600H · 16GB DDR5 · Warm model,
fresh boot, idle GPU.`

**Design:**

- Section title: `Latency Breakdown`
- Section subtitle: `Every stage measured. No synthetic benchmarks.`
- Table background: `#232325`
- Header row background: `#2e2e30`
- End-to-end row: bold, accent color `#c97d3a` on the value cell
- All metric values in `font-mono`
- Table should be `max-w-3xl mx-auto`

---

### 5. `MilestoneTimeline.tsx`

Vertical timeline of completed and upcoming milestones.

**Content:**

Completed (solid marker, `#4a9b6f`):

1. `gRPC Bridge` — Bidirectional streaming between Go and Python. Proved the transport
   layer end-to-end.
2. `Local Inference Pipeline` — Faster-Whisper, Ollama, Piper TTS. Full STT → LLM → TTS
   loop with no external API calls.
3. `Dynamic Agent Profiling` — YAML-defined personas. System prompt flows through the
   proto contract into the LLM at session start. Runtime never changes.
4. `Session State Machine` — Mutex-protected FSM with validated transition map.
   `sync.Once` guard against concurrent completion signals.
5. `Token Streaming` — Sentence-boundary chunking. TTS synthesizes sentence one while
   the LLM generates sentence two.
6. `True Bidirectional Duplex` — Stream stays open across utterance boundaries.
   Three-worker Python architecture. Sequential gating via `threading.Event`.
7. `VAD Integration` — Silero VAD via ONNX. Four-state debounce machine. Lookback
   buffer. Max-duration ceiling. Validated against false starts, ramble, and state
   persistence across utterances.

In Progress (outline marker, `#c97d3a`): 8. `Monitor Goroutine` — Barge-in support, session timeout, context cancellation. 9. `AetherRTC Bridge` — WebRTC edge gateway connecting live browser audio to the
orchestrator.

Planned (muted marker, `#6b6b6e`): 10. `Public Demo` — Hosted end-to-end voice session. 11. `Agent Capabilities` — Tool calling, RAG, MCP integration. Voice becomes a transport
layer, not a limitation.

**Design:**

- Section title: `What's been built`
- Left-aligned vertical timeline with a thin vertical line in `#2e2e30`
- Each item: colored dot + title in `font-semibold` + description in `text-[#a09890]`
- Completed items: full opacity. In-progress: full opacity. Planned: 60% opacity.
- On hover, each item's background shifts to `#232325`

---

### 6. `HardwarePlacement.tsx`

Hardware-aware component placement explanation.

**Content:**
Section title: `Hardware-aware by design`
Intro: `Every placement decision was made around a single constraint: 4GB VRAM.
Nothing is accidental.`

Table:

| Stage | Component                   | Device | VRAM   |
| ----- | --------------------------- | ------ | ------ |
| VAD   | Silero VAD (ONNX 1.26.0)    | CPU    | —      |
| STT   | Faster-Whisper 1.2.1 (int8) | CPU    | —      |
| LLM   | qwen2.5:3b via Ollama 0.6.2 | GPU    | ~2.2GB |
| TTS   | Piper TTS 1.4.2             | CPU    | —      |

Below table: `RTX 3050 Mobile has 4GB. The LLM takes 2.2GB. Everything else runs on
the Ryzen 5 6600H. Nothing competes for VRAM. Nothing OOMs.`

**Design:**

- Two-column layout: prose left, table right on desktop
- Table style same as `LatencyTable` but smaller (`max-w-xl`)
- GPU row highlighted with subtle `#3d2e1c` background

---

### 7. `TechStack.tsx`

Technology stack listed cleanly.

**Content:**
Section title: `Stack`

Group into three columns:

**Transport & Orchestration:**

- Go 1.26
- gRPC / Protocol Buffers
- Pion WebRTC (AetherRTC)
- gorilla/websocket

**Inference:**

- Python 3.11
- Faster-Whisper 1.2.1
- Ollama 0.6.2 + qwen2.5:3b
- Piper TTS 1.4.2
- Silero VAD (ONNX)
- onnxruntime 1.26.0

**Infrastructure:**

- grpcio 1.81.0
- Protocol Buffers 6.33.6
- numpy 2.4.6
- scipy (resampling pipeline)

**Design:**

- Three cards side by side on desktop, stacked on mobile
- Card background: `#232325`
- Card border: `#2e2e30`
- Group title: `text-[#c97d3a] text-xs uppercase tracking-widest font-mono`
- Items: plain list, `text-[#f0ebe6]`, small `text-sm`

---

### 8. `BlogSection.tsx`

Single blog card in "coming soon" state.

**Content:**
Section title: `From the blog`

Card:

- Tag: `Deep Dive`
- Title: `Building True Bidirectional Duplex in a Distributed Voice Pipeline`
- Description: `How a three-worker Python architecture, a threading.Event gate, and
an explicit proto signal replaced half-duplex voicemail exchange with a real
concurrent call model.`
- Platform: `Medium`
- Status badge: `Coming Soon`
- The card is non-clickable in coming-soon state (no href, cursor-default)

**Design:**

- Card background: `#232325`, border `#2e2e30`
- Coming soon badge: `#3d2e1c` background, `#c97d3a` text
- Full card slightly muted opacity: `opacity-80`
- When blog goes live: remove opacity, add href, change badge to `Read on Medium`
  with external link icon (Lucide `ExternalLink`)

---

### 9. `AetherRTCCallout.tsx`

Companion project callout — not a full section, a prominent card.

**Content:**

- Label: `Companion Project`
- Title: `AetherRTC`
- Description: `A standalone WebRTC edge gateway that terminates SDP negotiation,
ICE traversal, DTLS handshakes, and G.711 codec handling at the edge — so the
Voice Agent Runtime never touches WebRTC internals. AetherRTC is the front door.
VAR is the brain.`
- Status: `In Development`
- Link: `View on GitHub →` (placeholder href, opens new tab)
  URL: `https://github.com/Adityarya11/atherRTC`

**Design:**

- Full-width card, `#232325` background, left border accent `4px solid #c97d3a`
- Status badge same style as BlogSection coming-soon badge
- Lucide `ArrowUpRight` icon on the GitHub link

---

### 10. `Waitlist.tsx`

Email collection form.

**Content:**

- Section id: `waitlist` (for scroll target from Hero CTA)
- Title: `Stay in the loop`
- Subtitle: `The runtime is not publicly hosted yet. Leave your email — I'll reach out
when a live demo is available.`
- Input placeholder: `your@email.com`
- Button label: `Join Waitlist`
- Success state: Replace form with `You're on the list.` in accent color
- Error state: `Something went wrong. Try again.` in muted red

**Behavior:**

- On submit, POST to `/api/waitlist` with `{ email: string }`
- Validate email client-side before submitting (basic regex, no library needed)
- Disable button during request, re-enable on error
- No page reload

**API Route (`src/app/api/waitlist/route.ts`):**

- Method: POST
- Parse `email` from request body
- Validate not empty and contains `@`
- Insert into Supabase table `waitlist`, column `email`
- Return 200 on success, 400 on invalid, 500 on DB error
- Use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from env

**Supabase table setup (run once in Supabase SQL editor):**

```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamptz default now()
);
```

**Design:**

- Section background: `#232325`
- Centered, `max-w-md mx-auto`
- Input: `bg-[#1a1a1b]` border `#2e2e30`, focus border `#c97d3a`
- Button: `bg-[#c97d3a]` hover `bg-[#b06828]`, text white, full width on mobile

---

### 11. `Footer.tsx`

Minimal footer.

**Content:**

- Left: `Voice Agent Runtime — Built by Aditya Arya`
- Right: Three links
  - `GitHub` → `https://github.com/Adityarya11/voice-agent-runtime`
  - `AetherRTC` → `https://github.com/Adityarya11/atherRTC`
  - `Medium` → coming soon, muted and non-clickable
- Bottom line: `Open source. Consumer hardware. No cloud APIs.`

**Design:**

- Background: `#111112` (slightly darker than body to ground the page)
- Border top: `#2e2e30`
- All links use Lucide `ExternalLink` icon inline
- Muted link (Medium): `text-[#6b6b6e] cursor-default`

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=        # From Supabase project settings → API
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # From Supabase project settings → API
```

Both are public-safe (anon key is RLS-scoped). Do not use the service role key.

Enable Row Level Security on the `waitlist` table and add this policy:

```sql
create policy "insert only"
on waitlist for insert
to anon
with check (true);
```

This allows inserts from the frontend but blocks reads and deletes from the anon role.

---

## Deployment

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables in Vercel project settings
4. Deploy — Vercel detects Next.js automatically

No special build configuration needed. The `src/app/api/waitlist/route.ts`
file is automatically a serverless function on Vercel.

---

## Notes for AI Assistants

- Tailwind v4 is in use. There is no `tailwind.config.ts`. All theme tokens live in
  `src/app/globals.css` under `@theme inline`. Do not create a config file.
- Do not add new npm packages without checking if the functionality exists in
  already-installed packages (Next.js, Tailwind, Supabase JS client, Lucide React).
- All components are React Server Components by default. The `Waitlist` component
  requires `"use client"` because it uses `useState` and form submission.
  No other component should need `"use client"`.
- Do not use `<Image>` from next/image unless there is an actual image asset.
  The architecture diagram in `Architecture.tsx` is pure HTML/CSS — no SVG file,
  no image tag.
- Keep all section backgrounds consistent with the design system. Do not introduce
  new background colors not listed in this README.
- Every numeric metric value (latency, version numbers) must use `font-mono` class.
- The page has no navigation bar. The only navigation is the Hero CTA smooth-scrolling
  to `#waitlist`.

---
