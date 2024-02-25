import { memo } from "react";

import { Outlet } from "react-router-dom";

import { Header } from "../Header";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default memo(Layout);
