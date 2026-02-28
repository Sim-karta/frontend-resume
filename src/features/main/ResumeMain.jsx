import Field from "../../shared/ui/Field/Field"

const ResumeMain = () => {
    return (
        <>
            <Field 
                className="first_name"
                id="first_name"
                label="Ім'я"
            />
            <Field 
                className="second_name"
                id="second_name"
                label="Призвище"
            />
            <Field 
                className="position"
                id="position"
                label="Посада"
            />
            <Field 
                className="company"
                id="company"
                label="Компанія"
            />
            <Field 
                className="email"
                id="email"
                label="Електрона пошта"
                type="email"
            />
            <Field 
                className="phone"
                id="phone"
                label="Телефон"
            />
            <Field 
                className="description"
                id="description"
                label="Опис"
            />
        </>
    )
}

export default ResumeMain;