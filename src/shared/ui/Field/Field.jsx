import { memo } from 'react';
import styles from './Field.module.scss'

const Field = (props) => {
    const {
        className = '',
        id,
        label,
        placeholder,
        value,
        onInput = () => {},
        onBlur = () => {},
        error,
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
                className={`${styles.input} ${error ? styles.isInvalid : ''}`}
                id={id}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onInput={( {target} ) => onInput(target.value)}
                onBlur={( {target} ) => onBlur(target.value)}
                ref={ref}
            />
            {error && (
                <span className={`${styles.error}`}>{error}</span>
            )}
        </div>
        
    )
}

export default memo(Field);