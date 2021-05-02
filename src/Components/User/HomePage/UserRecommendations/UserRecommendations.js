import React from "react";
import { Link } from "react-router-dom";
import "./UserRecommendations.style.css";

export const UserRecommendations = ({ link, url, title }) => {
  return (
    <div className="userRecommendations">
      <Link to={link} className="userRecommendations__link">
        <img
          src={url}
          alt={title}
          className="userRecommendations__link__image"
        />
      </Link>
    </div>
  );
};
