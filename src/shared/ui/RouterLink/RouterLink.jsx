import { memo, useCallback } from "react";
import styles from './RouterLink.module.scss';
import { BASE_URL } from "../../constans";

const RouterLink = (props) => {
    const {
        className = '',
        to,
        children,
        isDisabled = false,
        ...rest
    } = props;

    const handleClick = useCallback((event) => {
        event.preventDefault();
        window.history.pushState({}, '', to);
        window.dispatchEvent(new PopStateEvent('popstate'))
    }, [to]);

    const classes = useCallback(() => {
        if (className == "button") {
            return styles.button;
        } else if (className == "back-button") {
            return styles.backButton;
        }

        return "link";
    }, []);

    return (
        <a
            className={`${classes()} ${isDisabled ? styles.disabled : ''}`}
            href={`${BASE_URL}${to}`}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    )
}

export default memo(RouterLink);