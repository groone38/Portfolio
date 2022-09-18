import React from "react";
import BaseTitle from "../../BaseTitle/BaseTitle";
import classes from "./Work.module.scss";

const Work = () => {
  return (
    <div className={classes.works} id='work'>
      <BaseTitle text='Work' />
      <div className={classes.works__info}>
        <div className={classes.work}>
          <div className={classes.work__name}>
            <p>ООО "ЕРКЕР" (Web-разработчик)</p>
            <p>Май • 2022</p>
          </div>
          <div className={classes.work__info}>
            <p>
              - Настройка Web-клиента СЭД в соответствии с техническим заданием
            </p>
            <br />
            <p>
              - Разработка клиентских скриптов на javascript, typescript,
              взаимодействующих с API Web-клиента СЭД
            </p>
            <br />
            <p>
              - Создание собственных элементов управления на базе библиотеки
              ReactJS
            </p>
            <br />
            <p>
              - Создание и перенос решений, включая серверные решения, разметки,
              элементы управления и скрипты между серверами с Web-клиентом
            </p>
            <br />
            <div className={classes.work__icon}>
              <div className={classes.icon}>HTML</div>
              <div className={classes.icon}>SCSS</div>
              <div className={classes.icon}>JAVASCRIPT/TYPESCRIPT</div>
              <div className={classes.icon}>REACT</div>
              <div className={classes.icon}>GULP</div>
              <div className={classes.icon}>GITLAB</div>
              <div className={classes.icon}>DOCSVISION</div>
            </div>
          </div>
        </div>
        <div className={classes.work}>
          <div className={classes.work__name}>
            <p>web студия DevPro (Web-разработчик)</p>
            <p>Декабрь • 2021 - Май • 2022</p>
          </div>
          <div className={classes.work__info}>
            <p>- Создание сайтов</p>
            <br />
            <p>- Создание админских панелей со стороны front-end</p>
            <br />
            <div className={classes.work__icon}>
              <div className={classes.icon}>HTML</div>
              <div className={classes.icon}>SCSS</div>
              <div className={classes.icon}>TAILWILD CSS</div>
              <div className={classes.icon}>FIGMA</div>
              <div className={classes.icon}>GITLAB</div>
              <div className={classes.icon}>JAVASCRIPT/TYPESCRIPT</div>
              <div className={classes.icon}>REACT TS</div>
              <div className={classes.icon}>REACT-ROUTER-DOM</div>
              <div className={classes.icon}>REACT-REDUX</div>
              <div className={classes.icon}>REACT TRANSITION GROUP</div>
            </div>
          </div>
        </div>
        <div className={classes.work}>
          <div className={classes.work__name}>
            <p>Ростелеком (Инженер)</p>
            <p>Май • 2021 - Декабрь • 2021</p>
          </div>
          <div className={classes.work__info}>
            <p>
              - Круглосуточный контроль состояния оборудования жизнеобеспечения
              с использованием систем мониторинга
            </p>
            <br />
            <p>- Контроль времени работы от резервных источников питания</p>
            <br />
            <p>
              - Сокращение сроков устранения аварий, количества аварийных и
              предаварийных ситуаций
            </p>
            <br />
            <p>
              - Приемка и постановка на мониторинг новых объектов в части СЖО
            </p>
            <br />
            <p>
              - Взаимодействие с подразделением эксплуатации по вопросам
              установки подсистем мониторинга СЖО
            </p>
            <br />
            <p>
              - Координация, нотификация и эскалация аварийных и предаварийных
              ситуаций
            </p>
            <br />
            <p>
              - Организация и контроль решения сетевых инцидентов в зоне
              ответственности (ЗО); взаимодействие с энергосбытовыми компаниями
            </p>
            <br />
            <p>
              - Координация, контроль планово-предупредительных и
              планово-профилактических работ ( ППР и ППФ)
            </p>
            <br />
            <p>
              - Аварийные работы на подсистемах СЖО; Отчетность и наполнение
              базы знаний
            </p>
            <br />
            <div className={classes.work__icon}>
              <div className={classes.icon}>TCP/IP</div>
              <div className={classes.icon}>HTTP</div>
              <div className={classes.icon}>OSI</div>
              <div className={classes.icon}>JIRA</div>
              <div className={classes.icon}>CONFLUENCE</div>
              <div className={classes.icon}>MS Office</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
