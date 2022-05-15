import caretIcon from "../../assets/icons/caret.png";
import { Button, ButtonType } from "../Button/Button";
import styles from "./Header.module.scss";

export const HeaderVideo = () => {
  return (
    <header>
      <div className={styles.headerTitle}>
        <div className={styles.title}>Saying Hi to my customers</div>
        <img src={caretIcon} alt="Hi" />
      </div>
      <div className={styles.headerTools}>
        <Button type={ButtonType.fillGray} label="Cancel" />
        <Button type={ButtonType.fillGreen} label="Save" />
      </div>
      
    </header>
  )
};