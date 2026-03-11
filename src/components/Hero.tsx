"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        min-h-[100svh] pt-24 pb-20
        md:pt-0 md:pb-16 md:min-h-screen
        md:flex md:items-center md:justify-center
      "
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Marketing agency background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/35" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            {t("hero.title")}{" "}
            <span className="text-primary">{t("hero.titleHighlight")}</span>{" "}
            <span className="text-secondary">{t("hero.titleGuarantee")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="xl"
              variant="hero"
              onClick={scrollToContact}
              className="group w-full sm:w-auto"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={scrollToBenefits}
              className="w-full sm:w-auto"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>

          {/* Stats */}
          <div
            className="
              pt-8
              flex flex-col items-center gap-4 text-sm text-muted-foreground
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8
            "
          >
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2">
              <span className="text-2xl font-bold text-primary">100%</span>
              <span className="mt-1 sm:mt-0">{t("hero.stat1")}</span>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2">
              <span className="text-2xl font-bold text-primary">50+</span>
              <span className="mt-1 sm:mt-0">{t("hero.stat2")}</span>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2">
              <span className="text-2xl font-bold text-primary">3x</span>
              <span className="mt-1 sm:mt-0">{t("hero.stat3")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
