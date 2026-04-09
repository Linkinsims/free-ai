import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, MousePointer, Brain, Cpu, Code, ChevronRight, Sparkles } from "lucide-react";

const iconMap = {
  Terminal,
  MousePointer,
  Brain,
  Cpu,
  Code,
};

export default function ToolCard({ tool, index }) {
  const Icon = iconMap[tool.icon] || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/tool/${tool.id}`} className="block group">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 glow-box-green hover:scale-[1.02]">
          {/* Gradient accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
          
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
          </div>

          <h3 className="text-lg font-semibold font-sans text-foreground mb-1">
            {tool.name}
          </h3>
          <p className="text-xs font-mono text-muted-foreground mb-3">
            {tool.company}
          </p>
          <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
            {tool.tagline}
          </p>

          {/* Free methods count */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary">{tool.freeAccess.length} free access methods</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}