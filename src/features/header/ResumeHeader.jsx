const ResumeHeader = (props) => {
    const {styles} = props;

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Персональна інформація</h1>
            <button
                className={styles.closeButton}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 5L5 15M5 5L15 15"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    )
}

export default ResumeHeader;