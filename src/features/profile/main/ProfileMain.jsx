import { useContext, useMemo } from "react";
import { AccountContext } from "@/entities/account";

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
        if (userPosition) {
            return userPosition.trim() === '' ? 'Посада' : userPosition;
        } else {
            return 'Посада';
        }
    }, [userPosition]);

    const company = useMemo(() => {
        if (userCompany) {
            return userCompany.trim() === '' ? 'Компанія' : userCompany;
        } else {
            return 'Компанія';
        }
    }, [userCompany]);

    const email = useMemo(() => {
        if (userEmail) {
            return userEmail.trim() === '' ? 'Пошта' : userEmail;
        } else {
            return 'Пошта';
        }
    }, [userEmail]);

    const phone = useMemo(() => {
        if (userPhone) {
            return userPhone.trim() === '' ? 'Телефон' : userPhone;
        } else {
            return 'Телефон';
        }
    }, [userPhone]);

    const description = useMemo(() => {
        if (userDescription) {
            return userDescription.trim() === '' ? '...' : userDescription;
        } else {
            return '...';
        }
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