import React from 'react';
import { TrendingUp, DollarSign, Calendar, Building2 } from 'lucide-react';

const PoliticianExamples = () => {
  const examples = [
    {
      name: "Nancy Pelosi",
      description: "Her husband Paul Pelosi made high-profile trades in tech and finance stocks, often timed around legislative events.",
      keyTrades: ["Visa trades around payment legislation", "Nvidia trades around semiconductor policy"],
      netWorth: "$100M+",
      highlight: "Public 'Pelosi Tracker' shows retail investors following these trades benefited significantly"
    },
    {
      name: "Dan Crenshaw (R-TX)",
      description: "Member of House Intelligence and Financial Services Committees with portfolio beating market by 40% in 2024.",
      keyTrades: ["Microsoft shares amid AI/cybersecurity briefings (+25%)", "JPMorgan Chase financial sector plays"],
      netWorth: "$1M → $10M+ since 2019",
      highlight: "Portfolio grew $2-5M in 2024 alone, far exceeding his $174K salary"
    },
    {
      name: "Tommy Tuberville (R-AL)",
      description: "One of Congress's most active traders with 1,300+ trades since 2021, focusing on energy and defense.",
      keyTrades: ["ExxonMobil before OPEC+ cuts (30-50% returns)", "Defense stocks amid Ukraine aid discussions"],
      netWorth: "$2-5M → $15M+",
      highlight: "Made 500+ trades in 2023-2024 with minimal disclosure penalties"
    },
    {
      name: "2020 COVID-19 Scandal",
      description: "Senators sold stocks after classified pandemic briefings, avoiding market crash losses.",
      keyTrades: ["Richard Burr sold $1.7M in stocks", "Kelly Loeffler traded $1.275M post-briefing"],
      netWorth: "Avoided 34% market loss",
      highlight: "Burr's portfolio dropped only 2.8% vs S&P 500's 34% plunge"
    }
  ];

  const committees = [
    { name: "Armed Services", pages: 858 },
    { name: "Homeland Security", pages: 539 },
    { name: "Oversight and Reform", pages: 1018 },
    { name: "Strategic Competition US-CCP", pages: 711 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <TrendingUp className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-semibold">Examples of Political Profit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Politicians Turn{" "}
            <span className="text-blue-400">$174K Salaries</span>{" "}
            Into Millions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real examples of politicians leveraging insider knowledge to generate massive returns, 
            while retail investors are left in the dark.
          </p>
        </div>

        {/* Committee Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {committees.map((committee, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
              <Building2 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">{committee.name}</h3>
              <p className="text-2xl font-bold text-blue-400">{committee.pages}</p>
              <p className="text-sm text-gray-400">Pages of Intel</p>
            </div>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{example.name}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">{example.netWorth}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{example.description}</p>
              
              <div className="space-y-2 mb-4">
                <h4 className="text-white font-semibold text-sm">Key Trades:</h4>
                {example.keyTrades.map((trade, tradeIndex) => (
                  <div key={tradeIndex} className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-blue-400" />
                    <span>{trade}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-400 text-sm font-medium">{example.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stop Being Left Behind
            </h3>
            <p className="text-gray-300 mb-6">
              These profits compound over entire careers. Don't let politicians have all the advantages.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105">
              Start Tracking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticianExamples;