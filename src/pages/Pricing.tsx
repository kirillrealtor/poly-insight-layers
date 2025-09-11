import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Star, 
  Users, 
  Building,
  Crown,
  ArrowRight,
  Zap
} from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Choose Your <span className="text-glow-primary">Intelligence</span> Level
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get more political trading intelligence for less money than any competitor. 
              Start with individual politicians or unlock full congressional coverage.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual Plan */}
            <Card className="card-glow p-8 relative">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Individual Politician</h3>
                  <p className="text-muted-foreground">Perfect for focused tracking</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">$3.99</div>
                  <div className="text-muted-foreground">per politician / month</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Real-time trade notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Complete trading history</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Compliance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Pattern analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Email alerts</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover-glow-primary">
                  Start Tracking
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Cancel anytime • No setup fees
                </div>
              </div>
            </Card>

            {/* Party Plan */}
            <Card className="card-glow p-8 relative">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-secondary mx-auto">
                    <Building className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Single Party</h3>
                  <p className="text-muted-foreground">Democrat or Republican coverage</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-black text-secondary mb-2">$19.99</div>
                  <div className="text-muted-foreground">per party / month</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">All individual plan features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Complete party coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Cross-member analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Party trend insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Advanced filtering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Export capabilities</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-secondary hover-glow-secondary">
                  Choose Party
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Most popular choice • Great value
                </div>
              </div>
            </Card>

            {/* Full Access Plan */}
            <Card className="card-glow p-8 relative border-primary/50">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1">
                <Star className="h-3 w-3 mr-1" />
                Best Value
              </Badge>
              
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-primary mx-auto animate-glow">
                    <Crown className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Full Congress</h3>
                  <p className="text-muted-foreground">Complete bipartisan coverage</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">$29.99</div>
                  <div className="text-muted-foreground">all 535 members / month</div>
                  <div className="text-sm text-success mt-1">Save $10/month vs single parties</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm font-semibold">Everything in previous plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">All 535 Congress members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Bipartisan comparison tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">API access (coming soon)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary">Early access to new layers</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover-glow-primary text-lg py-6 group">
                  Get Full Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Most comprehensive • Best ROI
                </div>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <Card className="card-glow overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    How We <span className="text-glow-primary">Stack Up</span>
                  </h2>
                  <p className="text-muted-foreground">
                    See why PolyTICK_7 offers the best value in political trading intelligence
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-6">Features</th>
                        <th className="text-center py-4 px-6 text-primary font-bold">PolyTICK_7</th>
                        <th className="text-center py-4 px-6 text-muted-foreground">UnusualWhales</th>
                        <th className="text-center py-4 px-6 text-muted-foreground">QuiverQuant</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-4 px-6 font-medium">Monthly Price (Full Access)</td>
                        <td className="py-4 px-6 text-center text-primary font-bold">$29.99</td>
                        <td className="py-4 px-6 text-center text-destructive">$50.00</td>
                        <td className="py-4 px-6 text-center text-destructive">$45.00</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="py-4 px-6 font-medium">Real-time Updates</td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-success mx-auto" /></td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">All 535 Members</td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-success mx-auto" /></td>
                        <td className="py-4 px-6 text-center text-muted-foreground">Limited</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">Partial</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="py-4 px-6 font-medium">7 Layers Analysis</td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-success mx-auto" /></td>
                        <td className="py-4 px-6 text-center text-destructive">✗</td>
                        <td className="py-4 px-6 text-center text-destructive">✗</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">Compliance Tracking</td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-success mx-auto" /></td>
                        <td className="py-4 px-6 text-center text-destructive">✗</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">Basic</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="py-4 px-6 font-medium">Individual Politician Plans</td>
                        <td className="py-4 px-6 text-center"><CheckCircle className="h-5 w-5 text-success mx-auto" /></td>
                        <td className="py-4 px-6 text-center text-destructive">✗</td>
                        <td className="py-4 px-6 text-center text-destructive">✗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing <span className="text-glow-secondary">Questions</span></h2>
            <p className="text-muted-foreground">Everything you need to know about our pricing</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Can I switch between plans?</h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect 
                  immediately, and we'll prorate the billing accordingly.
                </p>
              </div>
            </Card>

            <Card className="card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 7-day free trial for all plans. No credit card required to start. 
                  Experience the full power of PolyTICK_7 risk-free.
                </p>
              </div>
            </Card>

            <Card className="card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards (Visa, MasterCard, American Express) 
                  and PayPal. All transactions are secured with bank-level encryption.
                </p>
              </div>
            </Card>

            <Card className="card-glow p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">How does the individual politician plan work?</h3>
                <p className="text-muted-foreground">
                  Choose any member of Congress to track for just $3.99/month. You get full 
                  access to their trading data, alerts, and analysis. Perfect for focused research.
                </p>
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
              Ready to Start <span className="text-glow-primary">Tracking</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of traders who are already using PolyTICK_7 to stay ahead 
              of political market movements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover-glow-primary text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-glow-primary border-primary/20 text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;