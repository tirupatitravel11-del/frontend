// loading.tsx
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 py-10">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
        <p className="text-lg font-semibold text-stone-700">
          Loading package details...
        </p>
      </div>
    </main>
  );
}
