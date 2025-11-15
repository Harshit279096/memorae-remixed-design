import { Card } from "@/components/ui/card";
import { Brain, Zap, Calendar, MessageSquare, Bell, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Instant Capture",
    description: "Dump your thoughts instantly via voice, text, or even screenshots. We'll handle the rest.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Zap,
    title: "Smart Organization",
    description: "AI automatically categorizes and prioritizes everything so you don't have to think twice.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Calendar,
    title: "Unified Calendar",
    description: "All your calendars, tasks, and reminders in one beautiful view. Nothing gets missed.",
    gradient: "from-accent to-primary",
  },
  {
    icon: MessageSquare,
    title: "Voice to Action",
    description: "Say it and forget it. Your voice notes become actionable tasks automatically.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Bell,
    title: "Intelligent Reminders",
    description: "Context-aware notifications that actually help instead of overwhelming you.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your thoughts are encrypted and private. We never sell your data. Period.",
    gradient: "from-accent to-secondary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Built for your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              chaotic mind
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We know you're not designed to remember everything. That's why we built something that does.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
