import Image from "next/image";
import { profile } from "@/data/info";
import { cn } from "@/lib/cn";

type Variant = "hero" | "portrait";

const SIZE = {
  hero: { w: 640, h: 640, max: "max-w-[26rem]" },
  portrait: { w: 720, h: 720, max: "max-w-[22rem]" },
} as const;

export function PhotoCard({
  variant = "hero",
  priority = false,
  className,
}: {
  variant?: Variant;
  priority?: boolean;
  className?: string;
}) {
  const { w, h, max } = SIZE[variant];

  return (
    <div className={cn("relative mx-auto w-full", max, className)}>
      {/* Stacked photo card — lime backdrop peeks out top + left only */}
      <div className="relative">
        {/* Offset accent backdrop — no border on the photo card so there's no
            light seam between the lime layer and the photo. */}
        <div
          aria-hidden
          className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[26px] bg-iris"
        />

        <div className="relative overflow-hidden rounded-[24px] border-2 border-ink-950 bg-paper-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
          {/* Photo */}
          <div className="relative">
            <Image
              src={profile.avatar}
              alt={`${profile.name} — portrait`}
              width={w}
              height={h}
              priority={priority}
              className="block aspect-square w-full scale-[1.02] object-cover"
            />

            {/* Location pill — bottom-left of photo, always dark */}
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-sm bg-neutral-950/95 px-2.5 py-1.5 text-white backdrop-blur-sm">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-[1px] bg-iris"
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Coimbatore · IN
              </span>
            </span>
          </div>

          {/* Caption strip */}
          <figcaption className="grid grid-cols-[1fr_auto] items-end gap-6 px-5 py-4">
            <div className="min-w-0">
              <p className="font-serif text-lg leading-none text-ink-950">
                {profile.short}
              </p>
              <p className="mt-1.5 truncate font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                Senior Software Engineer — AI
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                Edition 01
              </p>
              <p className="mt-1 font-serif text-xs italic text-iris-deep">
                hello,&nbsp;world
              </p>
            </div>
          </figcaption>
        </div>
      </div>

      {/* Signature line under the card */}
      <div className="mt-7 flex items-center gap-3 text-ink-500">
        <span aria-hidden className="block h-px flex-1 bg-ink-200" />
        <span className="font-serif text-xs italic text-ink-700">
          {profile.name}
        </span>
        <span aria-hidden className="block h-px flex-1 bg-ink-200" />
      </div>
    </div>
  );
}
