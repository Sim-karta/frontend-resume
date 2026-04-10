import { useContext, useState, useEffect } from "react";
import Profile from "../widgets/Profile/Profile";
import { AccountContext } from "../entities/account/model/AccountContext";
import usersAPI from "../shared/api/users/usersAPI";
import RouterLink from "../shared/ui/RouterLink/RouterLink";

const ProfilePage = (props) => {
    const { params } = props;

    const id = params.id;

    const {
        setUserPhoto,
        setUserName,
        setUserSecName,
        setUserPosition,
        setUserCompany,
        setUserEmail,
        setUserPhone,
        setUserDescription,
    } = useContext(AccountContext);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        usersAPI.getById(id).then((user) => {
            if(user) {
                setUserPhoto(user.userPhoto);
                setUserName(user.userName);
                setUserSecName(user.userSecName);
                setUserPosition(user.userPosition);
                setUserCompany(user.userCompany);
                setUserEmail(user.userEmail);
                setUserPhone(user.userPhone);
                setUserDescription(user.userDescription);
            } else {
                setIsError(true);
            }
        })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });       
    }, []);

    if(isLoading) {
        return <div>Завантаження...</div>
    }

    if(isError) {
        return <div>Помилка завантаження профілю</div>
    }

    return (
        <div>
            <RouterLink
                className="back-button"
                to="/"
            >
                Back
            </RouterLink>
            <Profile 
                only={true}
            />
        </div>
    )
}

export default ProfilePage;