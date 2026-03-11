"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Toaster />
      <CookieConsent />
      {children}
    </LanguageProvider>
  );
}
