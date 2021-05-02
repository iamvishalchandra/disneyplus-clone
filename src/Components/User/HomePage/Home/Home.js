import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../../features/movie/movieSlice";
import { db } from "../../../../firebase";
import { Categories } from "../Categories/Categories";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { VideoSection } from "../VideoSection/VideoSection";
import "./Home.style.css";

export const Home = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const { recommended, original, newToDisney, trending } = useSelector(
    (state) => state.movie
  );
  // console.log(recommended, original, newToDisney, trending);
  let recommend = [],
    originals = [],
    newDisney = [],
    trendings = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snap) =>
      snap.docs.map((doc) => {
        switch (doc?.data()?.type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc?.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc?.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc?.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc?.data() }];
            break;
        }

        dispatch(
          setMovies({
            recommended: recommend,
            newToDisney: newDisney,
            original: originals,
            trending: trendings,
          })
        );
      })
    );
  }, [name]);

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
      <VideoSection heading="Recommended For You" data={recommended} />
      <VideoSection heading="New To Disney+" data={newToDisney} />
      <VideoSection heading="Disney Originals" data={original} />
      <VideoSection heading="Trending" data={trending} />
    </main>
  );
};
