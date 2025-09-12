import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LiveTradingData = () => {
  return (
    <section className="py-20 bg-background/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative animate-float">
            {/* Trading Charts Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/0ac3bba9-dd28-432d-88f2-249b7ce1948a.png" 
                alt="Financial Trading Charts" 
                className="h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
            </div>
            
            <div className="relative card-glow p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Live Trading Data</h3>
                  <Badge className="bg-success/20 text-success border-success/30">Live</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover-glow-primary transition-all duration-300">
                    <div>
                      <div className="font-semibold">Nancy Pelosi</div>
                      <div className="text-sm text-muted-foreground">NVDA Call Options</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-success">+$2.1M</div>
                      <div className="text-xs text-muted-foreground">7 days ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover-glow-primary transition-all duration-300">
                    <div>
                      <div className="font-semibold">Dan Crenshaw</div>
                      <div className="text-sm text-muted-foreground">XOM Holdings</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-success">+$890K</div>
                      <div className="text-xs text-muted-foreground">3 days ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover-glow-primary transition-all duration-300">
                    <div>
                      <div className="font-semibold">Austin Scott</div>
                      <div className="text-sm text-muted-foreground">TSLA Puts</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-warning">+$445K</div>
                      <div className="text-xs text-muted-foreground">1 day ago</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-secondary hover-glow-secondary">
                  View All Trades
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTradingData;