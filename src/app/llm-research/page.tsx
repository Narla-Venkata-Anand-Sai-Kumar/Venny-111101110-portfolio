import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { Asterism } from "@/components/Asterism";
import { StatStrip } from "@/components/StatStrip";
import { llmResearch } from "@/data/info";
import { repoOgImage } from "@/lib/github";

export const metadata: Metadata = {
  title: "LLM Research",
  description:
    "Open-source, from-scratch LLM research — ventx and Chaos-135M — with the architecture, data, training, and evaluation strategies behind each.",
};

export default function LlmResearchPage() {
  const totalParams = llmResearch.length;
  const smallestGpu = "8GB";

  return (
    <>
      <section className="pt-24 pb-10 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Open-source · from scratch</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              Training LLMs from scratch,{" "}
              <span className="text-iris-deep dark:text-iris">
                in the open.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-ink-600 leading-relaxed">
              Two personal, fully open-source research builds — tokenizer,
              data pipeline, training loop, and evaluation harness all
              written from scratch, no wrapper around an existing base model.
              Below is a breakdown of the actual strategies behind each: the
              architecture choices, the data mix, the training recipe, and
              the constraints that shaped both.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12">
              <StatStrip
                stats={[
                  {
                    value: String(totalParams),
                    label: "Open-source models",
                    hint: "ventx · Chaos-135M",
                  },
                  {
                    value: smallestGpu,
                    label: "Smallest GPU used",
                    hint: "RTX 5060, consumer card",
                  },
                  {
                    value: "134.5M",
                    label: "Smallest model",
                    hint: "Chaos-135M, trained end-to-end",
                  },
                  {
                    value: "32K",
                    label: "Native context (ventx)",
                    hint: "dense attention, not windowed",
                  },
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Asterism />
      </Container>

      {llmResearch.map((model, i) => {
        const og = repoOgImage(model.repo);
        return (
          <Section key={model.name} tone={i % 2 === 1 ? "soft" : "paper"} id={model.name}>
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                {/* Left: identity + preview */}
                <div className="lg:col-span-5">
                  {og ? (
                    <Link
                      href={model.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="block overflow-hidden rounded-2xl border border-ink-100 bg-paper-soft"
                    >
                      <Image
                        src={og}
                        alt={`${model.name} repository preview`}
                        width={1200}
                        height={630}
                        className="aspect-[1200/630] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                        unoptimized
                      />
                    </Link>
                  ) : (
                    <div className="grid aspect-[1200/630] place-items-center rounded-2xl border border-ink-100 bg-iris-wash/40">
                      <span className="font-serif text-2xl italic text-ink-700">
                        {model.name}
                      </span>
                    </div>
                  )}

                  <div className="mt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                      {model.year} <span className="mx-2 text-ink-300">·</span>{" "}
                      {model.params} params
                    </p>
                    <h2 className="mt-3 font-serif text-h2 text-ink-950 leading-tight">
                      {model.name}
                    </h2>
                    <p className="mt-2 font-serif italic text-ink-600">
                      {model.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-600">
                      {model.summary}
                    </p>

                    <div className="mt-5">
                      <Pill tone="iris">{model.status}</Pill>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {model.stack.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>

                    <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                      <span className="text-ink-400">Hardware</span>
                      <span aria-hidden className="mx-2 text-ink-300">·</span>
                      {model.hardware.join(" · ")}
                    </div>

                    <Link
                      href={model.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-900 hover:bg-ink-50"
                    >
                      <Github size={14} />
                      View source
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right: strategy breakdown */}
                <div className="lg:col-span-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    Strategies followed
                  </p>
                  <div className="mt-4 divide-y divide-ink-100 border-y border-ink-100">
                    {model.strategies.map((s) => (
                      <div key={s.label} className="grid gap-3 py-6 sm:grid-cols-12">
                        <h3 className="sm:col-span-3 font-serif text-lg text-ink-950">
                          {s.label}
                        </h3>
                        <ul className="sm:col-span-9 space-y-2">
                          {s.points.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex gap-2.5 text-sm leading-relaxed text-ink-600"
                            >
                              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iris" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Section>
        );
      })}

      <Container>
        <Asterism />
      </Container>

      <Section>
        <Reveal>
          <Link
            href="https://github.com/Narla-Venkata-Anand-Sai-Kumar"
            target="_blank"
            rel="noreferrer"
            className="group grid gap-6 overflow-hidden rounded-3xl border border-ink-100 bg-paper-card p-8 transition-all hover:border-iris/30 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.1)] sm:p-12 md:grid-cols-12 md:items-center"
          >
            <div className="md:col-span-1 hidden md:flex md:justify-center">
              <span
                aria-hidden
                className="grid h-14 w-14 place-items-center rounded-full bg-iris-wash text-iris-deep transition-colors group-hover:bg-iris group-hover:text-ink-950 dark:bg-iris/15 dark:text-iris dark:group-hover:bg-iris dark:group-hover:text-ink-950"
              >
                <Github size={22} />
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-iris-deep dark:text-iris">
                Fully open source
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">
                Every checkpoint, training script, and benchmark result lives
                in the repo — clone it, resume a run, or read the commit
                history to see the strategy evolve.
              </h2>
            </div>
            <div className="md:col-span-3 md:justify-self-end">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm text-paper transition-colors group-hover:bg-iris group-hover:text-ink-950 dark:bg-iris dark:text-ink-950 dark:group-hover:bg-iris-deep">
                Browse on GitHub
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
