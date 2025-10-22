import { useApp } from "@/contexts/AppContext";
import StudentDashboard from "@/components/StudentDashboard";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { language, isLoggedIn, setIsLoggedIn } = useApp();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      setLocation("/");
    }
  }, [isLoggedIn, setLocation]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLocation("/");
  };

  if (!isLoggedIn) {
    return null;
  }

  return <StudentDashboard language={language} onLogout={handleLogout} />;
}
