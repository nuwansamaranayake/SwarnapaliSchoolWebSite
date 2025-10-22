import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import NewsSection from "@/components/NewsSection";
import GalleryPreview from "@/components/GalleryPreview";

export default function Home() {
  const { language } = useApp();

  return (
    <PageLayout>
      <Hero language={language} />
      <StatsSection language={language} />
      <PrincipalMessage language={language} />
      <NewsSection language={language} />
      <GalleryPreview language={language} />
    </PageLayout>
  );
}
