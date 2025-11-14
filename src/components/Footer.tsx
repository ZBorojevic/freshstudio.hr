const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vaša Agencija</h3>
              <p className="text-background/80 leading-relaxed">
                Marketing i dizajn agencija koja garantuje rezultate. Vaš partner za rast.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
              <ul className="space-y-2 text-background/80">
                <li>Email: info@vasaagencija.com</li>
                <li>Telefon: +381 11 123 4567</li>
                <li>Beograd, Srbija</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Radno vreme</h4>
              <ul className="space-y-2 text-background/80">
                <li>Ponedeljak - Petak</li>
                <li>9:00 - 18:00</li>
                <li className="pt-2">
                  <a href="#contact" className="text-secondary hover:underline">
                    Zakažite sastanak →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Vaša Agencija. Sva prava zadržana.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
