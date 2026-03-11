"use client";

import { CheckCircle2, Target, Zap, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Solution = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Target,
      title: t("solution.solution1Title"),
      description: t("solution.solution1Desc"),
    },
    {
      icon: Zap,
      title: t("solution.solution2Title"),
      description: t("solution.solution2Desc"),
    },
    {
      icon: TrendingUp,
      title: t("solution.solution3Title"),
      description: t("solution.solution3Desc"),
    },
    {
      icon: Users,
      title: t("solution.solution4Title"),
      description: t("solution.solution4Desc"),
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">{t("solution.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("solution.title")}{" "}
            <span className="text-primary">
              {t("solution.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("solution.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-hero text-white shadow-large">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                {t("solution.approachTitle")}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">01</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {t("solution.step1Title")}
                  </h4>
                  <p className="text-white/90">{t("solution.step1Desc")}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">02</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {t("solution.step2Title")}
                  </h4>
                  <p className="text-white/90">{t("solution.step2Desc")}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">03</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {t("solution.step3Title")}
                  </h4>
                  <p className="text-white/90">{t("solution.step3Desc")}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solution;
