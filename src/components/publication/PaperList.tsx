"use client";

import PaperCard from "./PaperCard";
import Masonry from "react-masonry-css";

export default function PaperList({ papers }: { papers: any[] }) {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    640: 2,
    639: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {papers.map((paper) => (
        <div key={paper.id} className="mb-6">
          <PaperCard paper={paper} />
        </div>
      ))}
    </Masonry>
  );
}
