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
            className={className}
            type={type}
            isDisabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;