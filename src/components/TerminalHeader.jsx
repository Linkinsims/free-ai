import { motion } from "framer-motion";

export default function TerminalHeader({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden rounded-t-lg border border-border bg-card">
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">
          {title || "terminal"}
        </span>
      </div>
      {subtitle && (
        <div className="px-4 py-3">
          <p className="font-mono text-sm text-muted-foreground">{subtitle}</p>
        </div>
      )}
    </div>
  );
}