import React from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import "./VideoSection.style.css";
export const VideoSection = ({ heading, data }) => {
  return (
    <div className="videoSection">
      <h4>{heading}</h4>
      <div className="videoSection__content">
        {data?.map((movie) => (
          <VideoCard
            key={movie.id}
            link={`/detail/${movie.id}`}
            url={movie?.cardImg}
          />
        ))}
      </div>
    </div>
  );
};
