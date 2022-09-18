import React from "react";
import classes from "./BaseTitle.module.scss";

type Props = {
  text: string;
};

const BaseTitle = ({ text }: Props) => {
  return (
    <div className={classes.title}>
      <h1>{text}</h1>
    </div>
  );
};

export default BaseTitle;
