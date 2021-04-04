import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.par}>
      <div className={style.container}>
        <header className={style.header}>
          <img src={`images/logo.png`} />
        </header>

        <div className={style.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
