"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Explicit map of supported HTML tags → Framer Motion components.
 * Typed as a const so TypeScript knows which tags are available.
 */
const MOTION_TAGS = {
  div:     motion.div,
  section: motion.section,
  article: motion.article,
  header:  motion.header,
  footer:  motion.footer,
  main:    motion.main,
  span:    motion.span,
  aside:   motion.aside,
  ul:      motion.ul,
  li:      motion.li,
} as const;

type SupportedTag = keyof typeof MOTION_TAGS;

// HTML attribute props for the wrapper element, minus those Framer Motion owns
type PassthroughProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  "style" | "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "onDragEnter" | "onDragExit" | "onDragLeave" | "onDragOver" | "onDrop"
>;

interface ArrivalWrapperProps extends PassthroughProps {
  children: React.ReactNode;
  delay?: number;
  /** "up" adds translateY; "fade" is opacity only */
  variant?: "up" | "fade";
  /** Fraction of element visible before triggering */
  threshold?: number;
  once?: boolean;
  as?: SupportedTag;
}

/**
 * Scroll-triggered arrival wrapper.
 * Wraps any content in a Framer Motion element that fades in on viewport entry.
 *
 * Usage:
 *   <ArrivalWrapper as="section" id="solutions" className="zone-pad">
 *     <SectionHead ... />
 *   </ArrivalWrapper>
 */
export function ArrivalWrapper({
  children,
  className,
  delay = 0,
  variant = "up",
  threshold = 0.12,
  once = true,
  as: tag = "div",
  // Remaining props (id, aria-*, data-*, etc.) forwarded to the DOM element
  ...rest
}: ArrivalWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once,
    margin: "0px 0px -8% 0px",
    amount: threshold,
  });

  const Tag = MOTION_TAGS[tag];
  const vars = variant === "fade" ? fadeIn : fadeUp;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      variants={vars}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={cn(className)}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}
