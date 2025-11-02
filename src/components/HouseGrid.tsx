import { Home } from "lucide-react";
import { useHouses } from "@/hooks/useDonations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HouseGrid = () => {
  const { data: houses, isLoading } = useHouses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-pulse text-muted-foreground">Loading homes...</div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Homes with Clean Water
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each home represents a family that now has access to clean water thanks to the generosity of our donor classes.
          </p>
        </div>

        {/* House Grid - Similar to tree visualization */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-12">
              <TooltipProvider>
                <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-18 gap-2 max-w-7xl mx-auto">
                  {houses?.map((house) => (
                    <Tooltip key={house.id}>
                      <TooltipTrigger asChild>
                        <div className="relative group cursor-pointer">
                          <Home
                            className={`w-8 h-8 transition-all duration-300 ${
                              house.is_active
                                ? "text-primary hover:text-secondary transform hover:scale-110"
                                : "text-muted-foreground/40 hover:text-muted-foreground/70"
                            }`}
                          />
                        </div>
                      </TooltipTrigger>
                      {house.courses ? (
                        <TooltipContent side="top" className="max-w-xs">
                          <div className="space-y-1">
                            <p className="font-bold text-primary">{house.courses.full_name}</p>
                            {house.families ? (
                              <>
                                <p className="text-xs text-muted-foreground">donated to</p>
                                <p className="font-semibold text-secondary">{house.families.family_name}</p>
                                <p className="text-xs">{house.families.location}</p>
                              </>
                            ) : (
                              <p className="text-xs text-muted-foreground">Matching with a family...</p>
                            )}
                          </div>
                        </TooltipContent>
                      ) : (
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-xs text-muted-foreground">Course assignment in progress</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>

            {/* Legend */}
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">Home Donated</span>
          </div>
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-muted-foreground/40" />
            <span className="text-muted-foreground">Pending</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseGrid;
