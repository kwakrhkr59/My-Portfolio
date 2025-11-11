"use client";

import { ProjectsPageCard } from "./ProjectCard";
import Masonry from "react-masonry-css";

export default function ProjectList({ projects }: { projects: any[] }) {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    720: 2,
    719: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects.map((project) => (
        <div key={project.id} className="mb-6">
          <ProjectsPageCard project={project} />
        </div>
      ))}
    </Masonry>
  );
}
