"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes every Motion animation follow the OS
 * prefers-reduced-motion setting. Transform and layout animations are
 * disabled; opacity still fades, so content never appears without warning.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
