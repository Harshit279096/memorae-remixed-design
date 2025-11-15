import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying things out",
    features: [
      "100 tasks per month",
      "Basic voice notes",
      "Single calendar sync",
      "Mobile app access",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "9",
    description: "For the productivity enthusiast",
    features: [
      "Unlimited tasks",
      "Advanced voice transcription",
      "All calendar integrations",
      "Priority reminders",
      "Team collaboration",
      "Priority support",
      "Custom workflows",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "199",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Early access to features",
      "VIP support",
      "Lifetime guarantee",
    ],
    cta: "Go Lifetime",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Choose your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              peace of mind
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you're ready. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 space-y-6 hover:shadow-glow transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-primary scale-105 shadow-glow"
                  : "border-2 hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full inline-block">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground mb-2">
                  /{plan.period || "month"}
                </span>
              </div>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>

              <div className="space-y-3 pt-4 border-t">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
