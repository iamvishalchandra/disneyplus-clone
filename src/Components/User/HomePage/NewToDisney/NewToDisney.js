import React from "react";
import { UserRecommendations } from "../UserRecommendations/UserRecommendations";
import "./NewToDisney.style.css";
export const NewToDisney = () => {
  return (
    <div className="newToDisney">
      <h4>NewToDisney</h4>
      <div className="newToDisney__content">
        <UserRecommendations />
        <UserRecommendations />
        <UserRecommendations />
        <UserRecommendations />
      </div>
    </div>
  );
};
