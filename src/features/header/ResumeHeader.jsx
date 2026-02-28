import Button from "../../shared/ui/Button/Button";

const ResumeHeader = () => {
    return (
        <>
            <h1>Personal Information</h1>
            <Button
                className={`button close-button`}
            >
                close
            </Button>
        </>
    )
}

export default ResumeHeader;