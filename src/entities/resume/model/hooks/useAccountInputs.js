import { useCallback, useState } from "react";

const useAccountInputs = () => {
    const [userName, setUserName] = useState('');
    const [userSecName, setUserSecName] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const clearResume = useCallback(() => {
        setUserName('');
        setUserSecName('');
        setUserPosition('');
        setUserCompany('');
        setUserEmail('');
        setUserPhone('');
        setUserDescription('');
    }, []);

    return {
        clearResume,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription
    }
}

export default useAccountInputs;