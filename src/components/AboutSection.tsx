import { Droplets, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Qué es Nuestro Proyecto?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nuestro proyecto nace de la iniciativa de Water is Life, una organización que busca llevar agua limpia a comunidades necesitadas. Nos enfocamos en el producto Bucket Ultra Filter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">El Filtro Ultra</h3>
                <p className="text-muted-foreground">
                  El Bucket Ultra Filter proporciona agua bacteriológicamente segura para 3-5 años de uso diario utilizando tecnología de ultrafiltración con nanotubos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Conexión Familiar</h3>
                <p className="text-muted-foreground">
                  Nuestra propuesta es que cada clase done un filtro. Las familias también pueden donar directamente y conectar con la familia que lo recibe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Water is Life es una organización sin fines de lucro con más de 15 años de experiencia. Su misión es llevar agua potable, saneamiento e higiene a comunidades vulnerables.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9d42e55b3c3f?w=800&h=600&fit=crop"
                alt="Agua limpia para comunidades"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent to-secondary rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>

        {/* Key Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">¿Quiénes son Water is Life?</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Una organización sin fines de lucro comprometida con llevar agua segura a comunidades vulnerables en África y América Latina.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Años de experiencia llevando agua limpia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">1M</div>
              <div className="text-white/90">Meta: personas con acceso a agua segura para 2030</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
