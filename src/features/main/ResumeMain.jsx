import Field from "../../shared/ui/Field/Field"

const ResumeMain = (props) => {
    const {styles} = props;

    return (
        <div className={styles.main}>
            <Field 
                className="first_name"
                id="first_name"
                label="Ім'я"
                placeholder="Василь"
            />
            <Field 
                className="second_name"
                id="second_name"
                label="Прізвище"
                placeholder="Пупкін"
            />
            <Field 
                className="position"
                id="position"
                label="Посада"
                placeholder="Менеджер роздрібного продажу"
            />
            <Field 
                className="company"
                id="company"
                label="Компанія"
                placeholder="Майкрософт"
            />
            <Field 
                className="email"
                id="email"
                label="Електрона пошта"
                placeholder="example@gmail.com"
                type="email"
            />
            <Field 
                className="phone"
                id="phone"
                label="Телефон"
                placeholder="+380(12)-345-67-89"
            />
            <Field 
                className="description"
                id="description"
                label="Опис"
            />
        </div>
    )
}

export default ResumeMain;