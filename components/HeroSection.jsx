import { motion } from "framer-motion";
import { Terminal, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const typingLines = [
  "$ free-ai-tools --list-all",
  "> Scanning available pro models...",
  "> Found: Claude Code, Cursor, GPT-5, Emergent, Replit",
  "> Status: ALL FREE ACCESS AVAILABLE ✓",
  "> Loading access methods...",
];

export default function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= typingLines.length) return;

    const line = typingLines[currentLineIndex];
    
    if (currentCharIndex < line.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, currentLineIndex === 0 ? 40 : 20);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex]);

  const currentLine = currentLineIndex < typingLines.length 
    ? typingLines[currentLineIndex].slice(0, currentCharIndex)
    : null;

  return (
    <div className="relative py-16 md:py-24">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(160 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 50%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary">NO API KEYS • NO PAYMENTS • 100% FREE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight mb-6"
        >
          <span className="text-foreground">Use </span>
          <span className="glow-green text-primary">Pro AI Models</span>
          <br />
          <span className="text-foreground">For </span>
          <span className="glow-purple text-accent">Free</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans"
        >
          Your complete guide to accessing Claude Code, Cursor, GPT-5, Emergent, and Replit Agent — all without paying a cent.
        </motion.p>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card overflow-hidden glow-box-green">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <Terminal className="w-3.5 h-3.5 text-muted-foreground ml-3" />
              <span className="text-xs font-mono text-muted-foreground">free-ai-tools</span>
            </div>
            <div className="p-4 md:p-6 text-left min-h-[180px]">
              {displayedLines.map((line, i) => (
                <div key={i} className="font-mono text-xs md:text-sm mb-1.5">
                  <span className={line.startsWith("$") ? "text-primary" : line.includes("✓") ? "text-green-400" : "text-muted-foreground"}>
                    {line}
                  </span>
                </div>
              ))}
              {currentLine !== null && (
                <div className="font-mono text-xs md:text-sm mb-1.5">
                  <span className={currentLine.startsWith("$") ? "text-primary" : "text-muted-foreground"}>
                    {currentLine}
                  </span>
                  <span className="cursor-blink text-primary">▌</span>
                </div>
              )}
              {currentLineIndex >= typingLines.length && (
                <div className="font-mono text-xs md:text-sm mt-3">
                  <span className="text-primary">$</span>
                  <span className="cursor-blink text-primary ml-1">▌</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}