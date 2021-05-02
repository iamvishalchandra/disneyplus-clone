import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.style.css";

export const VideoCard = ({ link, url, title }) => {
  return (
    <div className="videoCard">
      <Link to={link} className="videoCard__link">
        <img src={url} alt={title} className="videoCard__link__image" />
      </Link>
    </div>
  );
};
