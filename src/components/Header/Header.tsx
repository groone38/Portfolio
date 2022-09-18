import React, { useEffect, useRef, useState } from "react";
import classes from "./Header.module.scss";
import "./burger.scss";

const Header = () => {
  const [burger_class, setBurger_class] = useState("burger_bar unclicked");
  const [menu_class, setMenu_class] = useState("menu hidden");
  const [isClicked, setIsClicked] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  const updateMenu = () => {
    if (!isClicked) {
      setBurger_class("burger_bar clicked");
      setMenu_class("menu visible");
    } else {
      setBurger_class("burger_bar unclicked");
      setMenu_class("menu hidden");
    }
    setIsClicked(!isClicked);
  };

  const handleOutsideClick = (e: any) => {
    // console.log(e.path);
    // console.log(burgerRef.current);
    if (!e.path.includes(burgerRef.current) && !e.path.includes(menuRef.current)) {
      console.log('work');
      setIsClicked(false)
      setBurger_class("burger_bar unclicked");
      setMenu_class("menu hidden");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className={classes.header}>
      <ul className={classes.header__list}>
        <li>
          <a href="#skill">SKILL</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#project">PROJECT</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
      <div className="burger" onClick={updateMenu} ref={menuRef}>
        <div className={burger_class} style={{backgroundColor: !isClicked ? 'black' : 'white' }}></div>
        <div className={burger_class} style={{backgroundColor: !isClicked ? 'black' : 'white' }}></div>
        <div className={burger_class} style={{backgroundColor: !isClicked ? 'black' : 'white' }}></div>
      </div>
      <div className={menu_class} ref={burgerRef}>
        <ul className={classes.header__list_mobail}>
          <li onClick={updateMenu}>
            <a href="#skill">SKILL</a>
          </li>
          <li onClick={updateMenu}>
            <a href="#work">WORK</a>
          </li>
          <li onClick={updateMenu}>
            <a href="#project">PROJECT</a>
          </li>
          <li onClick={updateMenu}>
            <a href="#about">ABOUT</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
