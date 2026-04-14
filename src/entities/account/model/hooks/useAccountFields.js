import { useCallback, useMemo } from "react";
import useAccountInputs from "./useAccountInputs";
import useAccountErrors from "./useAccountErrors";

const useAccountFields = () => {
    const {
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
    } = useAccountInputs();

    const {
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
    } = useAccountErrors();

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
            (!isErrorPhoto(userPhoto ?? '')) &&
            (!isErrorText(userName ?? '') && userName?.length > 0) &&
            (!isErrorText(userSecName ?? '') && userSecName?.length > 0) &&
            (!isErrorText(userPosition ?? '') && userPosition?.length > 0) &&
            (!isErrorText(userCompany ?? '') && userCompany?.length > 0) &&
            (!isErrorEmail(userEmail ?? '') && userEmail?.length > 0) &&
            (!isErrorPhone(userPhone ?? '') && userPhone?.length > 0) &&
            (!isErrorText(userDescription ?? '') && userDescription?.length > 0)
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

        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription
    }
}

export default useAccountFields;