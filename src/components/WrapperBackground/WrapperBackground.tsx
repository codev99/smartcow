import { ReactElement } from "react";
import { ReactComponent as Bg } from "../../assets/images/bg.svg";

import styles from "./WrapperBackground.module.scss";

type WrapperBackgroundProps = {
  children: ReactElement;
}
export const WrapperBackground = ({ children }: WrapperBackgroundProps) => {

  return (
    <div className={styles.wrapperBackground}>
      <Bg className={styles.bg} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
};