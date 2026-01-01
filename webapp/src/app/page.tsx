"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CreativeIdea = {
  title: string;
  description: string;
  mood: string;
  palette: string[];
  focus: string;
  tools: string[];
};

const ideaSeeds = {
  verbs: [
    "Reimagine",
    "Weave",
    "Rebuild",
    "Illuminate",
    "Remix",
    "Cultivate",
    "Transform",
    "Amplify",
    "Awaken",
    "Prototype",
  ],
  subjects: [
    "micro-rituals for remote teams",
    "quiet cities after sunset",
    "stories hidden in open datasets",
    "community-powered wayfinding",
    "serendipity inside daily dashboards",
    "personal climate action journeys",
    "playful onboarding moments",
    "neighborhood audio postcards",
    "cross-cultural design sprints",
    "mindful focus breaks",
  ],
  moods: ["Playful", "Calm", "Bold", "Futuristic", "Nostalgic", "Empathetic"],
  focuses: [
    "turning friction into delight",
    "bridging offline and online moments",
    "helping teams notice the invisible",
    "amplifying voices that feel quiet",
    "exploring patterns over time",
    "bringing rituals into product loops",
  ],
  tools: [
    "Next.js",
    "server actions",
    "edge functions",
    "embeddings",
    "audio synthesis",
    "browser sensors",
    "haptics",
  ],
  palettes: [
    ["#141b41", "#ff6ff0", "#b8f3ff"],
    ["#0f172a", "#94a3b8", "#f8fafc"],
    ["#22092c", "#872341", "#f05941"],
    ["#111827", "#0ea5e9", "#facc15"],
    ["#0b1120", "#14b8a6", "#a855f7"],
    ["#1f2937", "#38bdf8", "#f472b6"],
  ],
};

const creativeRoutines = [
  {
    label: "09:00 Prototype pulse",
    detail: "Warm up with a 12-minute sketch sprint. No erasing, just iteration.",
  },
  {
    label: "12:30 Field loop",
    detail: "Collect two real-world observations and translate them into interface tweaks.",
  },
  {
    label: "15:15 Momentum break",
    detail: "Share a 20-second loom update to celebrate small wins with the crew.",
  },
  {
    label: "20:45 Night shift",
    detail: "Map how today’s insight feeds tomorrow’s experiment. Archive in the garden.",
  },
];

const inspirationBeacons = [
  {
    title: "Signal Atlas",
    description: "A rolling library of cultural shifts and emerging rituals, updated weekly.",
    href: "https://signal.vc",
  },
  {
    title: "Open Palette",
    description: "Crowdsourced gradients and motion references built for product teams.",
    href: "https://openpalette.design",
  },
  {
    title: "Fieldnotes.fm",
    description: "Five-minute sonic postcards from civic innovators and urban storytellers.",
    href: "https://fieldnotes.fm",
  },
];

const spotlightIdeas: CreativeIdea[] = [
  {
    title: "Listening Board",
    description:
      "A spatial audio board that lets hybrid teams drop short reflections tied to project milestones.",
    mood: "Empathetic",
    focus: "amplifying voices that feel quiet",
    palette: ["#0b1120", "#14b8a6", "#a855f7"],
    tools: ["Next.js", "edge functions", "audio synthesis"],
  },
  {
    title: "Looplight",
    description:
      "Ambient lighting scenes that adapt to sprint energy, pairing sensors with playful UI moments.",
    mood: "Playful",
    focus: "turning friction into delight",
    palette: ["#1f2937", "#38bdf8", "#f472b6"],
    tools: ["browser sensors", "server actions", "embeddings"],
  },
  {
    title: "Atlas Drift",
    description:
      "An interactive map that remixes open data into narrative beats for city explorers.",
    mood: "Futuristic",
    focus: "exploring patterns over time",
    palette: ["#111827", "#0ea5e9", "#facc15"],
    tools: ["Next.js", "edge functions", "embeddings"],
  },
];

const pick = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const createIdea = (): CreativeIdea => {
  const title = `${pick(ideaSeeds.verbs)} the ${pick(ideaSeeds.subjects)}.`;
  return {
    title,
    description: `Design an experience focused on ${pick(
      ideaSeeds.focuses,
    )}, wrapped in a ${pick(ideaSeeds.moods).toLowerCase()} tone.`,
    mood: pick(ideaSeeds.moods),
    focus: pick(ideaSeeds.focuses),
    palette: pick(ideaSeeds.palettes),
    tools: Array.from(
      new Set([pick(ideaSeeds.tools), pick(ideaSeeds.tools), pick(ideaSeeds.tools)])
    ),
  };
};

