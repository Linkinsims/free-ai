import { motion } from "framer-motion";
import { Layers, GraduationCap, GitBranch, Trophy, Zap, Users } from "lucide-react";
import { generalTips } from "../lib/toolsData";

const iconMap = {
  Layers,
  GraduationCap,
  GitBranch,
  Trophy,
  Zap,
  Users,
};

export default function FreeTipsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            <span className="text-foreground">Pro Tips for </span>
            <span className="glow-green text-primary">Free Access</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Strategies to maximize your free usage across all AI coding platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {generalTips.map((tip, index) => {
            const Icon = iconMap[tip.icon] || Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-foreground mb-2 text-sm">
                  {tip.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}