import React from "react";
import { Link } from "react-router-dom";
import "./ImageSliderFiles.style.css";

export const ImageSliderFiles = ({ link, url, title }) => {
  return (
    <div className="imageSliderFiles">
      <Link to={link} className="imageSliderFiles__link">
        <img src={url} alt={title} className="imageSliderFiles__link__image" />
      </Link>
    </div>
  );
};
