import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createContext } from "react";

export const AccountContext = createContext({});

export const AccountProvider = (props) => {
    const { children } = props;

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');

        if (savedUsers) {
            return JSON.parse(savedUsers);
        } else {
            return [];
        }
    });

    const [userName, setUserName] = useState('');
    const [userSecName, setUserSecName] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        nameInputRef.current.focus();
    }, [users]);

    const clearResume = useCallback(() => {
        setUserName('');
        setUserSecName('');
        setUserPosition('');
        setUserCompany('');
        setUserEmail('');
        setUserPhone('');
        setUserDescription('');
    }, []);

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