export default function Home() {
  const [idea, setIdea] = useState<CreativeIdea>(() => createIdea());
  const [history, setHistory] = useState<CreativeIdea[]>([]);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  const shareBlock = useMemo(
    () =>
      `🌱 ${idea.title}\nMood: ${idea.mood}\nFocus: ${idea.focus}\nPalette: ${idea.palette.join(
        ", ",
      )}\nTools: ${idea.tools.join(
        ", ",
      )}\n\n${idea.description}`,
    [idea],
  );

  const shuffleIdea = () => {
    const next = createIdea();
    setIdea(next);
    setHistory((prev) => [idea, ...prev].slice(0, 3));
    setCopyState("idle");
  };

  const copyIdea = async () => {
    try {
      await navigator.clipboard.writeText(shareBlock);
      setCopyState("copied");
    } catch (error) {
      console.error(error);
      setCopyState("error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.25),_transparent_55%)]" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 sm:px-12">
        <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-[0_0_120px_rgba(14,165,233,0.15)] backdrop-blur">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-sm font-medium text-sky-200/90">
            Studio Pulse • Experiments for curiosity-driven teams
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Build playful rituals that spark better products and kinder collaboration.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200/80">
            Welcome to the Agentic Playground. Remix prompts, explore future-facing concepts, and stitch tiny experiments into your workflow. Everything here runs smoothly on the web with Next.js, ready for launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-200/90">
            <span className="rounded-full border border-slate-500/30 px-4 py-2">Edge-native rituals</span>
            <span className="rounded-full border border-slate-500/30 px-4 py-2">Collaborative acoustics</span>
            <span className="rounded-full border border-slate-500/30 px-4 py-2">Sustainable creativity</span>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(14,165,233,0.14)] backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">Idea Generator</h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-200/80">
                  Compose a micro-experiment in seconds. Each shuffle keeps the momentum alive for your next design or product ritual.
                </p>
              </div>
              <button
                onClick={shuffleIdea}
                className="rounded-full border border-sky-300/40 bg-sky-400/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300/80 hover:bg-sky-400/30"
              >
                Shuffle
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/60">
                  Prompt
                </p>
                <h3 className="text-pretty text-3xl font-semibold text-white">
                  {idea.title}
                </h3>
                <p className="text-base text-slate-200/85">{idea.description}</p>
              </header>

              <dl className="grid gap-6 rounded-2xl border border-white/5 bg-black/20 p-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-300/60">Mood</dt>
                  <dd className="mt-2 text-lg font-medium text-slate-100">{idea.mood}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-300/60">Focus</dt>
                  <dd className="mt-2 text-sm text-slate-200/85">{idea.focus}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-300/60">Suggested Stack</dt>
                  <dd className="mt-2 text-sm text-slate-200/90">{idea.tools.join(" • ")}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                {idea.palette.map((color) => (
                  <span
                    key={color}
                    style={{ backgroundColor: color }}
                    className="block h-12 w-20 rounded-2xl border border-white/10 shadow-lg"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={copyIdea}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/15"
                >
                  {copyState === "copied" && "Copied!"}
                  {copyState === "error" && "Copy failed"}
                  {copyState === "idle" && "Copy prompt"}
                </button>
                <Link
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/20 bg-black/30 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-200/50"
                >
                  Open Next.js docs
                </Link>
              </div>
            </div>

            {history.length > 0 && (
              <aside className="mt-10 space-y-3 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/60">
                  Recent prompts
                </p>
                <ul className="space-y-3 text-sm text-slate-200/80">
                  {history.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-sky-300/70" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </article>

          <div className="space-y-8">
            <article className="rounded-3xl border border-emerald-200/20 bg-emerald-500/10 p-8 text-emerald-50 shadow-[0_30px_80px_rgba(34,197,94,0.12)]">
              <h2 className="text-2xl font-semibold">Flow Routine</h2>
              <p className="mt-2 text-sm text-emerald-50/80">
                Anchor your day with moments of asymmetry, collaboration, and reflection.
              </p>
              <ul className="mt-6 space-y-4">
                {creativeRoutines.map((entry) => (
                  <li key={entry.label} className="rounded-2xl border border-emerald-200/20 bg-emerald-400/10 p-4">
                    <p className="text-sm font-semibold">{entry.label}</p>
                    <p className="mt-2 text-sm text-emerald-50/75">{entry.detail}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-slate-100">
              <h2 className="text-2xl font-semibold">Spotlight Concepts</h2>
              <p className="mt-2 text-sm text-slate-200/75">
                Use these as launch pads for team jams, client workshops, or personal tinkering nights.
              </p>
              <ul className="mt-6 space-y-5">
                {spotlightIdeas.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {item.palette.map((color) => (
                        <span
                          key={color}
                          style={{ backgroundColor: color }}
                          className="h-10 w-10 flex-none rounded-full border border-white/10"
                        />
                      ))}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-200/80">{item.description}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400/80">
                      Mood • {item.mood} &mdash; Focus • {item.focus}
                    </p>
                    <p className="mt-2 text-xs text-slate-300/75">Toolkit: {item.tools.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur sm:grid-cols-3">
          {inspirationBeacons.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              target="_blank"
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-sky-300/60 hover:bg-black/10"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300/60">
                Resource
              </span>
              <span className="text-lg font-semibold text-white">{resource.title}</span>
              <p className="text-sm leading-relaxed text-slate-200/80">
                {resource.description}
              </p>
              <span className="mt-auto text-sm font-semibold text-sky-200/80 transition group-hover:text-sky-200">
                Open ↗
              </span>
            </Link>
          ))}
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-slate-300/80 sm:flex-row">
          <div>
            <p className="font-semibold text-slate-100">Agentic Playground</p>
            <p className="text-slate-300/70">
              Crafted for the moments when “make something” is the only brief you need.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-slate-300/70">Live, improvisational, and deployable on Vercel.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
