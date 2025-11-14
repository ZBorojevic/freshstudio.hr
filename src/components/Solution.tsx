import { CheckCircle2, Target, Zap, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Solution = () => {
  const solutions = [
    {
      icon: Target,
      title: "Strategija prilagođena vama",
      description: "Ne koristimo šablone. Svaka strategija je kreirana specifično za vaš biznis, industriju i ciljeve.",
    },
    {
      icon: Zap,
      title: "Brza implementacija",
      description: "Počinjemo odmah. U roku od 7 dana videćete prve kampanje, a rezultate u roku od 30 dana.",
    },
    {
      icon: TrendingUp,
      title: "Merljivi rezultati",
      description: "Pratimo sve metrike i jasno vam pokazujemo ROI. Znate tačno šta dobijate za svoj novac.",
    },
    {
      icon: Users,
      title: "Posvećen tim",
      description: "Dobijate ceo tim stručnjaka - strategiste, dizajnere, copywritere. Svi fokusirani na vaš uspeh.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">Rešenje je ovde</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Marketing koji <span className="text-primary">donosi rezultate</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mi nismo još jedna marketinška agencija. Mi smo vaš partner za rast koji garantuje rezultate.
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
                Naš pristup je jednostavan
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">01</div>
                  <h4 className="text-xl font-semibold mb-2">Analiza</h4>
                  <p className="text-white/90">Razumemo vaš biznis, konkurenciju i ciljeve</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">02</div>
                  <h4 className="text-xl font-semibold mb-2">Strategija</h4>
                  <p className="text-white/90">Kreiramo plan prilagođen vašim potrebama</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 opacity-80">03</div>
                  <h4 className="text-xl font-semibold mb-2">Izvršenje</h4>
                  <p className="text-white/90">Implementiramo i optimizujemo za rezultate</p>
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
