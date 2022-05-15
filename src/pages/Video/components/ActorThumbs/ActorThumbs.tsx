import styles from "./ActorThumbs.module.scss";
import act1 from "../../../../assets/images/actors/1.png";
import act2 from "../../../../assets/images/actors/2.png";
import act3 from "../../../../assets/images/actors/3.png";
import act4 from "../../../../assets/images/actors/4.png";
import act5 from "../../../../assets/images/actors/5.png";
import act6 from "../../../../assets/images/actors/6.png";
import act7 from "../../../../assets/images/actors/7.png";

export const ActorThumbs = () => {
  return (
    <div className={styles.actorThumbs}>
      <div className={styles.actor}>
        <img alt="Anna" src={act1} />
        <label>Anna</label>
      </div>

      <div className={styles.actor}>
        <img alt="YoYo" src={act2} />
        <label>YoYo</label>
      </div>

      <div className={styles.actor}>
        <img alt="Skye" src={act3} />
        <label>Skye</label>
      </div>

      <div className={styles.actor}>
        <img alt="Mike" src={act4} />
        <label>Mike</label>
      </div>

      <div className={styles.actor}>
        <img alt="Vincent" src={act5} />
        <label>Vincent</label>
      </div>

      <div className={styles.actor}>
        <img alt="Peter" src={act6} />
        <label>Peter</label>
      </div>

      <div className={styles.actor}>
        <img alt="May" src={act7} />
        <label>May</label>
      </div>
    </div>
  )
};