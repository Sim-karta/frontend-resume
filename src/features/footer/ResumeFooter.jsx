import Button from "../../shared/ui/Button/Button";

const ResumeFooter = (props) => {
    const {styles} = props;

    return (
        <div className={styles.footer}>
            <Button
                type="submit"
            >
                Зберігти
            </Button>
        </div>
    )
}

export default ResumeFooter;