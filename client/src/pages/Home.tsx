import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import NewsSection from "@/components/NewsSection";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import StudentDashboard from "@/components/StudentDashboard";

export default function Home() {
  const [language, setLanguage] = useState<string>("en");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log('Login successful - showing student dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('Logged out - returning to main site');
  };

  if (isLoggedIn) {
    return <StudentDashboard language={language} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={() => setLoginModalOpen(true)}
        onLanguageChange={setLanguage}
        currentLanguage={language}
      />
      <Hero language={language} />
      <StatsSection language={language} />
      <PrincipalMessage language={language} />
      <NewsSection language={language} />
      <GalleryPreview language={language} />
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
