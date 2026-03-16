import { memo, useContext, useMemo } from 'react';
import myImage from '../../../shared/assets/cat.jpg';
import { AccountContext } from '../../../entities/resume/model/AccountContext';

const ProfileHeader = (props) => {
    const { styles } = props;

    const {
        userName,
        userSecName
    } = useContext(AccountContext);

    const name = useMemo(() => {
        return userName ? userName : "Ім'я";
    }, [userName]);

    const secName = useMemo(() => {
        return userSecName ? userSecName : "Прізвище";
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

export default memo(ProfileHeader);