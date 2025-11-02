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

const LEVEL_SEQUENCE = [
  "prekinder",
  "kinder",
  "1_basico",
  "2_basico",
  "3_basico",
  "4_basico",
  "5_basico",
  "6_basico",
  "7_basico",
  "8_basico",
  "1_medio",
  "2_medio",
  "3_medio",
  "4_medio",
];

const LEVEL_RANK = new Map(LEVEL_SEQUENCE.map((level, index) => [level, index]));

const normalizeLevelKey = (level?: string | null) => {
  if (!level) return "";
  return level
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
};

const getLevelRank = (level?: string | null) => {
  const key = normalizeLevelKey(level);
  if (LEVEL_RANK.has(key)) {
    return LEVEL_RANK.get(key)!;
  }
  // Handle cases like "Primero Basico" or "I Medio"
  if (key.includes("medio")) {
    const numeral = key.match(/(\d+)/)?.[0];
    if (numeral) {
      return 9 + parseInt(numeral, 10);
    }
    const roman = key.match(/(i{1,3}|iv)/);
    if (roman) {
      const romanValue = { i: 1, ii: 2, iii: 3, iv: 4 }[roman[0] as "i" | "ii" | "iii" | "iv"];
      if (romanValue) {
        return 9 + romanValue;
      }
    }
  }
  const basicMatch = key.match(/(\d+)/);
  if (basicMatch) {
    const number = parseInt(basicMatch[1], 10);
    if (!Number.isNaN(number)) {
      return 1 + number;
    }
  }
  return LEVEL_SEQUENCE.length;
};

const getSectionRank = (section?: string | null) => {
  const letter = (section ?? "").trim().toUpperCase();
  if (!letter) return Number.MAX_SAFE_INTEGER;
  return letter.charCodeAt(0) - 65; // 'A' -> 0
};

const compareCourses = (a: { level: string; section: string; full_name: string }, b: { level: string; section: string; full_name: string }) => {
  const levelDiff = getLevelRank(a.level) - getLevelRank(b.level);
  if (levelDiff !== 0) return levelDiff;

  const sectionDiff = getSectionRank(a.section) - getSectionRank(b.section);
  if (sectionDiff !== 0) return sectionDiff;

  return a.full_name.localeCompare(b.full_name, "es", { sensitivity: "base" });
};

const CourseStatsTable = () => {
  const { data: courses, isLoading } = useCourses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-pulse text-muted-foreground">Loading stats...</div>
      </div>
    );
  }

  const courseList = courses ?? [];
  const sortedCourses = [...courseList].sort(compareCourses);

  const topByHouses = [...courseList].sort((a, b) => b.houses_donated - a.houses_donated);
  const topCourse = topByHouses.find((entry) => entry.houses_donated > 0);
  const topThreeIds = new Set(
    topByHouses
      .filter((entry, index) => index < 3 && entry.houses_donated > 0)
      .map((entry) => entry.id)
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Course Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We celebrate each class for its generosity and commitment to this project.
          </p>
        </div>

        {/* Top Course Highlight */}
        {topCourse && (
          <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-16 h-16" />
              <div className="text-center">
                <p className="text-xl font-semibold opacity-90">Top Course</p>
                <p className="text-4xl font-bold">{topCourse.full_name}</p>
                <p className="text-2xl opacity-90">{topCourse.houses_donated} homes funded</p>
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
                <TableHead>Course</TableHead>
                <TableHead className="text-center">Homes Donated</TableHead>
                <TableHead className="text-center">Amount Raised</TableHead>
                <TableHead className="text-center">Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCourses.map((course, index) => {
                const progress = (course.current_amount / course.goal_amount) * 100;
                const isTopThree = topThreeIds.has(course.id);

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
