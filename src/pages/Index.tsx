import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import brandLockup from "@/assets/water-life-logo.png";
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
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <Tabs defaultValue="informacion" className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={brandLockup}
                alt="Water is Life and Craighouse School"
                className="h-20 w-auto object-contain drop-shadow-2xl"
              />
              <div>
                <p className="text-lg font-semibold text-foreground md:text-xl">Water is Life</p>
              </div>
            </div>
            <TabsList className="w-full max-w-xl justify-between rounded-full border border-sky-200 bg-sky-100/80 backdrop-blur md:w-auto md:justify-start">
              <TabsTrigger value="informacion" className="flex-1 md:flex-none">
                Informacion
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

        <main className="flex-1 bg-muted/10">
          <TabsContent value="informacion" className="mt-0">
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100">
              <div className="container mx-auto flex flex-col gap-10 px-4 py-10">
                <section className="rounded-3xl border border-sky-200/60 bg-white/90 p-6 shadow-xl backdrop-blur">
                  <Hero />
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="space-y-6 rounded-3xl border border-sky-200/70 bg-gradient-to-br from-white via-cyan-50/70 to-white p-6 shadow-xl backdrop-blur">
                    <AboutSection />
                  </div>
                  <div className="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-900 to-blue-700 p-6 text-white shadow-xl">
                    <WhySection />
                  </div>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clases" className="mt-0">
            <div className="bg-gradient-to-br from-white via-sky-50 to-sky-100">
              <div className="container mx-auto flex flex-col gap-10 px-4 py-10">
                <section className="rounded-3xl border border-sky-200/70 bg-white p-6 shadow-xl">
                  <HowSection />
                </section>
                <section className="rounded-3xl border border-sky-200/70 bg-white p-6 shadow-xl">
                  <CourseStatsTable />
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="mt-0">
            <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
              <div className="container mx-auto flex flex-col gap-12 px-4 py-12">
                <section className="rounded-3xl border border-sky-200/70 bg-white p-6 shadow-lg">
                  <GlobalStats />
                </section>
                <section className="rounded-3xl border border-sky-200/70 bg-white p-6 shadow-lg">
                  <HouseGrid />
                </section>
              </div>
            </div>
          </TabsContent>
        </main>
      </Tabs>
      <Footer />
    </div>
  );
};

export default Index;
