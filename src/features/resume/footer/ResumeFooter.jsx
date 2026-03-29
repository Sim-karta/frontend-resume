import { useCallback, useContext } from "react";
import Button from "../../../shared/ui/Button/Button";
import { AccountContext } from "../../../entities/account/model/AccountContext";

const ResumeFooter = (props) => {
    const {styles} = props;

    const {
        clearResume,
        saveUser,
        writeUsers,
        newUser,
        formIsValid
    } = useContext(AccountContext);

    const saveResume = useCallback((event) => {
        event.preventDefault();

        if(formIsValid) {
            saveUser(newUser, () => clearResume());
        }
    }, [clearResume,
        newUser,
        formIsValid
    ]);

    return (
        <div className={styles.footer}>
            <Button
                onClick={writeUsers}
            >
                Вивести готові резюме
            </Button>
            <Button
                type="submit"
                onClick={saveResume}
                isDisabled={!formIsValid}
            >
                Зберегти
            </Button>
        </div>
    )
}

export default ResumeFooter;