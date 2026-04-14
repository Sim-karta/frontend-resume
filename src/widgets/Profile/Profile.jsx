import { memo, useContext } from 'react';
import ProfileHeader from '@/features/profile/header';
import ProfileMain from '@/features/profile/main';
import styles from './Profile.module.scss'
import { AccountContext } from '@/entities/account';

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