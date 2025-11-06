import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet } from "lucide-react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import GlobalStats from "@/components/GlobalStats";
import HouseGrid from "@/components/HouseGrid";
import CourseStatsTable from "@/components/CourseStatsTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Tabs defaultValue="informacion" className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-10 w-10 items-center justify-center">
                <Droplet className="h-8 w-8 text-primary" />
                <span className="absolute inset-0 rounded-full bg-primary/15 blur-lg" />
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground md:text-xl">Water is Life</p>
                <p className="text-sm text-muted-foreground">Craighouse School · Proyecto de Agua</p>
              </div>
            </div>
            <TabsList className="w-full max-w-xl justify-between bg-muted/60 md:w-auto md:justify-start">
              <TabsTrigger value="informacion" className="flex-1 md:flex-none">
                Información
              </TabsTrigger>
              <TabsTrigger value="clases" className="flex-1 md:flex-none">
                Clases
              </TabsTrigger>
              <TabsTrigger value="progreso" className="flex-1 md:flex-none">
                Progreso
              </TabsTrigger>
            </TabsList>
          </div>
        </header>

        <main className="flex-1">
          <TabsContent value="informacion" className="mt-0">
            <div className="space-y-16">
              <Hero />
              <AboutSection />
              <WhySection />
            </div>
          </TabsContent>

          <TabsContent value="clases" className="mt-0">
            <div className="space-y-16">
              <HowSection />
              <CourseStatsTable />
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="mt-0">
            <div className="space-y-16">
              <GlobalStats />
              <HouseGrid />
            </div>
          </TabsContent>
        </main>
      </Tabs>
      <Footer />
    </div>
  );
};

export default Index;
