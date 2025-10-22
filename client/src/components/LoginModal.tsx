import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogIn, Info } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess: () => void;
  language: string;
}

export default function LoginModal({ open, onOpenChange, onLoginSuccess, language }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const content = {
    en: {
      title: "Student Portal Login",
      description: "Enter your credentials to access the student portal",
      emailLabel: "Student Email",
      passwordLabel: "Password",
      loginButton: "Login to Portal",
      demoNotice: "Demo Credentials",
      demoEmail: "student@swarnapali.lk",
      demoPassword: "demo2025"
    },
    si: {
      title: "ශිෂ්‍ය පෝටලය පිවිසුම",
      description: "ශිෂ්‍ය පෝටලයට ප්‍රවේශ වීමට ඔබේ අක්තපත්‍ර ඇතුළත් කරන්න",
      emailLabel: "ශිෂ්‍ය විද්‍යුත් තැපෑල",
      passwordLabel: "මුරපදය",
      loginButton: "පෝටලයට පිවිසෙන්න",
      demoNotice: "ආදර්ශන අක්තපත්‍ර",
      demoEmail: "student@swarnapali.lk",
      demoPassword: "demo2025"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: remove mock functionality
    setTimeout(() => {
      setLoading(false);
      if (email === c.demoEmail && password === c.demoPassword) {
        onLoginSuccess();
        onOpenChange(false);
      } else {
        alert(language === 'en' ? 'Invalid credentials. Please use demo credentials.' : 'වලංගු නොවන අක්තපත්‍ර. කරුණාකර ආදර්ශන අක්තපත්‍ර භාවිතා කරන්න.');
      }
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <LogIn className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl" data-testid="text-login-title">
            {c.title}
          </DialogTitle>
          <DialogDescription className="text-center" data-testid="text-login-description">
            {c.description}
          </DialogDescription>
        </DialogHeader>

        <Alert className="bg-primary/10 border-primary/20">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <div className="font-semibold mb-1">{c.demoNotice}:</div>
            <div className="text-xs space-y-1">
              <div>{c.emailLabel}: <code className="bg-background/50 px-1 py-0.5 rounded">{c.demoEmail}</code></div>
              <div>{c.passwordLabel}: <code className="bg-background/50 px-1 py-0.5 rounded">{c.demoPassword}</code></div>
            </div>
          </AlertDescription>
        </Alert>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" data-testid="label-email">{c.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder={c.demoEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" data-testid="label-password">{c.passwordLabel}</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="input-password"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full hover-elevate active-elevate-2" 
            disabled={loading}
            data-testid="button-login-submit"
          >
            {loading ? (language === 'en' ? 'Logging in...' : 'පිවිසෙමින්...') : c.loginButton}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
