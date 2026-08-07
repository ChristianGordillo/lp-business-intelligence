import Image from "next/image";
import type { ReactNode } from "react";

type StorySceneSize = "wide" | "half" | "portrait" | "strip";

type StorySceneProps = {
  number?: number | string;
  src: string;
  alt: string;
  children?: ReactNode;
  size?: StorySceneSize;
  priority?: boolean;
  imagePosition?: string;
};

const sizeClasses: Record<StorySceneSize, string> = {
  wide: "h-[340px] sm:h-[460px] lg:h-[560px]",
  half: "h-[320px] sm:h-[390px] lg:h-[430px]",
  portrait: "h-[420px] sm:h-[520px] lg:h-[620px]",
  strip: "h-[280px] sm:h-[300px] lg:h-[260px]",
};

export default function StoryScene({
  number,
  src,
  alt,
  children,
  size = "half",
  priority = false,
  imagePosition = "object-center",
}: StorySceneProps) {
  return (
    <article className="group min-w-0">
      <div
        className={`
          relative
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[var(--lp-border)]
          bg-[var(--lp-cream)]
          ${sizeClasses[size]}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            size === "wide"
              ? "(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
              : size === "strip"
                ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
          }
          className={`
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.015]
            ${imagePosition}
          `}
        />

        {number !== undefined && (
          <div className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/50 bg-[var(--lp-navy)] px-2 text-sm font-semibold text-white shadow-sm">
            {number}
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--lp-navy)]/10 via-transparent to-transparent" />
      </div>

      {children && (
        <div
          className="
            mt-5
            space-y-3
            text-[15px]
            font-normal
            leading-[1.7]
            text-[var(--lp-blue)]
            lg:text-[14px]
            lg:leading-[1.65]
          "
        >
          {children}
        </div>
      )}
    </article>
  );
}