import React from "react";
import BaseTitle from "../../BaseTitle/BaseTitle";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.about} id='about'>
      <BaseTitle text="About" />
      <div className={classes.about__text}>
        <p>
          Мой стек технологий: HTML, CSS, Sass, webpack, js, React,
          React-router-dom, React-redux, React Transition Group, TypeScript,
          Git, Git-flow. Мой аккаунт на github -
          https://github.com/groone38?tab=repositories Закончил бакалавриат
          ИМСИТ (факультет информационно-вычислительной техники). В университете
          изучал языки программирования: C++ и C#. Создавал через "Virtualbox"
          виртуальные машины, устанавливал на них ОС "Linux" и "Windows server
          2008 r2". Обучался базовым командам на ОС Linux в командной строке.
          Изучал cтек протоколов TCP/IP, HTTP, сетевую модель OSI.
        </p>
      </div>
      <div className={classes.about__img}>
        <div className={classes.about__card}>
          <div className={classes.info}>
            <span>EMAIL</span>
            <p>groone38@yandex.ru</p>
          </div>
          <div className={classes.info}>
            <span>ROLE</span>
            <p>Frontend Developer</p>
          </div>
          <div className={classes.info}>
            <span>PHONE</span>
            <p>8 905 443 73 59</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
