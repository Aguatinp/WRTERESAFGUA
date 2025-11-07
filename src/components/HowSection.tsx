import { GraduationCap, Gift, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const HowSection = () => {
  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How Can You Help?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            There are several ways to take part in this project and deliver clean water to families who need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Student Communities</h3>
            <p className="text-muted-foreground mb-4">
              Elementary, middle, and senior classes unite to fund one filter together and share updates with their paired family.
            </p>
            <div className="text-3xl font-bold text-primary mb-2">1 Filter</div>
            <p className="text-sm text-muted-foreground">Per class · shared storytelling</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-secondary/20 hover:border-secondary/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Filter Investment</h3>
            <p className="text-muted-foreground mb-4">
              Every ultra filter, bucket, hose, and training session costs a single fixed amount for the entire family.
            </p>
            <div className="text-3xl font-bold text-secondary mb-2">$60,000 CLP</div>
            <p className="text-sm text-muted-foreground">Complete kit price</p>
          </div>

          <Link
            to="/donors"
            className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent/20 hover:border-accent/40 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Family Donation</h3>
            <p className="text-muted-foreground mb-4">
              Families can donate individually, connect directly with the household that benefits, and appear on our honorable mentions wall.
            </p>
            <div className="text-3xl font-bold text-accent mb-2">Special</div>
            <p className="text-sm text-muted-foreground">Tap to view the Donor Wall</p>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">The Donation Experience</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Once each class has raised enough for a filter, we donate it to communities in Chile that lack access to clean water.
              <span className="block mt-4 font-semibold">
                The donating family can stay in touch with the family who receives the filter, making the impact personal.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">What Each Filter Includes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Ultrafiltration Technology</h4>
                <p className="text-muted-foreground">Nanotubes remove bacteria and pathogens</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">3-5 Years of Use</h4>
                <p className="text-muted-foreground">Safe water for the whole family</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Easy to Use</h4>
                <p className="text-muted-foreground">No electricity or chemicals required</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Measurable Impact</h4>
                <p className="text-muted-foreground">Track every family that benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
