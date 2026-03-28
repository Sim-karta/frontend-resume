import { memo } from 'react';
import styles from './Button.module.scss'

const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
        isDisabled = false,
        onClick
    } = props;

    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default memo(Button);