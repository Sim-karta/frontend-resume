import { useCallback, useState } from "react";

const useAccountInputs = () => {
    const [userPhoto, setUserPhoto] = useState('');
    const [userName, setUserName] = useState('');
    const [userSecName, setUserSecName] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const [newUser, setNewUser] = useState({
        userPhoto: '',
        userName: '',
        userSecName: '',
        userPosition: '',
        userCompany: '',
        userEmail: '',
        userPhone: '',
        userDescription: ''
    });

    const clearResume = useCallback(() => {
        setUserPhoto('');
        setUserName('');
        setUserSecName('');
        setUserPosition('');
        setUserCompany('');
        setUserEmail('');
        setUserPhone('');
        setUserDescription('');
    }, []);

    return {
        userPhoto, setUserPhoto,
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser, setNewUser,

        clearResume,
    }
}

export default useAccountInputs;