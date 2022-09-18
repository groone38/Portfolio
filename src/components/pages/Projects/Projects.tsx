import React, { useEffect, useState } from "react";
import BaseTitle from "../../BaseTitle/BaseTitle";
import classes from "./Projects.module.scss";
import bgI from "../../../images/bgI.png";
import bgI2 from "../../../images/bgI2.png";
import bgI3 from "../../../images/bgI3.png";

const Projects = () => {
  const [size, setSize] = useState(0)

  let resizeHandler = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [])

  return (
    <div className={classes.projects} id="project">
      <BaseTitle text="Projects" />
      <div className={classes.projects__card}>
        <img src={bgI} alt="bgI" />
        <div className={classes.projects__info}>
          <h1>Project 1</h1>
          <h1 style={{ fontSize: size > 1200 ? "50px" : "40px" }}>
            (в разработке)
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is crisp in view.
          </p>
        </div>
      </div>
      <div className={classes.projects__card}>
        {size > 1200 ? (
          <>
            <div className={classes.projects__info}>
              <h1 style={{ textAlign: "end" }}>Project 2</h1>
              <h1 style={{ textAlign: "end", fontSize: "50px" }}>
                (в разработке)
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is crisp in view.
              </p>
            </div>
            <img src={bgI2} alt="bgI" />
          </>
        ) : (
          <>
            <img src={bgI2} alt="bgI" />
            <div className={classes.projects__info}>
              <h1>Project 2</h1>
              <h1
                style={{ fontSize: size > 1200 ? "50px" : "40px" }}
              >
                (в разработке)
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is crisp in view.
              </p>
            </div>
          </>
        )}
      </div>
      <div className={classes.projects__card}>
        <img src={bgI3} alt="bgI" />
        <div className={classes.projects__info}>
          <h1>Project 3</h1>
          <h1 style={{ fontSize: size > 1200 ? "50px" : "40px" }}>
            (в разработке)
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is crisp in view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
