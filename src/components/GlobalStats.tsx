import { useGlobalStats } from "@/hooks/useDonations";
import { Droplet, Home, Target, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GlobalStats = () => {
  const { data: stats } = useGlobalStats();

  if (!stats) return null;

  const progressPercentage = (stats.totalHouses / stats.goalHouses) * 100;
  const amountProgressPercentage = (stats.totalAmount / stats.totalGoal) * 100;

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Impacto del proyecto</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          Cada filtro entregado acerca a otra familia a una vida con agua limpia y segura.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Home className="h-12 w-12 text-primary" />
            <div>
              <p className="text-sm font-medium text-primary">Hogares financiados</p>
              <p className="text-4xl font-bold text-foreground">{stats.totalHouses}</p>
            </div>
          </div>
          <Progress value={progressPercentage} className="mt-6" />
          <p className="mt-2 text-sm text-muted-foreground">
            Meta: {stats.goalHouses} hogares ({progressPercentage.toFixed(1)}%)
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Target className="h-12 w-12 text-secondary" />
            <div>
              <p className="text-sm font-medium text-secondary">Fondos recaudados</p>
              <p className="text-4xl font-bold text-foreground">
                ${(stats.totalAmount / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>
          <Progress value={amountProgressPercentage} className="mt-6" />
          <p className="mt-2 text-sm text-muted-foreground">
            Meta: ${(stats.totalGoal / 1000000).toFixed(1)}M ({amountProgressPercentage.toFixed(1)}%)
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Droplet className="h-10 w-10 text-primary" />
          <p className="mt-4 text-3xl font-bold text-foreground">{stats.totalHouses * 5}</p>
          <p className="text-sm text-muted-foreground">Familias con agua limpia durante 3-5 años</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <TrendingUp className="h-10 w-10 text-secondary" />
          <p className="mt-4 text-3xl font-bold text-foreground">{stats.totalHouses * 20}+</p>
          <p className="text-sm text-muted-foreground">Personas alcanzadas estimadas</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Home className="h-10 w-10 text-accent" />
          <p className="mt-4 text-3xl font-bold text-foreground">
            {Math.max(stats.goalHouses - stats.totalHouses, 0)}
          </p>
          <p className="text-sm text-muted-foreground">Hogares que aún necesitan filtro</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
