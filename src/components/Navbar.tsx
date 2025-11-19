// Navbar.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.svg";
import LanguageToggle from "@/components/LanguageToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { t } = useLanguage();
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // malo stroži threshold da nestane kad stvarno izađe
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        text-foreground
        ${isHeroVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - vidljiv samo kad je hero vidljiv */}
        <div className={`flex items-center transition-opacity duration-300 ${isHeroVisible ? "opacity-100" : "opacity-0"}`}>
          <a href="/">
            <img
              src={logo}
              alt="Fresh Studio Logo"
              className="h-8 w-auto md:h-10"
            />
          </a>
        </div>

        {/* Language Toggle u navbaru */}
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;
