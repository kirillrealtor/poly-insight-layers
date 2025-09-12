import Hero from "@/components/Hero";
import LiveTradingData from "@/components/LiveTradingData";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LiveTradingData />

      {/* Features Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              Why Choose PolyTICK_7?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-glow-primary">7 Layers</span> of Political Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Go beyond basic trading data with our comprehensive analysis system that gives you 
              the complete picture of political trading patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-primary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/06e50cc4-d546-4591-ab84-3c8b1f991915.png" 
                    alt="Real-time Analytics" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Data</h3>
                  <p className="text-muted-foreground">
                    Get instant updates on congressional trades as they're filed. No delays, no waiting.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-secondary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/44a4255e-83e0-45dd-ae99-2ca3183a4bce.png" 
                    alt="Pattern Analysis" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pattern Analysis</h3>
                  <p className="text-muted-foreground">
                    Advanced algorithms detect trading patterns and predict future moves based on political events.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-primary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/54a70550-1061-435b-aa4c-beea62769f0c.png" 
                    alt="Complete Coverage Network" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Coverage</h3>
                  <p className="text-muted-foreground">
                    Track all 535 members of Congress across both parties with granular detail.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-secondary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/e385a2b2-e72f-4d62-8659-03df90a48f9d.png" 
                    alt="Compliance Tracking" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor STOCK Act compliance and identify potential violations before they become news.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-primary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/c30d3306-b933-4003-87b6-979186981624.png" 
                    alt="Alert System" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Alert System</h3>
                  <p className="text-muted-foreground">
                    Get instant notifications when politicians make significant trades in your watchlist.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-8 hover-glow-primary group">
              <div className="space-y-6">
                <div className="h-32 w-full rounded-xl overflow-hidden bg-gradient-secondary group-hover:animate-glow">
                  <img 
                    src="/lovable-uploads/08df0559-b78a-45c3-a08e-473a74064850.png" 
                    alt="Premium Insights" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Insights</h3>
                  <p className="text-muted-foreground">
                    Access exclusive analysis and reports that connect political events to market movements.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/5">
              The Clear Choice
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Pay More for <span className="text-glow-secondary">Less</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare our comprehensive 7-layer analysis system with the competition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-glow overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* PolyTICK_7 */}
                <div className="p-8 bg-gradient-to-b from-primary/10 to-transparent">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-glow-primary">PolyTICK_7</div>
                    <div className="text-4xl font-black text-primary">$29.99</div>
                    <div className="text-muted-foreground">Both Parties</div>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">7 Layers of Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">Real-time Updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">All 535 Members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">Pattern Recognition</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">Compliance Tracking</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-primary hover-glow-primary">
                    Choose PolyTICK_7
                  </Button>
                </div>

                {/* UnusualWhales */}
                <div className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-muted-foreground">UnusualWhales</div>
                    <div className="text-4xl font-black text-destructive">$50.00</div>
                    <div className="text-muted-foreground">Basic Plan</div>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Basic Data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Delayed Updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Limited Coverage</span>
                    </div>
                    <div className="text-center text-muted-foreground text-sm mt-4">
                      67% More Expensive
                    </div>
                  </div>
                </div>

                {/* QuiverQuant */}
                <div className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-muted-foreground">QuiverQuant</div>
                    <div className="text-4xl font-black text-destructive">$45.00</div>
                    <div className="text-muted-foreground">Pro Plan</div>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Basic Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Standard Updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Partial Coverage</span>
                    </div>
                    <div className="text-center text-muted-foreground text-sm mt-4">
                      50% More Expensive
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-glow-primary">Follow the Money</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of traders who are already using PolyTICK_7 to make informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover-glow-primary text-lg px-8 py-6 group">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-glow-primary border-primary/20 text-primary">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;