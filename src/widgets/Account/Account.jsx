import Profile from "../Profile/Profile";
import Resume from "../Resume/Resume";
import styles from "./Account.module.scss";

const Account = () => {
    return (
        <div className={styles.account}>
            <Resume />
            <Profile />
        </div> 
    )
}

export default Account;