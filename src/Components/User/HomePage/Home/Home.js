import React from "react";
import { Categories } from "../Categories/Categories";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { NewToDisney } from "../NewToDisney/NewToDisney";
import { Recommended } from "../Recommended/Recommended";
import "./Home.style.css";

export const Home = () => {
  return (
    <main className="home">
      <ImageSlider />
      <div className="home__category">
        <Categories
          url="/images/category/cat-disney.png"
          link="#"
          title="disney"
          videoUrl="/videos/cat-disney.mp4"
        />
        <Categories
          url="/images/category/cat-marvel.png"
          link="#"
          title="marvel"
          videoUrl="/videos/cat-marvel.mp4"
        />
        <Categories
          url="/images/category/cat-pixar.png"
          link="#"
          title="pixar"
          videoUrl="/videos/cat-pixar.mp4"
        />
        <Categories
          url="/images/category/cat-starwars.png"
          link="#"
          title="starwars"
          videoUrl="/videos/cat-starwars.mp4"
        />
        <Categories
          url="/images/category/cat-national.png"
          link="#"
          title="national"
          videoUrl="/videos/cat-national.mp4"
        />
      </div>
      <Recommended />
      <NewToDisney />
    </main>
  );
};
