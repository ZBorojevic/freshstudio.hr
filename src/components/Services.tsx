"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code2,
  Search,
  Megaphone,
  Palette,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const serviceIcons = [Code2, Search, Megaphone, Palette];

const Services = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: serviceIcons[0],
      titleKey: "services.s1Title",
      descKey: "services.s1Desc",
      items: [
        "services.s1Item1",
        "services.s1Item2",
        "services.s1Item3",
        "services.s1Item4",
        "services.s1Item5",
      ],
    },
    {
      icon: serviceIcons[1],
      titleKey: "services.s2Title",
      descKey: "services.s2Desc",
      items: [
        "services.s2Item1",
        "services.s2Item2",
        "services.s2Item3",
        "services.s2Item4",
        "services.s2Item5",
      ],
    },
    {
      icon: serviceIcons[2],
      titleKey: "services.s3Title",
      descKey: "services.s3Desc",
      items: [
        "services.s3Item1",
        "services.s3Item2",
        "services.s3Item3",
        "services.s3Item4",
        "services.s3Item5",
      ],
    },
    {
      icon: serviceIcons[3],
      titleKey: "services.s4Title",
      descKey: "services.s4Desc",
      items: [
        "services.s4Item1",
        "services.s4Item2",
        "services.s4Item3",
        "services.s4Item4",
        "services.s4Item5",
      ],
    },
  ];

  return (
    <section className="bg-accent/30 pt-20 pb-28 md:py-24" id="services">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Palette className="h-5 w-5" />
            <span className="font-semibold">{t("services.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}{" "}
            <span className="text-secondary">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;

            return (
              <Card
                key={index}
                className={`
                  p-6 sm:p-8 transition-all duration-300 bg-card animate-fade-in cursor-pointer
                  ${isOpen ? "shadow-large ring-2 ring-secondary/20" : "hover:shadow-large hover:-translate-y-1"}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggle(index)}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                  <div
                    className={`
                      shrink-0 mt-1 w-8 h-8 rounded-full
                      flex items-center justify-center
                      bg-muted transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Expandable items */}
                <div
                  className={`
                    overflow-hidden transition-all duration-400 ease-out
                    ${isOpen ? "max-h-80 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}
                >
                  <div className="border-t border-border/60 pt-5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {t("services.includes")}
                    </p>
                    <ul className="space-y-2.5">
                      {service.items.map((itemKey, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                          <span className="text-sm text-foreground">
                            {t(itemKey)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {t("services.ctaText")}
          </p>
          <Button
            size="xl"
            variant="hero"
            onClick={scrollToContact}
            className="group w-full sm:w-auto"
          >
            {t("services.ctaButton")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;