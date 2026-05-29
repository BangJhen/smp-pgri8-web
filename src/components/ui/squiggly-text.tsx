import React, { useId } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SquigglyTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Number of distinct displacement frames. @default 5 */
  steps?: number;
  /** Time between filter swaps in ms. @default 80 */
  stepDuration?: number;
  /** Max displacement in px. @default [6, 8] */
  scale?: number | [number, number];
  /** Turbulence base frequency. @default 0.02 */
  baseFrequency?: number;
  /** Turbulence octaves. @default 3 */
  numOctaves?: number;
  as?: "span" | "div";
}

export function SquigglyText({
  children,
  steps = 5,
  stepDuration = 80,
  scale = [6, 8],
  baseFrequency = 0.02,
  numOctaves = 3,
  as = "span",
  className,
  style,
}: SquigglyTextProps) {
  const reactId = useId();
  const safeId = reactId.replace(/[:_]/g, "");
  const filterId = (i: number) => `squiggly-${safeId}-${i}`;

  const filters = React.useMemo(
    () => Array.from({ length: steps }, (_, i) => `url(#${filterId(i)})`),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [steps, safeId],
  );

  const time = useTime();
  const filter = useTransform(
    time,
    (t) => filters[Math.floor(t / stepDuration) % filters.length],
  );

  const scaleAt = (i: number) =>
    Array.isArray(scale) ? scale[i % scale.length] : scale;

  const Wrapper = as === "div" ? motion.div : motion.span;

  return (
    <Wrapper
      style={{ filter, ...style }}
      className={cn("inline-block", className)}
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {Array.from({ length: steps }).map((_, i) => (
            <filter id={filterId(i)} key={i}>
              <feTurbulence
                baseFrequency={baseFrequency}
                numOctaves={numOctaves}
                result="noise"
                seed={i}
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={scaleAt(i)}
              />
            </filter>
          ))}
        </defs>
      </svg>
      {children}
    </Wrapper>
  );
}
