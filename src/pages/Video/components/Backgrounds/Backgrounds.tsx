import { Accordion } from "../Accordion/Accordion";
import uploadIcon from "../../../../assets/icons/upload.png";
import bg1 from "../../../../assets/images/backgrounds/bg1.png";
import bg2 from "../../../../assets/images/backgrounds/bg2.png";
import bg3 from "../../../../assets/images/backgrounds/bg3.png";
import bg4 from "../../../../assets/images/backgrounds/bg4.png";
import bg5 from "../../../../assets/images/backgrounds/bg5.png";
import bg6 from "../../../../assets/images/backgrounds/bg6.png";

import styles from "./Backgrounds.module.scss";

export const Backgrounds = () => {
  return (
    <div className={styles.backgrounds}>
      <Accordion
        labels={["Images", "Solid Colours", "Videos"]}
        panels={[<ImageList />,]}
      />
    </div>
  )
};

const ImageList = () => {
  return (
    <div className={styles.imageList}>
      <div className={styles.image}>
        <div className={styles.imageUpload}>
          <img src={uploadIcon} alt="Upload" />
        </div>
        <label>Upload</label>
      </div>

      <div className={styles.image}>
        <img src={bg1} alt="Office" />
        <label>Office</label>
      </div>

      <div className={styles.image}>
        <img src={bg2} alt="Space" />
        <label>Space</label>
      </div>

      <div className={styles.image}>
        <img src={bg3} alt="Noise" />
        <label>Noise</label>
      </div>

      <div className={styles.image}>
        <img src={bg4} alt="Meeting Room" />
        <label>Meeting Room</label>
      </div>

      <div className={styles.image}>
        <img src={bg5} alt="Books" />
        <label>Books</label>
      </div>

      <div className={styles.image}>
        <img src={bg6} alt="Desk" />
        <label>Desk</label>
      </div>
    </div>
  );
}