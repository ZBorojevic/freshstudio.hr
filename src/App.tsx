// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LanguageProvider } from "@/contexts/LanguageContext";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <LanguageProvider>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </LanguageProvider>
//   </QueryClientProvider>
// );

// export default App;

import React from "react";
// Ako koristiš @ alias (vite.config.js -> resolve.alias):
import logoDark from "@/assets/logo-dark.svg";
import GrowthWavesBg from "@/components/GrowthWavesBg"; 


const App: React.FC = () => {
  return (
    <div className="min-h-dvh text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Pozadina */}
      <GrowthWavesBg />

      {/* Središnji sadržaj */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow px-6">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Skoro smo spremni.
        </h1>
        <p className="mt-4 font-sans text-white/80 text-lg max-w-2xl mx-auto">
          Hvala na strpljenju — uskoro se vraćamo s potpuno novim iskustvom.
        </p>
      </main>

      {/* Footer: logo */}
      <footer className="relative z-10 w-full py-8 flex items-center justify-center">
        <img
          src={logoDark}
          alt="Fresh Studio"
          className="h-8 sm:h-10 opacity-90"
          loading="eager"
          decoding="async"
        />
      </footer>
    </div>
  );
};

export default App;
