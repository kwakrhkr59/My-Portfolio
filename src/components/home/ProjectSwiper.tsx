// src/components/home/ProjectSwiper.tsx

"use client"; // 이 컴포넌트는 클라이언트 컴포넌트입니다.

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProjectPreviewCard from "@/components/home/ProjectPreviewCard";
import { Project } from "@/types/project";
import React, { useEffect, useRef } from "react"; // useRef 추가

// Swiper의 필수 CSS를 이곳에서 임포트합니다.
import "swiper/css";
import "swiper/css/navigation";

interface ProjectSwiperProps {
  projects: Project[];
}

const ProjectSwiper: React.FC<ProjectSwiperProps> = ({ projects }) => {
  const swiperRef = useRef<any>(null); // Swiper 인스턴스를 저장할 ref

  // 프로젝트 데이터가 업데이트되거나 컴포넌트가 마운트될 때 Swiper를 업데이트합니다.
  useEffect(() => {
    if (swiperRef.current && projects) {
      // Swiper가 DOM을 다시 스캔하여 슬라이드 수를 업데이트하도록 강제
      swiperRef.current.update();
      // 첫 번째 슬라이드로 이동 (선택 사항)
      swiperRef.current.slideTo(0);
    }
  }, [projects]); // projects 배열이 변경될 때마다 실행

  // projects가 없거나 비어있으면 메시지 표시
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600 dark:text-gray-400">
        표시할 프로젝트가 없습니다.
      </div>
    );
  }

  return (
    <div className="relative">
      {" "}
      {/* Swiper와 navigation 버튼을 감싸는 컨테이너 */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={projects.length > 1} // 프로젝트가 1개 초과일 때만 루프
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-12"
        onSwiper={(swiper) => {
          // Swiper 인스턴스를 ref에 저장
          swiperRef.current = swiper;
          console.log("Swiper instance initialized:", swiper); // 클라이언트 콘솔에서 확인
        }}
        onSlideChange={() => {
          console.log("Slide changed"); // 슬라이드 변경 시 클라이언트 콘솔에서 확인
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectPreviewCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper navigation buttons - Swiper와 같은 레벨의 부모 div 안에 있어야 합니다. */}
      {/* Tailwind 클래스에 !w, !h, !mt 등 !important 플래그가 붙어있는지 확인하세요. */}
      <div className="swiper-button-prev !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !-left-3 !rounded-full !transition-all after:!text-indigo-600 after:!text-xl after:!font-bold"></div>
      <div className="swiper-button-next !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !-right-3 !rounded-full !transition-all after:!text-indigo-600 after:!text-xl after:!font-bold"></div>
    </div>
  );
};

export default ProjectSwiper;
