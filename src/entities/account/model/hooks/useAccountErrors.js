import { useCallback, useState } from "react";

const useAccountErrors = (account) => {
    const [errorPhoto, setErrorPhoto] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorSecName, setErrorSecName] = useState('');
    const [errorPosition, setErrorPosition] = useState('');
    const [errorCompany, setErrorCompany] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorDescription, setErrorDescription] = useState('');

    const isErrorPhoto = (value) => {
        const sizeInBytes = new Blob([value]).size;

        if (value && (sizeInBytes / (1024 * 1024)) >= 0.1) {
            return "Файл занадто великий! Максимум 0.075 МБ";
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

    const clearErrors = useCallback(() => {
        setErrorPhoto('');
        setErrorName('');
        setErrorSecName('');
        setErrorPosition('');
        setErrorCompany('');
        setErrorEmail('');
        setErrorPhone('');
        setErrorDescription('');
    }, []);

    return {
        errorPhoto,
        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        isErrorPhoto,
        isErrorText,
        isErrorEmail,
        isErrorPhone,

        validPhoto,
        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription,

        clearErrors,
    }
}

export default useAccountErrors;