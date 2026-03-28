import { useEffect, useRef, useState } from "react";
import useAccountLocalStorage from "./useAccountLocalStorage";

const useAccount = () => {
    const {
        savedUsers,
        saveUsers
    } = useAccountLocalStorage();

    const [users, setUsers] = useState(savedUsers ?? []);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    useEffect(() => {
        saveUsers(users);
        nameInputRef.current.focus();
    }, [users]);

    return {
        users, setUsers,

        nameInputRef
    }
}

export default useAccount;