import { AlertCircle, TrendingUp, Heart } from "lucide-react";

const WhySection = () => {
  return (
    <section id="why" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Does This Matter?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            It offers a real solution to an urgent need: access to safe drinking water. Across Chile, many communities still cannot obtain clean water for drinking or cooking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">29%</div>
            <p className="text-muted-foreground">
              Only 29% of low-income households have safely managed water access
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-destructive" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">829K</div>
            <p className="text-muted-foreground">
              Annual deaths from diarrhea caused by contaminated water
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-5xl font-bold mb-4 text-foreground">1/4</div>
            <p className="text-muted-foreground">
              One in four primary schools lacks water service
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Tangible Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    When access to water improves, the time spent collecting it drops
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Community productivity rises
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Family health improves significantly
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Children can attend school consistently
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="Children with access to clean water"
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
