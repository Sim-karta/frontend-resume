import { useMemo } from "react";
import { createContext } from "react";
import useAccount from "./hooks/useAccount";
import useAccountFields from "./hooks/useAccountFields";

export const AccountContext = createContext({});

export const AccountProvider = (props) => {
    const { children } = props;

    const {
        users, setUsers,

        activeUser, setActiveUser,

        saveUser,
        changeUser,

        nameInputRef,
        fileInputRef,

        profileSave
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

        errorPhoto,
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
    } = useAccountFields();

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

        errorPhoto,
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
        fileInputRef,

        profileSave
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

        errorPhoto,
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
        fileInputRef,

        profileSave
    ]);

    return (
        <AccountContext.Provider
            value = {value}
        >
            {children}
        </AccountContext.Provider>
    )
}