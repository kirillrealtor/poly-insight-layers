import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: "/", label: "Home", icon: TrendingUp },
    { href: "/about", label: "About", icon: BarChart3 },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/faq", label: "FAQ", icon: Users },
    { href: "/contact", label: "Contact", icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <TrendingUp className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-glow-primary">PolyTICK_7</span>
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
      </nav>
    </header>
  );
};

export default Navigation;