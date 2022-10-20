import React from "react";
import classes from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.main__title}>
        <h1>Hello</h1>
        <br />
        <h1>I’m Lisin</h1>
        <br />
        <h1>Andrey</h1>
      </div>
      <div className={classes.main__social}>
        <a href="https://github.com/groone38" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrey-lisin-5323a7239/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://t.me/lisichkinlove" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
      <a href={require('./CV.pdf')} type="application/octet-stream" download className={classes.main__btn}>DOWNLOAD CV</a>
    </main>
  );
};

export default Main;
