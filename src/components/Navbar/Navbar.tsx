import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Video } from "../../assets/icons/video.svg";
import { ReactComponent as Browse } from "../../assets/icons/browse.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import Routes from "../../app/routes";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Logo className={styles.logo} />

        <NavLink
          to={Routes.VIDEO}
          className={({ isActive }) => isActive ? styles.navButtonSelected : styles.navButton}
        >
          <Video />
        </NavLink>

        <NavLink
          to={Routes.VIDEOBROWSE}
          className={({ isActive }) => isActive ? styles.navButtonSelected : styles.navButton}
        >
          <Browse />
        </NavLink>
      </div>
      
      <Link to={Routes.PROFILE} className={styles.footer}>
        <IconButton>
          <Profile />
        </IconButton>
      </Link>
    </div>
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