import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Database
} from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Got <span className="text-glow-primary">Questions</span>?
              <br />
              We've Got <span className="text-glow-secondary">Answers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about PolyTICK_7, political trading data, 
              and how we help you make better investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Database className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Data & Features</h3>
                <p className="text-sm text-muted-foreground">Learn about our data sources and platform capabilities</p>
              </div>
            </Card>

            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-secondary mx-auto">
                  <DollarSign className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold">Pricing & Plans</h3>
                <p className="text-sm text-muted-foreground">Understand our pricing structure and plan options</p>
              </div>
            </Card>

            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Security & Privacy</h3>
                <p className="text-sm text-muted-foreground">How we protect your data and ensure compliance</p>
              </div>
            </Card>

            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-secondary mx-auto">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold">Getting Started</h3>
                <p className="text-sm text-muted-foreground">Quick setup and onboarding information</p>
              </div>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Card className="card-glow p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Data & Features */}
                <AccordionItem value="data-source" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Where does your data come from?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Our data is sourced directly from Capitol Trades and official congressional disclosure filings. 
                    We parse the STOCK Act disclosure forms (PTR forms) that all members of Congress are required 
                    to file within 45 days of any trade. Our advanced parsing technology extracts every detail 
                    and cross-references multiple sources to ensure accuracy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="real-time" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How "real-time" is your data?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    While politicians have up to 45 days to disclose trades, we process new filings within 
                    minutes of them appearing in the official databases. When a disclosure is filed, you'll 
                    know about it almost instantly. We also monitor for late filings and compliance issues.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="seven-layers" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    What are the "7 Layers" of analysis?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Layer 1 (currently live) includes complete trading data, compliance tracking, pattern 
                    analysis, and real-time alerts. Layers 2-7 will add insider trading correlation analysis, 
                    committee assignment impact studies, voting record correlations, market timing analysis, 
                    sector rotation predictions, and advanced AI pattern recognition. Each layer builds on 
                    the previous ones to create unprecedented insight depth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accuracy" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How accurate is your data parsing?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Our parsing accuracy exceeds 99.7%. We use advanced OCR and natural language processing 
                    to extract data from PDF filings, then apply multiple validation layers. Every parsed 
                    entry is cross-checked against known patterns and flagged for human review if anomalies 
                    are detected. We also maintain audit trails for full transparency.
                  </AccordionContent>
                </AccordionItem>

                {/* Pricing & Plans */}
                <AccordionItem value="free-trial" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Is there really a free trial?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Yes! We offer a 7-day free trial for all plans. No credit card required to start. 
                    You get full access to all features during the trial period. We believe our data 
                    speaks for itself - once you see the quality and depth, you'll understand why 
                    we're confident enough to offer this.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="billing" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How does billing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    We bill monthly on the anniversary of your subscription start date. You can upgrade 
                    or downgrade at any time, and we'll prorate the charges. Cancel anytime - there are 
                    no long-term contracts or cancellation fees. We accept all major credit cards and PayPal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="value-prop" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Why is PolyTICK_7 cheaper than competitors?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    We believe political trading data should be accessible, not a luxury. Our efficient 
                    technology stack and direct data sourcing allow us to offer premium features at 
                    a fraction of competitors' prices. We make money through volume, not by charging 
                    excessive premiums to a small user base.
                  </AccordionContent>
                </AccordionItem>

                {/* Security & Privacy */}
                <AccordionItem value="data-security" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How do you protect my data?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    We use bank-level security with end-to-end encryption, secure cloud infrastructure, 
                    and regular security audits. All data is encrypted at rest and in transit. We never 
                    sell user data or share it with third parties. Your trading strategies and watchlists 
                    remain completely private.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="legal" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Is using this data legal for trading?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Absolutely. All congressional trading data is public information required by the 
                    STOCK Act of 2012. Using this data for investment decisions is completely legal 
                    and ethical. We're simply aggregating and analyzing public disclosures to help 
                    retail investors level the playing field.
                  </AccordionContent>
                </AccordionItem>

                {/* Getting Started */}
                <AccordionItem value="getting-started" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How quickly can I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    You can be up and running in under 2 minutes. Simply sign up, choose your plan 
                    (or start the free trial), and immediately access all available data. No lengthy 
                    onboarding process or complicated setup required. Our intuitive dashboard makes 
                    it easy to find the information you need right away.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    We offer email support for all users, with priority support for Full Congress 
                    subscribers. Our team includes former Wall Street analysts who understand both 
                    the technical and investment sides of political trading data. We also maintain 
                    comprehensive documentation and video tutorials.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="api" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Do you offer API access?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    API access is coming soon for Full Congress subscribers. This will allow you to 
                    integrate our data directly into your own trading systems, spreadsheets, or 
                    analysis tools. We're building a RESTful API with comprehensive documentation 
                    and rate limiting appropriate for retail and institutional use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mobile" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    Is there a mobile app?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    Our web platform is fully responsive and works great on mobile devices. A dedicated 
                    mobile app is in development and will be available for both iOS and Android. 
                    Mobile users will get push notifications for trade alerts and can access all 
                    platform features on the go.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="updates" className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    How often do you add new features?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    We ship new features and improvements every 2-4 weeks. Major updates (like new 
                    analysis layers) are released quarterly. We actively listen to user feedback 
                    and prioritize features that provide the most value to our community. Full 
                    Congress subscribers get early access to new features.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-glow p-12 text-center">
              <div className="space-y-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-primary mx-auto animate-glow">
                  <HelpCircle className="h-10 w-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    Still Have <span className="text-glow-primary">Questions</span>?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Our team is here to help. Get in touch and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-primary hover-glow-primary text-lg px-8 py-6 group">
                    Contact Support
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-glow-primary border-primary/20 text-primary">
                    Schedule Demo
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>24hr Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;