import { use, useCallback, useEffect, useRef, useState } from "react";
import usersAPI from "../../../../shared/api/users/usersAPI";

const useAccount = () => {
    const [users, setUsers] = useState([]);

    const [activeUser, setActiveUser] = useState(-1);

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const [profileSave, setProfileSave] = useState(false);

    const saveUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.add(newUser)
            .then((addedUser) => {
                setProfileSave(true);
                setTimeout(() => {
                    setUsers([...users, addedUser]);
                    callbackAfterAdding();
                    nameInputRef.current.focus();
                    setProfileSave(false);
                }, 400);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [users]);

    const changeUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.change(activeUser, newUser)
            .then((addedUser) => {
                setProfileSave(true);
                setTimeout(() => {
                    setUsers([...users.filter((user) => {
                        return user.id != activeUser;
                    }), addedUser]);
                    callbackAfterAdding();
                    nameInputRef.current.focus();
                    setProfileSave(false);
                }, 400);
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
        fileInputRef,

        profileSave
    }
}

export default useAccount;