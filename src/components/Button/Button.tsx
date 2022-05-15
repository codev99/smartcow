import styles from "./Button.module.scss";

export enum ButtonType {
  fillGray = "fillGray",
  fillGreen = "fillGreen",
  fillBlue = "fillBlue",
  linkRed = "linkRed",
  linkGray = "linkGray",
  linkBlue = "linkBlue",
  outlineGray = "outlineGray",
  toggleGray = "toggleGray",
  toggleBlue = "toggleBlue",
};

type ButtonProps = {
  type: ButtonType;
  label: string;
  onClick?: () => void;
}

export const Button = ({type, label, onClick}: ButtonProps) => {
  return (
    <button
      className={styles[type]}
      onClick={onClick}
    >
      {label}
    </button>
  )
};