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

export const HeaderVideoBrowse = () => {
  return (
    <header>
      <div className={styles.headerTitle}>
        <div className={styles.title}>Saved Videos</div>
      </div>
      <div className={styles.headerTools}>
        <Button type={ButtonType.fillGreen} label="Create New" />
      </div>
    </header>
  )
}

export const HeaderProfile = () => {
  return (
    <header>
      <div className={styles.headerTitle}>
        <div className={styles.title}>My Account</div>
      </div>
      <div className={styles.headerTools}>
        <Button type={ButtonType.linkRed} label="Logout" />
      </div>
    </header>
  )
}

export const HeaderLogin = () => {
  return (
    <header className={styles.noBorder}>
      <div className={styles.headerTitle}>
        <div className={styles.title}>Sign in</div>
      </div>
    </header>
  )
}

export const HeaderSignup = () => {
  return (
    <header className={styles.noBorder}>
      <div className={styles.headerTitle}>
        <div className={styles.title}>Create an account</div>
      </div>
    </header>
  )
}