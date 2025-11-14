import { Shield, Award, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Guarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Garancija povrata novca",
      description: "Ako niste zadovoljni rezultatima u prvih 90 dana, vraćamo vam svaki dinar.",
    },
    {
      icon: Target,
      title: "Garantovani rezultati",
      description: "Ugovorom definišemo konkretne KPI-jeve koje ćemo dostići ili vraćamo novac.",
    },
    {
      icon: Clock,
      title: "Bez dugoročnih ugovora",
      description: "Radimo mesec po mesec. Ostajete jer vidite rezultate, ne jer morate.",
    },
    {
      icon: Award,
      title: "Besplatna optimizacija",
      description: "Konstantno testiramo i poboljšavamo kampanje bez dodatnih troškova.",
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
            <span className="font-semibold">Naša garancija</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-secondary">Bez rizika</span> za vas
          </h2>
          <p className="text-xl text-muted-foreground">
            Toliko verujemo u naš rad da nudimo nešto što skoro nijedna agencija ne nudi:
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
              Zašto nudimo ovo?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zato što znamo da funkcionišemo. Kada radite stvari kako treba, rezultati su 
              <span className="font-bold text-foreground"> garantovani</span>. Naši klijenti u proseku ostaju sa nama 
              <span className="font-bold text-primary"> 2+ godine</span> jer vide realan rast svog biznisa.
            </p>
            <div className="pt-4">
              <Button 
                size="xl" 
                variant="hero"
                onClick={scrollToContact}
                className="group"
              >
                Počnite bez rizika
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
