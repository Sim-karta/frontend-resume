import { useContext, useMemo } from 'react';
import myImage from '../../../shared/assets/cat.jpg';
import { AccountContext } from '../../../entities/account/model/AccountContext';

const ProfileHeader = (props) => {
    const { styles } = props;

    const {
        userName,
        userSecName
    } = useContext(AccountContext);

    const name = useMemo(() => {
        return userName.trim() === '' ? "Ім'я" : userName;
    }, [userName]);

    const secName = useMemo(() => {
        return userSecName.trim() === '' ? "Прізвище" : userSecName;
    }, [userSecName]);

    return (
        <div className={styles.header}>
            <img 
                src={myImage} 
                className={styles.avatar}
                width="100" 
            />
            <div className={styles.name}>
                <p>{name}</p>
                <p>{secName}</p>
            </div> 
        </div>
    )
}

export default ProfileHeader;