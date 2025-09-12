import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter, ExternalLink, TrendingUp, TrendingDown, BarChart3, Users, DollarSign } from 'lucide-react';

// API call for trades
const fetchTrades = async () => {
  const res = await axios.get("http://127.0.0.1:8000/trades/?skip=0&limit=1000");
  return res.data;
};

// API call for politicians
const fetchPoliticians = async () => {
  const res = await axios.get("http://127.0.0.1:8000/politicians");
  return res.data;
};

const Dashboard = () => {
  const { data: trades, isLoading: tradesLoading, isError: tradesError } = useQuery({
    queryKey: ["trades"],
    queryFn: fetchTrades,
  });

  const { data: politicians, isLoading: polLoading, isError: polError } = useQuery({
    queryKey: ["politicians"],
    queryFn: fetchPoliticians,
  });

  const [search, setSearch] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("");
  const [visibleRows, setVisibleRows] = useState(10);

  if (tradesLoading || polLoading) {
    return (
      <section className="py-20 bg-slate-900 min-h-screen">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        </div>
      </section>
    );
  }
  
  if (tradesError || polError) {
    return (
      <section className="py-20 bg-slate-900 min-h-screen">
        <div className="text-center py-20">
          <p className="text-red-400 text-lg">Error loading data. Please try again later.</p>
        </div>
      </section>
    );
  }

  // Quick lookup for politicians
  const politicianMap = {};
  politicians.forEach((p) => {
    politicianMap[p.id] = p;
  });

  // Mock stats data
  const stats = [
    {
      title: "Total Trades",
      value: trades?.length?.toLocaleString() || "0",
      change: "+12.5%",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Active Politicians",
      value: politicians?.length?.toString() || "0",
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

  // Filter trades
  const filteredTrades = trades.filter((trade) => {
    const pol = politicianMap[trade.politician_id];
    if (!pol) return false;

    const matchesSearch =
      pol.name.toLowerCase().includes(search.toLowerCase()) ||
      String(pol.id).includes(search) ||
      (pol.committees || []).some((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCommittee =
      !selectedCommittee ||
      (pol.committees || []).some((c) => c.name === selectedCommittee);

    return matchesSearch && matchesCommittee;
  });

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
          
          {/* Filters */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, ID, or committee..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCommittee}
                  onChange={(e) => setSelectedCommittee(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none min-w-[250px]"
                >
                  <option value="">All Committees</option>
                  {Array.from(
                    new Set(
                      politicians.flatMap((p) => p.committees?.map((c) => c.name) || [])
                    )
                  ).map((cname) => (
                    <option key={cname} value={cname}>
                      {cname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">#</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Politician</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Committees</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Party</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">State</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Company</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Ticker</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Trade Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Published</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Document</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredTrades.slice(0, visibleRows).map((trade, index) => {
                  const pol = politicianMap[trade.politician_id];
                  return (
                    <tr key={trade.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-300">{index + 1}</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">
                        {pol ? pol.name : `Unknown (${trade.politician_id})`}
                      </td>
                      
                      {/* Committees */}
                      <td className="px-4 py-3">
                        {pol?.committees?.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {pol.committees.map((c) => (
                              <span
                                key={c.id}
                                className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full"
                              >
                                {c.name}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">N/A</span>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          pol?.party === 'Republican' 
                            ? 'bg-red-600/20 text-red-400' 
                            : pol?.party === 'Democratic'
                            ? 'bg-blue-600/20 text-blue-400'
                            : 'bg-gray-600/20 text-gray-400'
                        }`}>
                          {pol?.party || "N/A"}
                        </span>
                      </td>
                      
                      <td className="px-4 py-3 text-sm text-gray-300">{pol?.state || "N/A"}</td>
                      <td className="px-4 py-3 text-sm text-white font-medium">{trade.issuer || "N/A"}</td>
                      <td className="px-4 py-3 text-sm text-blue-400 font-mono">{trade.ticker || "-"}</td>
                      
                      <td className="px-4 py-3">
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                          trade.trade_type?.toLowerCase() === "buy" 
                            ? 'bg-green-600/20 text-green-400' 
                            : 'bg-red-600/20 text-red-400'
                        }`}>
                          {trade.trade_type?.toLowerCase() === "buy" ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          <span>{trade.trade_type}</span>
                        </div>
                      </td>
                      
                      <td className="px-4 py-3 text-sm text-gray-300">{trade.size || "Unknown"}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">
                        {trade.trade_date
                          ? new Date(trade.trade_date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-300">
                        {trade.published_date
                          ? new Date(trade.published_date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-4 py-3">
                        {trade.filing_url ? (
                          <a 
                            href={trade.filing_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="text-sm">PDF</span>
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm">N/A</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Show More */}
          {visibleRows < filteredTrades.length && (
            <div className="flex justify-center p-6">
              <button
                onClick={() => setVisibleRows((prev) => prev + 10)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Show More ({filteredTrades.length - visibleRows} remaining)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;