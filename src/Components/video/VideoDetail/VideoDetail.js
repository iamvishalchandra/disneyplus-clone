import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import "./VideoDetail.style.css";

export const VideoDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    db?.collection("movies")
      ?.doc(id)
      ?.get()
      ?.then((doc) => {
        if (doc?.exists) setDetails(doc.data());
        else console.log("No Such Document Exist");
      })
      .catch((err) => console.log("Error Fetching Data - ", err));
  }, [id]);

  return (
    <div className="videoDetail">
      <div className="videoDetail__background">
        <img
          className="videoDetail__background__banner"
          src={details.backgroundImg}
          alt={details.title}
        />
      </div>
      <div className="videoDetail__title">
        <img
          src={details.titleImg}
          alt={details.title}
          className="videoDetail__title__image"
        />
      </div>
      <div className="videoDetail__content">
        <div className="videoDetail__content__options">
          <button className="videoDetail__content__options__button videoDetail__content__options__button__play">
            <img
              src="/images/playblack.png"
              alt="play"
              className="videoDetail__content__options__button__icon"
            />
            <span className="videoDetail__content__options__button__text">
              Play
            </span>
          </button>
          <button className="videoDetail__content__options__button videoDetail__content__options__button__trailer">
            <img
              src="/images/playblack.png"
              alt="play"
              className="videoDetail__content__options__button__icon"
            />
            <span className="videoDetail__content__options__button__text">
              Trailer
            </span>
          </button>
          <div className="videoDetail__content__options__icons videoDetail__content__options__icons__add">
            <span />
            <span />
          </div>
          <div className="videoDetail__content__options__icons videoDetail__content__options__icons__group">
            <div className="videoDetail__content__options__icons__group__container">
              <img
                src="/images/groupIcon.png"
                alt="group"
                className="videoDetail__content__options__icons__group__container__icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="videoDetail__info">{details.subTitle}</div>
      <div className="videoDetail__description">{details.description}</div>
    </div>
  );
};
