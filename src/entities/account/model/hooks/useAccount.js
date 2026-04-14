import { use, useCallback, useEffect, useRef, useState, useReducer } from "react";
import usersAPI from "@/shared/api/users";

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': {
            return Array.isArray(action.users) ? action.users : state;
        }
        case 'ADD': {
            return [...state, action.user]
        }
        case 'CHANGE': {
            const { id, newUser } = action;

            return [...state.filter((user) => {
                return user.id != id;
            }), newUser];
        }
        default: {
            return state;
        }
    }
}

const useAccount = () => {
    const [users, dispatch] = useReducer(usersReducer, []);

    const [activeUser, setActiveUser] = useState(-1);

    const nameInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const [profileSave, setProfileSave] = useState(false);

    const saveUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.add(newUser)
            .then((addedUser) => {
                setProfileSave(true);
                setTimeout(() => {
                    dispatch({ type: 'ADD', user: addedUser });
                    callbackAfterAdding();
                    nameInputRef.current.focus();
                    setProfileSave(false);
                }, 400);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const changeUser = useCallback((newUser, callbackAfterAdding) => {
        usersAPI.change(activeUser, newUser)
            .then((addedUser) => {
                setProfileSave(true);
                setTimeout(() => {
                    dispatch({ type: 'CHANGE', id: activeUser, newUser: addedUser });
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

        usersAPI.getAll().then((serverUsers) => {
            dispatch({ type: 'SET_ALL', users: serverUsers })
        });
    }, []);

    return {
        users,

        activeUser, setActiveUser,

        saveUser,
        changeUser,

        nameInputRef,
        fileInputRef,

        profileSave
    }
}

export default useAccount;