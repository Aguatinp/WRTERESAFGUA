import { useCourses } from "@/hooks/useDonations";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Trophy, TrendingUp } from "lucide-react";

const CourseStatsTable = () => {
  const { data: courses, isLoading } = useCourses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-pulse text-muted-foreground">Cargando estadísticas...</div>
      </div>
    );
  }

  // Sort courses by houses donated (descending)
  const sortedCourses = [...(courses || [])].sort((a, b) => b.houses_donated - a.houses_donated);
  const topCourse = sortedCourses[0];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tabla de Posiciones por Curso
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Reconocemos la generosidad y compromiso de cada curso con el proyecto
          </p>
        </div>

        {/* Top Course Highlight */}
        {topCourse && topCourse.houses_donated > 0 && (
          <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-16 h-16" />
              <div className="text-center">
                <p className="text-xl font-semibold opacity-90">Curso Líder</p>
                <p className="text-4xl font-bold">{topCourse.full_name}</p>
                <p className="text-2xl opacity-90">{topCourse.houses_donated} casas donadas</p>
              </div>
              <Trophy className="w-16 h-16" />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="max-w-6xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16">#</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead className="text-center">Casas Donadas</TableHead>
                <TableHead className="text-center">Monto Recaudado</TableHead>
                <TableHead className="text-center">Progreso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCourses.map((course, index) => {
                const progress = (course.current_amount / course.goal_amount) * 100;
                const isTopThree = index < 3 && course.houses_donated > 0;
                
                return (
                  <TableRow 
                    key={course.id}
                    className={isTopThree ? "bg-primary/5" : ""}
                  >
                    <TableCell className="font-semibold">
                      <div className="flex items-center gap-2">
                        {isTopThree && (
                          <TrendingUp className="w-4 h-4 text-primary" />
                        )}
                        {index + 1}
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{course.full_name}</TableCell>
                    <TableCell className="text-center">
                      <span className={`inline-block px-3 py-1 rounded-full ${
                        course.houses_donated > 0 
                          ? "bg-primary/10 text-primary font-bold" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {course.houses_donated}
                      </span>
                    </TableCell>
                    <TableCell className="text-center font-semibold">
                      ${course.current_amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={progress} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default CourseStatsTable;
