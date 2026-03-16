import { memo, useCallback, useContext } from "react";
import { AccountContext } from "../../../entities/resume/model/AccountContext";

const ResumeHeader = (props) => {
    const {styles} = props;

    const {
        clearResume
    } = useContext(AccountContext);

    const onButtonClick = useCallback(() => {
        const isConfirm = confirm('Are you sure you want to clear the form?');

        if(isConfirm) {
            clearResume();
        }        
    }, []);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Персональна інформація</h1>
            <button
                className={styles.closeButton}
                onClick={onButtonClick}
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

export default memo(ResumeHeader);