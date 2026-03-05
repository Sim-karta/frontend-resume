import ResumeFooter from "../../features/footer/ResumeFooter";
import ResumeHeader from "../../features/header/ResumeHeader";
import ResumeMain from "../../features/main/ResumeMain";
import styles from './Resume.module.scss'

const Resume = () => {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.resume}>
            <ResumeHeader styles={styles}/>
            <form
                className={`${styles.form} resume__form`}
                onSubmit={onSubmit}
            >
                <ResumeMain styles={styles}/>
                <ResumeFooter styles={styles}/>
            </form>
        </div>
        
    )
}

export default Resume;