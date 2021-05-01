import React from "react";
import { Link } from "react-router-dom";
import "./HeaderOptions.style.css";

export const HeaderOptions = ({ icon, link, title }) => {
  return (
    <Link to={link} className="headerOptions">
      <img className="headerOptions__icon" src={icon} alt={title} />
      <span className="headerOptions__title">{title}</span>
    </Link>
  );
};
