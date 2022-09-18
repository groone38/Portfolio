import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Main from "./components/pages/Main/Main";
import Projects from "./components/pages/Projects/Projects";
import Skills from "./components/pages/Skills/Skills";
import Work from "./components/pages/Work/Work";

function App() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.block}></div>
        <Header />
        <Main />
        <Skills />
        <Work />
        <Projects />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
