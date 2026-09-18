"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function useTypingEffect(
  words: readonly string[],
  speed = 75,
  pause = 2000,
) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const display = words[wordIdx]?.slice(0, charIdx) ?? "";

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }, speed);
    }
    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [charIdx, deleting, reduced, wordIdx, words, speed, pause]);

  if (reduced) return words[0] ?? "";

  return display;
}