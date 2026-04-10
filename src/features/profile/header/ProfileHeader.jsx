import { useContext, useMemo } from 'react';
import myImage from '../../../shared/assets/cat.jpg';
import { AccountContext } from '../../../entities/account/model/AccountContext';

const ProfileHeader = (props) => {
    const { styles } = props;

    const {
        userPhoto,
        userName,
        userSecName
    } = useContext(AccountContext);

    const photo = useMemo(() => {
        if (userPhoto) {
            return userPhoto.trim() === '' ? myImage : userPhoto;
        } else {
            return myImage;
        }
    }, [userPhoto]);

    const name = useMemo(() => {
        if (userName) {
            return userName.trim() === '' ? "Ім'я" : userName;
        } else {
            return "Ім'я";
        }
    }, [userName]);

    const secName = useMemo(() => {
        if (userSecName) {
            return userSecName.trim() === '' ? "Прізвище" : userSecName;
        } else {
            return "Прізвище";
        }
    }, [userSecName]);

    return (
        <div className={styles.header}>
            <img 
                src={photo} 
                className={styles.avatar}
            />
            <div className={styles.name}>
                <p>{name}</p>
                <p>{secName}</p>
            </div> 
        </div>
    )
}

export default ProfileHeader;