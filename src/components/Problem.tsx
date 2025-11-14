import { AlertCircle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Nedostatak vremena",
      description: "Osnovali ste biznis da radite ono što volite, ne da budete marketing ekspert. Dani prolaze, a marketing ostaje zanemaren.",
    },
    {
      icon: TrendingDown,
      title: "Nedovoljno klijenata",
      description: "Znate da je vaš proizvod/usluga odličan, ali pravi kupci vas ne nalaze. Konkurencija vam odnosi tržište.",
    },
    {
      icon: DollarSign,
      title: "Bacanje novca",
      description: "Probali ste različite marketinške kanale, ali rezultati izostaju. Ne znate šta funkcioniše i gde ide vaš budžet.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">Poznato vam zvuči?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vaš biznis ima <span className="text-destructive">problem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Većina vlasnika biznisa se suočava sa istim izazovima koji ih koštaju novca svaki dan...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-card border-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="h-7 w-7 text-destructive" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border-2 border-destructive/20 rounded-2xl p-8 shadow-medium">
            <p className="text-xl text-center text-muted-foreground leading-relaxed">
              <span className="font-bold text-destructive">Svaki dan koji prođe</span> bez efikasnog marketinga je 
              <span className="font-bold text-destructive"> izgubljena prilika</span> za nove klijente i veći prihod. 
              Dok vi razmišljate, konkurencija već raste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
