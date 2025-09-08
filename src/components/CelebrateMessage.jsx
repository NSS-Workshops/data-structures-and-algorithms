import React, { useEffect, useMemo, useRef, useCallback } from "react";

/**
 * CelebrateMessage
 * - Renders text with per-character rainbow colors & varying font sizes
 * - Fires a 4s confetti burst on mount (configurable) and on click
 *
 * Props:
 *  - text: string
 *  - autoConfetti: boolean (default true)
 *  - durationMs: number (default 4000)
 *  - minSize: number px (default 14)
 *  - maxSize: number px (default 38)
 */
export default function CelebrateMessage({
  text = `You've completed this comprehensive journey through Data Structures and Algorithms! This is a significant achievement that represents hours of dedicated learning, practice, and problem-solving. Take a moment to appreciate how far you've come.`,
  autoConfetti = true,
  durationMs = 4000,
}) {
  const containerRef = useRef(null);
  const confettiRef = useRef(null); // cache the imported module

  // Build character metadata once
  const chars = useMemo(() => Array.from(text), [text]);
  const styledChars = useMemo(() => {
    const n = chars.length || 1;
    return chars.map((ch, i) => {
      const hue = Math.round((i * 360) / n);
      // Use a fixed font size instead of varying sizes
      const size = 24; // Fixed size for consistent appearance
      return { ch, hue, size, isSpace: ch === " " };
    });
  }, [chars]);

  // Confetti runner
  const runConfetti = useCallback(async () => {
    try {
      if (!confettiRef.current) {
        // Dynamically import only on the client
        confettiRef.current = (await import("canvas-confetti")).default;
      }
      const confetti = confettiRef.current;

      const end = Date.now() + durationMs;

      (function frame() {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    } catch {
      // If the import fails (e.g., package not installed), fail silently
    }
  }, [durationMs]);

  useEffect(() => {
    if (autoConfetti) runConfetti();
  }, [autoConfetti, runConfetti]);

  return (
    <div
      ref={containerRef}
      aria-label={text}
      onClick={runConfetti}
      style={{
        display: "inline-block",
        margin: 40,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.35,
        letterSpacing: "0.015em",
        fontWeight: 700,
        cursor: "pointer",
        userSelect: "text",
      }}
      title="Click for confetti 🎉"
    >
      {styledChars.map(({ ch, hue, size, isSpace }, idx) =>
        isSpace ? (
          <span
            key={idx}
            className="char"
            style={{ display: "inline-block", width: "0.35em" }}
          >
            &nbsp;
          </span>
        ) : (
          <span
            key={idx}
            className="char"
            style={{
              display: "inline-block",
              verticalAlign: "baseline",
              fontSize: `${size}px`,
              color: `hsl(${hue} 75% 50%)`,
            }}
          >
            {ch === "<" ? "<" : ch === ">" ? ">" : ch}
          </span>
        )
      )}
    </div>
  );
}
