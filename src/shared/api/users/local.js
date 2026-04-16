const STORAGE_KEY = 'users';

const read = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (error) {
        return [];
    }
}

const write = (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

const delay = (ms = 150) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const localAPI = {
    getAll: async () => {
        await delay();

        return read();
    },

    getById: async (id) => {
        await delay();

        const users = read();
        const user = users.find((user) => user.id === id) ?? null;

        return user;
    },

    add: async (user) => {
        await delay();

        const newUser = { 
            ...user,
            id: crypto?.randomUUID() ?? Date.now().toString()
        };
        
        write([...read(), newUser]);

        return newUser;
    },

    change: async (id, user) => {
        await delay();

        const users = read();
        const userIndex = users.findIndex((user) => user.id === id);
        users[userIndex] = {
            ...users[userIndex],
            ...user,
        }
        write(users);

        return user;
    }
}

export default localAPI;