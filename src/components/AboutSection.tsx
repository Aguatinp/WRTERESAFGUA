import { Droplets, Users, Target } from "lucide-react";
import bucketImage from "@/assets/bucket.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Is Our Project?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our project stems from the Water is Life initiative, an organization dedicated to bringing clean water to communities in need. We focus on the Bucket Ultra Filter solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">The Ultra Filter</h3>
                <p className="text-muted-foreground">
                  The Bucket Ultra Filter delivers bacteriologically safe water for 3-5 years of daily use by leveraging nanotube ultrafiltration technology.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Family Connection</h3>
                <p className="text-muted-foreground">
                  We invite every class to donate a filter. Families can also contribute directly and connect with the household that receives their support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  Water is Life is a nonprofit with more than 15 years of experience. Its mission is to bring safe drinking water, sanitation, and hygiene to vulnerable communities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-white flex items-center justify-center p-6">
              <img
                src={bucketImage}
                alt="Water is Life ultra filter bucket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent to-secondary rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>

        {/* Key Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Who Is Water is Life?</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A nonprofit organization committed to delivering safe water to vulnerable communities across Africa and Latin America.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years providing clean water solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">1M</div>
              <div className="text-white/90">Goal: people with safe water access by 2030</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
