import { memo, useCallback, useContext, useState } from 'react';
import styles from './Select.module.scss'
import Button from '../../../../shared/ui/Button/Button';
import { AccountContext } from '../../model/AccountContext';

const Select = (props) => {
    const {
        children
    } = props;

    const {
        users,
        setUserName,
        setUserSecName,
        setUserPosition,
        setUserCompany,
        setUserEmail,
        setUserPhone,
        setUserDescription
    } = useContext(AccountContext);

    const [isOpen, setIsOpen] = useState(false);

    const onClickHeader = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const onClickOption = useCallback((index) => {
        const user = users[index];

        setUserName(user.userName);
        setUserSecName(user.userSecName);
        setUserPosition(user.userPosition);
        setUserCompany(user.userCompany);
        setUserEmail(user.userEmail);
        setUserPhone(user.userPhone);
        setUserDescription(user.userDescription);
    }, [users]);

    return (
        <div className={styles.select}>
            <Button
                className={styles.header}
                onClick={onClickHeader}
            >
                {children}
            </Button>
            {isOpen && (
                <ul className={styles.list}>
                    {users.map((user, index) => (
                        <li 
                            className={styles.item}
                            key={index}
                        >
                            <Button
                                className={styles.option}
                                onClick={() => onClickOption(index)}
                            >
                                {user.userName}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default memo(Select);