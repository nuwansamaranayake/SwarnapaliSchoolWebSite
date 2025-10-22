import { ReactNode } from "react";
import { useApp } from "@/contexts/AppContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { language, setLanguage, setIsLoggedIn, loginModalOpen, setLoginModalOpen } = useApp();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={() => setLoginModalOpen(true)}
        onLanguageChange={setLanguage}
        currentLanguage={language}
      />
      {children}
      <Footer language={language} />
      
      <LoginModal 
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
        language={language}
      />
    </div>
  );
}
