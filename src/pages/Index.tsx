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
            <TabsList className="w-full max-w-full justify-between overflow-x-auto rounded-full border border-sky-200 bg-sky-100/80 backdrop-blur md:max-w-xl md:w-auto md:justify-start">
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
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10 sm:px-6 lg:px-10">
                <section className="rounded-[32px] border border-sky-200/60 bg-white/90 p-4 shadow-xl backdrop-blur sm:p-6">
                  <Hero />
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="rounded-[32px] border border-sky-200/70 bg-gradient-to-br from-white via-cyan-50/70 to-white p-4 shadow-xl backdrop-blur sm:p-6">
                    <AboutSection />
                  </div>
                  <div className="rounded-[32px] border border-sky-200/70 bg-gradient-to-br from-sky-900 to-blue-700 p-4 text-white shadow-xl sm:p-6">
                    <WhySection />
                  </div>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clases" className="mt-0">
            <div className="bg-gradient-to-br from-white via-sky-50 to-sky-100">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10 sm:px-6 lg:px-10">
                <section className="rounded-[32px] border border-sky-200/70 bg-white p-4 shadow-xl sm:p-6">
                  <HowSection />
                </section>
                <section className="rounded-[32px] border border-sky-200/70 bg-white p-4 shadow-xl sm:p-6">
                  <CourseStatsTable />
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="mt-0">
            <div className="bg-gradient-to-br from-white via-sky-50 to-sky-100">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10 sm:px-6 lg:px-10">
                <section className="rounded-[32px] border border-sky-200/70 bg-white p-4 shadow-xl sm:p-6">
                  <GlobalStats />
                </section>
                <section className="rounded-[32px] border border-sky-200/70 bg-white p-4 shadow-xl sm:p-6">
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
