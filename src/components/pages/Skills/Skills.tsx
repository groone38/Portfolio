import React from "react";
import classes from "./Skills.module.scss";
import BaseTitle from "../../BaseTitle/BaseTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faNode,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import ts from "../../../images/Typescript.png";
import routerDom from "../../../images/react-router-logo.png";
import nodeExrpess from "../../../images/Expressjs.png";
import reactRedux from "../../../images/redux.png";
import webpack from "../../../images/webpack.png";

const Skills = () => {
  return (
    <div id="skill">
      <BaseTitle text="Skills" />
      <div className={classes.skills}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faCss3Alt} />
          <p>Css</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faSass} />
          <p>Sass</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faJs} />
          <p>Javascript</p>
        </div>
        <div className={classes.icon}>
          <img src={ts} alt="ts" />
          <p>Typescript</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        <div className={classes.icon}>
          <img src={routerDom} alt="routerDom" />
          <p>React-router-dom</p>
        </div>
        <div className={classes.icon}>
          <img src={reactRedux} alt="reactRedux" />
          <p>Redux</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faNode} />
          <p>Node Js</p>
        </div>
        <div className={classes.icon}>
          <img src={nodeExrpess} alt="nodeExrpess" />
          <p>Express</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faNpm} />
          <p>Npm</p>
        </div>
        <div className={classes.icon}>
          <img src={webpack} alt="webpack" />
          <p>Webpack</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faGitlab} />
          <p>GitLab</p>
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faGithub} />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
