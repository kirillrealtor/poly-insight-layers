import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageCircle, 
  Send,
  Clock,
  Shield,
  Users,
  Headphones
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Let's <span className="text-glow-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about PolyTICK_7? Need help getting started? Want to discuss 
              enterprise solutions? We're here to help.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Mail className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get help with technical issues, billing questions, or general inquiries.
                  </p>
                  <p className="text-primary font-semibold">support@polytick7.com</p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-secondary mx-auto">
                  <MessageCircle className="h-7 w-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chat with our team in real-time during business hours.
                  </p>
                  <p className="text-secondary font-semibold">Available 9AM - 6PM EST</p>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-6 text-center hover-glow-primary">
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary mx-auto">
                  <Headphones className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Schedule Call</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Book a personalized demo or consultation with our team.
                  </p>
                  <Button variant="outline" size="sm" className="border-primary/20 text-primary hover-glow-primary">
                    Book Call
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send us a <span className="text-glow-primary">Message</span></h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent issues, use our live chat or email support.
                </p>
              </div>

              <Card className="card-glow p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border min-h-32"
                      placeholder="Tell us more about your question or request..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover-glow-primary text-lg py-6 group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Why <span className="text-glow-secondary">Contact Us</span>?</h2>
                <p className="text-muted-foreground">
                  Our team is here to ensure you get the most value from PolyTICK_7. 
                  Here's how we can help:
                </p>
              </div>

              <div className="space-y-6">
                <Card className="card-glow p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 mt-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Onboarding Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Get personalized help setting up your account, configuring alerts, 
                        and understanding our analysis features.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-glow p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 mt-1">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Enterprise Solutions</h3>
                      <p className="text-sm text-muted-foreground">
                        Custom data feeds, API access, and white-label solutions 
                        for institutional clients and financial advisors.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-glow p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Feature Requests</h3>
                      <p className="text-sm text-muted-foreground">
                        Share your ideas for new features or analysis layers. 
                        We actively incorporate user feedback into our development roadmap.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Support Hours */}
              <Card className="card-glow p-6 border-primary/20">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Support Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Email support is available 24/7. We respond to all inquiries within 24 hours, 
                      often much faster during business hours.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Join the <span className="text-glow-primary">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with other traders using PolyTICK_7, share insights, and stay updated 
              on the latest political trading trends.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="card-glow p-6 hover-glow-primary">
                <div className="space-y-3">
                  <h3 className="font-semibold">Discord Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our active Discord server for real-time discussions and alerts.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary hover-glow-primary">
                    Join Discord
                  </Button>
                </div>
              </Card>

              <Card className="card-glow p-6 hover-glow-primary">
                <div className="space-y-3">
                  <h3 className="font-semibold">Reddit Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Participate in r/PolyTICK7 for analysis, tips, and market insights.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary hover-glow-primary">
                    Join Reddit
                  </Button>
                </div>
              </Card>

              <Card className="card-glow p-6 hover-glow-primary">
                <div className="space-y-3">
                  <h3 className="font-semibold">Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Weekly market insights and platform updates delivered to your inbox.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary hover-glow-primary">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;