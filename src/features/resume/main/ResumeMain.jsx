import { memo, useCallback, useContext } from "react";
import Field from "../../../shared/ui/Field/Field"
import { AccountContext } from "../../../entities/account/model/AccountContext";

const ResumeMain = (props) => {
    const {styles} = props;

    const {
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
        onInputDescription,

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
                onInput={onInputName}
                error={errorName}
                ref={nameInputRef}
            />
            <Field 
                className="second_name"
                id="second_name"
                label="Прізвище"
                placeholder="Пупкін"
                value={userSecName}
                onInput={onInputSecName}
                error={errorSecName}
            />
            <Field 
                className="position"
                id="position"
                label="Посада"
                placeholder="Менеджер роздрібного продажу"
                value={userPosition}
                onInput={onInputPosition}
                error={errorPosition}
            />
            <Field 
                className="company"
                id="company"
                label="Компанія"
                placeholder="Майкрософт"
                value={userCompany}
                onInput={onInputCompany}
                error={errorCompany}
            />
            <Field 
                className="email"
                id="email"
                label="Електрона пошта"
                placeholder="example@gmail.com"
                value={userEmail}
                onInput={onInputEmail}
                error={errorEmail}
            />
            <Field 
                className="phone"
                id="phone"
                label="Телефон"
                placeholder="+38(012)-345-6789"
                value={userPhone}
                onInput={onInputPhone}
                error={errorPhone}
            />
            <Field 
                className="description"
                id="description"
                label="Опис"
                value={userDescription}
                onInput={onInputDescription}
                error={errorDescription}
            />
        </div>
    )
}

export default memo(ResumeMain);