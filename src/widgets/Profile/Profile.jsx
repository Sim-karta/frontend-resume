import { memo, useContext } from 'react';
import ProfileHeader from '../../features/profile/header/ProfileHeader';
import ProfileMain from '../../features/profile/main/ProfileMain';
import styles from './Profile.module.scss'
import { AccountContext } from '../../entities/account/model/AccountContext';

const Profile = (props) => {
    const { only } = props;

    const { profileSave } = useContext(AccountContext);

    return (
        <div 
            className={`${styles.profile} ${only ? styles.only : ''} ${profileSave ? styles.save : ''}`}
        >
            <ProfileHeader styles={styles} />
            <ProfileMain styles={styles} />
        </div>
    )
}

export default memo(Profile);