import { useRef } from "react";
import Routes from "../../../app/routes";
import { Button, ButtonType } from  "../../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";

type LoginFormProps = {
  signin: (email:string, password:string) => void;
}

export const LoginForm = ({ signin }: LoginFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignin = () => {
    if (emailRef?.current?.value && passwordRef?.current?.value) {
      signin(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <div className={styles.login} >
      <div className={styles.form} >
        <div className={styles.field}>
          <label>Email address</label>
          <input ref={emailRef} name="email" />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <span className={styles.sublabel}><a href="/#">Forgot?</a></span>
          <input ref={passwordRef} name="password" type="password" />
        </div>
        <Button type={ButtonType.fillGreen} label="Login" onClick={handleSignin} />
        <div className={styles.footer}>New here? <Link to={Routes.SIGNUP}>Signup</Link></div>
      </div>
    </div>
  )
}
