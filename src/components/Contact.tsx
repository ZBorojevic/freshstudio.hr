import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (will be replaced with actual email sending)
    setTimeout(() => {
      toast({
        title: t("contact.toastTitle"),
        description: t("contact.toastDesc"),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.infoEmail",
      content: "info@vasaagencija.com",
      href: "mailto:info@vasaagencija.com",
    },
    {
      icon: Phone,
      titleKey: "contact.infoPhone",
      content: "+381 11 123 4567",
      href: "tel:+381111234567",
    },
    {
      icon: Clock,
      titleKey: "contact.infoHours",
      contentKey: "contact.infoHoursContent",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">{t("contact.badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-large bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.nameLabel")} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.emailLabel")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.phoneLabel")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.phonePlaceholder")}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    {t("contact.messageLabel")} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.messagePlaceholder")}
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  variant="hero"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? t("contact.submitting") : t("contact.submitButton")}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  {t("contact.disclaimer")}
                </p>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 bg-card animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t(info.titleKey)}</h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.contentKey ? t(info.contentKey) : info.content}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="p-8 bg-gradient-hero text-white shadow-large">
                <h3 className="text-2xl font-bold mb-4">
                  {t("contact.benefitsTitle")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t("contact.benefit1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t("contact.benefit2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t("contact.benefit3")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t("contact.benefit4")}</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
