import { Shield, Award, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Guarantee = () => {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: Shield,
      title: t("guarantee.guarantee1Title"),
      description: t("guarantee.guarantee1Desc"),
    },
    {
      icon: Target,
      title: t("guarantee.guarantee2Title"),
      description: t("guarantee.guarantee2Desc"),
    },
    {
      icon: Clock,
      title: t("guarantee.guarantee3Title"),
      description: t("guarantee.guarantee3Desc"),
    },
    {
      icon: Award,
      title: t("guarantee.guarantee4Title"),
      description: t("guarantee.guarantee4Desc"),
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">{t("guarantee.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("guarantee.title")} <span className="text-secondary">{t("guarantee.titleSecondary")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("guarantee.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-large transition-all duration-300 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <guarantee.icon className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {guarantee.description}
              </p>
            </Card>
          ))}
        </div>
        <Card className="max-w-4xl mx-auto p-10 bg-card shadow-large border-2 border-secondary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("guarantee.whyTitle")}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("guarantee.whyText")}{" "}
              <span className="font-bold text-foreground">{t("guarantee.whyHighlight1")}</span>{" "}
              {t("guarantee.whyText2")}{" "}
              <span className="font-bold text-primary">{t("guarantee.whyHighlight2")}</span>{" "}
              {t("guarantee.whyText3")}
            </p>
            <div className="pt-4">
              <Button
                size="xl"
                variant="hero"
                onClick={scrollToContact}
                className="group"
              >
                {t("guarantee.cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Guarantee;