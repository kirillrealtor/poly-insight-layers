import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">PolyTICK7</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're democratizing access to political trading data with unprecedented transparency, 
            comprehensive analysis, and affordable pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              PolyTICK7 was created to provide retail investors and researchers with the same level of 
              political trading insights that were previously only available to institutional investors 
              at premium prices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By parsing data from Capitol Trades and enhancing it with our proprietary 7-layer analysis 
              system, we deliver comprehensive insights at a fraction of the cost of competitors like 
              Unusual Whales.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Target className="h-10 w-10 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Precision</h4>
              <p className="text-gray-400 text-sm">Accurate, real-time data tracking</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Users className="h-10 w-10 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Community</h4>
              <p className="text-gray-400 text-sm">Built for retail investors</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Zap className="h-10 w-10 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Speed</h4>
              <p className="text-gray-400 text-sm">Lightning-fast updates</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Award className="h-10 w-10 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Value</h4>
              <p className="text-gray-400 text-sm">Premium features, fair pricing</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">The 7 Layers System</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { layer: 1, title: "Trade Data", status: "Live" },
              { layer: 2, title: "Committee Analysis", status: "Coming Soon" },
              { layer: 3, title: "Sector Impact", status: "Coming Soon" },
              { layer: 4, title: "Timing Analysis", status: "Coming Soon" },
              { layer: 5, title: "Portfolio Tracking", status: "Coming Soon" },
              { layer: 6, title: "Correlation Maps", status: "Coming Soon" },
              { layer: 7, title: "Predictive Models", status: "Coming Soon" }
            ].map((layer) => (
              <div key={layer.layer} className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center font-bold ${
                  layer.status === 'Live' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-700 text-gray-400'
                }`}>
                  {layer.layer}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{layer.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  layer.status === 'Live' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-700 text-gray-400'
                }`}>
                  {layer.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;