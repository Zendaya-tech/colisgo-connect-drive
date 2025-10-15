import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Transporteur from "./pages/Transporteur";
import Particulier from "./pages/Particulier";
import International from "./pages/International";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import QuiSommesNous from "./pages/QuiSommesNous";
import CommentCaMarche from "./pages/CommentCaMarche";
import CGU from "./pages/CGU";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import MentionsLegales from "./pages/MentionsLegales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transporteur" element={<Transporteur />} />
          <Route path="/particulier" element={<Particulier />} />
          <Route path="/international" element={<International />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="/cgu" element={<CGU />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
