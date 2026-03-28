import { useContext, useMemo } from "react";
import { AccountContext } from "../../../entities/account/model/AccountContext";

const ProfileMain = (props) => {
    const { styles } = props;

    const {
        userPosition,
        userCompany,
        userEmail,
        userPhone,
        userDescription
    } = useContext(AccountContext);

    const position = useMemo(() => {
        return userPosition.trim() === '' ? 'Посада' : userPosition;
    }, [userPosition]);

    const company = useMemo(() => {
        return userCompany.trim() === '' ? 'Компанія' : userCompany;
    }, [userCompany]);

    const email = useMemo(() => {
        return userEmail.trim() === '' ? 'Пошта' : userEmail;
    }, [userEmail]);

    const phone = useMemo(() => {
        return userPhone.trim() === '' ? 'Телефон' : userPhone;
    }, [userPhone]);

    const description = useMemo(() => {
        return userDescription.trim() === '' ? '...' : userDescription;
    }, [userDescription]);

    return (
        <div className={styles.main}>
            <div className={styles.job}>
                <p>{position}</p>
                <p>{company}</p>
            </div>
            <h3>Контактні дані</h3>
            <div className={styles.contacts}>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <h3>Опис</h3>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProfileMain;