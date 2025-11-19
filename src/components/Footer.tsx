import { useLanguage } from "@/contexts/LanguageContext";
import logoDark from "@/assets/logo-dark.svg"; // ← dodano

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12" id="footer">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Logo umjesto footer.company */}
            <div>
              <a href="/" className="inline-block">
                <img
                  src={logoDark}
                  alt="Fresh Studio Logo"
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-background/80 leading-relaxed mt-4">
                {t("footer.description")}
              </p>
            </div>

    {/* Contact */}
    <div>
      <h4 className="font-semibold mb-4 text-lg">
        {t("footer.contactTitle")}
      </h4>

      <ul className="space-y-2 text-background/80">
        <li>
          <a>Email: </a> 
          <a 
            href="mailto:hello@freshstudio.hr"
            className="hover:underline"
          >
            hello@freshstudio.hr
          </a>
        </li>

        <li>
            <a>Tel: </a> 
          <a 
            href="tel:+385994472090"
            className="hover:underline"
          >+385 99 447 2090
          </a>
        </li>

        <li>Koprivnica, Croatia</li>
      </ul>
    </div>


            {/* Hours */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t("footer.hoursTitle")}
              </h4>
              <ul className="space-y-2 text-background/80">
                <li>{t("footer.hoursContent")}</li>
                <li>{t("footer.hoursTime")}</li>
                <li className="pt-2">
                  <a href="#contact" className="text-secondary hover:underline">
                    {t("footer.bookMeeting")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
