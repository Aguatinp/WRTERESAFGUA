import { Button } from "@/components/ui/button";
import { Play, Heart, Droplet } from "lucide-react";
import waterLifeLogo from "@/assets/water-life-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-ocean-medium to-secondary">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua-bright rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Title */}
          <div className="text-center mb-12 animate-fade-in">
            <img 
              src={waterLifeLogo} 
              alt="Water is Life - Colegio Craighouse" 
              className="mx-auto mb-8 w-full max-w-2xl h-auto"
            />
            <div className="flex items-center justify-center gap-3 mb-6">
              <Droplet className="w-12 h-12 text-white animate-bounce" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Water is Life
              </h1>
              <Droplet className="w-12 h-12 text-white animate-bounce delay-150" />
            </div>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
              Llevando Agua Limpia a Familias Chilenas
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12 animate-scale-in">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0xobBO0NLuY?rel=0"
                title="Water is Life - Proyecto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Emotional Introduction */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Nuestro Proyecto: Una Gota de Esperanza
            </h2>
            <div className="text-white/90 text-lg leading-relaxed space-y-4">
              <p>
                <strong>En Chile, miles de familias enfrentan una realidad desgarradora:</strong> no tienen acceso a agua limpia y segura para beber, cocinar o mantener su higiene básica. Solo el <strong>29% de la población de bajos ingresos</strong> tiene acceso a agua gestionada de forma segura, y una de cada cuatro escuelas primarias carece de servicio de agua.
              </p>
              <p>
                El agua contaminada causa aproximadamente <strong>829,000 muertes por diarrea cada año</strong> en el mundo. Cuando las familias mejoran su acceso al agua, el tiempo dedicado a recolectarla disminuye, y aumentan la productividad y la salud comunitaria.
              </p>
              <p>
                <strong>Water is Life</strong> es una organización sin fines de lucro con más de 15 años de experiencia, cuya misión es llevar agua potable segura, saneamiento e higiene a comunidades vulnerables, principalmente en África y América Latina. Su objetivo es alcanzar <strong>1 millón de personas para 2030</strong> con acceso a agua segura en hogares, escuelas, orfanatos y centros de salud.
              </p>
              <p className="text-xl font-semibold text-white border-l-4 border-aqua-bright pl-4">
                Nuestro proyecto nace de esta iniciativa: cada curso del Colegio Craighouse, desde Prekínder hasta IV Medio, donará un <strong>Balde Ultrafiltro</strong> que proporcionará agua bacteriológicamente segura a una familia durante <strong>3-5 años</strong>, utilizando tecnología de ultrafiltración por nanotubos.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-8 py-6 shadow-xl group"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Donar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-6 group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Conoce Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
