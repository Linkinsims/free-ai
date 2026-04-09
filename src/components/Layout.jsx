import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono text-muted-foreground">
            FreeAI.tools — Your guide to free AI coding tools. No API keys. No payments. Just code.
          </p>
        </div>
      </footer>
    </div>
  );
}