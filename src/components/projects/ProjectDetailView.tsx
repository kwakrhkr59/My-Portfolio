"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Calendar,
  Users,
  Code,
  FlaskConical,
  Lightbulb,
  ListTodo,
  Trophy,
  Wrench,
  FileText,
} from "lucide-react";
import { useLang } from "@/components/layout/LanguageProvider";
import { T } from "@/components/layout/T";
import { localize } from "@/lib/i18n/localize";
import { formatPeriod } from "@/lib/i18n/format";
import { Project } from "@/types/project";

const gradients = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500",
];

const cardClass =
  "bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700";

function SectionCard({
  title,
  icon,
  children,
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardClass} p-6 md:p-8`}>
      <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

function SideCard({
  title,
  icon,
  children,
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardClass} p-6`}>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ProjectDetailView({
  project: rawProject,
}: {
  project: Project;
}) {
  const { lang } = useLang();
  const project = localize(rawProject, lang);

  const Icon =
    project.type && project.type.includes("Research") ? FlaskConical : Code;
  const gradient = gradients[project.id.charCodeAt(0) % gradients.length];

  // 대표 이미지는 파일 이름 규칙으로 찾는다: /images/projects/{slug}-desktop.png, {slug}-mobile.png
  // 파일이 없으면 아래 그라디언트 배경과 아이콘이 대신 보인다.
  const [coverFailed, setCoverFailed] = useState(false);
  const coverRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    // 하이드레이션 전에 이미 로드에 실패한 경우 onError 를 놓칠 수 있어 한 번 더 확인한다.
    const img = coverRef.current;
    if (img && img.complete && img.naturalWidth === 0) setCoverFailed(true);
  }, []);
  const coverBase = `/images/projects/${project.slug}`;
  // 이미지 위에 제목, 유형, 기간을 얹는다. 이미지는 영역을 가득 채우고 왼쪽 기준으로 잘린다.
  // 이미지 왼쪽에 아이콘이 있어서, 데스크톱에서는 글자를 폭의 14% 지점(아이콘 오른쪽)부터 시작한다.
  // 데스크톱(md 이상)은 영역 비율을 3840:580 으로 고정하되, 내용이 더 길면 그만큼 늘어난다.
  // width/height 는 로딩 전 자리를 잡기 위한 대략적인 값이다.
  const coverCommon = {
    alt: `${project.title} cover`,
    sizes: "100vw",
    quality: 85,
    loading: "eager" as const,
    className:
      "absolute inset-0 h-full w-full object-cover object-left md:object-[15%_50%]",
  };
  const desktopCover = getImageProps({
    ...coverCommon,
    src: `${coverBase}-desktop.png`,
    width: 3840,
    height: 580,
  });
  const mobileCover = getImageProps({
    ...coverCommon,
    src: `${coverBase}-mobile.png`,
    width: 1940,
    height: 600,
  });

  const period =
    formatPeriod(project.start, project.end, lang, project.period ?? "") ||
    null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <section
        className={`relative flex w-full overflow-hidden min-h-[18rem] md:min-h-[16rem] md:aspect-[3840/580] bg-gradient-to-r ${gradient}`}
      >
        {!coverFailed ? (
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={desktopCover.props.srcSet}
              width={3840}
              height={580}
            />
            <img
              {...mobileCover.props}
              alt={coverCommon.alt}
              ref={coverRef}
              fetchPriority="high"
              onError={() => setCoverFailed(true)}
            />
          </picture>
        ) : (
          <Icon
            aria-hidden
            className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 text-white/20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col justify-between">
          <div className="md:pl-[14%]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <T k="detail.back" />
            </Link>
          </div>

          <div className="w-full text-white pt-8 md:pl-[14%]">
            <span className="inline-block px-4 py-1 mb-3 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full">
              {project.type || <T k="detail.project" />}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight drop-shadow-md">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{period || <T k="detail.unknownPeriod" />}</span>
              </div>
              {project.team && project.team.length > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.team.join(", ")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <SectionCard
                title={<T k="detail.overview" />}
                icon={<FileText className="w-6 h-6 text-blue-500" />}
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.details || project.summary || (
                    <T k="detail.noDescription" />
                  )}
                </p>
              </SectionCard>

              {project.goal && (
                <SectionCard
                  title={<T k="detail.goal" />}
                  icon={<Lightbulb className="w-6 h-6 text-yellow-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.goal}
                  </p>
                </SectionCard>
              )}

              {project.features && project.features.length > 0 && (
                <SectionCard
                  title={<T k="detail.keyFeatures" />}
                  icon={<ListTodo className="w-6 h-6 text-purple-500" />}
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}

              {project.challenges && (
                <SectionCard
                  title={<T k="detail.challenges" />}
                  icon={<Wrench className="w-6 h-6 text-orange-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </SectionCard>
              )}

              {project.results && (
                <SectionCard
                  title={<T k="detail.results" />}
                  icon={<Trophy className="w-6 h-6 text-green-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.results}
                  </p>
                </SectionCard>
              )}
            </div>

            <div className="space-y-8">
              {project.stack && project.stack.length > 0 && (
                <SideCard
                  title={<T k="detail.technologies" />}
                  icon={<Wrench className="w-5 h-5 text-blue-500" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md border border-gray-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SideCard>
              )}

              {project.team && project.team.length > 0 && (
                <SideCard
                  title={<T k="detail.team" />}
                  icon={<Users className="w-5 h-5 text-purple-500" />}
                >
                  <ul className="space-y-3">
                    {project.team.map((member: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                          {member.charAt(0)}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {member}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SideCard>
              )}

              {(project.link || project.github) && (
                <SideCard title={<T k="detail.links" />}>
                  <div className="space-y-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <T k="detail.visit" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        <T k="detail.github" />
                      </a>
                    )}
                  </div>
                </SideCard>
              )}

              <div className={`${cardClass} p-6 text-center`}>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  <T k="detail.questions" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <T k="detail.questionsDesc" />
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-md"
                >
                  <T k="detail.contactMe" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
