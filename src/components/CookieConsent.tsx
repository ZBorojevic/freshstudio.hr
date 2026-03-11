"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie } from "lucide-react";
import Link from "next/link";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") return;

    // Mala odgoda da se stranica učita prije nego se banner pojavi
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setExiting(true);
    localStorage.setItem("cookie-consent", "accepted");
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${exiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-5xl px-4 pb-5">
          <div
            className="
              flex items-center gap-5 
              rounded-2xl border border-border/60
              bg-background/95 backdrop-blur-md
              px-6 py-4
              shadow-large
            "
          >
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <Cookie className="w-5 h-5 text-primary" />
            </div>

            <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
              {t("cookies.bannerText")}{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {t("cookies.moreInfo")}
              </Link>
            </p>

            <button
              onClick={handleAccept}
              className="
                shrink-0 rounded-lg
                bg-primary px-5 py-2.5
                text-sm font-semibold text-primary-foreground
                shadow-soft
                transition-all duration-200
                hover:bg-primary-hover hover:shadow-medium
                active:scale-[0.97]
              "
            >
              {t("cookies.accept")}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block sm:hidden">
        <div
          className="
            border-t border-border/40
            bg-background/95 backdrop-blur-md
            px-4 py-3
            shadow-large
          "
        >
          <div className="flex items-center gap-3">
            <Cookie className="w-4 h-4 shrink-0 text-primary" />
            <p className="flex-1 text-xs text-muted-foreground leading-snug">
              {t("cookies.bannerText")}{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-2"
              >
                {t("cookies.moreInfo")}
              </Link>
            </p>
            <button
              onClick={handleAccept}
              className="
                shrink-0 rounded-md
                bg-primary px-3.5 py-1.5
                text-xs font-semibold text-primary-foreground
                transition-all duration-200
                active:scale-[0.97]
              "
            >
              {t("cookies.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;