import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        <Spinner size="xl" />
        <p className="mt-6 text-xs font-semibold text-gold-400 uppercase tracking-[0.25em]">
          Loading
        </p>
      </div>
    </section>
  );
}