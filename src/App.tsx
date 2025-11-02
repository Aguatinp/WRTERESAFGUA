import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const resolveBasename = () => {
  const rawBase = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  if (typeof window !== "undefined") {
    const docsPrefix = `${normalizedBase.replace(/\/+$/, "")}/docs/`.replace(/\/\/{2,}/g, "/");
    if (window.location.pathname.startsWith(docsPrefix)) {
      return docsPrefix;
    }
  }

  return normalizedBase;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use Vite's BASE_URL and detect if we're served from /docs/ on GitHub Pages */}
      <BrowserRouter basename={resolveBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
