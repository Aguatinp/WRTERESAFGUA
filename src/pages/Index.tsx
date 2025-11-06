import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, GraduationCap, HeartHandshake, LineChart } from "lucide-react";
import bucketImage from "@/assets/bucket.png";
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

        <main className="flex-1 bg-muted/20">
          <TabsContent value="informacion" className="mt-0">
            <div className="container mx-auto px-4 py-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
                <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-primary">
                    <Droplet className="h-6 w-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Proyecto Craighouse · Water is Life</span>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground md:text-4xl">Filtros ultrafinos para transformar comunidades</h1>
                  <p className="text-muted-foreground">
                    Cada curso adopta un filtro Ultra Water is Life y mantiene comunicación con la familia que recibe el apoyo.
                    Nuestro objetivo es llevar agua potable a hogares rurales y periurbanos por medio de tecnología portátil de ultrafiltración.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                      <p className="text-sm font-medium text-primary">Duración</p>
                      <p className="text-2xl font-bold text-primary">3-5 años</p>
                      <p className="text-sm text-primary/80">de agua potable continua para una familia.</p>
                    </div>
                    <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                      <p className="text-sm font-medium text-secondary">Meta general</p>
                      <p className="text-2xl font-bold text-secondary">138 hogares</p>
                      <p className="text-sm text-secondary/80">registrados en el plan Craighouse.</p>
                    </div>
                  </div>
                </div>
                <figure className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-lg">
                  <div className="bg-gradient-to-br from-white to-primary/10 p-6">
                    <img
                      src={bucketImage}
                      alt="Filtro Ultra Water is Life con manguera flexible"
                      className="mx-auto h-full w-full max-w-lg object-contain drop-shadow-2xl"
                    />
                  </div>
                  <figcaption className="border-t border-primary/20 bg-primary/5 px-6 py-3 text-center text-sm font-medium text-primary">
                    Filtro oficial según pantallazo · Water is Life
                  </figcaption>
                </figure>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <HeartHandshake className="mb-4 h-10 w-10 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Conexión directa</h3>
                  <p className="text-muted-foreground text-sm">
                    Las familias donantes reciben noticias del hogar beneficiado y mantienen un diálogo constante sobre el impacto.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <GraduationCap className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Aprendizaje aplicado</h3>
                  <p className="text-muted-foreground text-sm">
                    Cada curso integra el proyecto en sus actividades de servicio, reforzando empatía, investigación y acción social.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <LineChart className="mb-4 h-10 w-10 text-secondary" />
                  <h3 className="text-xl font-semibold text-foreground">Seguimiento continuo</h3>
                  <p className="text-muted-foreground text-sm">
                    Los resultados se miden con reportes mensuales de hogares entregados y familias alcanzadas.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clases" className="mt-0">
            <div className="container mx-auto px-4 py-10 space-y-10">
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">¿Cómo participa cada curso?</h2>
                <p className="mt-2 text-muted-foreground">
                  Organiza actividades, reúne $50.000 CLP y registra tu progreso. Cuando completes la meta asignaremos un filtro
                  a una familia y te enviaremos su información de contacto.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm font-medium text-primary">Primaria</p>
                    <p className="text-muted-foreground text-sm">Campañas en comunidad con foco en empatía y colaboración.</p>
                  </div>
                  <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                    <p className="text-sm font-medium text-secondary">Media</p>
                    <p className="text-muted-foreground text-sm">Fondos recaudados mediante emprendimientos sociales.</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                    <p className="text-sm font-medium text-accent">Familias</p>
                    <p className="text-muted-foreground text-sm">Aportes directos con mensajes para la familia beneficiada.</p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <CourseStatsTable />
              </section>
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="mt-0">
            <div className="container mx-auto px-4 py-10 space-y-10">
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <GlobalStats />
              </section>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <HouseGrid />
              </section>
            </div>
          </TabsContent>
        </main>
      </Tabs>
      <Footer />
    </div>
  );
};

export default Index;
