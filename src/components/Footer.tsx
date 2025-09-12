import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-glow-primary">PolyTICK_7</h3>
            <p className="text-muted-foreground">
              The ultimate political trading intelligence platform with 7 layers of analysis.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover-glow-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">API</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Documentation</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest political trading insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-primary hover-glow-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 PolyTICK_7. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Political trading data for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;