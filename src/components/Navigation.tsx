import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, BarChart3, Users, DollarSign } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: "/", label: "Home", icon: BarChart3 },
    { href: "/about", label: "About", icon: BarChart3 },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/faq", label: "FAQ", icon: Users },
    { href: "/contact", label: "Contact", icon: Users },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
      <nav className={`mx-auto rounded-2xl border border-border/20 bg-background/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'h-12 max-w-4xl' : 'h-16 max-w-6xl'
      }`}>
        <div className={`flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'h-12' : 'h-16'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className={`font-bold text-glow-primary transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}>PolyTICK_7</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary ${
                  isActive(href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
                {isActive(href) && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-primary animate-slide-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="outline" size="sm" className="hover-glow-primary">
              Sign In
            </Button>
            <Button className="bg-gradient-primary hover-glow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="card-glow">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-glow-primary">PolyTICK_7</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary ${
                        isActive(href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full hover-glow-primary">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-primary hover-glow-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;