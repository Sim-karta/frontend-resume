const URL = 'http://localhost:3001/users';

const headers = {
    'Content-Type': 'appliction/json',
}

const usersAPI = {
    getAll: () => {
        return fetch(URL).then((response) => response.json());
    },

    add: (user) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
    }
}

export default usersAPI;