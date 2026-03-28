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
    }, []);

    const [errorName, setErrorName] = useState('');
    const [errorSecName, setErrorSecName] = useState('');
    const [errorPosition, setErrorPosition] = useState('');
    const [errorCompany, setErrorCompany] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorDescription, setErrorDescription] = useState('');

    const onInputName = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserName(value);
        setErrorName(errorMessage);
    }, []);

    const onInputSecName = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserSecName(value);
        setErrorSecName(errorMessage);
    }, []);

    const onInputPosition = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserPosition(value);
        setErrorPosition(errorMessage);
    }, []);

    const onInputCompany = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserCompany(value);
        setErrorCompany(errorMessage);
    }, []);

    const onInputEmail = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(clearValue)) {
            errorMessage = "Введіть корректну адресу"
        } else if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserEmail(value);
        setErrorEmail(errorMessage);
    }, []);

    const onInputPhone = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        const regex = /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        if (!regex.test(clearValue)) {
            errorMessage = "Введіть корректний телефон"
        } else if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserPhone(value);
        setErrorPhone(errorMessage);
    }, []);

    const onInputDescription = useCallback((value) => {
        let errorMessage = '';

        const clearValue = value.trim();
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0;

        if (hasOnlySpaces) {
            errorMessage = "Поле не повинно бути пустим"
        }

        setUserDescription(value);
        setErrorDescription(errorMessage);
    }, []);

    const formIsValid = useMemo(() => {
        if (
            (errorName.length === 0 && userName.length > 0) &&
            (errorSecName.length === 0 && userSecName.length > 0) &&
            (errorPosition.length === 0 && userPosition.length > 0) &&
            (errorCompany.length === 0 && userCompany.length > 0) &&
            (errorEmail.length === 0 && userEmail.length > 0) &&
            (errorPhone.length === 0 && userPhone.length > 0) &&
            (errorDescription.length === 0 && userDescription.length > 0)
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

        onInputName,
        onInputSecName,
        onInputPosition,
        onInputCompany,
        onInputEmail,
        onInputPhone,
        onInputDescription
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

        onInputName,
        onInputSecName,
        onInputPosition,
        onInputCompany,
        onInputEmail,
        onInputPhone,
        onInputDescription
    }
}

export default useAccountInputs;