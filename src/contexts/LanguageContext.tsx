"use client";
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
    let value: unknown = translations[language];

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }

    return typeof value === "string" ? value : key;
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
      subtitle:
        "Vi radite ono što najbolje znate, a mi se bavimo marketingom. Zajedno ćemo vaš posao podignuti na sljedeću razinu.",
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
      subtitle:
        "Dok čitate ovo, vaša konkurencija privlači klijente koje biste vi trebali imati. Svaki dan odgađanja košta vas više nego što mislite...",
      problem1Title: "Radite marketing sami",
      problem1Desc:
        "Osnovali ste posao da radite ono što volite, ne da postanete marketing stručnjak. Učenje, testiranje, greške - sve to košta vrijeme i novac. Dok vi gubite vrijeme na marketing, konkurencija raste.",
      problem2Title: "Zapošljavate marketinšku osobu",
      problem2Desc:
        "Rizik je ogroman. Plaća 1500-2500€ mjesečno, plus beneficije. Što ako pogriješite u izboru? Što ako ta osoba ne donosi rezultate? Otpuštanje, nova potražnja, još novca bačenog. Minimum 6 mjeseci samo da vidite radi li to.",
      problem3Title: "Angažirate 'klasičnu' agenciju",
      problem3Desc:
        "Veliki klijenti dobijaju A tim. Vi ste mali klijent? Dobit ćete početnike koji uče na vašem budžetu. Dugački ugovori, nedostupnost, generičke strategije. Platite 2000-5000€ mjesečno i nadajte se najboljem.",
      emphasis1: "Dok razmišljate što da radite,",
      emphasis2: "gubite 10-50 klijenata mjesečno.",
      emphasis3: "Vaša konkurencija ih već dobiva.",
      closingText:
        "Svaki dan čekanja je izgubljeni novac. Koliko vas košta da NE radite ništa?",
    },
    solution: {
      badge: "Rješenje je ovdje",
      title: "Marketing usmjeren na",
      titleHighlight: "prodaju, ne na nagrade.",
      subtitle:
        "Nismo 'kreativna' agencija koja pravi samo lijepe slike za Instagram. Mi smo partner koji donosi klijente i povećava vašu prodaju. Sve ostalo je nebitno.",
      solution1Title: "Biramo klijente pažljivo",
      solution1Desc:
        "Radimo samo sa 15 klijenata mjesečno. Ne više. Znači dobijate punu pažnju, ne budžetski tretman. Vaš uspjeh je naš uspjeh - i to shvaćamo ozbiljno.",
      solution2Title: "Izravna dostupnost - lokalni smo",
      solution2Desc:
        "Niste broj u sustavu velike agencije. Imamo ured ovdje, možete nas nazvati, doći na kavu. Odgovaramo za svaki rezultat i znate točno koga kontaktirati.",
      solution3Title: "Testirano, ne nagađamo",
      solution3Desc:
        "Pratimo trendove, testiramo kampanje drugih industrija, učimo što funkcionira. Primjenjujemo provjeren pristup na vašem poslu - smanjujemo nagađanje na minimum.",
      solution4Title: "Rezultati ili ne plaćate",
      solution4Desc:
        "Toliko smo sigurni u naš rad da dijelimo rizik s vama. Ako nema rezultata u prvih 90 dana - vraćamo novac. Nema sitnog slova, nema izgovora.",
      approachTitle: "Što nas čini jedinstvenima?",
      step1Title: "Fokus na prodaju",
      step1Desc:
        "Lijep dizajn je bonus. Naš cilj: više klijenata i veća prodaja. Točka.",
      step2Title: "Transparentnost 100%",
      step2Desc:
        "Znate svaki korak, svaki trošak, svaki rezultat. Bez skrivenih troškova.",
      step3Title: "Garantirani rezultati",
      step3Desc:
        "Ugovorom definiramo KPI-jeve. Ne dostignemo ih? Vraćamo novac.",
    },
    services: {
      badge: "Naše usluge",
      title: "Sve što vaš biznis treba za",
      titleHighlight: "rast online.",
      subtitle:
        "Digitalni alati, strategija i sadržaj za moderne biznise. Od web razvoja do oglašavanja — sve pod jednim krovom.",
      includes: "Uključuje:",
      s1Title: "Web razvoj i digitalna infrastruktura",
      s1Desc:
        "Brze, moderne web stranice koje rade za vaš biznis. Gradimo web stranice i digitalne sustave koji su brzi, optimizirani i spremni za rast — od dizajna i razvoja do implementacije AI funkcionalnosti i chatbotova.",
      s1Item1: "Izrada web stranica po mjeri",
      s1Item2: "UX/UI optimizacija",
      s1Item3: "AI chatbot integracije",
      s1Item4: "Optimizacija performansi",
      s1Item5: "Web infrastruktura za rast",
      s2Title: "SEO i digitalni rast",
      s2Desc:
        "Pozicioniramo vaš biznis tamo gdje vas ljudi traže. Radimo SEO strategiju, optimizaciju i digitalni marketing koji povećava vidljivost na Googleu i dovodi prave klijente.",
      s2Item1: "SEO optimizacija",
      s2Item2: "Google ranking strategija",
      s2Item3: "Strategija digitalnog marketinga",
      s2Item4: "Analitika i optimizacija",
      s2Item5: "Pristup usmjeren na rast",
      s3Title: "Plaćeno oglašavanje i generiranje upita",
      s3Desc:
        "Kampanje koje donose konkretne rezultate. Planiramo, postavljamo i optimiziramo Google Ads kampanje koje generiraju promet, upite i prodaju.",
      s3Item1: "Google Ads kampanje",
      s3Item2: "Strategija generiranja upita",
      s3Item3: "Optimizacija kampanja",
      s3Item4: "Performance marketing",
      s3Item5: "Analiza i izvještavanje",
      s4Title: "Sadržaj i prisutnost brenda",
      s4Desc:
        "Sadržaj koji gradi povjerenje i vidljivost. Pomažemo brendovima stvarati kvalitetan sadržaj koji privlači pažnju i gradi online prisutnost.",
      s4Item1: "Kreiranje sadržaja",
      s4Item2: "Fotografija za poslovne subjekte",
      s4Item3: "Upravljanje društvenim mrežama",
      s4Item4: "Grafički dizajn",
      s4Item5: "Vizualni identitet brenda",
      ctaText:
        "Niste sigurni što vam treba? Javite nam se i zajedno ćemo pronaći pravo rješenje.",
      ctaButton: "Zakažite besplatni razgovor",
    },
    contact: {
      badge: "Spremni za rast?",
      title: "Zakažite",
      titleHighlight: "besplatni savjetodavni razgovor",
      subtitle:
        "U roku od 24 sata kontaktirat ćemo vas i dogovoriti sastanak gdje ćemo analizirati vaš posao i dati konkretne savjete - potpuno besplatno.",
      nameLabel: "Ime i prezime",
      namePlaceholder: "Vaše ime",
      emailLabel: "Email",
      emailPlaceholder: "vas@email.com",
      phoneLabel: "Telefon",
      phonePlaceholder: "+385 1 123 4567",
      messageLabel: "Poruka",
      messagePlaceholder:
        "Recite nam nešto o vašem poslu i što želite postići...",
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
      errorDesc:
        "Pokušajte ponovno ili nas kontaktirajte direktno na hello@freshstudio.hr.",
      privacyConsentPrefix:
        "Slanjem ove forme potvrđujem da sam pročitao/pročitala i prihvaćam",
      privacyLinkText: "Pravila privatnosti i kolačića",
      errorPrivacy:
        "Morate prihvatiti Pravila privatnosti i kolačića prije slanja.",
      subjectLabel: "Predmet",
      subjectPlaceholder: "O čemu se radi?",
      errorCaptcha: "Molimo potvrdite da niste robot.",
      errorSubject: "Molimo unesite predmet poruke.",
      errorName: "Molimo unesite ispravno ime i prezime (samo slova).",
      errorEmail: "Molimo unesite ispravnu email adresu.",
      errorMessage: "Poruka je prekratka. Napišite barem nekoliko rečenica.",
    },
    footer: {
      company: "Fresh Studio",
      description:
        "Marketing i dizajn agencija koja jamči rezultate. Vaš partner za rast.",
      contactTitle: "Kontakt",
      hoursTitle: "Radno vrijeme",
      hoursContent: "Ponedjeljak - Petak",
      hoursTime: "9:00 - 17:00",
      privacyAndCookies: "Pravila privatnosti i kolačića",
      copyright: "Fresh Studio. Sva prava pridržana.",
    },
    legal: {
      title: "Pravila privatnosti i kolačića",
      lastUpdated: "Posljednje ažuriranje: 2025.",
      section1Title: "1. Voditelj obrade",
      section1BodyPrefix: "Voditelj obrade osobnih podataka je",
      section1BodySuffix:
        ", sa sjedištem u Koprivnici, Hrvatska. Za sva pitanja vezana uz obradu podataka možete nam se javiti na hello@freshstudio.hr.",
      section2Title: "2. Koje podatke prikupljamo",
      analyticsTitle: "2.1. Podaci o korištenju web stranice",
      analyticsBody:
        "Ova web stranica može prikupljati osnovne tehničke informacije (npr. IP adresa, tip preglednika, datum i vrijeme posjete) koje su nužne za prikaz stranice i sigurnost sustava. Ne koristimo ove podatke za izradu vašeg profila niti za marketinško praćenje.",
      contactFormTitle: "2.2. Podaci iz kontakt forme",
      contactFormIntro:
        "Kada ispunite i pošaljete kontakt formu, možemo prikupiti sljedeće podatke:",
      contactFormItemName: "Ime i prezime",
      contactFormItemEmail: "Email adresu",
      contactFormItemPhone: "Broj telefona (ako ga dobrovoljno unesete)",
      contactFormItemMessage: "Sadržaj poruke koju nam šaljete",
      contactFormUsage:
        "Ove podatke koristimo isključivo kako bismo vam odgovorili na upit, pripremili ponudu te komunicirali o potencijalnoj ili postojećoj suradnji.",
      cookiesTitle: "3. Kolačići (Cookies)",
      cookiesIntro:
        "Kolačići su male tekstualne datoteke koje se spremaju na vaš uređaj kada posjetite web stranicu. Koristimo ih kako bi stranica ispravno funkcionirala i, uz vašu privolu, radi boljeg razumijevanja korištenja stranice.",
      cookiesNecessary:
        "Nužni kolačići: neophodni su za osnovno funkcioniranje web stranice (npr. sigurnost, prikaz sadržaja) i ne mogu se isključiti u našim sustavima.",
      cookiesAnalytics:
        "Analitički kolačići: koriste se za praćenje posjećenosti i razumijevanje načina korištenja stranice. Aktiviraju se samo ako ih prihvatite putem bannera za kolačiće.",
      cookiesConsentInfo:
        "Postavke kolačića možete promijeniti u svom pregledniku ili povlačenjem privole. Ako odbijete analitičke kolačiće, web stranica će i dalje biti dostupna, ali neke funkcionalnosti praćenja posjećenosti možda neće biti aktivne.",
      rightsTitle: "4. Vaša prava prema GDPR-u",
      rightsBody:
        "Imate pravo na pristup svojim osobnim podacima, ispravak, brisanje, ograničenje obrade, prigovor na obradu te pravo na prenosivost podataka. Također imate pravo povući svoju privolu u bilo kojem trenutku. Za ostvarivanje svojih prava, kontaktirajte nas na",
      back: "Natrag",
    },
    cookies: {
      bannerTitle: "Koristimo kolačiće",
      bannerText:
        'Ova web stranica koristi kolačiće kako bi poboljšala vaše korisničko iskustvo i analizirala posjećenost. Klikom na "Prihvaćam" složit ćete se s korištenjem kolačića u skladu s našim Pravilima privatnosti i kolačića.',
      accept: "Prihvaćam",
      moreInfo: "Saznajte više",
    },
    privacyPage: {
      title: "Pravila privatnosti i kolačića",
      updated: "Posljednje ažuriranje: 2025.",
      intro:
        "Ova Pravila privatnosti i kolačića objašnjavaju kako Fresh Studio prikuplja, koristi i štiti vaše osobne podatke te na koji način koristi kolačiće na ovoj web stranici. Poštujemo vašu privatnost i obrađujemo podatke u skladu s Općom uredbom o zaštiti podataka (GDPR).",
      section1Title: "1. Voditelj obrade",
      section1Body:
        "Voditelj obrade osobnih podataka je Fresh Studio, obrt za računalno programiranje, dizajn i usluge. Sjedište: Koprivnica, Hrvatska. Kontakt: hello@freshstudio.hr.",
      section2Title: "2. Koje podatke prikupljamo",
      section2Body:
        "Podatke prikupljamo isključivo kada nam ih dobrovoljno dostavite putem kontakt forme. To uključuje: (1) Ime i prezime, (2) Email adresu, (3) Broj telefona, (4) Informacije koje unesete u poruku. Ne prikupljamo osjetljive podatke niti podatke koje ne unesete sami.",
      section3Title: "3. Svrha i pravna osnova obrade",
      section3Body:
        "Vaše osobne podatke obrađujemo samo u sljedeće svrhe: (1) Odgovaranje na vaš upit, (2) Komunikaciju vezanu uz potencijalnu suradnju, (3) Izradu ponude ili dogovor oko sastanka. Pravna osnova za obradu je vaš dobrovoljni pristanak – slanjem poruke pristajete da obradimo dostavljene podatke za navedene svrhe.",
      cookiesTitle: "4. Kolačići (Cookies)",
      cookiesBody:
        "Ova web stranica koristi samo nužne kolačiće za osnovno funkcioniranje stranice. Ne koristimo marketinške ili analitičke kolačiće bez vaše privole. Ako se u budućnosti uvedu dodatni kolačići, korisnik će ih moći zasebno prihvatiti ili odbiti putem bannera za privolu.",
      section5Title: "5. Dijeljenje podataka s trećim stranama",
      section5Body:
        "Vaši podaci se ne dijele s trećim stranama, ne prodaju se i ne koriste u marketinške ili oglašivačke svrhe. Podatke obrađujemo isključivo interno u svrhu komunikacije s vama.",
      section6Title: "6. Rok čuvanja podataka",
      section6Body:
        "Vaši podaci se čuvaju samo onoliko dugo koliko je potrebno za komunikaciju i obradu vašeg zahtjeva. Nakon završetka komunikacije, podaci se brišu, osim ako pravila računovodstva ili legitimni poslovni interes zahtijevaju dulje čuvanje (npr. izrada ponude ili započeta suradnja).",
      rightsTitle: "7. Vaša prava prema GDPR-u",
      rightsBody:
        "U bilo kojem trenutku imate pravo: (1) zatražiti pristup svojim podacima, (2) ispravak netočnih podataka, (3) brisanje podataka ('pravo na zaborav'), (4) ograničenje obrade, (5) prigovor na obradu, (6) pravo na prijenos podataka. Svoja prava možete ostvariti slanjem zahtjeva na hello@freshstudio.hr.",
      section8Title: "8. Sigurnost podataka",
      section8Body:
        "Podatke štitimo tehničkim i organizacijskim mjerama kako bismo spriječili neovlašteni pristup, gubitak ili zloupotrebu. Pristup podacima imaju samo osobe ovlaštene od strane Fresh Studija.",
      section9Title: "9. Kolačići trećih strana",
      section9Body:
        "Trenutno ne koristimo kolačiće trećih strana (npr. Google Analytics, Meta Pixel). Ako ih naknadno uvedemo, ova Pravila bit će ažurirana, a korisnik će imati mogućnost dati privolu prije aktivacije takvih kolačića.",
      contactTitle: "10. Kontakt za privatnost i GDPR upite",
      contactBody:
        "Za sva pitanja vezana uz zaštitu podataka, ostvarivanje svojih prava ili povlačenje privole, kontaktirajte nas na: hello@freshstudio.hr.",
      disclaimer:
        "Ovaj dokument služi kao informativni prikaz praksi obrade podataka Fresh Studija i ne predstavlja pravni savjet. Ako želite potpunu pravnu procjenu usklađenosti, preporučujemo konzultaciju sa stručnjakom za GDPR.",
    },
  },

  en: {
    hero: {
      title: "More growth, more revenue,",
      titleHighlight: "more clients.",
      titleGuarantee: "Guaranteed.",
      subtitle:
        "You do what you do best, and we handle the marketing. Together, we'll take your business to the next level.",
      ctaPrimary: "Schedule a free consultation",
      ctaSecondary: "Learn how",
      stat1: "Money-back guarantee",
      stat2: "Satisfied clients",
      stat3: "Average ROI",
    },
    problem: {
      badge: "Sound familiar?",
      title: "Your business is losing money.",
      titleHighlight: "Every day.",
      subtitle:
        "While you're reading this, your competition is attracting clients you should have. Every day of delay costs you more than you think...",
      problem1Title: "Doing marketing yourself",
      problem1Desc:
        "You started your business to do what you love, not to become a marketing expert. Learning, testing, mistakes - all cost time and money. While you waste time on marketing, competition grows.",
      problem2Title: "Hiring a marketing person",
      problem2Desc:
        "The risk is huge. Salary €1000-2000 monthly, plus benefits. What if you make the wrong choice? What if they don't deliver? Firing, new search, more money wasted. Minimum 6 months just to see if it works.",
      problem3Title: "Hiring a 'classic' agency",
      problem3Desc:
        "Big clients get the A team. You're a small client? You'll get juniors learning on your budget. Long contracts, unavailability, generic strategies. Pay €2000-5000 monthly and hope for the best.",
      emphasis1: "While you're thinking what to do,",
      emphasis2: "you're losing 10-50 clients monthly.",
      emphasis3: "Your competition is already getting them.",
      closingText:
        "Every day of waiting is lost money. How much does doing NOTHING cost you?",
    },
    solution: {
      badge: "The solution is here",
      title: "Marketing focused on",
      titleHighlight: "sales, not awards.",
      subtitle:
        "We're not a 'creative' agency making just pretty Instagram pictures. We're a partner that brings clients and increases your sales. Everything else is irrelevant.",
      solution1Title: "We choose clients carefully",
      solution1Desc:
        "We work with only 15 clients per month. No more. That means you get full attention, not budget treatment. Your success is our success - and we take that seriously.",
      solution2Title: "Direct availability - we're local",
      solution2Desc:
        "You're not a number in a big agency system. We have an office here, you can call us, come for coffee. We're accountable for every result and you know exactly who to contact.",
      solution3Title: "Tested, not guessing",
      solution3Desc:
        "We follow trends, test campaigns from other industries, learn what works. We apply proven approach to your business - minimize guesswork to a minimum.",
      solution4Title: "Results or you don't pay",
      solution4Desc:
        "We're so confident in our work that we share the risk with you. If there are no results in the first 90 days - we refund your money. No Fine Print, no excuses.",
      approachTitle: "What makes us unique?",
      step1Title: "Focus on sales",
      step1Desc:
        "Beautiful design is a bonus. Our goal: more clients and higher sales. Period.",
      step2Title: "100% Transparency",
      step2Desc:
        "You know every step, every cost, every result. No hidden fees.",
      step3Title: "Guaranteed results",
      step3Desc:
        "We define KPIs in the contract. Don't achieve them? We refund your money.",
    },
    services: {
      badge: "Our services",
      title: "Everything your business needs to",
      titleHighlight: "grow online.",
      subtitle:
        "Digital tools, strategy and content for modern businesses. From web development to advertising — all under one roof.",
      includes: "Includes:",
      s1Title: "Web Development & Digital Infrastructure",
      s1Desc:
        "Fast, modern websites that work for your business. We build websites and digital systems that are fast, optimized and ready for growth — from design and development to AI functionality and chatbot implementation.",
      s1Item1: "Custom web development",
      s1Item2: "UX/UI optimization",
      s1Item3: "AI chatbot integrations",
      s1Item4: "Performance optimization",
      s1Item5: "Web infrastructure for growth",
      s2Title: "SEO & Digital Growth",
      s2Desc:
        "We position your business where people are looking for you. We create SEO strategy, optimization and digital marketing that increases visibility on Google and brings the right clients.",
      s2Item1: "SEO optimization",
      s2Item2: "Google ranking strategy",
      s2Item3: "Digital marketing strategy",
      s2Item4: "Analytics and optimization",
      s2Item5: "Growth approach",
      s3Title: "Paid Advertising & Lead Generation",
      s3Desc:
        "Campaigns that deliver concrete results. We plan, set up and optimize Google Ads campaigns that generate traffic, inquiries and sales.",
      s3Item1: "Google Ads campaigns",
      s3Item2: "Lead generation strategy",
      s3Item3: "Campaign optimization",
      s3Item4: "Performance marketing",
      s3Item5: "Analysis and reporting",
      s4Title: "Content & Brand Presence",
      s4Desc:
        "Content that builds trust and visibility. We help brands create quality content that attracts attention and builds online presence.",
      s4Item1: "Content creation",
      s4Item2: "Business photography",
      s4Item3: "Social media management",
      s4Item4: "Graphic design",
      s4Item5: "Brand visual identity",
      ctaText:
        "Not sure what you need? Get in touch and we'll find the right solution together.",
      ctaButton: "Schedule a free consultation",
    },
    contact: {
      badge: "Ready to grow?",
      title: "Schedule a",
      titleHighlight: "free consultation",
      subtitle:
        "Within 24 hours we'll contact you to arrange a meeting where we'll analyze your business and provide concrete advice - completely free.",
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+381 11 123 4567",
      messageLabel: "Message",
      messagePlaceholder:
        "Tell us about your business and what you want to achieve...",
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
      errorDesc:
        "Please try again or contact us directly at hello@freshstudio.hr.",
      privacyConsentPrefix:
        "By submitting this form I confirm that I have read and accept the",
      privacyLinkText: "Privacy & Cookie Policy",
      errorPrivacy:
        "You must accept the Privacy & Cookie Policy before submitting.",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is it about?",
      errorCaptcha: "Please confirm you are not a robot.",
      errorSubject: "Please enter a subject.",
      errorName: "Please enter a valid name (letters only).",
      errorEmail: "Please enter a valid email address.",
      errorMessage:
        "Your message is too short. Please provide a bit more detail.",
    },
    footer: {
      company: "Fresh Studio",
      description:
        "Marketing and design agency that guarantees results. Your growth partner.",
      contactTitle: "Contact",
      hoursTitle: "Business hours",
      hoursContent: "Monday - Friday",
      hoursTime: "9:00 AM - 6:00 PM",
      privacyAndCookies: "Privacy & Cookie Policy",
      copyright: "Fresh Studio. All rights reserved.",
    },
    legal: {
      title: "Privacy & Cookie Policy",
      lastUpdated: "Last updated: 2025",
      section1Title: "1. Data Controller",
      section1BodyPrefix: "The data controller is",
      section1BodySuffix:
        ", based in Koprivnica, Croatia. For any questions regarding data processing, you can contact us at hello@freshstudio.hr.",
      section2Title: "2. Data we collect",
      analyticsTitle: "2.1. Website usage data",
      analyticsBody:
        "This website may collect basic technical information (e.g. IP address, browser type, date and time of visit) required for displaying the site and ensuring system security. We do not use this information to create a personal profile or for marketing tracking.",
      contactFormTitle: "2.2. Data from the contact form",
      contactFormIntro:
        "When you fill out and submit the contact form, we may collect the following data:",
      contactFormItemName: "Full name",
      contactFormItemEmail: "Email address",
      contactFormItemPhone: "Phone number (if you provide it)",
      contactFormItemMessage: "The content of the message you send us",
      contactFormUsage:
        "We use this data solely to respond to your inquiry, prepare an offer, and communicate about potential or ongoing cooperation.",
      cookiesTitle: "3. Cookies",
      cookiesIntro:
        "Cookies are small text files stored on your device when you visit a website. We use them to ensure the website functions properly and, with your consent, to better understand how the site is used.",
      cookiesNecessary:
        "Necessary cookies: required for the basic operation of the website (e.g. security, displaying content) and cannot be disabled in our systems.",
      cookiesAnalytics:
        "Analytics cookies: used to measure traffic and understand how users interact with the website. They are only activated if you accept them via the cookie banner.",
      cookiesConsentInfo:
        "You can change your cookie settings in your browser or by withdrawing your consent. If you decline analytics cookies, the website will still be available, but some traffic measurement features may not be active.",
      rightsTitle: "4. Your GDPR rights",
      rightsBody:
        "You have the right to access your personal data, request rectification or deletion, restrict processing, object to processing, and the right to data portability. You also have the right to withdraw your consent at any time. To exercise your rights, please contact us at",
      back: "Back",
    },
    cookies: {
      bannerTitle: "We use cookies",
      bannerText:
        'This website uses cookies to improve your experience and analyze traffic. By clicking "Accept", you agree to the use of cookies in line with our Privacy & Cookie Policy.',
      accept: "Accept",
      moreInfo: "Learn more",
    },
    privacyPage: {
      title: "Privacy & Cookie Policy",
      updated: "Last updated: 2025",
      intro:
        "This Privacy & Cookie Policy explains how Fresh Studio collects, uses, and protects your personal data, and how cookies are used on this website. We respect your privacy and process all personal data in accordance with the General Data Protection Regulation (GDPR).",
      section1Title: "1. Data Controller",
      section1Body:
        "The data controller is Fresh Studio, a sole proprietorship providing software development, design, and marketing services. Location: Koprivnica, Croatia. Contact: hello@freshstudio.hr.",
      section2Title: "2. Data we collect",
      section2Body:
        "We collect personal data only when you voluntarily submit it via the contact form. This includes: (1) Full name, (2) Email address, (3) Phone number, (4) Any information you choose to include in your message. We do not collect sensitive categories of data.",
      section3Title: "3. Purpose and legal basis of processing",
      section3Body:
        "We process your personal data solely for the following purposes: (1) Responding to your inquiry, (2) Communicating regarding potential cooperation, (3) Preparing offers or arranging a meeting. The legal basis for processing is your voluntary consent—by submitting the contact form, you consent to us processing the provided data for these purposes.",
      cookiesTitle: "4. Cookies",
      cookiesBody:
        "This website uses only essential cookies required for basic functionality. We do not use marketing or analytics cookies without your explicit consent. If additional cookies are introduced in the future, users will be able to accept or decline them through a consent banner.",
      section5Title: "5. Sharing data with third parties",
      section5Body:
        "We do not share, sell, or disclose your personal data to third parties for marketing or advertising purposes. Your data is processed internally only for communication and service-related purposes.",
      section6Title: "6. Data retention period",
      section6Body:
        "We retain your personal data only for as long as necessary to respond to your inquiry and complete any related communication. Data is deleted once it is no longer needed, unless legal or legitimate business reasons require longer retention (such as preparing an offer or ongoing cooperation).",
      rightsTitle: "7. Your GDPR rights",
      rightsBody:
        "You have the right to: (1) request access to your data, (2) request correction of inaccurate data, (3) request deletion ('right to be forgotten'), (4) restrict processing, (5) object to processing, (6) request data portability. You can exercise your rights by contacting us at hello@freshstudio.hr.",
      section8Title: "8. Data security",
      section8Body:
        "We apply appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Access to data is restricted to authorized personnel within Fresh Studio.",
      section9Title: "9. Third-party cookies",
      section9Body:
        "We currently do not use any third-party cookies (such as Google Analytics or Meta Pixel). If we introduce them in the future, this Policy will be updated and users will be able to give explicit consent before they are activated.",
      contactTitle: "10. Contact for privacy and GDPR inquiries",
      contactBody:
        "For any questions regarding data protection, exercising your rights, or withdrawing consent, please contact us at: hello@freshstudio.hr.",
      disclaimer:
        "This document provides an overview of Fresh Studio's data protection practices and does not constitute legal advice. For a complete legal review of GDPR compliance, we recommend consulting a GDPR professional.",
    },
  },
};