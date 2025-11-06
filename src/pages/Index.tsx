import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, GraduationCap, HeartHandshake, LineChart, Sparkles } from "lucide-react";
import bucketImage from "@/assets/bucket.png";
import brandLockup from "@/assets/water-life-logo.png";
import GlobalStats from "@/components/GlobalStats";
import HouseGrid from "@/components/HouseGrid";
import CourseStatsTable from "@/components/CourseStatsTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Tabs defaultValue="informacion" className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={brandLockup}
                alt="Water is Life y Craighouse School"
                className="h-12 w-auto rounded-md border border-primary/20 bg-white/80 p-2 shadow-sm"
              />
              <div>
                <p className="text-lg font-semibold text-foreground md:text-xl">Water is Life</p>
                <p className="text-sm text-muted-foreground">Craighouse School · Proyecto de Agua</p>
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
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 py-12">
              <div className="container mx-auto px-4">
                <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
                  <div className="space-y-6 rounded-3xl border border-sky-200 bg-white/85 p-8 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-3 text-primary">
                      <Droplet className="h-6 w-6" />
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                        Proyecto Craighouse · Water is Life
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-sky-900 md:text-4xl">Filtros ultrafinos para transformar comunidades</h1>
                    <p className="text-sky-900/80">
                      Cada curso adopta un filtro Ultra Water is Life y mantiene contacto con la familia que recibe el apoyo. El objetivo es
                      llevar agua potable a hogares rurales y periurbanos por medio de tecnologia portatil de ultrafiltracion.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-white via-primary/10 to-primary/5 p-4 shadow-sm">
                        <p className="text-sm font-medium text-primary">Duracion</p>
                        <p className="text-2xl font-bold text-primary">3-5 anos</p>
                        <p className="text-sm text-primary/80">de agua potable continua para una familia.</p>
                      </div>
                      <div className="rounded-2xl border border-secondary/30 bg-gradient-to-br from-white via-secondary/10 to-secondary/5 p-4 shadow-sm">
                        <p className="text-sm font-medium text-secondary">Meta general</p>
                        <p className="text-2xl font-bold text-secondary">138 hogares</p>
                        <p className="text-sm text-secondary/80">registrados en el plan Craighouse.</p>
                      </div>
                    </div>
                  </div>
                  <figure className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/85 shadow-lg backdrop-blur">
                    <div className="bg-gradient-to-br from-white to-sky-100 p-6">
                      <img
                        src={bucketImage}
                        alt="Filtro Ultra Water is Life con manguera flexible"
                        className="mx-auto h-full w-full max-w-lg object-contain drop-shadow-2xl"
                      />
                    </div>
                    <figcaption className="flex items-center justify-center gap-2 border-t border-sky-200 bg-sky-50 px-6 py-3 text-sm font-medium text-primary">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Filtro oficial segun pantallazo · Water is Life
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-md backdrop-blur transition-shadow hover:shadow-xl">
                    <HeartHandshake className="mb-4 h-10 w-10 rounded-full bg-accent/10 p-2 text-accent" />
                    <h3 className="text-xl font-semibold text-sky-900">Conexion directa</h3>
                    <p className="text-sm text-sky-900/80">
                      Las familias donantes reciben noticias del hogar beneficiado y mantienen un dialogo constante sobre el impacto.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-md backdrop-blur transition-shadow hover:shadow-xl">
                    <GraduationCap className="mb-4 h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                    <h3 className="text-xl font-semibold text-sky-900">Aprendizaje aplicado</h3>
                    <p className="text-sm text-sky-900/80">
                      Cada curso integra el proyecto en actividades de servicio que refuerzan empatia, investigacion y accion social.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-md backdrop-blur transition-shadow hover:shadow-xl">
                    <LineChart className="mb-4 h-10 w-10 rounded-full bg-secondary/10 p-2 text-secondary" />
                    <h3 className="text-xl font-semibold text-sky-900">Seguimiento continuo</h3>
                    <p className="text-sm text-sky-900/80">
                      Los resultados se miden con reportes mensuales de hogares entregados y familias acompanadas.
                    </p>
                  </div>
                </div>

                <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="space-y-6 rounded-3xl border border-sky-200 bg-white/85 p-8 shadow-lg backdrop-blur">
                    <h2 className="text-2xl font-bold text-sky-900">Como funciona el filtro Ultra</h2>
                    <p className="text-sky-900/80">
                      El sistema usa nanotubos de ultrafiltracion que eliminan bacterias y sedimentos. No requiere electricidad ni quimicos: solo
                      gravedad. Cada kit incluye cubeta, manguera y boquilla filtrante para uso seguro en casa.
                    </p>
                    <ul className="grid gap-4 md:grid-cols-2">
                      <li className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-primary">
                        <p className="text-xs font-semibold uppercase tracking-wide">Instalacion rapida</p>
                        <p className="text-sm text-primary/90">Se arma en menos de quince minutos siguiendo el manual ilustrado.</p>
                      </li>
                      <li className="rounded-2xl border border-secondary/20 bg-secondary/10 p-4 text-secondary">
                        <p className="text-xs font-semibold uppercase tracking-wide">Mantenimiento</p>
                        <p className="text-sm text-secondary/90">Solo requiere enjuague semanal y reemplazo del cartucho cada cinco anos.</p>
                      </li>
                      <li className="rounded-2xl border border-accent/20 bg-accent/10 p-4 text-accent">
                        <p className="text-xs font-semibold uppercase tracking-wide">Capacidad</p>
                        <p className="text-sm text-accent/90">Produce hasta 40 litros diarios, suficiente para una familia de cinco personas.</p>
                      </li>
                      <li className="rounded-2xl border border-sky-300 bg-sky-100 p-4 text-sky-900">
                        <p className="text-xs font-semibold uppercase tracking-wide">Impacto medible</p>
                        <p className="text-sm text-sky-800">Reduce enfermedades gastrointestinales y mejora la asistencia escolar.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-blue-700 p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold">?Por que es importante?</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                      El acceso a agua limpia sigue siendo limitado en muchas comunas de Chile. Cada filtro entregado brinda una solucion real para
                      cocinar, beber y cuidar la salud de las familias.
                    </p>
                    <div className="mt-6 grid gap-4">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-4xl font-bold">29%</p>
                        <p className="text-sm text-white/80">
                          de los hogares de bajos ingresos tiene agua gestionada de forma segura.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-4xl font-bold">829.000</p>
                        <p className="text-sm text-white/80">muertes anuales por enfermedades diarreicas relacionadas con el agua.</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-4xl font-bold">1 de 4</p>
                        <p className="text-sm text-white/80">escuelas primarias en Chile no tiene servicio de agua potable.</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-white/75">
                      Cuando el acceso al agua mejora, baja el tiempo de recoleccion y aumenta la productividad, la salud y la asistencia escolar.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clases" className="mt-0">
            <div className="container mx-auto px-4 py-10 space-y-10">
              <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-md">
                <h2 className="text-2xl font-bold text-foreground">Como participa cada curso</h2>
                <p className="mt-2 text-muted-foreground">
                  Organiza actividades, reune $50.000 CLP y registra tu progreso. Cuando completes la meta asignaremos un filtro a una familia y
                  enviaremos su informacion de contacto.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm font-medium text-primary">Primaria</p>
                    <p className="text-sm text-muted-foreground">Campanas con foco en empatia y colaboracion comunitaria.</p>
                  </div>
                  <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                    <p className="text-sm font-medium text-secondary">Media</p>
                    <p className="text-sm text-muted-foreground">Emprendimientos sociales y ferias solidarias para recaudar fondos.</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                    <p className="text-sm font-medium text-accent">Familias</p>
                    <p className="text-sm text-muted-foreground">Aportes directos con mensajes de apoyo a la familia beneficiada.</p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-md">
                <CourseStatsTable />
              </section>
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="mt-0">
            <div className="container mx-auto px-4 py-10 space-y-10">
              <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-md">
                <GlobalStats />
              </section>
              <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-md">
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
