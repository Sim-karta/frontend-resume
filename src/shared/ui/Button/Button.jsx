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

    let style = className;

    if (!className) {
        style = styles.button;
    }

    return (
        <button
            className={style}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default memo(Button);