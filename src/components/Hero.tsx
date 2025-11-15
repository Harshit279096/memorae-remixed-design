import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mascot from "@/assets/mascot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Your mind deserves better</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Stop juggling thoughts.
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Start living freely.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TaskFlow captures everything flooding your mind and transforms it into organized action. 
            No more mental overload. Just clarity, focus, and peace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Start Free Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Clear minds</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                1M+
              </div>
              <div className="text-sm text-muted-foreground">Tasks completed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                4.9
              </div>
              <div className="text-sm text-muted-foreground">User rating</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                40+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>

          {/* Mascot */}
          <div className="pt-8 animate-float">
            <img
              src={mascot}
              alt="TaskFlow Assistant"
              className="w-32 h-32 mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
