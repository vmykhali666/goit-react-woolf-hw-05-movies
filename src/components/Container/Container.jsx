import React from 'react';
import css from "style/Container.module.css"

export const Container = ({ children }) => {
  return <div className={css.Container}>{children}</div>;
};
