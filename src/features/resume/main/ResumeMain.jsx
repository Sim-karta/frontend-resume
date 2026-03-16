import { memo, useContext } from "react";
import Field from "../../../shared/ui/Field/Field"
import { AccountContext } from "../../../entities/resume/model/AccountContext";

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
                ref={nameInputRef}
            />
            <Field 
                className="second_name"
                id="second_name"
                label="Прізвище"
                placeholder="Пупкін"
                value={userSecName}
                onInput={setUserSecName}
            />
            <Field 
                className="position"
                id="position"
                label="Посада"
                placeholder="Менеджер роздрібного продажу"
                value={userPosition}
                onInput={setUserPosition}
            />
            <Field 
                className="company"
                id="company"
                label="Компанія"
                placeholder="Майкрософт"
                value={userCompany}
                onInput={setUserCompany}
            />
            <Field 
                className="email"
                id="email"
                label="Електрона пошта"
                placeholder="example@gmail.com"
                type="email"
                value={userEmail}
                onInput={setUserEmail}
            />
            <Field 
                className="phone"
                id="phone"
                label="Телефон"
                placeholder="+380(12)-345-67-89"
                value={userPhone}
                onInput={setUserPhone}
            />
            <Field 
                className="description"
                id="description"
                label="Опис"
                value={userDescription}
                onInput={setUserDescription}
            />
        </div>
    )
}

export default memo(ResumeMain);