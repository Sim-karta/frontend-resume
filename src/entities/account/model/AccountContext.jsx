import { useMemo } from "react";
import { createContext } from "react";
import useAccount from "./hooks/useAccount";
import useAccountInputs from "./hooks/useAccountInputs";

export const AccountContext = createContext({});

export const AccountProvider = (props) => {
    const { children } = props;

    const {
        users, setUsers,

        activeUser, setActiveUser,

        saveUser,
        changeUser,

        nameInputRef,
        fileInputRef
    } = useAccount();

    const {
        clearResume,

        userPhoto, setUserPhoto,
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,

        handleFileChange,

        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        clearErrors,

        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription
    } = useAccountInputs();

    const value = useMemo(() => ({
        users, setUsers,
        activeUser, setActiveUser,
        clearResume,
        saveUser,
        changeUser,

        userPhoto, setUserPhoto,
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,

        handleFileChange,

        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        clearErrors,

        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription,

        nameInputRef,
        fileInputRef
    }), [
        users, setUsers,
        activeUser, setActiveUser,
        clearResume,
        saveUser,
        changeUser,

        userPhoto, setUserPhoto,
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser,

        handleFileChange,
        
        formIsValid,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        clearErrors,

        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription,

        nameInputRef,
        fileInputRef
    ]);

    return (
        <AccountContext.Provider
            value = {value}
        >
            {children}
        </AccountContext.Provider>
    )
}