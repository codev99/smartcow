import { Button, ButtonType } from "../../../../components/Button/Button";
import videoPreview from "../../../../assets/images/video_preview.png";

import styles from "./VideoPlayer.module.scss";

export const VideoPlayer = () => {
  return (
    <div className={styles.videoPlayer}>
      <div className={styles.picture}>
        <img src={videoPreview} alt="video preview" />
        <Button type={ButtonType.fillBlue} label="Preview" />     
      </div>

      <div className={styles.panel}>
        <div className={styles.description}>
          Type or paste your videoscript here. You can also request a translation of an English script to an of 27 other languages
        </div>
        <div className={styles.panelFooter}>
          <Button type={ButtonType.fillGray} label="Listen" />
          <span className={styles.charLeft}>0 char</span>
        </div>

      </div>
    </div>
  )
};