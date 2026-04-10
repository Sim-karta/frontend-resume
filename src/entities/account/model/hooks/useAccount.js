import { useCallback, useEffect, useRef, useState } from "react";
import usersAPI from "../../../../shared/api/users/usersAPI";

const useAccount = () => {
    const [users, setUsers] = useState([]);

    const [activeUser, setActiveUser] = useState(-1);

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const saveUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.add(newUser)
            .then((addedUser) => {
                console.log(addedUser);
                setUsers([...users, addedUser]);
                callbackAfterAdding();
                nameInputRef.current.focus();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [users]);

    const changeUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.change(activeUser, newUser)
            .then((addedUser) => {
                console.log(addedUser);
                setUsers([...users.filter((user) => {
                    return user.id != activeUser;
                }), addedUser]);
                callbackAfterAdding();
                nameInputRef.current.focus();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [users, activeUser]);

    useEffect(() => {
        if(nameInputRef.current) {
            nameInputRef.current.focus();
        }

        usersAPI.getAll().then(setUsers);
    }, []);

    return {
        users, setUsers,

        activeUser, setActiveUser,

        saveUser,
        changeUser,

        nameInputRef,
        fileInputRef
    }
}

export default useAccount;