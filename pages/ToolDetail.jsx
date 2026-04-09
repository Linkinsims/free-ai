import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, MousePointer, Brain, Cpu, Code, Lightbulb, ArrowLeft, ExternalLink } from "lucide-react";
import { tools } from "../lib/toolsData";
import AccessMethodCard from "../components/AccessMethodCard";

const iconMap = {
  Terminal,
  MousePointer,
  Brain,
  Cpu,
  Code,
};

export default function ToolDetail() {
  const { toolId } = useParams();
  const tool = tools.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground font-mono">Tool not found.</p>
        <Link to="/" className="text-primary font-mono text-sm mt-4 inline-block hover:underline">
          ← Back to all tools
        </Link>
      </div>
    );
  }

  const Icon = iconMap[tool.icon] || Terminal;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          All Tools
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-start gap-5 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-1">
              {tool.name}
            </h1>
            <p className="text-sm font-mono text-muted-foreground">
              by {tool.company} — {tool.tagline}
            </p>
          </div>
        </div>
        <p className="text-secondary-foreground leading-relaxed text-sm max-w-3xl">
          {tool.description}
        </p>
      </motion.div>

      {/* Terminal Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-10"
      >
        <div className="rounded-xl border border-border bg-card overflow-hidden glow-box-green">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <Terminal className="w-3.5 h-3.5 text-muted-foreground ml-3" />
            <span className="text-xs font-mono text-muted-foreground">{tool.id}</span>
          </div>
          <div className="p-5">
            <pre className="font-mono text-xs md:text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {tool.terminalExample}
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Free Access Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold font-sans text-foreground mb-2">
          Free Access Methods
        </h2>
        <p className="text-xs font-mono text-muted-foreground mb-6">
          {tool.freeAccess.length} verified methods to use {tool.name} without paying
        </p>
        <div className="space-y-3">
          {tool.freeAccess.map((method, index) => (
            <AccessMethodCard key={index} method={method} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Pro Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold font-sans text-foreground mb-6">
          Pro Tips
        </h2>
        <div className="rounded-xl border border-border bg-card p-5 md:p-6">
          <div className="space-y-4">
            {tool.proTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  {tip}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link to="/" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
          ← All Tools
        </Link>
        {(() => {
          const currentIndex = tools.findIndex(t => t.id === toolId);
          const next = tools[(currentIndex + 1) % tools.length];
          return (
            <Link to={`/tool/${next.id}`} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Next: {next.name} →
            </Link>
          );
        })()}
      </div>
    </div>
  );
}