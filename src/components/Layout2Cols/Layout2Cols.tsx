import { ReactElement } from "react";
import styles from "./Layout2Cols.module.scss";

type Layout2ColsProps = {
  col1: ReactElement;
  col2: ReactElement;
}

export const Layout2Cols = ({ col1, col2 }: Layout2ColsProps) => {

  return (
    <div className={styles.layout2Cols}>
      <div className={styles.col1}>{col1}</div>
      <div className={styles.col2}>{col2}</div>
    </div>
  )
};