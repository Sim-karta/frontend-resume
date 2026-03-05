import styles from './Field.module.scss'

const Field = (props) => {
    const {
        className = '',
        id,
        label,
        placeholder,
        type = 'text'
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
            />
        </div>
        
    )
}

export default Field;