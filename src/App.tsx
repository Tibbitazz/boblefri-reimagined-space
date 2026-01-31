import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import BarnasHavfest from "./pages/BarnasHavfest";
import OmOss from "./pages/OmOss";
import BliMedlem from "./pages/BliMedlem";
import Låneutstyr from "./pages/Låneutstyr";
import Kontakt from "./pages/Kontakt";
import Dokumentarkiv from "./pages/Dokumentarkiv";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/barnas-havfest" element={<BarnasHavfest />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/bli-medlem" element={<BliMedlem />} />
          <Route path="/laneutstyr" element={<Låneutstyr />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dokumentarkiv" element={<Dokumentarkiv />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
