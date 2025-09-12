import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, DollarSign, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark pt-16">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Political Trading Analytics Dashboard" 
          className="h-full w-full object-cover opacity-15"
        />
        <img 
          src="/lovable-uploads/907e3534-237b-48af-a043-747c8ed327e1.png" 
          alt="Trading Charts and Candlesticks" 
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-glow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto text-center min-h-[90vh] flex flex-col justify-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge variant="outline" className="inline-flex items-center space-x-2 px-4 py-2 text-primary border-primary/20 bg-primary/5">
              <TrendingUp className="h-4 w-4" />
              <span>7 Layers of Political Intelligence</span>
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Political Trading
                <span className="text-glow-primary block">Intelligence</span>
                <span className="text-glow-secondary block">Redefined</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Access congressional trading data with 7 layers of analysis. Get the insights you need 
                at a fraction of the cost of competitors like UnusualWhales.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/20">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">$29.99</div>
                  <div className="text-xs text-muted-foreground">vs $50+ others</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">535 Politicians</div>
                  <div className="text-xs text-muted-foreground">Full coverage</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">7 Layers</div>
                  <div className="text-xs text-muted-foreground">Deep analysis</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover-glow-primary text-lg px-8 py-6 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-glow-primary border-primary/20 text-primary"
              >
                View Pricing
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>Trusted by traders on:</span>
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Reddit Finance</span>
                <span className="font-semibold">Discord</span>
                <span className="font-semibold">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;