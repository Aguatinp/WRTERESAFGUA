import { useGlobalStats } from "@/hooks/useDonations";
import { Droplet, Home, Target, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GlobalStats = () => {
  const { data: stats } = useGlobalStats();

  if (!stats) return null;

  const progressPercentage = (stats.totalHouses / stats.goalHouses) * 100;
  const amountProgressPercentage = (stats.totalAmount / stats.totalGoal) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impacto Global del Proyecto
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12">
            Juntos estamos cambiando vidas, una casa a la vez
          </p>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Houses Donated */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Home className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-5xl font-bold">{stats.totalHouses}</p>
                  <p className="text-white/80 text-lg">Casas Donadas</p>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-3 bg-white/20" />
              <p className="mt-2 text-sm text-white/70">
                Meta: {stats.goalHouses} casas ({progressPercentage.toFixed(1)}%)
              </p>
            </div>

            {/* Total Raised */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Target className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-5xl font-bold">
                    ${(stats.totalAmount / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-white/80 text-lg">Recaudado</p>
                </div>
              </div>
              <Progress value={amountProgressPercentage} className="h-3 bg-white/20" />
              <p className="mt-2 text-sm text-white/70">
                Meta: ${(stats.totalGoal / 1000000).toFixed(1)}M ({amountProgressPercentage.toFixed(1)}%)
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Droplet className="w-10 h-10 mx-auto mb-3" />
              <p className="text-3xl font-bold">{stats.totalHouses * 5}</p>
              <p className="text-white/70">Familias con agua limpia por 3-5 años</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <TrendingUp className="w-10 h-10 mx-auto mb-3" />
              <p className="text-3xl font-bold">{stats.totalHouses * 20}+</p>
              <p className="text-white/70">Personas beneficiadas</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Home className="w-10 h-10 mx-auto mb-3" />
              <p className="text-3xl font-bold">{stats.goalHouses - stats.totalHouses}</p>
              <p className="text-white/70">Casas por donar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStats;
