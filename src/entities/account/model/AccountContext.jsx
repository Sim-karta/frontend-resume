import { useMemo } from "react";
import { createContext } from "react";
import useAccount from "./hooks/useAccount";
import useAccountInputs from "./hooks/useAccountInputs";

export const AccountContext = createContext({});

export const AccountProvider = (props) => {
    const { children } = props;

    const {
        users, setUsers,

        saveUser,
        writeUsers,

        nameInputRef
    } = useAccount();

    const {
        clearResume,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,

        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        onInputName,
        onInputSecName,
        onInputPosition,
        onInputCompany,
        onInputEmail,
        onInputPhone,
        onInputDescription
    } = useAccountInputs();

    const value = useMemo(() => ({
        users, setUsers,
        clearResume,
        saveUser,
        writeUsers,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,

        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        onInputName,
        onInputSecName,
        onInputPosition,
        onInputCompany,
        onInputEmail,
        onInputPhone,
        onInputDescription,

        nameInputRef
    }), [
        users, setUsers,
        clearResume,
        saveUser,
        writeUsers,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,
        
        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        onInputName,
        onInputSecName,
        onInputPosition,
        onInputCompany,
        onInputEmail,
        onInputPhone,
        onInputDescription,

        nameInputRef
    ]);

    return (
        <AccountContext.Provider
            value = {value}
        >
            {children}
        </AccountContext.Provider>
    )
}