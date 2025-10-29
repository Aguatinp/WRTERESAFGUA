import { AlertCircle, TrendingUp, Heart } from "lucide-react";

const WhySection = () => {
  return (
    <section id="why" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Por Qué es Importante?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Proporciona una solución real a una necesidad urgente: el acceso a agua potable. En muchas partes de Chile, hay comunidades que no pueden acceder a agua limpia para beber o cocinar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">29%</div>
            <p className="text-muted-foreground">
              Solo el 29% de la población de bajos ingresos tiene acceso a agua gestionada de forma segura
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-destructive" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">829K</div>
            <p className="text-muted-foreground">
              Muertes anuales por diarrea causada por agua contaminada
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">1/4</div>
            <p className="text-muted-foreground">
              Una de cada cuatro escuelas primarias carece de servicio de agua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">El Impacto Real</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Cuando se mejora el acceso al agua, disminuye el tiempo dedicado a recolectarla
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Aumenta la productividad de la comunidad
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Mejora significativamente la salud de las familias
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Los niños pueden asistir a la escuela con regularidad
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="Niños con acceso a agua limpia"
                className="rounded-xl shadow-xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
