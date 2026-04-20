"use client";

import { toast as sonnerToast } from "sonner";

/** ZYRO-branded toast helper with consistent styling and icons */
export const toast = {
  success: (title: string, description?: string) =>
    sonnerToast.success(title, { description, duration: 5000 }),

  error: (title: string, description?: string) =>
    sonnerToast.error(title, { description, duration: 7000 }),

  info: (title: string, description?: string) =>
    sonnerToast.info(title, { description, duration: 5000 }),

  warning: (title: string, description?: string) =>
    sonnerToast.warning(title, { description, duration: 6000 }),

  /** Plain toast with no icon (for custom content) */
  message: (title: string, description?: string) =>
    sonnerToast(title, { description, duration: 4000 }),

  /** Promise-based toast for async operations */
  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((err: unknown) => string);
    }
  ) => sonnerToast.promise(promise, messages),

  /** Dismiss a specific toast or all toasts */
  dismiss: sonnerToast.dismiss,
};