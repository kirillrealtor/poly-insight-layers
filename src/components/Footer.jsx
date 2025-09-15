import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Twitter,
  Github,
  Mail,
  Shield,
  Database,
  TrendingUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black/20 backdrop-blur-xl  shadow-[0_-4px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-9 w-9 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              <span className="text-2xl font-bold text-white">
                <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]">
                  Poly
                </span>
                TICK
                <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]">
                  7
                </span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Democratizing access to{" "}
              <span className="text-blue-400/90 font-medium">
                political trading data
              </span>{" "}
              with transparency, comprehensive analysis, and affordable pricing.
              Track politician trades with{" "}
              <span className="text-blue-400/90 font-medium">7 layers</span> of
              analysis.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Mail, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2 rounded-full bg-blue-500/10 text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "About", href: "/about" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500/40 pb-2">
              Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Shield className="h-5 w-5 text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span>Transparent Data</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Database className="h-5 w-5 text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span>7 Data Layers</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <TrendingUp className="h-5 w-5 text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span>Real-time Tracking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PolyTICK7. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
