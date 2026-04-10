const URL = 'http://localhost:3001/users';

const headers = {
    'Content-Type': 'appliction/json',
}

const usersAPI = {
    getAll: () => {
        return fetch(URL).then((response) => response.json());
    },

    getById: async (id) => {
        const response = await fetch(`${URL}/${id}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        return response.json();
    },

    add: (user) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
    },

    change: (id, user) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            
    }
}

export default usersAPI;