"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import logoDark from "@/assets/logo-dark.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12" id="footer">
      <div className="container mx-auto px-6 sm:px-8 lg:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Logo + opis */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={logoDark}
                  alt="Fresh Studio Logo"
                  className="h-10 w-auto"
                  height={40}
                  width={120}
                />
              </Link>
              <p className="text-background/80 leading-relaxed mt-4">
                {t("footer.description")}
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t("footer.contactTitle")}
              </h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <span>Email: </span>
                  <a
                    href="mailto:hello@freshstudio.hr"
                    className="hover:underline"
                  >
                    hello@freshstudio.hr
                  </a>
                </li>
                <li>
                  <span>Tel: </span>
                  <a href="tel:+385994472090" className="hover:underline">
                    +385 99 447 2090
                  </a>
                </li>
                <li>
                  Fresh Studio, obrt za računalno programiranje, dizajn i usluge
                </li>
              </ul>
            </div>

            {/* Radno vrijeme */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t("footer.hoursTitle")}
              </h4>
              <ul className="space-y-2 text-background/80">
                <li>{t("footer.hoursContent")}</li>
                <li>{t("footer.hoursTime")}</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
              <Link href="/privacy-policy" className="hover:underline">
                {t("footer.privacyAndCookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
