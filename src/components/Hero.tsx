import { Button } from "@/components/ui/button";
import { Play, Droplet } from "lucide-react";
import waterLifeLogo from "@/assets/water-life-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-ocean-medium to-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[10%] top-[-10%] h-60 w-60 rounded-full bg-white blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] h-72 w-72 rounded-full bg-aqua-bright blur-[140px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1.1fr)] xl:gap-16">
            <div className="space-y-6 text-white">
              <img
                src={waterLifeLogo}
                alt="Water is Life - Craighouse School"
                className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur"
              />

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                  <Droplet className="h-5 w-5 text-white" />
                  <span>Proyecto comunitario</span>
                </div>
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Water is Life</h1>
                <p className="text-lg text-white/80 md:text-xl">
                  Brindamos agua limpia a familias en Chile a través de filtros ultravioleta que duran hasta cinco años y
                  conectan directamente a las comunidades con nuestras salas de clase.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <h2 className="text-2xl font-semibold text-white">Una gota de esperanza</h2>
                <p className="text-white/90">
                  <strong>29% de los hogares de bajos ingresos</strong> en Chile acceden a agua segura. Con cada filtro,
                  una familia obtiene agua potable para cocinar, estudiar y vivir con dignidad durante <strong>3 a 5 años</strong>.
                </p>
                <p className="text-white/90">
                  Cada curso de Craighouse se compromete con un balde ultrafiltro y mantiene el vínculo con la familia
                  que recibe el apoyo.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Conoce el proyecto
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/0xobBO0NLuY?rel=0"
                    title="Water is Life - Project"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="px-6 py-4 text-sm text-white/80">
                  Video resumen de la misión y el impacto de Water is Life en Chile.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
