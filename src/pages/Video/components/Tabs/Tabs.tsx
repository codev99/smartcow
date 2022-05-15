import { useState } from "react";
import styles from "./Tabs.module.scss";

type TabsProps = {
  labels: string[];
  panels: any[];
}

export const Tabs = ({ labels, panels }: TabsProps) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        {labels.map((label, index) => (
          <button
            className={`${styles.tabButton} ${tab === index ? styles.buttonSelected : ""}`}
            key={`tab_button_${index}`}
            onClick={() => setTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.tabsBody}>
        {panels.map((Comp, index) => (
          <div
            className={`${styles.tabPanel} ${tab === index ? styles.panelSelected : ""}`}
            key={`tab_panel_${index}`}
          >
            {Comp}
          </div>
        ))}
      </div>
    </div>
  );
};