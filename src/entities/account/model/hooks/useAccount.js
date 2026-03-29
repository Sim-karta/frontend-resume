import { useCallback, useEffect, useRef, useState } from "react";
import usersAPI from "../../../../shared/api/users/usersAPI";

const useAccount = () => {
    const [users, setUsers] = useState([]);

    const nameInputRef = useRef(null);

    const saveUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.add(newUser)
            .then((addedUser) => {
                setUsers([...users, addedUser]);
                callbackAfterAdding();
                nameInputRef.current.focus();
            });

    }, [users]);

    const writeUsers = useCallback(() => {
        console.log(users);
    }, [users]);

    useEffect(() => {
        nameInputRef.current.focus();

        usersAPI.getAll().then(setUsers);
    }, []);

    return {
        users, setUsers,

        saveUser,
        writeUsers,

        nameInputRef
    }
}

export default useAccount;