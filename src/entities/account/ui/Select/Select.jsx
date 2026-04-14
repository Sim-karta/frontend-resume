import { memo, useCallback, useContext, useState } from 'react';
import styles from './Select.module.scss'
import Button from '@/shared/ui/Button';

const Select = (props) => {
    const {
        children,
        items,
        onClickOption,
        activeOption
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onClickHeader = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <div className={styles.select}>
            <Button
                className={styles.header}
                onClick={onClickHeader}
            >
                {children}
            </Button>
            <ul className={`${styles.list} ${isOpen ? "" : "visually-hidden"}`}>
                {items.map((item, index) => (
                    <li 
                        className={styles.item}
                        key={index}
                    >
                        <Button
                            className={styles.option}
                            onClick={() => {
                                onClickOption(index);
                                setIsOpen(false);
                            }}
                            isDisabled={item.id == activeOption}
                        >
                            {item[Object.keys(item)[0]]}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Select);