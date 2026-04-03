import { useCallback, useContext } from "react";
import Button from "../../../shared/ui/Button/Button";
import { AccountContext } from "../../../entities/account/model/AccountContext";
import Select from "../../../entities/account/ui/Select/Select";

const ResumeFooter = (props) => {
    const {styles} = props;

    const {
        users,
        activeUser, setActiveUser,
        setUserName,
        setUserSecName,
        setUserPosition,
        setUserCompany,
        setUserEmail,
        setUserPhone,
        setUserDescription,
        clearResume,
        saveUser,
        changeUser,
        newUser,
        formIsValid,
        clearErrors
    } = useContext(AccountContext);

    const saveResume = useCallback((event) => {
        event.preventDefault();

        if(formIsValid) {
            if(activeUser === -1) {
                saveUser(newUser, () => clearResume());
            } else {
                changeUser(newUser, () => clearResume())
            }
        }
    }, [clearResume,
        newUser,
        formIsValid
    ]);

    const onClickOption = useCallback((index) => {
        const user = users[index];

        setActiveUser(user.id);

        setUserName(user.userName);
        setUserSecName(user.userSecName);
        setUserPosition(user.userPosition);
        setUserCompany(user.userCompany);
        setUserEmail(user.userEmail);
        setUserPhone(user.userPhone);
        setUserDescription(user.userDescription);

        clearErrors();
    }, [users]);

    return (
        <div className={styles.footer}>
            <Select
                items={users}
                onClickOption={onClickOption}
                activeOption={activeUser}
            >
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