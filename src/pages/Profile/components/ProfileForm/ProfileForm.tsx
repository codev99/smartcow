
import avatar from "../../../../assets/images/avatar.png";
import editIcon from "../../../../assets/icons/edit.png";
import styles from "./ProfileForm.module.scss";
import { Button, ButtonType } from "../../../../components/Button/Button";

export const ProfileForm = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
        <button className={styles.edit}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <div className={styles.form}>
        <div className={styles.field}>
          <label>First Name</label>
          <input value="Balamurali" />
        </div>
        <div className={styles.field}>
          <label>Last Name</label>
          <input value="A" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input value="12bala90@gmail.com" />
        </div>
      </div>
      <Button type={ButtonType.fillGreen} label="Save Changes" />
    </div>
  )
}
