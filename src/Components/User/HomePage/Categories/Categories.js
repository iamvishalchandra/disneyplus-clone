import React from "react";
import { Link } from "react-router-dom";
import "./Categories.style.css";

export const Categories = ({ link, url, videoUrl, title }) => {
  return (
    <div className="categories">
      <Link to={link} className="categories__links">
        <img className="categories__links__image" src={url} alt={title} />
        <video className="categories__links__video" autoPlay loop playsInline>
          <source
            className="categories__links__video__source"
            src={`${videoUrl}`}
            type="video/mp4"
          />
        </video>
      </Link>
    </div>
  );
};
