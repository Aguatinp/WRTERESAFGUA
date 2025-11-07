import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import brandLockup from "@/assets/water-life-logo.png";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import GlobalStats from "@/components/GlobalStats";
import HouseGrid from "@/components/HouseGrid";
import CourseStatsTable from "@/components/CourseStatsTable";
import Footer from "@/components/Footer";

const impactStats = [
  { label: "Duration", value: "3-5 years", description: "Clean water per family" },
  { label: "Homes Tracked", value: "138", description: "Filters followed by Craighouse" },
];

const whyStats = [
  { value: "29%", description: "Low-income households with safely managed water" },
  { value: "829,000", description: "Annual deaths linked to unsafe water" },
  { value: "1 in 4", description: "Primary schools without reliable water service" },
];

const InfoHero = () => (
  <section className="grid gap-6 rounded-[32px] border border-sky-200/60 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-600 p-6 text-white shadow-2xl lg:grid-cols-[1.05fr,0.95fr]">
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">Community Project</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Water is Life</h1>
        <p className="mt-4 text-white/85">
          We bring clean water to families in Chile through ultra filters that last up to five years and keep a direct connection between
          communities and Craighouse classrooms.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {impactStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white/10 p-4 shadow-inner backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-white/70">{stat.description}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-white/70">
        Each class or family sponsors one filter, meets the receiving household, and follows their story throughout the year.
      </p>
    </div>
    <div className="rounded-[28px] bg-white/10 p-4 shadow-xl backdrop-blur">
      <div className="relative aspect-video overflow-hidden rounded-[24px] bg-black/30">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/0xobBO0NLuY?rel=0"
          title="Water is Life - Craighouse Campaign"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-center text-sm text-white/85">Campaign video featuring Craighouse students greeting every family.</p>
    </div>
  </section>
);

const ImpactPanel = () => (
  <section className="rounded-[32px] border border-sky-200/60 bg-gradient-to-br from-sky-900 to-blue-700 p-6 text-white shadow-2xl">
    <h3 className="text-2xl font-bold">Why it matters</h3>
    <p className="mt-3 text-sm text-white/85">
      Access to safe water is still out of reach for many Chilean communities. Each filter changes routines for children, caregivers, and
      schools that depend on hauling water.
    </p>
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {whyStats.map((stat) => (
        <div key={stat.value} className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="mt-1 text-sm text-white/80">{stat.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <Tabs defaultValue="information" className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src={brandLockup} alt="Water is Life and Craighouse School" className="h-20 w-auto object-contain drop-shadow-2xl" />
              <p className="text-lg font-semibold text-foreground md:text-xl">Water is Life</p>
            </div>
            <TabsList className="w-full max-w-full justify-between overflow-x-auto rounded-full border border-sky-200 bg-sky-100/80 backdrop-blur md:max-w-xl md:w-auto md:justify-start">
              <TabsTrigger value="information" className="flex-1 whitespace-nowrap md:flex-none">
                Information
              </TabsTrigger>
              <TabsTrigger value="classes" className="flex-1 whitespace-nowrap md:flex-none">
                Classes
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex-1 whitespace-nowrap md:flex-none">
                Progress
              </TabsTrigger>
            </TabsList>
          </div>
        </header>

        <main className="flex-1 bg-muted/10">
          <TabsContent value="information" className="mt-0">
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10 sm:px-6 lg:px-10">
                <InfoHero />
                <section className="rounded-[32px] border border-sky-200/70 bg-gradient-to-br from-white via-cyan-50/70 to-white p-4 shadow-xl backdrop-blur sm:p-6">
                  <AboutSection />
                </section>
                <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="rounded-[32px] border border-sky-200/70 bg-white/95 p-4 shadow-xl sm:p-6">
                    <WhySection />
                  </div>
                  <ImpactPanel />
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="classes" className="mt-0">
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

          <TabsContent value="progress" className="mt-0">
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
