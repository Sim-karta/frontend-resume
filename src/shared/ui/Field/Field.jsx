import { memo } from 'react';
import styles from './Field.module.scss'

const Field = (props) => {
    const {
        className = '',
        id,
        label,
        placeholder,
        type = 'text',
        value,
        onInput,
        ref
    } = props;

    return (
        <div className={`${styles.field} ${className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input 
                className={`${styles.input}`}
                id={id}
                placeholder={placeholder}
                autoComplete="off"
                type={type}
                value={value}
                onInput={( {target} ) => onInput(target.value)}
                ref={ref}
            />
        </div>
        
    )
}

export default memo(Field);