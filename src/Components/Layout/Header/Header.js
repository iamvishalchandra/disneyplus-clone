import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../../../features/Users/userSlice";
import { auth, provider } from "../../../firebase";
import { HeaderOptions } from "../HeaderOptions/HeaderOptions";
import "./Header.style.css";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, photo } = useSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      } else history.push("/");
    });
  }, [name]);
  

  const handleAuth = () => {
    if (!name) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => alert(err.message));
    }

    if (name)
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <nav className="header">
      <Link className="header__logo" to="/home">
        <img
          className="header__logo__image"
          src="/images/logo.svg"
          alt="logo"
        />
      </Link>
      {name ? (
        <>
          <div className="header__menu">
            <HeaderOptions
              icon="/images/menu/home.svg"
              title="HOME"
              link="/home"
            />
            <HeaderOptions
              icon="/images/menu/search.svg"
              title="SEARCH"
              link="#"
            />
            <HeaderOptions
              icon="/images/menu/watchlist.svg"
              title="WATCHLIST"
              link="#"
            />
            <HeaderOptions
              icon="/images/menu/originals.svg"
              title="ORIGINALS"
              link="#"
            />
            <HeaderOptions
              icon="/images/menu/movies.svg"
              title="MOVIES"
              link="#"
            />
            <HeaderOptions
              icon="/images/menu/series.svg"
              title="SERIES"
              link="#"
            />
          </div>
          <div className="header__user">
            <img className="header__user__photo" src={photo} alt={name} />
            <div onClick={handleAuth} className="header__user__options">
              <span className="header__user__options__logout">Sign Out</span>
            </div>
          </div>
        </>
      ) : (
        <Link to="#" className="header__login" onClick={handleAuth}>
          Login
        </Link>
      )}
    </nav>
  );
};
