export const tools = [
  {
    id: "claude-code",
    name: "Claude Code",
    company: "Anthropic",
    tagline: "Terminal-native AI coding agent",
    icon: "Terminal",
    color: "from-orange-500 to-amber-400",
    glowColor: "orange",
    description: "Claude Code is Anthropic's agentic coding tool that runs in your terminal. It can understand your codebase, edit files, run commands, and handle complex multi-step coding tasks autonomously.",
    freeAccess: [
      {
        method: "Anthropic Free Tier",
        details: "Sign up at anthropic.com — new accounts get free API credits to try Claude Code. Limited daily usage included.",
        difficulty: "Easy"
      },
      {
        method: "GitHub Copilot Free Plan (Claude Integration)",
        details: "GitHub Copilot's free tier now includes access to Claude models. Connect via VS Code or terminal for free Claude Code-level assistance.",
        difficulty: "Easy"
      },
      {
        method: "Open Source Alternatives (Aider, Continue.dev)",
        details: "Use open-source Claude Code alternatives like Aider or Continue.dev that can connect to free model providers and replicate the terminal coding experience.",
        difficulty: "Medium"
      },
      {
        method: "Anthropic Hackathon & Research Credits",
        details: "Participate in Anthropic-sponsored hackathons, research programs, or the developer partner program for extended free access.",
        difficulty: "Medium"
      }
    ],
    proTips: [
      "Use the /compact command to reduce context and stay within free limits",
      "Set CLAUDE_CODE_MAX_TURNS to limit autonomous actions",
      "Use .claudeignore to exclude large files and save tokens",
      "Leverage session persistence to avoid re-reading your codebase"
    ],
    terminalExample: `$ claude\n\n> Analyze this codebase and fix the authentication bug\n\nClaude: I'll examine your auth module...\n├── Reading src/auth/login.ts\n├── Found issue: token expiry not checked\n├── Fixing src/auth/middleware.ts\n└── Running tests... ✓ All 24 tests pass`
  },
  {
    id: "cursor",
    name: "Cursor",
    company: "Anysphere",
    tagline: "The AI-first code editor",
    icon: "MousePointer",
    color: "from-blue-500 to-cyan-400",
    glowColor: "cyan",
    description: "Cursor is an AI-powered code editor built on VS Code. It features intelligent autocomplete, inline chat, codebase-aware AI, and can generate entire features from natural language descriptions.",
    freeAccess: [
      {
        method: "Cursor Free Plan (Hobby)",
        details: "Cursor offers a generous free Hobby plan with 2000 completions/month, 50 slow premium requests/month, and access to GPT-4 and Claude models.",
        difficulty: "Easy"
      },
      {
        method: "Student & Educator Discount",
        details: "Students and educators can apply for extended free or heavily discounted Pro access through Cursor's education program.",
        difficulty: "Easy"
      },
      {
        method: "Free Trial Rotation",
        details: "Cursor offers a 14-day free Pro trial. Use your primary email, then you have full Pro access during that window.",
        difficulty: "Easy"
      },
      {
        method: "Open Source Contributor Program",
        details: "Active open-source contributors can apply for free Pro access through Cursor's OSS program.",
        difficulty: "Medium"
      }
    ],
    proTips: [
      "Use Cmd+K for inline AI editing — it's the most powerful free feature",
      "Pin important files with @ mentions to give AI better context",
      "Use .cursorignore to prevent large generated files from eating context",
      "The Tab completion is free and unlimited — learn to use it effectively"
    ],
    terminalExample: `┌─ Cursor AI ────────────────────────┐\n│ @codebase Fix the payment flow    │\n│                                    │\n│ Analyzing 47 files...              │\n│ ✓ Found PaymentService.ts          │\n│ ✓ Updated error handling           │\n│ ✓ Added retry logic                │\n│ ✓ Tests passing                    │\n└────────────────────────────────────┘`
  },
  {
    id: "gpt-5",
    name: "GPT-5 / ChatGPT",
    company: "OpenAI",
    tagline: "Most capable general AI model",
    icon: "Brain",
    color: "from-emerald-500 to-green-400",
    glowColor: "green",
    description: "GPT-5 is OpenAI's most advanced model, available through ChatGPT. It excels at code generation, debugging, architecture design, and can handle complex multi-file coding tasks with deep reasoning.",
    freeAccess: [
      {
        method: "ChatGPT Free Tier",
        details: "ChatGPT free gives access to GPT-4o and limited GPT-5 queries. Use it for code generation, debugging, and architecture planning without any payment.",
        difficulty: "Easy"
      },
      {
        method: "GitHub Copilot Free Plan",
        details: "GitHub Copilot free tier includes GPT-4o and access to OpenAI models directly in VS Code, JetBrains, and Neovim — 2000 completions/month free.",
        difficulty: "Easy"
      },
      {
        method: "Microsoft Copilot (Bing)",
        details: "Microsoft Copilot (formerly Bing Chat) uses GPT-4/5 models for free with no sign-up required. Great for code questions and generation.",
        difficulty: "Easy"
      },
      {
        method: "OpenAI Playground Credits",
        details: "New OpenAI accounts get free API credits. Use the Playground to interact with GPT-5 directly for coding tasks.",
        difficulty: "Easy"
      }
    ],
    proTips: [
      "Use Canvas mode in ChatGPT for collaborative code editing",
      "Ask GPT-5 to generate complete project scaffolding in one prompt",
      "Use system prompts to set it as a senior developer persona",
      "Chain prompts: architecture → implementation → tests → review"
    ],
    terminalExample: `ChatGPT ─ GPT-5 ───────────────────\n\nYou: Build me a REST API for a todo app\n     with auth, CRUD, and tests\n\nGPT-5: I'll create a complete solution:\n\n📁 Creating project structure...\n├── src/routes/auth.ts      ✓\n├── src/routes/todos.ts     ✓\n├── src/middleware/auth.ts   ✓\n├── tests/todos.test.ts     ✓\n└── docker-compose.yml      ✓`
  },
  {
    id: "emergent",
    name: "Emergent / E2B",
    company: "Emergent",
    tagline: "Cloud AI code execution sandbox",
    icon: "Cpu",
    color: "from-purple-500 to-violet-400",
    glowColor: "purple",
    description: "Emergent (E2B) provides AI-powered cloud sandboxes for code execution. It lets AI agents write, run, and iterate on code in isolated environments — perfect for data science, automation, and prototyping.",
    freeAccess: [
      {
        method: "E2B Free Tier",
        details: "E2B offers a free Hobby tier with 100 sandbox hours/month. This includes cloud code execution with AI assistance at no cost.",
        difficulty: "Easy"
      },
      {
        method: "Open Source Self-Hosting",
        details: "E2B's sandbox infrastructure is open source. You can self-host the execution environment on your own machine for completely free, unlimited usage.",
        difficulty: "Hard"
      },
      {
        method: "Startup & Student Programs",
        details: "Apply for E2B's startup credits program or student program for extended free access to Pro features.",
        difficulty: "Medium"
      },
      {
        method: "Community Sandbox Templates",
        details: "Use community-built sandbox templates that come pre-configured for various languages and frameworks — all free to use.",
        difficulty: "Easy"
      }
    ],
    proTips: [
      "Use the free tier for prototyping and switch to local execution for heavy tasks",
      "Combine E2B sandboxes with free LLM APIs for a complete free AI coding pipeline",
      "Pre-build sandbox templates to reduce startup time and maximize free hours",
      "Use persistent sandboxes to avoid re-installing dependencies"
    ],
    terminalExample: `E2B Sandbox ─ Python 3.12 ──────────\n\n🔄 Spinning up sandbox...\n✓ Environment ready (1.2s)\n\n>>> Running data_pipeline.py\n├── Loading dataset (10k rows)\n├── Training model... 98.2% accuracy\n├── Generating visualization\n└── ✓ Results saved to /output/`
  },
  {
    id: "replit",
    name: "Replit Agent",
    company: "Replit",
    tagline: "AI-powered cloud IDE & deployment",
    icon: "Code",
    color: "from-pink-500 to-rose-400",
    glowColor: "pink",
    description: "Replit Agent is an AI coding assistant built into Replit's cloud IDE. It can build entire applications from descriptions, deploy them instantly, and handle full-stack development with database setup included.",
    freeAccess: [
      {
        method: "Replit Free Plan",
        details: "Replit's free tier includes the cloud IDE, basic AI assistance, and hosting for public projects. You can build and deploy apps without paying.",
        difficulty: "Easy"
      },
      {
        method: "Replit Education (Teams for Edu)",
        details: "Students and teachers get free access to enhanced Replit features through the Teams for Education program, including more AI usage.",
        difficulty: "Easy"
      },
      {
        method: "Replit Bounties & Cycles",
        details: "Earn Replit Cycles by completing coding bounties. These cycles can be used to pay for Pro features including extended AI Agent access.",
        difficulty: "Medium"
      },
      {
        method: "Replit Core Trial",
        details: "New users can try Replit Core (their premium plan) free for a trial period, getting full access to Replit Agent with unlimited AI queries.",
        difficulty: "Easy"
      }
    ],
    proTips: [
      "Use the free tier to prototype, then export your code to deploy elsewhere",
      "Replit's AI works best with clear, specific prompts about what you want to build",
      "Take advantage of free hosting for personal projects and portfolios",
      "Use Replit's built-in database (Replit DB) — it's free and requires no setup"
    ],
    terminalExample: `Replit Agent ────────────────────────\n\n🤖 "Build me a blog with auth"\n\n Creating project structure...\n├── Setting up Next.js app\n├── Configuring PostgreSQL database\n├── Building auth system\n├── Creating blog CRUD routes\n├── Designing responsive UI\n├── Writing API endpoints\n└── 🚀 Deployed to blog-app.repl.co\n\n✓ Your app is live!`
  }
];

