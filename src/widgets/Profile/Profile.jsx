import { memo } from 'react';
import ProfileHeader from '../../features/profile/header/ProfileHeader';
import ProfileMain from '../../features/profile/main/ProfileMain';
import styles from './Profile.module.scss'

const Profile = (props) => {
    const { only } = props;

    return (
        <div className={`${styles.profile} ${only ? styles.only : ''}`}>
            <ProfileHeader styles={styles} />
            <ProfileMain styles={styles} />
        </div>
    )
}

export default memo(Profile);