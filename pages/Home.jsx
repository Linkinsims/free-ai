import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, Sparkles, Code, Trash2, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import ReactMarkdown from "react-markdown";

const SUGGESTIONS = [
  "Write a Python function to sort a list of dicts by key",
  "Explain how async/await works in JavaScript",
  "Create a React hook for debounced search",
  "Debug this error: Cannot read properties of undefined",
  "Write a SQL query to find duplicate rows",
  "How do I set up a Node.js REST API?",
];

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userText }]);
    setLoading(true);

    const history = [...messages, { role: "user", content: userText }];
    const conversationContext = history
      .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");

    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an expert AI coding assistant. Be concise, helpful, and use code blocks with proper syntax highlighting when writing code.\n\nConversation:\n${conversationContext}\n\nRespond as Assistant:`,
    });

    setMessages(prev => [...prev, { role: "assistant", content: result }]);
    setLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Header */}
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-box-green">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-3">
              AI Coding Assistant
            </h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Powered by advanced AI — 100% free. Ask anything about code, get instant help.
            </p>
          </motion.div>

          {/* Suggestions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl">
            {SUGGESTIONS.map((s, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => sendMessage(s)}
                className="text-left px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-xs font-mono text-muted-foreground hover:text-primary"
              >
                <Sparkles className="w-3 h-3 inline mr-2 text-primary/50" />
                {s}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Code className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-primary/10 border border-primary/20 text-foreground"
                      : "bg-card border border-border text-foreground"
                  }`}>
                    {msg.role === "user" ? (
                      <p className="text-sm font-sans leading-relaxed">{msg.content}</p>
                    ) : (
                      <ReactMarkdown
                        className="text-sm prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                        components={{
                          code({ inline, className, children }) {
                            return !inline ? (
                              <pre className="bg-background rounded-lg p-3 overflow-x-auto my-2 border border-border">
                                <code className="text-xs text-primary font-mono">{children}</code>
                              </pre>
                            ) : (
                              <code className="px-1 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono">{children}</code>
                            );
                          },
                          p: ({ children }) => <p className="my-1 leading-relaxed">{children}</p>,
                          ul: ({ children }) => <ul className="my-1 ml-4 list-disc">{children}</ul>,
                          ol: ({ children }) => <ol className="my-1 ml-4 list-decimal">{children}</ol>,
                          li: ({ children }) => <li className="my-0.5">{children}</li>,
                          h1: ({ children }) => <h1 className="text-base font-bold my-2">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-sm font-bold my-2">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-sm font-semibold my-1">{children}</h3>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Code className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
                  <span className="text-xs font-mono text-muted-foreground">Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-background/80 backdrop-blur-xl px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3">
            {messages.length > 0 && (
              <button
                onClick={() => setMessages([])}
                className="mb-1 text-muted-foreground hover:text-destructive transition-colors"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about code, debugging, architecture..."
                rows={1}
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 pr-12 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors min-h-[48px] max-h-[200px]"
                style={{ height: "auto" }}
                onInput={e => {
                  e.target.style.height = "auto";
                  e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
                }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="absolute right-3 bottom-3 w-7 h-7 rounded-lg bg-primary flex items-center justify-center disabled:opacity-30 hover:bg-primary/80 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-primary-foreground" />
              </button>
            </div>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground mt-2 text-center">
            Press Enter to send · Shift+Enter for new line · Free & unlimited
          </p>
        </div>
      </div>
    </div>
  );
}