import { useState } from "react";
import { Button, ButtonType } from "../../../../components/Button/Button";
import styles from "./Alignment.module.scss";

export const Alignment = () => {
  const [toggle, setToggle] = useState<number>(1);

  return (
    <div className={styles.alignment}>
      <Button type={toggle === 0 ? ButtonType.toggleBlue : ButtonType.toggleGray} onClick={() => setToggle(0)} label="Left" />
      <Button type={toggle === 1 ? ButtonType.toggleBlue : ButtonType.toggleGray} onClick={() => setToggle(1)} label="Center" />
      <Button type={toggle === 2 ? ButtonType.toggleBlue : ButtonType.toggleGray} onClick={() => setToggle(2)} label="Right" />
    </div>
  )
};