import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

const difficultyColors = {
  Easy: "text-green-400 bg-green-400/10 border-green-400/20",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function AccessMethodCard({ method, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="font-semibold font-sans text-foreground text-sm">
              {method.method}
            </h3>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${difficultyColors[method.difficulty]}`}>
              {method.difficulty}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {method.details}
          </p>
        </div>
      </div>
    </motion.div>
  );
}