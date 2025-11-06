import { Home } from "lucide-react";
import { useHouses } from "@/hooks/useDonations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HouseGrid = () => {
  const TOTAL_HOUSES = 138;
  const { data: houses, isLoading } = useHouses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-pulse text-muted-foreground">Loading homes...</div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Hogares con agua limpia
        </h2>
        <p className="mt-3 text-muted-foreground">
          Seguimos el progreso de {TOTAL_HOUSES} filtros asignados a familias de distintas regiones.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <TooltipProvider>
          <div className="grid grid-cols-10 gap-2 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-18">
            {houses?.slice(0, TOTAL_HOUSES).map((house) => (
              <Tooltip key={house.id}>
                <TooltipTrigger asChild>
                  <div className="group cursor-pointer">
                    <Home
                      className={`h-7 w-7 transition-all duration-300 ${
                        house.is_active
                          ? "text-primary hover:text-secondary group-hover:scale-110"
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
                          <p className="text-xs text-muted-foreground">Familia receptora</p>
                          <p className="font-semibold text-secondary">{house.families.family_name}</p>
                          <p className="text-xs">{house.families.location}</p>
                        </>
                      ) : (
                        <p className="text-xs text-muted-foreground">Asignación en progreso</p>
                      )}
                    </div>
                  </TooltipContent>
                ) : (
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-xs text-muted-foreground">Curso en proceso de asignación</p>
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-medium text-foreground">Hogar entregado</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-muted-foreground/40" />
          <span className="text-muted-foreground">Pendiente</span>
        </div>
      </div>
    </div>
  );
};

export default HouseGrid;
