import { GraduationCap, Users2, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowSection = () => {
  const scrollToDonate = () => {
    const element = document.getElementById("donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Cómo Puedes Ayudar?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hay diferentes formas de participar en este proyecto y llevar agua limpia a familias que la necesitan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Estudiantes Primaria</h3>
            <p className="text-muted-foreground mb-4">
              Pedimos a los estudiantes de primaria donar un filtro por clase
            </p>
            <div className="text-3xl font-bold text-primary mb-2">1 Filtro</div>
            <p className="text-sm text-muted-foreground">Por clase</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-secondary/20 hover:border-secondary/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Estudiantes Mayores</h3>
            <p className="text-muted-foreground mb-4">
              Los estudiantes de secundaria y preparatoria recolectan fondos por clase
            </p>
            <div className="text-3xl font-bold text-secondary mb-2">$50.000</div>
            <p className="text-sm text-muted-foreground">Costo de un filtro</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent/20 hover:border-accent/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Donación Familiar</h3>
            <p className="text-muted-foreground mb-4">
              Las familias pueden donar y conectar directamente con la familia beneficiada
            </p>
            <div className="text-3xl font-bold text-accent mb-2">Especial</div>
            <p className="text-sm text-muted-foreground">Conexión directa</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">La Experiencia de Donar</h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Una vez que cada clase haya recaudado suficientes fondos para un filtro, los donaremos a comunidades en Chile que carecen de acceso a agua limpia. 
              <span className="block mt-4 font-semibold">
                Esto sería muy especial, ya que la familia que dona el filtro podrá tener contacto con la familia que lo recibe.
              </span>
            </p>
            <Button 
              onClick={scrollToDonate}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl group"
            >
              Iniciar Donación
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Lo Que Incluye Cada Filtro</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Tecnología de Ultrafiltración</h4>
                <p className="text-muted-foreground">Con nanotubos para eliminar bacterias</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">3-5 Años de Uso</h4>
                <p className="text-muted-foreground">Agua segura para toda la familia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Fácil de Usar</h4>
                <p className="text-muted-foreground">No requiere electricidad ni químicos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Impacto Medible</h4>
                <p className="text-muted-foreground">Seguimiento de cada familia beneficiada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
