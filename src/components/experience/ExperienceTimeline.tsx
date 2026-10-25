"use client";

import { useState } from "react";
import {
  FolderOpen,
  Calendar,
  MapPin,
  Award,
  Code,
  Target,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ExternalLink,
  Building,
  Rocket,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Experience } from "@/types/experience";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { localize } from "@/lib/i18n/localize";
import { formatPeriod } from "@/lib/i18n/format";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const typeGradient = (type: string) => {
  switch (type) {
    case "Bootcamp":
      return "from-blue-500 to-cyan-500";
    case "Research":
      return "from-purple-500 to-pink-500";
    case "Internship":
      return "from-green-500 to-teal-500";
    case "Project":
      return "from-orange-500 to-red-500";
    default:
      return "from-gray-500 to-gray-600";
  }
};

const typeIcon = (type: string) => {
  switch (type) {
    case "Bootcamp":
      return Rocket;
    case "Research":
      return BookOpen;
    case "Internship":
      return Building;
    case "Project":
      return Code;
    default:
      return FolderOpen;
  }
};

// 시작일이 있으면 그 연도를, 없으면 period 문자열에서 처음 나오는 4자리 연도를 쓴다.
const startYear = (exp: Experience) => {
  if (exp.start) return Number(exp.start.slice(0, 4));
  const match = exp.period.match(/\d{4}/);
  return match ? Number(match[0]) : null;
};

function groupByYear(experiences: Experience[]) {
  const groups = new Map<string, Experience[]>();
  for (const exp of experiences) {
    const year = startYear(exp);
    const key = year ? String(year) : "Etc";
    groups.set(key, [...(groups.get(key) ?? []), exp]);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    if (a === "Etc") return 1;
    if (b === "Etc") return -1;
    return Number(b) - Number(a);
  });
}

function DetailSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  );
}

function ExperienceDetail({ experience }: { experience: Experience }) {
  const { t } = useLang();
  const { responsibilities, achievements, features, skills, projects } =
    experience.details;
  const links = experience.links;

  return (
    <div className="mt-6">
      <DetailSection
        title={t.timeline.summary}
        icon={<Lightbulb className="w-5 h-5 text-yellow-500" />}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {experience.description}
        </p>
      </DetailSection>

      {responsibilities.length > 0 && (
        <DetailSection
          title={t.timeline.responsibilities}
          icon={<Target className="w-5 h-5 text-blue-500" />}
        >
          <ul className="space-y-2">
            {responsibilities.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
              >
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}

      {achievements.length > 0 && (
        <DetailSection
          title={t.timeline.achievements}
          icon={<Award className="w-5 h-5 text-purple-500" />}
        >
          <ul className="space-y-2">
            {achievements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
              >
                <TrendingUp className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}

      {features.length > 0 && (
        <DetailSection title={t.timeline.features}>
          <div className="flex flex-wrap gap-2">
            {features.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-md font-medium border border-gray-200 dark:border-slate-700 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </DetailSection>
      )}

      {skills.length > 0 && (
        <DetailSection title={t.timeline.skills}>
          <div className="flex flex-wrap gap-2">
            {skills.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md font-medium text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </DetailSection>
      )}

      {projects && projects.length > 0 && (
        <DetailSection
          title={t.timeline.projects}
          icon={<Code className="w-5 h-5 text-green-500" />}
        >
          <ul className="space-y-2">
            {projects.map((project, idx) => (
              <li
                key={idx}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg p-3 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-slate-700"
              >
                <span className="font-semibold">{project.title}: </span>
                <span>{project.summary}</span>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}

      {(links?.website || links?.certificate || links?.portfolio) && (
        <div className="flex flex-wrap gap-3 mt-6">
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              {t.timeline.website}
            </a>
          )}
          {links.certificate && (
            <a
              href={links.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              <Award className="w-4 h-4" />
              {t.timeline.certificate}
            </a>
          )}
          {links.portfolio && (
            <a
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              <FolderOpen className="w-4 h-4" />
              {t.timeline.portfolio}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function TimelineItem({
  experience,
  onOpen,
}: {
  experience: Experience;
  onOpen: () => void;
}) {
  const { t, lang } = useLang();
  const Icon = typeIcon(experience.type);
  const period = formatPeriod(
    experience.start,
    experience.end,
    lang,
    experience.period,
  );

  return (
    <li className="relative pl-12 md:pl-16 pb-10 last:pb-0">
      <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md ring-4 ring-slate-50 dark:ring-slate-900">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <span
          className={`inline-block px-3 py-1 bg-gradient-to-r ${typeGradient(
            experience.type,
          )} text-white text-xs font-semibold rounded-full mb-3 shadow-md`}
        >
          {experience.type}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {experience.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600 dark:text-gray-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Building className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">{experience.organization}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-green-500" />
            <span>{period}</span>
          </div>
          {experience.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
          {experience.description}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          {t.timeline.more}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
}

export default function ExperienceTimeline({
  experiences: rawExperiences,
}: {
  experiences: Experience[];
}) {
  const { lang } = useLang();
  const experiences = rawExperiences.map((e) => localize(e, lang));
  const [selected, setSelected] = useState<Experience | null>(null);
  const groups = groupByYear(experiences);

  return (
    <>
      <div className="relative max-w-3xl mx-auto pl-4 md:pl-5">
        <div
          aria-hidden
          className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-40"
        />
        {groups.map(([year, items]) => (
          <section key={year} className="relative mb-12 last:mb-0">
            <div className="relative mb-6 pl-12 md:pl-16">
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500" />
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg">
                {year}
              </span>
            </div>
            <ul>
              {items.map((experience) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  onOpen={() => setSelected(experience)}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Sheet
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl overflow-y-auto bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700"
        >
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-gray-900 dark:text-white pr-6">
                  {selected.title}
                </SheetTitle>
                <SheetDescription className="text-gray-600 dark:text-gray-400">
                  {selected.organization} ·{" "}
                  {formatPeriod(
                    selected.start,
                    selected.end,
                    lang,
                    selected.period,
                  )}
                </SheetDescription>
              </SheetHeader>
              <ExperienceDetail experience={selected} />
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
