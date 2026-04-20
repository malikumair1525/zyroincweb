"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Safe, SSR-compatible localStorage hook.
 * Returns [value, setValue, loaded] so you can wait for hydration before rendering.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loaded, setLoaded] = useState(false);

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        setValue(JSON.parse(raw) as T);
      }
    } catch (err) {
      console.warn(`useLocalStorage: failed to read "${key}"`, err);
    } finally {
      setLoaded(true);
    }
  }, [key]);

  // Wrapped setter that persists to localStorage
  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch (err) {
          console.warn(`useLocalStorage: failed to write "${key}"`, err);
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, update, loaded] as const;
}