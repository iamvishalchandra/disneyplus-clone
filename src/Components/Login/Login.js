import React from "react";
import { Link } from "react-router-dom";
// import LoginLogo from "../../images/loginlogo.png";
import "./Login.style.css";

export const Login = () => {
  return (
    <section className="login">
      <div className="login__content">
        <div className="login__content__actions">
          <img
            className="login__content__actions__logo login__content__actions__logo--top"
            src="/images/loginlogo.svg"
            alt="logo"
          />
          <Link className="login__content__actions__getStarted" to="#">
            GET STARTED
          </Link>
          <p className="login__content__actions__decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            veritatis nihil eos sapiente possimus quae maiores iure iusto sunt.
            Voluptatibus inventore pariatur reprehenderit omnis dicta eveniet
            similique quasi molestiae porro.
          </p>
          <img
            className="login__content__actions__logo login__content__actions__logo--bottom"
            src="/images/loginlogo2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
