import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, ArrowUpRight, ArrowDownRight } from "lucide-react";

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
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Politician</TableHead>
                        <TableHead>Committees</TableHead>
                        <TableHead>Party</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Ticker</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Trade Date</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>Document</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover-glow-primary">
                        <TableCell>1</TableCell>
                        <TableCell className="font-semibold">Nancy Pelosi</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">Financial Services</Badge>
                            <Badge variant="secondary" className="text-xs">Budget</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Democrat</Badge>
                        </TableCell>
                        <TableCell>CA</TableCell>
                        <TableCell>NVIDIA Corp</TableCell>
                        <TableCell className="font-mono">NVDA</TableCell>
                        <TableCell>
                          <Badge className="bg-success/20 text-success border-success/30">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            Buy
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-success">$2.1M</TableCell>
                        <TableCell>2024-01-15</TableCell>
                        <TableCell>2024-01-22</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="hover-glow-primary">
                        <TableCell>2</TableCell>
                        <TableCell className="font-semibold">Dan Crenshaw</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">Energy</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Republican</Badge>
                        </TableCell>
                        <TableCell>TX</TableCell>
                        <TableCell>Exxon Mobil Corp</TableCell>
                        <TableCell className="font-mono">XOM</TableCell>
                        <TableCell>
                          <Badge className="bg-success/20 text-success border-success/30">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            Buy
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-success">$890K</TableCell>
                        <TableCell>2024-01-18</TableCell>
                        <TableCell>2024-01-20</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="hover-glow-primary">
                        <TableCell>3</TableCell>
                        <TableCell className="font-semibold">Austin Scott</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">Armed Services</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Republican</Badge>
                        </TableCell>
                        <TableCell>GA</TableCell>
                        <TableCell>Tesla Inc</TableCell>
                        <TableCell className="font-mono">TSLA</TableCell>
                        <TableCell>
                          <Badge className="bg-destructive/20 text-destructive border-destructive/30">
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                            Sell
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-warning">$445K</TableCell>
                        <TableCell>2024-01-20</TableCell>
                        <TableCell>2024-01-21</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
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