import { useGlobalStats } from "@/hooks/useDonations";
import { Droplet, Home, Target, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GlobalStats = () => {
  const { data: stats } = useGlobalStats();

  if (!stats) return null;

  const GOAL_HOUSES = 138;
  const progressPercentage = (stats.totalHouses / GOAL_HOUSES) * 100;
  const amountProgressPercentage = (stats.totalAmount / stats.totalGoal) * 100;
  const homesRemaining = Math.max(GOAL_HOUSES - stats.totalHouses, 0);

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Project Impact</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          Every filter delivered brings another family closer to safe, reliable water.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Home className="h-12 w-12 text-primary" />
            <div>
              <p className="text-sm font-medium text-primary">Homes funded</p>
              <p className="text-4xl font-bold text-foreground">{stats.totalHouses}</p>
            </div>
          </div>
          <Progress value={progressPercentage} className="mt-6" />
          <p className="mt-2 text-sm text-muted-foreground">
            Goal: {GOAL_HOUSES} homes ({progressPercentage.toFixed(1)}%)
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Target className="h-12 w-12 text-secondary" />
            <div>
              <p className="text-sm font-medium text-secondary">Funds raised</p>
              <p className="text-4xl font-bold text-foreground">
                ${(stats.totalAmount / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>
          <Progress value={amountProgressPercentage} className="mt-6" />
          <p className="mt-2 text-sm text-muted-foreground">
            Goal: ${(stats.totalGoal / 1000000).toFixed(1)}M ({amountProgressPercentage.toFixed(1)}%)
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Droplet className="h-10 w-10 text-primary" />
          <p className="mt-4 text-3xl font-bold text-foreground">{stats.totalHouses * 5}</p>
          <p className="text-sm text-muted-foreground">Families with 3-5 years of clean water</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <TrendingUp className="h-10 w-10 text-secondary" />
          <p className="mt-4 text-3xl font-bold text-foreground">{stats.totalHouses * 20}+</p>
          <p className="text-sm text-muted-foreground">Estimated people reached</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Home className="h-10 w-10 text-accent" />
          <p className="mt-4 text-3xl font-bold text-foreground">{homesRemaining}</p>
          <p className="text-sm text-muted-foreground">Homes still needing a filter</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
