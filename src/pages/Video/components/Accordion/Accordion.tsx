import { useState } from "react";
import caretIcon from "../../../../assets/icons/caret.png";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  labels: string[];
  panels: any[];
}

export const Accordion = ({ labels, panels }: AccordionProps) => {
  const [panel, setPanel] = useState<number>(0);

  return (
    <div className={styles.accordion}>
      {labels.map((label, index) => (
        <div
          key={`accordion_panel_${index}`}
          className={`${styles.panel} ${panel === index ? styles.panelSelected : ""}`}
        >
          <div
            className={styles.panelHeader}
            onClick={() => setPanel(index)}
          >
            <label>{label}</label>
            <img src={caretIcon} alt="open panel" />
          </div>

          <div className={styles.panelBody}>
            {panels[index]}
          </div>
        </div>
        ))}
    </div>
  );
};