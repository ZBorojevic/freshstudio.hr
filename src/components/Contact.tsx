"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.freshstudio.hr/contact";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6Lf6IRIsAAAAAHAV4DCd7hptcg7e11y3UB0nUBF2";

const isValidName = (name: string) => {
  const trimmed = name.trim();
  if (trimmed.length < 3) return false;
  const nameRegex = /^[\p{L}\s'-]+$/u;
  return nameRegex.test(trimmed);
};

const isValidEmail = (email: string) => {
  const trimmed = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
};

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "", // honeypot
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onRecaptchaComplete = async (token: string | null) => {
    if (!token) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) throw new Error(data.error);

      toast({
        title: t("contact.toastTitle"),
        description: t("contact.toastDesc"),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
        privacyAccepted: false,
      });

      if (recaptchaRef.current) recaptchaRef.current.reset();
      setShowRecaptcha(false);
    } catch (err) {
      console.error(err);
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDesc"),
        variant: "destructive",
      });
    }

    if (!isValidName(formData.name)) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorName"),
        variant: "destructive",
      });
    }

    if (!isValidEmail(formData.email)) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorEmail"),
        variant: "destructive",
      });
    }

    if (!formData.subject.trim()) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorSubject"),
        variant: "destructive",
      });
    }

    if (formData.message.trim().length < 10) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorMessage"),
        variant: "destructive",
      });
    }

    if (!formData.privacyAccepted) {
      return toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorPrivacy"),
        variant: "destructive",
      });
    }

    if (!showRecaptcha) {
      setShowRecaptcha(true);
      return;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.infoEmail",
      content: "hello@freshstudio.hr",
      href: "mailto:hello@freshstudio.hr",
    },
    {
      icon: Phone,
      titleKey: "contact.infoPhone",
      content: "+385 99 447 2090",
      href: "tel:+385994472090",
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
          {/* Title */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">{t("contact.badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("contact.title")}{" "}
              <span className="text-primary">
                {t("contact.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <Card className="p-8 shadow-large bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden">
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("contact.nameLabel")} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("contact.emailLabel")} *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("contact.phoneLabel")}
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.phonePlaceholder")}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("contact.subjectLabel")} *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact.subjectPlaceholder")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("contact.messageLabel")} *
                  </label>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        privacyAccepted: e.target.checked,
                      }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="privacyAccepted"
                    className="text-sm text-muted-foreground"
                  >
                    {t("contact.privacyConsentPrefix")}{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary underline"
                      target="_blank"
                    >
                      {t("contact.privacyLinkText")}
                    </a>
                    .
                  </label>
                </div>

                {/* reCAPTCHA */}
                {showRecaptcha && (
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={onRecaptchaComplete}
                    />
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  variant="hero"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting
                    ? t("contact.submitting")
                    : t("contact.submitButton")}
                </Button>
              </form>
            </Card>

            {/* SIDEBAR */}
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-medium transition-all duration-300 bg-card animate-slide-in-left"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t(info.titleKey)}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">
                          {info.contentKey
                            ? t(info.contentKey)
                            : info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
