import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";
import hero from "../assets/herosection.png"; // imported hero section image
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen pt-24 flex items-center justify-center overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                Poly
              </span>
              <span className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                TICK
              </span>
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                7
              </span>
            </h1>

            {/* Subheadline (Always visible now, including mobile) */}
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
              7 Layers of Political Trading Intelligence
            </h2>

            {/* Value Proposition (Always visible now, including mobile) */}
            <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              Help traders save{" "}
              <span className="text-blue-400 font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                thousands to hundreds of thousands to millions
              </span>{" "}
              by tracking politician trades with unprecedented transparency and
              analysis.
            </p>

            {/* CTA Buttons - Hidden on mobile */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="w-48 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/70 hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="w-48 px-6 py-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/70 hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                <Play className="h-5 w-5" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Trust Indicators - Hidden on mobile */}
         {/* Trust Indicators - Visible on all screens */}
<div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 mt-6 sm:mt-8">
  <div className="flex items-center space-x-2">
    <CheckCircle className="h-5 w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
    <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
      Trusted by Traders
    </span>
  </div>
  <div className="flex items-center space-x-2">
    <CheckCircle className="h-5 w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
    <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
      No Long-term Contracts
    </span>
  </div>
  <div className="flex items-center space-x-2">
    <CheckCircle className="h-5 w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
    <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
      Cancel Anytime
    </span>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
