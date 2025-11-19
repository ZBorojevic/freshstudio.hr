import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyAndCookies = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <Card className="p-8 bg-card shadow-large">
          {/* Back strelica */}
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("legal.back")}
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {t("legal.title")}
          </h1>

          <p className="text-sm text-muted-foreground mb-8">
            {t("legal.lastUpdated")}
          </p>

          {/* 1. Tko smo / Who we are */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {t("legal.section1Title")}
            </h2>
            <p className="text-muted-foreground">
              {t("legal.section1BodyPrefix")}{" "}
              <strong>
                Fresh Studio, obrt za računalno programiranje, dizajn i usluge
              </strong>
              {t("legal.section1BodySuffix")}
            </p>
          </section>

          {/* 2. Koje podatke prikupljamo / What data we collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {t("legal.section2Title")}
            </h2>

            <h3 className="text-lg font-semibold mb-2">
              {t("legal.analyticsTitle")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("legal.analyticsBody")}
            </p>

            <h3 className="text-lg font-semibold mb-2">
              {t("legal.contactFormTitle")}
            </h3>
            <p className="text-muted-foreground">
              {t("legal.contactFormIntro")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>{t("legal.contactFormItemName")}</li>
              <li>{t("legal.contactFormItemEmail")}</li>
              <li>{t("legal.contactFormItemPhone")}</li>
              <li>{t("legal.contactFormItemMessage")}</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              {t("legal.contactFormUsage")}
            </p>
          </section>

          {/* 3. Kolačići / Cookies */}
          <section className="mb-8" id="cookies">
            <h2 className="text-2xl font-semibold mb-3">
              {t("legal.cookiesTitle")}
            </h2>
            <p className="text-muted-foreground mb-3">
              {t("legal.cookiesIntro")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>{t("legal.cookiesNecessary")}</li>
              <li>{t("legal.cookiesAnalytics")}</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              {t("legal.cookiesConsentInfo")}
            </p>
          </section>

          {/* 4. Vaša prava / Your rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {t("legal.rightsTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("legal.rightsBody")}{" "}
              <a
                href="mailto:hello@freshstudio.hr"
                className="text-primary underline"
              >
                hello@freshstudio.hr
              </a>
              .
            </p>
          </section>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyAndCookies;
