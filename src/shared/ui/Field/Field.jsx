import { memo } from 'react';
import styles from './Field.module.scss'

const Field = (props) => {
    const {
        className = '',
        type = 'text',
        id,
        label,
        placeholder,
        value,
        onInput = () => {},
        onBlur = () => {},
        onChange = () => {},
        accept = '',
        error = '',
        ref
    } = props;

    return (
        <div className={`${styles.field} ${className == 'hidden' ? styles.hiddenInput : className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input 
                className={`${styles.input} ${error ? styles.isInvalid : ''}`}
                type={type}
                id={id}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onInput={( {target} ) => onInput(target.value)}
                onBlur={( {target} ) => onBlur(target.value)}
                onChange={( {target} ) => onChange(target)}
                accept={accept}
                ref={ref}
            />
            {error && (
                <span className={`${styles.error}`}>{error}</span>
            )}
        </div>
        
    )
}

export default memo(Field);