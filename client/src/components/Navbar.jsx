import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BarChart3 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
          ${isScrolled ? "mx-2 md:mx-6 lg:mx-12 mt-2 md:mt-4" : "mx-2 md:mx-4 mt-2 md:mt-6"} 
          rounded-full backdrop-blur-xl bg-black/60 border border-white/20 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <BarChart3 className="text-blue-400 h-6 w-6 md:h-7 md:w-7 group-hover:scale-110 transition-all drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              <span className="font-bold text-white text-lg md:text-xl">
                <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                  Poly
                </span>
                <span className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                  TICK
                </span>
                <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                  7
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative group px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
              <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 px-4 lg:px-5 py-2 text-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Slide-in Menu */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl shadow-2xl border-l border-white/10 transform transition-transform duration-300 ease-out">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <BarChart3 className="text-blue-400 h-7 w-7" />
                <span className="font-bold text-white text-xl">
                  <span className="text-blue-400">Poly</span>TICK<span className="text-blue-400">7</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="absolute bottom-6 left-6 right-6">
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;