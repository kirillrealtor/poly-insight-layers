import React from 'react';
import TradesTable from '../pages/TradesTable';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  // Mock stats data
  const stats = [
    {
      title: "Total Trades",
      value: "2,847",
      change: "+12.5%",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Active Politicians",
      value: "156",
      change: "+3.2%",
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Total Volume",
      value: "$45.2M",
      change: "+8.7%",
      icon: DollarSign,
      color: "text-yellow-400"
    },
    {
      title: "Avg Trade Size",
      value: "$15.8K",
      change: "-2.1%",
      icon: TrendingUp,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trading <span className="text-blue-400">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time insights into political trading activity with comprehensive data analysis.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-red-600/20 text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-2xl font-bold text-white">Recent Political Trades</h3>
            <p className="text-gray-400 mt-2">
              Live tracking of congressional trading activity with detailed analysis
            </p>
          </div>
          
          {/* Embed the TradesTable component */}
          <div className="bg-slate-900">
            <TradesTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;