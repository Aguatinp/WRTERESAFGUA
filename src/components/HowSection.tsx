import { GraduationCap, Gift, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const roundSquareLogoUrl = "https://upload.wikimedia.org/wikipedia/en/2/24/Round_Square_logo.png";

const testimonyPlaceholders = [
  {
    title: "Testimony Slot 1",
    location: "Cerro Playa Ancha, Valparaiso",
    prompt: "Summarize how the family hauls water today and what their biggest challenge is while waiting for the filter.",
  },
  {
    title: "Testimony Slot 2",
    location: "Quebrada Verde, Valparaiso",
    prompt: "Describe the journey to fetch safe water and capture a quote about why the bucket delivery matters.",
  },
  {
    title: "Testimony Slot 3",
    location: "Laguna Verde, Valparaiso",
    prompt: "Share the caregiver's perspective on water scarcity and the hope they have for the Water is Life visit.",
  },
];

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
            <p className="text-sm text-muted-foreground">Per class & shared storytelling</p>
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

          <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent/20 hover:border-accent/40 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Family Donation</h3>
            <p className="text-muted-foreground mb-4">
              Families can donate individually, connect directly with the household that benefits, and appear on our honorable mentions wall.
            </p>
            <div className="text-3xl font-bold text-accent mb-2">Special</div>
            <Link
              to="/donors"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-2 text-sm font-semibold text-sky-950 shadow-lg transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              View Honorable Mentions
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <img
                src={roundSquareLogoUrl}
                alt="Round Square logo"
                className="h-12 w-12 rounded-lg border border-white/40 bg-white/90 p-1 object-contain"
              />
              <p className="text-sm uppercase tracking-[0.4em] text-white/80">Round Square Service</p>
            </div>
            <h3 className="text-3xl font-bold">Water is Life Round Square Mission</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              The organizing students of the Water is Life Round Square community in Craighouse lead every step, from preparing filter kits to
              planning the logistics that make each visit possible.
              <span className="block mt-4 font-semibold">
                We will go to Valparaiso to deliver the buckets to neighbors without drinkable water and share their testimonies about the
                daily struggle to secure every drop.
              </span>
            </p>
            <a
              href="#testimonies"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary shadow-lg shadow-black/20 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Read the Testimonies
            </a>
          </div>
        </div>

        <section
          id="testimonies"
          className="mt-12 rounded-2xl border border-border bg-card/60 p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Testimony Space</p>
            <h3 className="mt-3 text-3xl font-bold text-foreground">Stories from Valparaiso</h3>
            <p className="mt-4 text-muted-foreground">
              Use these cards to drop in each interviewee&apos;s photo and quote once the visit concludes. The button above scrolls directly
              here so visitors can focus on every testimony.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonyPlaceholders.map((slot) => (
              <article
                key={slot.title}
                className="flex flex-col rounded-2xl border border-sky-100/70 bg-white/80 p-4 shadow-inner shadow-sky-200/40"
              >
                <div className="mb-4 flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/70 text-center text-sm font-semibold text-sky-600">
                  Drop {slot.title} photo here
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">{slot.location}</p>
                <h4 className="mt-2 text-lg font-bold text-foreground">{slot.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{slot.prompt}</p>
              </article>
            ))}
          </div>
        </section>

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
