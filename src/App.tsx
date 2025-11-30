import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataPrivacy from "./pages/privacy"; // <-- import your Data Privacy page
import Impressum from "./pages/impressum"; // <-- import your Impressum page

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// test if environment variables are loaded into the website
console.log( "env variables", String(import.meta.env.TEST_ENV) );

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />}/>
          <Route path="/privacy" element={<DataPrivacy />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
