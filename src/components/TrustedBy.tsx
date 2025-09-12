import { Badge } from "@/components/ui/badge";

const TrustedBy = () => {
  const companies = [
    "Coinbase", "Binance", "FTX", "Kraken", "Gemini", "Bitfinex", "Huobi", "OKX", 
    "KuCoin", "Crypto.com", "Uniswap", "Chainlink", "Polygon", "Solana", "Avalanche"
  ];

  return (
    <section className="py-16 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-4">
          Trusted Partners
        </Badge>
        <h3 className="text-2xl font-bold text-muted-foreground">
          Trusted by Leading <span className="text-glow-primary">Crypto Companies</span>
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-[scroll_30s_linear_infinite] space-x-8">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg hover-glow-primary transition-all duration-300"
            >
              <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;