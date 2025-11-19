import { createContext, useContext, useState, ReactNode } from "react";

type Language = "hr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("hr");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  hr: {
    hero: {
      title: "Više rasta, više prometa,",
      titleHighlight: "više klijenata.",
      titleGuarantee: "Garantirano.",
      subtitle: "Vi radite ono što najbolje znate, a mi se bavimo marketingom. Zajedno ćemo vaš posao podignuti na sljedeću razinu.",
      ctaPrimary: "Zakažite besplatni razgovor",
      ctaSecondary: "Saznajte kako",
      stat1: "Jamstvo povrata novca",
      stat2: "Zadovoljnih klijenata",
      stat3: "Prosječni ROI",
    },
    problem: {
          badge: "Poznato vam zvuči?",
          title: "Vaš posao gubi novac.",
          titleHighlight: "Svaki dan.",
          subtitle: "Dok čitate ovo, vaša konkurencija privlači klijente koje biste vi trebali imati. Svaki dan odgađanja košta vas više nego što mislite...",
          problem1Title: "Radite marketing sami (DIY)",
          problem1Desc: "Osnovali ste posao da radite ono što volite, ne da postanete marketing stručnjak. Učenje, testiranje, greške - sve to košta vrijeme i novac. Dok vi gubite vrijeme na marketing, konkurencija raste.",
          problem2Title: "Zapošljavate marketinšku osobu",
          problem2Desc: "Rizik je ogroman. Plata 1000-2000€ mjesečno, plus beneficije. Što ako pogriješite u izboru? Što ako ta osoba ne donosi rezultate? Otpuštanje, nova potražnja, još novca bačenog. Minimum 6 mjeseci samo da vidite radi li to.",
          problem3Title: "Angažirate 'klasičnu' agenciju",
          problem3Desc: "Veliki klijenti dobijaju A tim. Vi ste mali klijent? Dobit ćete početnike koji uče na vašem budžetu. Dugački ugovori, nedostupnost, generičke strategije. Platite 2000-5000€ mjesečno i nadajte se najboljem.",
          emphasis1: "Dok razmišljate što da radite,",
          emphasis2: "gubite 10-50 klijenata mjesečno.",
          emphasis3: "Vaša konkurencija ih već dobiva",  // Dodano/popravljeno emphasis3
          closingText: "Svaki dan čekanja je izgubljeni novac. Koliko vas košta da NE radite ništa?",
        },
    solution: {
      badge: "Rješenje je ovdje",
      title: "Marketing usmjeren na",
      titleHighlight: "prodaju, ne na nagrade",
      subtitle: "Nismo 'kreativna' agencija koja pravi lijepe slike za Instagram. Mi smo partner koji donosi klijente i povećava vašu prodaju. Sve ostalo je nebitno.",
      solution1Title: "Biramo klijente pažljivo",
      solution1Desc: "Radimo samo sa 15 klijenata mjesečno. Ne više. Znači dobijate punu pažnju, ne budžetski tretman. Vaš uspjeh je naš uspjeh - i to shvaćamo ozbiljno.",
      solution2Title: "Izravna dostupnost - lokalni smo",
      solution2Desc: "Niste broj u sustavu velike agencije. Imamo ured ovdje, možete nas nazvati, doći na kavu. Odgovaramo za svaki rezultat i znate točno koga kontaktirati.",
      solution3Title: "Testirano, ne nagađamo",
      solution3Desc: "Pratimo trendove, testiramo kampanje drugih industrija, učimo što funkcionira. Primjenjujemo provjeren pristup na vašem poslu - smanjujemo nagađanje na minimum.",
      solution4Title: "Rezultati ili ne plaćate",
      solution4Desc: "Toliko smo sigurni u naš rad da dijelimo rizik s vama. Ako nema rezultata u prvih 90 dana - vraćamo novac. Nema sitnog slova, nema izgovora.",
      approachTitle: "Što nas čini jedinstvenima?",
      step1Title: "Fokus na prodaju",
      step1Desc: "Lijep dizajn je bonus. Naš cilj: više klijenata i veća prodaja. Točka.",
      step2Title: "Transparentnost 100%",
      step2Desc: "Znate svaki korak, svaki trošak, svaki rezultat. Bez skrivenih troškova.",
      step3Title: "Garantirani rezultati",
      step3Desc: "Ugovorom definiramo KPI-jeve. Ne dostignemo ih? Vraćamo novac.",
    },
    guarantee: {
      badge: "Naše jamstvo",
      title: "Dijelimo rizik",
      titleSecondary: "s vama",
      subtitle: "Velike agencije uzmu novac unaprijed i onda 'vidjet ćemo'. Mi to radimo drugačije jer smo sigurni u rezultate:",
      guarantee1Title: "100% Jamstvo povrata novca",
      guarantee1Desc: "Ako u prvih 90 dana ne dostignemo dogovorene rezultate - vraćamo svaki cent. Bez sitnog slova. Bez 'ali'. Bez komplikacija.",
      guarantee2Title: "Rezultati u ugovoru",
      guarantee2Desc: "Prije početka, crno na bijelo pišemo koje KPI-jeve ćemo dostići. Broj klijenata, ROI, konverzije - što god je bitno za vas. Ne dostignemo? Ne plaćate.",
      guarantee3Title: "Bez dugoročnih obveza",
      guarantee3Desc: "Radimo mjesec po mjesec. Nikakvi 12-mjesečni ugovori. Ostajete jer vidite rast posla, ne jer vas ugovor drži.",
      guarantee4Title: "Motivacija je na našoj strani",
      guarantee4Desc: "Kada dijelimo rizik, mi smo još motiviraniji. Vaš uspjeh = naš uspjeh. Jednostavno. Zato dobijate naš A tim, ne pripravnike.",
      whyTitle: "Zašto možemo ovo ponuditi?",
      whyText: "Jer ne nagađamo. Testiramo. Analiziramo. Primjenjujemo ono što dokazano funkcionira. Kada radite stvari kako treba,",
      whyHighlight1: "rezultati nisu slučajnost",
      whyHighlight2: "15 aktivnih klijenata",
      whyText2: ". Trenutno radimo samo sa",
      whyText3: "jer biramo one kod kojih znamo da možemo napraviti razliku. I svaki vidi rast.",
      cta: "Zakažite razgovor bez obveza",
    },
    contact: {
      badge: "Spremni za rast?",
      title: "Zakažite",
      titleHighlight: "besplatni savjetodavni razgovor",
      subtitle: "U roku od 24 sata kontaktirat ćemo vas i dogovoriti sastanak gdje ćemo analizirati vaš posao i dati konkretne savjete - potpuno besplatno.",
      nameLabel: "Ime i prezime",
      namePlaceholder: "Vaše ime",
      emailLabel: "Email",
      emailPlaceholder: "vas@email.com",
      phoneLabel: "Telefon",
      phonePlaceholder: "+385 1 123 4567",
      messageLabel: "Poruka",
      messagePlaceholder: "Recite nam nešto o vašem poslu i što želite postići...",
      submitButton: "Pošaljite poruku",
      submitting: "Slanje...",
      disclaimer: "Odgovaramo u roku od 24 sata. Bez obveza.",
      infoEmail: "Email",
      infoPhone: "Telefon",
      infoHours: "Radno vrijeme",
      infoHoursContent: "Pon-Pet: 9:00 - 18:00",
      benefitsTitle: "Što dobijate na prvom sastanku?",
      benefit1: "Detaljnu analizu vašeg trenutnog marketinga",
      benefit2: "Konkretne ideje kako privući više klijenata",
      benefit3: "Procjenu potencijalnog ROI-ja",
      benefit4: "Prilagođeni akcijski plan - potpuno besplatno",
      toastTitle: "Poruka poslana!",
      toastDesc: "Kontaktirat ćemo vas u najkraćem mogućem roku.",
      errorTitle: "Došlo je do greške",
      errorDesc: "Pokušajte ponovno ili nas kontaktirajte direktno na hello@freshstudio.hr."
    },
    footer: {
      company: "Fresh Studio",
      description: "Marketing i dizajn agencija koja jamči rezultate. Vaš partner za rast.",
      contactTitle: "Kontakt",
      hoursTitle: "Radno vrijeme",
      hoursContent: "Ponedjeljak - Petak",
      hoursTime: "9:00 - 17:00",
      bookMeeting: "Zakažite sastanak →",
      copyright: "Fresh Studio. Sva prava pridržana.",
    },
  },
  en: {
    hero: {
      title: "More growth, more revenue,",
      titleHighlight: "more clients",
      titleGuarantee: "guaranteed",
      subtitle: "You do what you do best, and we handle the marketing. Together, we'll take your business to the next level.",
      ctaPrimary: "Schedule a free consultation",
      ctaSecondary: "Learn how",
      stat1: "Money-back guarantee",
      stat2: "Satisfied clients",
      stat3: "Average ROI",
    },
    problem: {
      badge: "Sound familiar?",
      title: "Your business is losing money",
      titleHighlight: "every day",
      subtitle: "While you're reading this, your competition is attracting clients you should have. Every day of delay costs you more than you think...",
      problem1Title: "Doing marketing yourself (DIY)",
      problem1Desc: "You started your business to do what you love, not to become a marketing expert. Learning, testing, mistakes - all cost time and money. While you waste time on marketing, competition grows.",
      problem2Title: "Hiring a marketing person",
      problem2Desc: "The risk is huge. Salary €1000-2000 monthly, plus benefits. What if you make the wrong choice? What if they don't deliver? Firing, new search, more money wasted. Minimum 6 months just to see if it works.",
      problem3Title: "Hiring a 'classic' agency",
      problem3Desc: "Big clients get the A team. You're a small client? You'll get juniors learning on your budget. Long contracts, unavailability, generic strategies. Pay €2000-5000 monthly and hope for the best.",
      emphasis1: "While you're thinking what to do,",
      emphasis2: "you're losing 10-50 clients monthly.",
      emphasis3: "Your competition is already getting them.",  // Dodano/popravljeno emphasis3
      closingText: "Every day of waiting is lost money. How much does doing NOTHING cost you?",
    },
    solution: {
      badge: "The solution is here",
      title: "Marketing focused on",
      titleHighlight: "sales, not awards",
      subtitle: "We're not a 'creative' agency making pretty Instagram pictures. We're a partner that brings clients and increases your sales. Everything else is irrelevant.",
      solution1Title: "We choose clients carefully",
      solution1Desc: "We work with only 15 clients per month. No more. That means you get full attention, not budget treatment. Your success is our success - and we take that seriously.",
      solution2Title: "Direct availability - we're local",
      solution2Desc: "You're not a number in a big agency system. We have an office here, you can call us, come for coffee. We're accountable for every result and you know exactly who to contact.",
      solution3Title: "Tested, not guessing",
      solution3Desc: "We follow trends, test campaigns from other industries, learn what works. We apply proven approach to your business - minimize guesswork to a minimum.",
      solution4Title: "Results or you don't pay",
      solution4Desc: "We're so confident in our work that we share the risk with you. If there are no results in the first 90 days - we refund your money. No Fine Print, no excuses.",
      approachTitle: "What makes us unique?",
      step1Title: "Focus on sales",
      step1Desc: "Beautiful design is a bonus. Our goal: more clients and higher sales. Period.",
      step2Title: "100% Transparency",
      step2Desc: "You know every step, every cost, every result. No hidden fees.",
      step3Title: "Guaranteed results",
      step3Desc: "We define KPIs in the contract. Don't achieve them? We refund your money.",
    },
    guarantee: {
      badge: "Our guarantee",
      title: "We share the risk",
      titleSecondary: "with you",
      subtitle: "Big agencies take money upfront and then 'we'll see'. We do it differently because we're confident in results:",
      guarantee1Title: "100% Money-back guarantee",
      guarantee1Desc: "If in the first 90 days we don't achieve agreed results - we refund every penny. No Fine Print. No 'buts'. No complications.",
      guarantee2Title: "Results in contract",
      guarantee2Desc: "Before starting, we write in black and white which KPIs we'll achieve. Number of clients, ROI, conversions - whatever matters to you. Don't achieve? You don't pay.",
      guarantee3Title: "No long-term commitments",
      guarantee3Desc: "We work month by month. No 12-month contracts. You stay because you see business growth, not because a contract holds you.",
      guarantee4Title: "Motivation is on our side",
      guarantee4Desc: "When we share risk, we're even more motivated. Your success = our success. Simple. That's why you get our A team, not juniors.",
      whyTitle: "Why can we offer this?",
      whyText: "Because we don't guess. We test. Analyze. Apply what's proven to work. When you do things right,",
      whyHighlight1: "results aren't coincidence",
      whyHighlight2: "15 active clients",
      whyText2: ". We currently work only with",
      whyText3: "because we choose those where we know we can make a difference. And each one sees growth.",
      cta: "Schedule a no-obligation call",
    },
    contact: {
      badge: "Ready to grow?",
      title: "Schedule a",
      titleHighlight: "free consultation",
      subtitle: "Within 24 hours we'll contact you to arrange a meeting where we'll analyze your business and provide concrete advice - completely free.",
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+381 11 123 4567",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your business and what you want to achieve...",
      submitButton: "Send message",
      submitting: "Sending...",
      disclaimer: "We respond within 24 hours. No obligation.",
      infoEmail: "Email",
      infoPhone: "Phone",
      infoHours: "Business hours",
      infoHoursContent: "Mon-Fri: 9:00 AM - 6:00 PM",
      benefitsTitle: "What you get in the first meeting?",
      benefit1: "Detailed analysis of your current marketing",
      benefit2: "Concrete ideas on how to attract more clients",
      benefit3: "Potential ROI assessment",
      benefit4: "Customized action plan - completely free",
      toastTitle: "Message sent!",
      toastDesc: "We'll contact you as soon as possible.",
      errorTitle: "Something went wrong",
      errorDesc: "Please try again or contact us directly at hello@freshstudio.hr.",
    },
    footer: {
      company: "Your Agency",
      description: "Marketing and design agency that guarantees results. Your growth partner.",
      contactTitle: "Contact",
      hoursTitle: "Business hours",
      hoursContent: "Monday - Friday",
      hoursTime: "9:00 AM - 6:00 PM",
      bookMeeting: "Schedule a meeting →",
      copyright: "Fresh Studio. All rights reserved.",
    },
  },
};