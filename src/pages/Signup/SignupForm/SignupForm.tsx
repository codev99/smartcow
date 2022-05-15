import Routes from "../../../app/routes";
import { Button, ButtonType } from  "../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.scss";

export const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.signup} >
      <div className={styles.form} >
        <div className={styles.field}>
          <label>Full name</label>
          <input name="fullname" />
        </div>
        <div className={styles.field}>
          <label>Email address</label>
          <input name="email" />
        </div>
        <div className={styles.field}>
          <label>New Password</label>
          <span className={styles.sublabel}>Strong</span>
          <input name="password" type="password" />
        </div>
        <Button
          type={ButtonType.fillGreen}
          label="Signup"
          onClick={() => navigate(Routes.VIDEO)}
        />
        <div className={styles.footer}>Already user? <Link to={Routes.ROOT}>Login</Link></div>
      </div>
    </div>
  )
}
