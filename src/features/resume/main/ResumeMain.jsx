import { memo, useCallback, useContext } from "react";
import Field from "../../../shared/ui/Field/Field"
import { AccountContext } from "../../../entities/account/model/AccountContext";

const ResumeMain = (props) => {
    const {styles} = props;

    const {
        userName, setUserName,
        userSecName, setUserSecName,
        userPosition, setUserPosition,
        userCompany, setUserCompany,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
        userDescription, setUserDescription,

        errorName,
        errorSecName,
        errorPosition,
        errorCompany,
        errorEmail,
        errorPhone,
        errorDescription,

        validName,
        validSecName,
        validPosition,
        validCompany,
        validEmail,
        validPhone,
        validDescription,

        nameInputRef
    } = useContext(AccountContext);

    return (
        <div className={styles.main}>
            <Field 
                className="first_name"
                id="first_name"
                label="Ім'я"
                placeholder="Василь"
                value={userName}
                onInput={setUserName}
                onBlur={validName}
                error={errorName}
                ref={nameInputRef}
            />
            <Field 
                className="second_name"
                id="second_name"
                label="Прізвище"
                placeholder="Пупкін"
                value={userSecName}
                onInput={setUserSecName}
                onBlur={validSecName}
                error={errorSecName}
            />
            <Field 
                className="position"
                id="position"
                label="Посада"
                placeholder="Менеджер роздрібного продажу"
                value={userPosition}
                onInput={setUserPosition}
                onBlur={validPosition}
                error={errorPosition}
            />
            <Field 
                className="company"
                id="company"
                label="Компанія"
                placeholder="Майкрософт"
                value={userCompany}
                onInput={setUserCompany}
                onBlur={validCompany}
                error={errorCompany}
            />
            <Field 
                className="email"
                id="email"
                label="Електрона пошта"
                placeholder="example@gmail.com"
                value={userEmail}
                onInput={setUserEmail}
                onBlur={validEmail}
                error={errorEmail}
            />
            <Field 
                className="phone"
                id="phone"
                label="Телефон"
                placeholder="+38(012)-345-6789"
                value={userPhone}
                onInput={setUserPhone}
                onBlur={validPhone}
                error={errorPhone}
            />
            <Field 
                className="description"
                id="description"
                label="Опис"
                value={userDescription}
                onInput={setUserDescription}
                onBlur={validDescription}
                error={errorDescription}
            />
        </div>
    )
}

export default memo(ResumeMain);