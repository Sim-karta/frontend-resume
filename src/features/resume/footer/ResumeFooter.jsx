import { memo, useCallback, useContext } from "react";
import Button from "../../../shared/ui/Button/Button";
import { AccountContext } from "../../../entities/resume/model/AccountContext";

const ResumeFooter = (props) => {
    const {styles} = props;

    const {
        users, setUsers,
        clearResume,
        userName,
        userSecName,
        userPosition,
        userCompany,
        userEmail,
        userPhone,
        userDescription
    } = useContext(AccountContext);

    const writeUsers = useCallback(() => {
        console.log(localStorage.getItem('users'));
    }, []);

    const saveResume = useCallback((event) => {
        event.preventDefault();

        const newUser = {
            userName,
            userSecName,
            userPosition,
            userCompany,
            userEmail,
            userPhone,
            userDescription
        };

        setUsers([...users, newUser]);

        clearResume();
    }, [users]);

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
            >
                Зберегти
            </Button>
        </div>
    )
}

export default memo(ResumeFooter);