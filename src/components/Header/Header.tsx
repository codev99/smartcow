import { useState } from "react";
import caretIcon from "../../assets/icons/caret.png";
import { Button, ButtonType } from "../Button/Button";
import styles from "./Header.module.scss";

export const HeaderVideo = () => {
  const [showDescr, setShowDescr] = useState<boolean>(false);

  return (
    !showDescr ? (
      <header>
        <div className={styles.headerTitle} onClick={() => setShowDescr(true)}>
          <div className={styles.title}>Saying Hi to my customers</div>
          <img src={caretIcon} alt="Hi" />
        </div>
        <div className={styles.headerTools}>
          <Button type={ButtonType.fillGray} label="Cancel" />
          <Button type={ButtonType.fillGreen} label="Save" />
        </div>
      </header>
      )
      :
      (
        <div className={styles.headerOverlay}>
          <div className={styles.headerOverlayContent}>
            <div className={styles.headerTitle}>
              <input name="title" value="Saying Hi to my customers" />
              <textarea>Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper</textarea>
            </div>
            <div className={styles.tags}>
              <div className={styles.tag}>Email</div>
              <div className={styles.tag}>Marketing</div>
              <div className={styles.tag}>Greeting</div>
              <div className={styles.tag}>Email</div>
              <div className={styles.tag}>Marketing</div>
              <div className={styles.tag}>Greeting</div>
              </div>
            <div className={styles.headerTools}>
              <Button type={ButtonType.fillGreen} label="Save" onClick={() => setShowDescr(false)} />
            </div>
          </div>
          <div className={styles.overlay}></div>
        </div>
      )
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