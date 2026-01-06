import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SellProperty from "./pages/SellProperty";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [error, setError] = useState("");

  const handleUnlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.trim().toLowerCase() !== "demo") {
      setError("Incorrect password. Please try again.");
      return;
    }

    setError("");
    setIsUnlocking(true);
    window.setTimeout(() => {
      setIsUnlocked(true);
      setIsUnlocking(false);
    }, 700);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className={`relative min-h-screen ${!isUnlocked ? "overflow-hidden h-screen" : ""}`}>
            <div
              className={`transition-[filter,opacity] duration-700 ease-out ${
                !isUnlocked && !isUnlocking
                  ? "blur-xl opacity-60"
                  : "blur-0 opacity-100"
              }`}
              aria-hidden={!isUnlocked}
            >
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sell" element={<SellProperty />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

            {!isUnlocked && (
              <div
                className={`fixed inset-0 z-50 flex items-center justify-center px-6 transition-opacity duration-500 ${
                  isUnlocking ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="absolute inset-0 bg-primary/40" />
                <form
                  onSubmit={handleUnlock}
                  className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-card/95 p-8 text-center shadow-card backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Private preview
                  </p>
                  <h1 className="mt-3 text-3xl font-serif text-primary">
                    Enter the password to continue
                  </h1>
                  <p className="mt-4 text-sm text-muted-foreground">
                    This experience is currently protected.
                  </p>
                  <div className="mt-6 space-y-3 text-left">
                    <Input
                      type="password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                        if (error) {
                          setError("");
                        }
                      }}
                      placeholder="Enter password"
                      className="h-12"
                      aria-label="Password"
                    />
                    {error && (
                      <p className="text-sm text-destructive" role="alert">
                        {error}
                      </p>
                    )}
                    <Button type="submit" size="lg" className="w-full">
                      Unlock site
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