export const generalTips = [
  {
    title: "Stack Free Tiers Together",
    description: "Use ChatGPT for planning, Cursor free for coding, and Replit for deployment. Each tool's free tier covers different parts of the workflow.",
    icon: "Layers"
  },
  {
    title: "GitHub Student Developer Pack",
    description: "If you're a student, the GitHub Student Pack gives free access to Copilot Pro, and many other developer tools worth $200k+.",
    icon: "GraduationCap"
  },
  {
    title: "Open Source Alternatives",
    description: "Tools like Cody (Sourcegraph), Continue.dev, Tabby, and Aider provide free AI coding assistance that rivals commercial products.",
    icon: "GitBranch"
  },
  {
    title: "Hackathon Credits",
    description: "Participate in AI hackathons — companies like Anthropic, OpenAI, and Replit regularly give participants free API credits and Pro access.",
    icon: "Trophy"
  },
  {
    title: "Maximize Context Efficiency",
    description: "Use .gitignore-style files (.cursorignore, .claudeignore) to exclude large files. This stretches your free token limits much further.",
    icon: "Zap"
  },
  {
    title: "Community & Discord Servers",
    description: "Join AI coding communities on Discord and Reddit. Members share working free access methods, promotional codes, and workarounds regularly.",
    icon: "Users"
  }
];