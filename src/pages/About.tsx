import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Shield,
  Zap,
  BarChart3
} from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBg} 
            alt="Political data network visualization" 
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              About PolyTICK_7_Layers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Democratizing <span className="text-glow-primary">Political</span>
              <br />
              <span className="text-glow-secondary">Trading Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe every trader deserves access to high-quality political trading data 
              without paying premium prices. PolyTICK_7 makes sophisticated analysis affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/5">
                  Our Mission
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Making Political Trading Data <span className="text-glow-primary">Accessible</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Political trading data has been locked behind expensive paywalls for too long. 
                While competitors charge $50+ for basic features, we deliver comprehensive 
                7-layer analysis at a fraction of the cost.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced parsing technology extracts every detail from Capitol Trades, 
                then applies sophisticated analysis layers to give you insights others miss.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="card-glow p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Precision</h3>
                      <p className="text-sm text-muted-foreground">Accurate data parsing</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-glow p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Trust</h3>
                      <p className="text-sm text-muted-foreground">Verified sources</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="card-glow p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why We're Different</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary mt-1">
                      <TrendingUp className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">7 Layers Deep</h4>
                      <p className="text-sm text-muted-foreground">
                        We don't just show trades - we analyze patterns, timing, compliance, 
                        and market impact across multiple dimensions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-secondary mt-1">
                      <Zap className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real-time Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Our advanced parsing engine processes new filings within minutes, 
                        not hours or days like competitors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary mt-1">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community Driven</h4>
                      <p className="text-sm text-muted-foreground">
                        Built by traders, for traders. We listen to our community and 
                        continuously improve based on real user needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The 7 Layers Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              The 7 Layers Explained
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-glow-primary">Layer 1</span> is Just the Beginning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While other platforms stop at basic trade data, we're building a comprehensive 
              intelligence system. Here's what Layer 1 includes, with 6 more layers coming soon.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-glow p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary animate-glow">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Foundation Layer - Live Now</h3>
                    <p className="text-muted-foreground">
                      Complete congressional trading data with real-time parsing, compliance tracking, 
                      and basic pattern analysis. This alone exceeds what most competitors offer.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <span className="text-sm">All 535 Members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm">Real-time Updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm">Compliance Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm">Pattern Detection</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[2, 3, 4, 5, 6, 7].map((layer) => (
                <Card key={layer} className="card-glow p-6 opacity-60">
                  <div className="text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted mx-auto">
                      <span className="text-lg font-bold text-muted-foreground">{layer}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Layer {layer}</h4>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/5">
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Built by <span className="text-glow-secondary">Experienced</span> Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep financial markets expertise with cutting-edge technology 
              to deliver insights that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-glow p-8 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Financial Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Former Wall Street analysts and traders who understand what data matters most.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-secondary mx-auto">
                  <Zap className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tech Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Engineers from top tech companies building scalable, reliable data infrastructure.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Community Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Active traders and community members who understand real-world needs.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Experience <span className="text-glow-primary">Layer 1</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with our foundation layer and get access to more political trading intelligence 
              than any competitor - at a fraction of the price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover-glow-primary text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-glow-primary border-primary/20 text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;