import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") return;

    toast({
      duration: Number.POSITIVE_INFINITY,
      // 🔥 kompletan layout za root toasta – ovime ga širimo
      className:
        "group pointer-events-auto relative flex w-full max-w-[720px] items-center gap-6 overflow-hidden rounded-2xl border bg-background p-6 shadow-xl",

      title: "",
      description: (
        <div className="flex items-center gap-6 w-full">
          {/* Ikona lijevo */}
          <div className="shrink-0 p-4 rounded-full bg-primary/10 flex items-center justify-center">
            <Cookie className="w-12 h-12 text-primary" />
          </div>

          {/* Tekst u sredini */}
          <div className="flex-1 max-w-[420px]">
            <p className="font-semibold text-lg mb-1">
              {t("cookies.bannerTitle")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t("cookies.bannerText")}
            </p>
            <a
              href="/privacy-policy"
              className="underline underline-offset-2 text-primary mt-2 inline-block text-sm"
            >
              {t("cookies.moreInfo")}
            </a>
          </div>

          {/* Gumb desno */}
          <ToastAction
            altText={t("cookies.accept")}
            onClick={() => {
              localStorage.setItem("cookie-consent", "accepted");
            }}
            className="self-center whitespace-nowrap"
          >
            {t("cookies.accept")}
          </ToastAction>
        </div>
      ),
    });
  }, [toast, t]);

  return null;
};

export default CookieConsent;
