import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Single Politician",
      price: "$6.99",
      period: "/year",
      originalPrice: "$19.99/year afterwards",
      description: "Track one specific politician's trades",
      features: [
        "Real-time trade alerts",
        "Historical data access",
        "Committee information",
        "Basic analytics",
        "Mobile app access",
        "7-day free trial"
      ],
      popular: false,
      color: "border-slate-700"
    },
    {
      name: "Single Party",
      price: "$19.99",
      period: "/month",
      originalPrice: null,
      description: "Track all politicians from one party",
      features: [
        "All single politician features",
        "Party-wide analytics",
        "Comparative analysis",
        "Advanced filtering",
        "Export capabilities",
        "Priority support",
        "7-day free trial"
      ],
      popular: true,
      color: "border-blue-500"
    },
    {
      name: "Both Parties",
      price: "$29.99",
      period: "/month",
      originalPrice: null,
      description: "Complete access to all political trades",
      features: [
        "All previous features",
        "Cross-party analysis",
        "Sector impact tracking",
        "Advanced visualizations",
        "API access",
        "Custom alerts",
        "Premium support",
        "7-day free trial"
      ],
      popular: false,
      color: "border-slate-700"
    }
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, <span className="text-blue-400">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get premium political trading insights at a fraction of the cost. 
            No hidden fees, no long-term contracts.
          </p>
          
          {/* Comparison Banner */}
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-blue-400">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">Save 60% compared to Unusual Whales ($50/month)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800 rounded-2xl p-8 border-2 ${plan.color} ${
                plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'
              } transition-all duration-200 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-gray-500 text-sm mt-2">{plan.originalPrice}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">How does this compare to competitors?</h4>
              <p className="text-gray-400">We offer the same core features as Unusual Whales at 60% less cost, with additional layers of analysis coming soon.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-400">Yes, all subscriptions are month-to-month with no long-term commitments.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">What about the other 6 layers?</h4>
              <p className="text-gray-400">We're rolling out additional analysis layers progressively. Current subscribers get access to new features at no extra cost.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Is there a free trial?</h4>
              <p className="text-gray-400">We offer a 7-day free trial for all plans so you can experience the platform risk-free.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;