import React from "react";
import Styles from "./Hero.module.css";
import resume from "../assets/resume.pdf";
import { useTheme } from "../common/Themecontext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero">
      <div className={Styles.colormodeContainer}>
        <img
          src="https://img.icons8.com/?size=100&id=BcWr8NBOsovH&format=png&color=000000"
          alt="profile photo"
          id={Styles.hero}
        />
        <img
          src="https://img.icons8.com/?size=100&id=KdGSaekvwdoD&format=png&color=000000"
          alt="dark mode"
          id={Styles.darkmode}
          onClick={toggleTheme}
        />
      </div>
      <div className={Styles.info}>
        <h1>
          Chitiz <br /> Kumar
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"
              alt="twitter"
            />
          </a>
        </span>
        <span>
          <a href="https://github.com/" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
              alt="github"
            />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=42453&format=png&color=000000"
              alt="linkedin"
            />
          </a>
        </span>
        <p>I design and develop experiences that makes people life easier.</p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
