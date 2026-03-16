import { memo, useContext, useMemo } from "react";
import { AccountContext } from "../../../entities/resume/model/AccountContext";

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
        return userPosition ? userPosition : 'Посада';
    }, [userPosition]);

    const company = useMemo(() => {
        return userCompany ? userCompany : 'Компанія';
    }, [userCompany]);

    const email = useMemo(() => {
        return userEmail ? userEmail : 'Пошта';
    }, [userEmail]);

    const phone = useMemo(() => {
        return userPhone ? userPhone : 'Телефон';
    }, [userPhone]);

    const description = useMemo(() => {
        return userDescription ? userDescription : '...';
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
            <p>{description}</p>
        </div>
    )
}

export default memo(ProfileMain);