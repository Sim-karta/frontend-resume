import { useCallback, useContext } from "react";
import Button from "../../../shared/ui/Button/Button";
import { AccountContext } from "../../../entities/account/model/AccountContext";
import Select from "../../../entities/account/ui/Select/Select";

const ResumeFooter = (props) => {
    const {styles} = props;

    const {
        clearResume,
        saveUser,
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
            <Select>
                Вибрати готове резюме
            </Select>
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