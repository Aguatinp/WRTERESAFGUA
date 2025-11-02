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
              alt="Water is Life - Craighouse School" 
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
              Bringing Clean Water to Families in Chile
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12 animate-scale-in">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0xobBO0NLuY?rel=0"
                title="Water is Life - Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Emotional Introduction */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Project: A Drop of Hope
            </h2>
            <div className="text-white/90 text-lg leading-relaxed space-y-4">
              <p>
                <strong>In Chile, thousands of families face a heartbreaking reality:</strong> they lack access to clean, safe water for drinking, cooking, or basic hygiene. Only <strong>29% of low-income households</strong> have safely managed water, and one in four primary schools has no water service.
              </p>
              <p>
                Contaminated water causes approximately <strong>829,000 deaths from diarrhea every year</strong> worldwide. When families gain reliable access to water, the time spent collecting it drops while productivity and community health rise.
              </p>
              <p>
                <strong>Water is Life</strong> is a nonprofit with more than 15 years of experience bringing safe drinking water, sanitation, and hygiene to vulnerable communities across Africa and Latin America. Their goal is to reach <strong>1 million people by 2030</strong> with dependable access to safe water at home, in schools, orphanages, and health centers.
              </p>
              <p className="text-xl font-semibold text-white border-l-4 border-aqua-bright pl-4">
                Our project grows out of this mission: every grade at Craighouse School, from pre-kindergarten through 12th grade, will donate an <strong>Ultra Filter Bucket</strong> that provides bacteriologically safe water to a family for <strong>3-5 years</strong> using nanotube ultrafiltration technology.
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
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-6 group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
