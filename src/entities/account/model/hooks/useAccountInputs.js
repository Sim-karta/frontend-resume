import { useCallback, useMemo, useState } from "react";

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

    const [errorPhoto, setErrorPhoto] = useState('');
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

    const isErrorPhoto = (value) => {
        const sizeInBytes = new Blob([value]).size;

        if (value && (sizeInBytes / (1024 * 1024)) > 0.07) {
            return "Файл занадто великий! Максимум 0.07 МБ";
        }

        return '';
    }

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

    const validPhoto = useCallback((value) => {
        const errorMessage = isErrorPhoto(value);
        setErrorPhoto(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validName = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorName(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validSecName = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorSecName(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validPosition = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorPosition(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validCompany = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorCompany(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validEmail = useCallback((value) => {
        const errorMessage = isErrorEmail(value);

        setErrorEmail(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validPhone = useCallback((value) => {
        const errorMessage = isErrorPhone(value);

        setErrorPhone(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const validDescription = useCallback((value) => {
        const errorMessage = isErrorText(value);

        setErrorDescription(errorMessage);

        if (errorMessage == '') {
            return true;
        } else {
            return false;
        }
    }, []);

    const handleFileChange = useCallback((target) => {
        const file = target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const photoString = reader.result;

            if (validPhoto(photoString)) {
                setUserPhoto(photoString);
            }            
        }
        
        if (file) {
            reader.readAsDataURL(file);
        }
    }, []);

    const formIsValid = useMemo(() => {
        if (
            (!isErrorPhoto(userPhoto)) &&
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
                userDescription,
                userPhoto
            })
            return true;
        } else {
            return false;
        }
    }, [
        userPhoto,
        userName,
        userSecName,
        userPosition,
        userCompany,
        userEmail,
        userPhone,
        userDescription,

        errorPhoto,
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

        userPhoto, setUserPhoto,
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        newUser, setNewUser,

        handleFileChange,

        formIsValid,

        errorPhoto,
        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        clearErrors,

        validPhoto,
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