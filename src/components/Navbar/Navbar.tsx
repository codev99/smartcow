import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Video } from "../../assets/icons/video.svg";
import { ReactComponent as Browse } from "../../assets/icons/browse.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Logo className={styles.logo} />

        <NavButton>
          <Video />
        </NavButton>

        <NavButton>
          <Browse />
        </NavButton>
      </div>
      
      <div className={styles.footer}>
        <IconButton>
          <Profile />
        </IconButton>
      </div>
    </div>
  )
};

type NavButtonProps = {
  children: React.ReactNode;
};

const NavButton = ({children}: NavButtonProps) => {
  return (
    <button className={styles.navButton}>
      {children}
    </button>
  )
};

type IconButtonProps = {
  children: React.ReactNode;
};

const IconButton = ({children}: IconButtonProps) => {
  return (
    <button className={styles.iconButton}>
      {children}
    </button>
  )
}