import { ReactElement } from "react";
import styles from "./Layout1Col.module.scss";

type Layout1ColProps = {
  children: ReactElement;
}

export const Layout1Col = ({ children }: Layout1ColProps) => {

  return (
    <div className={styles.layout1Col}>
      {children}
    </div>
  )
};