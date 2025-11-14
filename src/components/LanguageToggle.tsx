import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-medium border border-border">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1">
        <Button
          variant={language === "hr" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("hr")}
          className="h-7 px-3 text-xs font-semibold rounded-full"
        >
          HR
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="h-7 px-3 text-xs font-semibold rounded-full"
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;
