import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart3,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import hero from "../assets/herosection.png";
import PoliticianExamples from "../components/PoliticianExamples";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparent Data",
      description: "All data sourced from official congressional filings with full transparency and verification."
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Get instant notifications when politicians make new trades or update their portfolios."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "7 layers of analysis including committee correlations, timing patterns, and market impact."
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Join thousands of traders following political moves and sharing market intelligence."
    },
    {
      icon: Clock,
      title: "Historical Data",
      description: "Access years of historical trading data to identify patterns and successful strategies."
    },
    {
      icon: Target,
      title: "Precision Tracking",
      description: "Track specific politicians, committees, or sectors with customizable filters and alerts."
    }
  ];

  const stats = [
    { number: "1,300+", label: "Trades Tracked", color: "text-blue-400" },
    { number: "40%+", label: "Average Returns", color: "text-green-400" },
    { number: "24/7", label: "Live Monitoring", color: "text-purple-400" },
    { number: "500+", label: "Active Users", color: "text-yellow-400" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Day Trader",
      content: "Following Pelosi's tech trades has been incredibly profitable. The timing insights are game-changing.",
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      role: "Investment Analyst",
      content: "The committee correlation data helped me predict the defense sector rally weeks before it happened.",
      avatar: "MR"
    },
    {
      name: "Jennifer Kim",
      role: "Portfolio Manager",
      content: "60% savings compared to other platforms, but with better data quality. No-brainer decision.",
      avatar: "JK"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
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

            {/* Subheadline */}
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
              7 Layers of Political Trading Intelligence
            </h2>

            {/* Value Proposition */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <span className="text-blue-400 font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                  Politicians turn $174K salaries into millions
                </span>{" "}
                through insider trading. Now you can follow their moves in real-time.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-3 md:p-4 text-center">
                    <div className={`text-xl md:text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
              <button className="w-full sm:w-48 px-6 py-3 md:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base md:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/70 hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              <button className="w-full sm:w-48 px-6 py-3 md:py-4 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold text-base md:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/70 hover:scale-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                <Play className="h-4 w-4 md:h-5 md:w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-gray-400 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  Trusted by Traders
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  No Long-term Contracts
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  Cancel Anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4 md:mb-6">
              <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm md:text-base">Live Demo Data</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Recent Political <span className="text-blue-400">Trades</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly what politicians are trading in real-time with our comprehensive tracking system.
            </p>
          </div>

          {/* Demo Table */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">#</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Politician</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Committees</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Party</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">State</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Company</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Ticker</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Type</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Amount</th>
                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-gray-300">Trade Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="hover:bg-slate-700/50 transition-colors">
                    <td className="px-3 md:px-4 py-3 text-gray-300">1</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">Nancy Pelosi</td>
                    <td className="px-3 md:px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">Financial Services</span>
                        <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">Budget</span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-600/20 text-blue-400">Democrat</span>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">CA</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">NVIDIA Corp</td>
                    <td className="px-3 md:px-4 py-3 text-blue-400 font-mono">NVDA</td>
                    <td className="px-3 md:px-4 py-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400">
                        <TrendingUp className="h-3 w-3" />
                        <span>Buy</span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300 font-semibold">$2.1M</td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">2024-01-15</td>
                  </tr>
                  <tr className="hover:bg-slate-700/50 transition-colors">
                    <td className="px-3 md:px-4 py-3 text-gray-300">2</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">Dan Crenshaw</td>
                    <td className="px-3 md:px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">Energy</span>
                    </td>
                    <td className="px-3 md:px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-600/20 text-red-400">Republican</span>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">TX</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">Exxon Mobil Corp</td>
                    <td className="px-3 md:px-4 py-3 text-blue-400 font-mono">XOM</td>
                    <td className="px-3 md:px-4 py-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400">
                        <TrendingUp className="h-3 w-3" />
                        <span>Buy</span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300 font-semibold">$890K</td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">2024-01-18</td>
                  </tr>
                  <tr className="hover:bg-slate-700/50 transition-colors">
                    <td className="px-3 md:px-4 py-3 text-gray-300">3</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">Austin Scott</td>
                    <td className="px-3 md:px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">Armed Services</span>
                    </td>
                    <td className="px-3 md:px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-600/20 text-red-400">Republican</span>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">GA</td>
                    <td className="px-3 md:px-4 py-3 font-medium text-white">Tesla Inc</td>
                    <td className="px-3 md:px-4 py-3 text-blue-400 font-mono">TSLA</td>
                    <td className="px-3 md:px-4 py-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-red-600/20 text-red-400">
                        <TrendingUp className="h-3 w-3 rotate-180" />
                        <span>Sell</span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-gray-300 font-semibold">$445K</td>
                    <td className="px-3 md:px-4 py-3 text-gray-300">2024-01-20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 md:p-6 bg-slate-700/50 border-t border-slate-600">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm md:text-base">
                  <AlertTriangle className="inline h-4 w-4 mr-2 text-yellow-400" />
                  This is live demo data. Get full access to thousands of trades.
                </p>
                <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 text-sm md:text-base">
                  View Full Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Why Choose <span className="text-blue-400">PolyTICK7</span>?
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced political trading intelligence with unmatched transparency and affordability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              What Our <span className="text-blue-400">Users</span> Say
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful traders who are already following political moves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Politician Examples Section */}
      <PoliticianExamples />

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Start <span className="text-blue-400">Following</span> the Money?
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Don't let politicians have all the advantages. Join PolyTICK7 today and start making informed investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:scale-105 text-sm md:text-base">
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-full transition-all duration-200 text-sm md:text-base">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;