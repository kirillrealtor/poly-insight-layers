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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
        ${isScrolled ? "mx-6 md:mx-12 mt-2 md:mt-4" : "mx-3 md:mx-4 mt-4 md:mt-6"} 
        rounded-full backdrop-blur-xl bg-black/40 border border-white/20 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <BarChart3 className="text-blue-400 h-7 w-7 group-hover:scale-110 transition-all drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
            <span className="font-bold text-white text-xl">
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
                className={`relative group px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 px-5 py-2 text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

       {/* Mobile Navigation */}
{/* Mobile Navigation */}
<div
  className={`fixed inset-0 z-40 md:hidden transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
  {/* Overlay */}
  <div
    className="absolute inset-0 bg-black/60"
    onClick={() => setIsOpen(false)}
  ></div>

  {/* Slide-in Menu */}
  <div className="absolute top-0 right-0 h-full w-3/4 max-w-sm 
                  bg-black shadow-xl border-l border-white/10 
                  p-6 flex flex-col">
    
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <span className="font-bold text-white text-xl">
        {/* <span className="text-blue-400">Poly</span>TICK
        <span className="text-blue-400">7</span> */}
      </span>
      <button
        onClick={() => setIsOpen(false)}
        className="text-gray-300 hover:text-white"
      >
        <X className="h-6 w-6" />
      </button>
    </div>

    {/* Links */}
    <nav className="flex flex-col space-y-2 bg-black">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          onClick={() => setIsOpen(false)}
          className={`block w-full px-4 py-3 rounded-md text-lg font-medium transition-colors ${
            isActive(item.href)
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:bg-gray-800 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>

    {/* CTA */}
    <button className="mt-auto bg-gradient-to-r from-blue-600 to-blue-700 
                       hover:from-blue-700 hover:to-blue-800 
                       text-white px-5 py-3 rounded-full 
                       font-medium transition-all duration-200 shadow-lg">
      Get Started
    </button>
  </div>
</div>

       
      </div>
    </nav>
  );
};

export default Navbar;
