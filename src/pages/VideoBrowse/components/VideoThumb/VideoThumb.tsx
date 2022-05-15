
import videoPreview from "../../../../assets/images/video_preview.png";
import moreIcon from "../../../../assets/icons/more.png";
import styles from "./VideoThumb.module.scss";

export const VideoThumb = () => {
  return (
    <div className={styles.videoThumb}>
      <div className={styles.picture}>
        <img src={videoPreview} alt="video preview" />
        <button><img src={moreIcon} alt="more" /></button>
      </div>
      <div className={styles.description}>Saying Hi to users!</div>
      <div className={styles.tags}>
        <span className={styles.tag}>Email</span>
        <span className={styles.tag}>Marketing</span>
        <span className={styles.tag}>Greeting</span>
      </div>
    </div>
  )
};