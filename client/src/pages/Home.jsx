import React, { useState } from 'react';
import { ArrowRight, Shield, Database, TrendingUp, Users, DollarSign, BarChart3, CheckCircle, ChevronDown, ChevronUp, Play, Star } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const liveDataStats = [
    {
      title: "Active Politicians",
      value: "547",
      change: "+12",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Total Trades Tracked",
      value: "15,847",
      change: "+234",
      icon: BarChart3,
      color: "text-green-400"
    },
    {
      title: "Total Volume",
      value: "$2.4B",
      change: "+$45M",
      icon: DollarSign,
      color: "text-yellow-400"
    },
    {
      title: "Committees Monitored",
      value: "23",
      change: "+2",
      icon: Shield,
      color: "text-purple-400"
    }
  ];

  const faqs = [
    {
      question: "How does PolyTICK7 compare to Unusual Whales?",
      answer: "We offer the same core political trading data at a fraction of the cost. While Unusual Whales charges $50/month, our plans start at just $6.99/year for single politician tracking, with comprehensive party tracking at $19.99/month - saving you 60% or more."
    },
    {
      question: "What are the 7 layers of data analysis?",
      answer: "Our 7-layer system includes: (1) Real-time trade data, (2) Committee analysis, (3) Sector impact tracking, (4) Timing analysis, (5) Portfolio correlation, (6) Market influence mapping, and (7) Predictive modeling. Currently, layer 1 is live with others rolling out progressively."
    },
    {
      question: "How can this help me save thousands to millions?",
      answer: "By tracking politician trades before they become public knowledge, you can identify potential market movements early. Historical data shows that following congressional trades can lead to significant returns, with some trades showing 10-30% gains within months."
    },
    {
      question: "Is the data real-time and accurate?",
      answer: "Yes, we parse data directly from Capitol Trades and official congressional filings. Our system updates within hours of new filings, ensuring you get the most current information available."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. All our plans are flexible with no long-term commitments. You can upgrade, downgrade, or cancel at any time through your account dashboard."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 7-day free trial for all plans so you can experience the platform and see the value before committing to a subscription."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/image.png')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="text-blue-400">Poly</span>TICK<span className="text-blue-400">7</span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              7 Layers of Political Trading Intelligence
            </h2>
            
            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Help traders save <span className="text-green-400 font-bold">thousands to hundreds of thousands to millions</span> by tracking politician trades with unprecedented transparency and analysis.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <TrendingUp className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Maximize Returns</h3>
                <p className="text-gray-400 text-sm">Follow congressional trades that historically outperform the market</p>
              </div>
              
              <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <Shield className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Data</h3>
                <p className="text-gray-400 text-sm">Real-time access to all congressional trading activity</p>
              </div>
              
              <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <DollarSign className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Affordable Access</h3>
                <p className="text-gray-400 text-sm">60% cheaper than competitors like Unusual Whales</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25">
                <Play className="h-6 w-6" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200">
                View Live Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>7-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Live Data Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-lg">LIVE DATA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Data is <span className="text-blue-400">Currently Live</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time tracking of congressional trading activity with comprehensive analysis and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {liveDataStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <IconComponent className={`h-10 w-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-green-400 text-sm font-medium bg-green-400/20 px-3 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.title}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
              <Database className="h-5 w-5" />
              <span>Access Live Dashboard</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to know about PolyTICK7 and political trading intelligence.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-blue-500/50">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, <span className="text-blue-400">Affordable</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Get premium political trading insights at a fraction of the cost of competitors.
            </p>
            
            {/* Comparison Banner */}
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <Star className="h-5 w-5" />
                <span className="font-semibold">Save 60% compared to Unusual Whales ($50/month)</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Single Politician */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Single Politician</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">$6.99</span>
                  <span className="text-gray-400 ml-2">/year</span>
                </div>
                <p className="text-gray-400">Then $19.99/year</p>
              </div>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Single Party - Popular */}
            <div className="bg-slate-900 rounded-2xl p-8 border-2 border-blue-500 relative scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Most Popular</span>
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Single Party</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">$19.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Track all politicians from one party</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Both Parties */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Both Parties</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">$29.99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Complete access to all trades</p>
              </div>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              View Full Pricing Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;