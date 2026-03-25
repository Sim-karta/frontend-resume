import { useMemo } from "react";
import { createContext } from "react";
import useAccount from "./hooks/useAccount";
import useAccountInputs from "./hooks/useAccountInputs";

export const AccountContext = createContext({});

export const AccountProvider = (props) => {
    const { children } = props;

    const {
        users, setUsers,

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
        userDescription, setUserDescription
    } = useAccountInputs();

    const value = useMemo(() => ({
        users, setUsers,
        clearResume,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        nameInputRef
    }), [
        users, setUsers,
        clearResume,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

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