import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage('./store');
export const storeToken = async (token, id) => {
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