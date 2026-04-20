"use client";

import { Toaster as SonnerToaster } from "sonner";

export default function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      expand
      richColors={false}
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "!bg-ink-900 !border !border-gold-500/30 !text-white !rounded-xl !shadow-[0_20px_50px_-15px_rgba(212,175,55,0.25)] !backdrop-blur-md",
          title: "!text-white !font-semibold !text-sm",
          description: "!text-ink-300 !text-xs !leading-relaxed",
          actionButton: "!bg-gold-500 !text-ink-950 !font-semibold !rounded-md !px-3 !py-1.5 !text-xs",
          cancelButton: "!bg-ink-800 !text-ink-200 !rounded-md !px-3 !py-1.5 !text-xs",
          closeButton:
            "!bg-ink-800 !border !border-gold-500/20 !text-ink-300 hover:!text-white hover:!bg-ink-700",
          success: "!border-bull-500/40 !text-white",
          error: "!border-bear-500/40 !text-white",
          info: "!border-gold-500/40 !text-white",
          warning: "!border-gold-500/50 !text-white",
        },
      }}
    />
  );
}