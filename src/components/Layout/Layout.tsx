import { useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

export const Layout = () => {

  return (
    <div className={styles.layout}>
      <nav><Navbar /></nav>
      <section><Outlet /></section>
    </div>
  )
};