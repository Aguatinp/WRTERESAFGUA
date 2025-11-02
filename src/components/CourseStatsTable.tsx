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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Medal } from "lucide-react";

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

const LEVEL_LABELS: Record<string, string> = {
  prekinder: "Prekínder",
  kinder: "Kínder",
  "1_basico": "1° Básico",
  "2_basico": "2° Básico",
  "3_basico": "3° Básico",
  "4_basico": "4° Básico",
  "5_basico": "5° Básico",
  "6_basico": "6° Básico",
  "7_basico": "7° Básico",
  "8_basico": "8° Básico",
  "1_medio": "I Medio",
  "2_medio": "II Medio",
  "3_medio": "III Medio",
  "4_medio": "IV Medio",
};

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
  const groupedCourses = LEVEL_SEQUENCE.map((levelKey) => {
    const levelCourses = courseList.filter((course) => normalizeLevelKey(course.level) === levelKey);
    if (levelCourses.length === 0) return null;

    const orderedByPerformance = [...levelCourses].sort((a, b) => {
      const houseDiff = b.houses_donated - a.houses_donated;
      if (houseDiff !== 0) return houseDiff;
      const amountDiff = b.current_amount - a.current_amount;
      if (amountDiff !== 0) return amountDiff;
      return a.full_name.localeCompare(b.full_name, "es", { sensitivity: "base" });
    });

    return {
      levelKey,
      displayName: LEVEL_LABELS[levelKey] ?? levelKey,
      courses: orderedByPerformance,
      leader: orderedByPerformance[0],
    };
  }).filter(Boolean) as Array<{
    levelKey: string;
    displayName: string;
    courses: typeof courseList;
    leader: typeof courseList[number];
  }>;

  if (groupedCourses.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Course Leaderboard</h2>
          <p>No course data is available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Course Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore the leading class in each generation and dive into their progress.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
          <Accordion type="multiple" defaultValue={groupedCourses.slice(0, 3).map((group) => group.levelKey)}>
            {groupedCourses.map((group) => (
              <AccordionItem key={group.levelKey} value={group.levelKey}>
                <AccordionTrigger className="px-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full">
                    <span className="text-lg font-semibold text-foreground">{group.displayName}</span>
                    {group.leader && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
                        <Medal className="w-4 h-4 text-primary" />
                        <span>
                          Leading course: <strong className="text-foreground">{group.leader.full_name}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/30">
                        <TableHead className="w-16">#</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead className="text-center">Homes Donated</TableHead>
                        <TableHead className="text-center">Amount Raised</TableHead>
                        <TableHead className="text-center">Progress</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {group.courses.map((course, index) => {
                        const progress = (course.current_amount / course.goal_amount) * 100;
                        const isLeader = course.id === group.leader?.id;

                        return (
                          <TableRow key={course.id} className={isLeader ? "bg-primary/5" : ""}>
                            <TableCell className="font-semibold">
                              <div className="flex items-center gap-2">
                                {isLeader && <Medal className="w-4 h-4 text-primary" />}
                                {index + 1}
                              </div>
                            </TableCell>
                            <TableCell className="font-semibold">{course.full_name}</TableCell>
                            <TableCell className="text-center">
                              <span
                                className={`inline-block min-w-[2rem] px-3 py-1 rounded-full ${
                                  course.houses_donated > 0
                                    ? "bg-primary/10 text-primary font-bold"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {course.houses_donated}
                              </span>
                            </TableCell>
                            <TableCell className="text-center font-semibold">
                              ${course.current_amount.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={progress} className="flex-1" />
                                <span className="text-sm text-muted-foreground w-12 text-right">
                                  {progress.toFixed(0)}%
                                </span>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseStatsTable;
