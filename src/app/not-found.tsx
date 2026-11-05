import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080B12] text-[#F5F7FA] p-6 relative overflow-hidden cyber-grid">
      <div className="absolute inset-0 bg-radial from-[#1677FF]/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-md w-full border border-[#252D3A] bg-[#0D111A]/90 p-8 rounded-lg cyber-cut shadow-2xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1677FF]/10 border border-[#1677FF]/30 text-[#1677FF] font-mono text-xs mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>STATUS: 404 // SIGNAL LOST</span>
        </div>
        <h1 className="font-display text-6xl font-bold tracking-tight text-[#F5F7FA] mb-2">
          404
        </h1>
        <p className="font-mono text-sm text-[#C6FF3D] mb-4">
          OUT OF TIMELINE BOUNDS
        </p>
        <p className="text-[#A5ACB8] text-sm mb-8 leading-relaxed">
          The requested coordinate does not exist in the KRATOS digital sector. Realign your frequency with the timeline.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1677FF] hover:bg-[#1677FF]/90 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(22,119,255,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Core Identity
        </Link>
      </div>
    </main>
  );
}

