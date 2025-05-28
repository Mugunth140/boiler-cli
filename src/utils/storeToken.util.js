import { LocalStorage } from "node-localstorage";

export const storeToken = async (token, id) => {
    const localStorage = new LocalStorage('./store');
    if (!token || !id) {
        throw new Error('All params are required');
    }
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
};

export const getToken = async () => {
    return {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id')
    }
};