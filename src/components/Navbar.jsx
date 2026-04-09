import { Link } from "react-router-dom";
import { Terminal, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="font-bold font-sans text-sm text-foreground">FreeAI</span>
            <span className="font-bold font-sans text-sm text-primary">.tools</span>
          </div>
        </Link>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-xs font-mono text-primary">Free AI</span>
        </div>
      </div>
    </nav>
  );
}