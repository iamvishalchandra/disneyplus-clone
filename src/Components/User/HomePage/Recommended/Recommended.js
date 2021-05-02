import React from "react";
import { UserRecommendations } from "../UserRecommendations/UserRecommendations";
import "./Recommended.style.css";
export const Recommended = () => {
  return (
    <div className="recommended">
      <h4>Recommended For You</h4>
      <div className="recommended__content">
        <UserRecommendations link="#" url="/images/category/cat-marvel.png" />
        <UserRecommendations link="#" url="/images/category/cat-marvel.png" />
        <UserRecommendations link="#" url="/images/category/cat-marvel.png" />
        <UserRecommendations link="#" url="/images/category/cat-marvel.png" />
      </div>
    </div>
  );
};
