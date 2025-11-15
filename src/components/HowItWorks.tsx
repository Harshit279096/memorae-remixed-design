import { Card } from "@/components/ui/card";
import appMockup from "@/assets/app-mockup.png";

const steps = [
  {
    number: "01",
    title: "Capture Everything",
    description: "Send a message, record a voice note, snap a screenshot. Whatever works for your brain in that moment.",
  },
  {
    number: "02",
    title: "Let AI Organize",
    description: "Our AI instantly sorts, categorizes, and creates actionable items from your scattered thoughts.",
  },
  {
    number: "03",
    title: "Take Action",
    description: "Get reminded at the right time, in the right place. Focus on doing, not remembering.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Steps */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Your brain,{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    finally organized
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Three simple steps to a clearer mind. No complexity, no friction, just results.
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-card transition-all duration-300 border-l-4 border-l-primary"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent opacity-50">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right side - App Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={appMockup}
                alt="TaskFlow App Interface"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
