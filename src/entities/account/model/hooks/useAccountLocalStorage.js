const useAccountLocalStorage = () => {
    const savedUsers = localStorage.getItem('users');

    const saveUsers = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    }

    return {
        savedUsers: savedUsers ? JSON.parse(savedUsers) : null,
        saveUsers
    }
}

export default useAccountLocalStorage;