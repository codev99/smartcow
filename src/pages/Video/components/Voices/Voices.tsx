import styles from "./Voices.module.scss";
import asian from "../../../../assets/images/voices/asian.png";
import british from "../../../../assets/images/voices/british.png";
import american from "../../../../assets/images/voices/american.png";

export const Voices = () => {
  return (
    <div className={styles.voices}>
      <img src={asian} alt="asian" />
      <img src={british} alt="british" />
      <img src={american} alt="american" />
    </div>
  )
};