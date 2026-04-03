import { useCallback, useMemo, useState } from "react";

const useAccountInputs = () => {
    const [userName, setUserName] = useState('');
    const [userSecName, setUserSecName] = useState('');
    const [userPosition, setUserPosition] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const [newUser, setNewUser] = useState({
        userName: '',
        userSecName: '',
        userPosition: '',
        userCompany: '',
        userEmail: '',
        userPhone: '',
        userDescription: ''
    });

    const clearResume = useCallback(() => {
        setUserName('');
        setUserSecName('');
        setUserPosition('');
        setUserCompany('');
        setUserEmail('');
        setUserPhone('');
        setUserDescription('');

        setActiveUser(-1);
    }, []);

    const [errorName, setErrorName] = useState('');
    const [errorSecName, setErrorSecName] = useState('');
    const [errorPosition, setErrorPosition] = useState('');
    const [errorCompany, setErrorCompany] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorDescription, setErrorDescription] = useState('');

    const clearErrors = useCallback(() => {
        setErrorName('');
        setErrorSecName('');
        setErrorPosition('');
        setErrorCompany('');
        setErrorEmail('');
        setErrorPhone('');
        setErrorDescription('');
    }, []);

    const isErrorText = (value) => {
        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            return "Поле не повинно бути пустим";
        }

        return '';
    }

    const isErrorEmail = (value) => {
        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (hasOnlySpaces) {
            return "Поле не повинно бути пустим";
        } else if (!regex.test(clearValue)) {
            return "Введіть корректну адресу";
        }

        return '';
    }

    const isErrorPhone = (value) => {
        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        const regex = /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        if (hasOnlySpaces) {
            return "Поле не повинно бути пустим";
        } else if (!regex.test(clearValue)) {
            return "Введіть корректний телефон";
        }

        return '';
    }

    const validName = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorName(errorMessage);
    }, []);

    const validSecName = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorSecName(errorMessage);
    }, []);

    const validPosition = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorPosition(errorMessage);
    }, []);

    const validCompany = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorCompany(errorMessage);
    }, []);

    const validEmail = useCallback((value) => {
        const errorMessage = isErrorEmail(value);

        setErrorEmail(errorMessage);
    }, []);

    const validPhone = useCallback((value) => {
        const errorMessage = isErrorPhone(value);

        setErrorPhone(errorMessage);
    }, []);

    const validDescription = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorDescription(errorMessage);
    }, []);

    const formIsValid = useMemo(() => {
        if (
            (!isErrorText(userName) && userName.length > 0) &&
            (!isErrorText(userSecName) && userSecName.length > 0) &&
            (!isErrorText(userPosition) && userPosition.length > 0) &&
            (!isErrorText(userCompany) && userCompany.length > 0) &&
            (!isErrorEmail(userEmail) && userEmail.length > 0) &&
            (!isErrorPhone(userPhone) && userPhone.length > 0) &&
            (!isErrorText(userDescription) && userDescription.length > 0)
        ) {
            setNewUser({
                userName,
                userSecName,
                userPosition,
                userCompany,
                userEmail,
                userPhone,
                userDescription
            })
            return true;
        } else {
            return false;
        }
    }, [
        userName,
        userSecName,
        userPosition,
        userCompany,
        userEmail,
        userPhone,
        userDescription,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,
    ]);

    return {
        clearResume,

        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser, setNewUser,

        formIsValid,

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
    }
}

export default useAccountInputs;