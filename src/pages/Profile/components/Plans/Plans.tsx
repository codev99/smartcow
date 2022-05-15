
import { Button, ButtonType } from "../../../../components/Button/Button";
import { ReactComponent as YesIcon } from "../../../../assets/icons/check.svg";
import { ReactComponent as NoIcon } from "../../../../assets/icons/close.svg";

import styles from "./Plans.module.scss";

export const Plans = () => {
  return (
    <div className={styles.plans}>
      <div className={styles.plan}>
        <div className={styles.title}>Free</div>
        <ul>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Maecenas aget luctus</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Graesent in sollicitudin velit</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Donec in orci vitae nisi</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Class aptens taciti</span></li>
          <li><span className={styles.planIcon}><NoIcon /></span> <span>Ut blandit vestibulum</span></li>
        </ul>
        <div className={styles.price}>
          <div className={styles.priceCurrency}>$</div>
          <div className={styles.priceValue}>0</div>
        </div>
        <Button type={ButtonType.fillBlue} label="Downgrade" />
      </div>

      <div className={styles.plan}>
        <div className={styles.title}>Pro</div>
        <ul>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Maecenas aget luctus</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Graesent in sollicitudin velit</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Donec in orci vitae nisi</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Class aptens taciti</span></li>
          <li><span className={styles.planIcon}><NoIcon /></span> <span>Ut blandit vestibulum</span></li>
        </ul>
        <div className={styles.price}>
          <div className={styles.priceCurrency}>$</div>
          <div className={styles.priceValue}>12</div>
        </div>
        <Button type={ButtonType.fillBlue} label="Downgrade" />
      </div>

      <div className={`${styles.plan} ${styles.selectedPlan}`}>
        <div className={styles.title}>Team</div>
        <ul>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Maecenas aget luctus</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Graesent in sollicitudin velit</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Donec in orci vitae nisi</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Class aptens taciti</span></li>
          <li><span className={styles.planIcon}><NoIcon /></span> <span>Ut blandit vestibulum</span></li>
        </ul>
        <div className={styles.price}>
          <div className={styles.priceCurrency}>$</div>
          <div className={styles.priceValue}>23</div>
        </div>
        <label>Current Plan</label>
      </div>

      <div className={styles.plan}>
        <div className={styles.title}>Agency</div>
        <ul>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Maecenas aget luctus</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Graesent in sollicitudin velit</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Donec in orci vitae nisi</span></li>
          <li><span className={styles.planIcon}><YesIcon /></span> <span>Class aptens taciti</span></li>
          <li><span className={styles.planIcon}><NoIcon /></span> <span>Ut blandit vestibulum</span></li>
        </ul>
        <div className={styles.price}>
          <div className={styles.priceCurrency}>$</div>
          <div className={styles.priceValue}>43</div>
        </div>
        <Button type={ButtonType.fillBlue} label="Upgrade" />
      </div>
    </div>
  )
}
