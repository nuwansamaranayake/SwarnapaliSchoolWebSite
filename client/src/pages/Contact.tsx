import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Youtube,
  Instagram,
  Send
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { language } = useApp();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: language === 'en' ? "Message Sent!" : "පණිවිඩය යවන ලදී!",
      description: language === 'en' 
        ? "Thank you for contacting us. We'll get back to you soon."
        : "අප අමතන්නට ස්තූතියි. අපි ඉක්මනින් ඔබ වෙත නැවත එන්නෙමු.",
    });
    form.reset();
  };

  const content = {
    en: {
      pageTitle: "Contact Us",
      subtitle: "Get in touch with Swarnapali Balika National School",
      formTitle: "Send us a Message",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is this regarding?",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      submitButton: "Send Message",
      infoTitle: "Contact Information",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      hoursTitle: "Office Hours",
      hoursContent: "Monday - Friday: 8:00 AM - 3:00 PM",
      followTitle: "Follow Us"
    },
    si: {
      pageTitle: "අප අමතන්න",
      subtitle: "ස්වර්ණපාලි බාලිකා ජාතික පාසල සමඟ සම්බන්ධ වන්න",
      formTitle: "අපට පණිවිඩයක් යවන්න",
      nameLabel: "සම්පූර්ණ නම",
      namePlaceholder: "ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න",
      emailLabel: "විද්‍යුත් තැපැල් ලිපිනය",
      emailPlaceholder: "your.email@example.com",
      subjectLabel: "විෂයය",
      subjectPlaceholder: "මෙය කුමක් පිළිබඳද?",
      messageLabel: "පණිවිඩය",
      messagePlaceholder: "ඔබේ පණිවිඩය මෙහි ලියන්න...",
      submitButton: "පණිවිඩය යවන්න",
      infoTitle: "සම්බන්ධතා තොරතුරු",
      addressTitle: "ලිපිනය",
      phoneTitle: "දුරකථනය",
      emailTitle: "විද්‍යුත් තැපෑල",
      hoursTitle: "කාර්යාල වේලාව",
      hoursContent: "සඳුදා - සිකුරාදා: පෙ.ව. 8:00 - ප.ව. 3:00",
      followTitle: "අප අනුගමනය කරන්න"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <PageLayout>
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4" data-testid="text-page-title">
              {c.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200" data-testid="text-page-subtitle">
              {c.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="text-2xl" data-testid="text-form-title">
                    {c.formTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-name">{c.nameLabel}</FormLabel>
                            <FormControl>
                              <Input placeholder={c.namePlaceholder} {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-email">{c.emailLabel}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={c.emailPlaceholder} {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-subject">{c.subjectLabel}</FormLabel>
                            <FormControl>
                              <Input placeholder={c.subjectPlaceholder} {...field} data-testid="input-subject" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel data-testid="label-message">{c.messageLabel}</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={c.messagePlaceholder}
                                className="min-h-[150px] resize-none"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full hover-elevate active-elevate-2"
                        data-testid="button-submit-contact"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {c.submitButton}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle data-testid="text-info-title">{c.infoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-testid="text-address-title">
                        {c.addressTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-address">
                        Swarnapali Balika National School<br />
                        Main Street, Anuradhapura<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-testid="text-phone-title">
                        {c.phoneTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="tel:+94252222334" className="hover:text-primary transition-colors" data-testid="link-phone">
                          +94 25 222 2334
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-testid="text-email-title">
                        {c.emailTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:info@swarnapalibalika.lk" className="hover:text-primary transition-colors" data-testid="link-email">
                          info@swarnapalibalika.lk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-testid="text-hours-title">
                        {c.hoursTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-hours">
                        {c.hoursContent}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle data-testid="text-follow-title">{c.followTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover-elevate active-elevate-2"
                      data-testid="button-facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover-elevate active-elevate-2"
                      data-testid="button-youtube"
                    >
                      <Youtube className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover-elevate active-elevate-2"
                      data-testid="button-instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3!2d80.4!3d8.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMDAuMCJOIDgwwrAyNCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                    data-testid="iframe-map"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
