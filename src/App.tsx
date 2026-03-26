import { Toaster } from "@src/components/ui/toaster";
import { Toaster as Sonner } from "@src/components/ui/sonner";
import { TooltipProvider } from "@src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/impressum";
import DataPrivacy from "./pages/privacy";
import MemberPage from "./pages/member";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/privacy" element={<DataPrivacy />} />
                    <Route path="/member" element={<MemberPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
