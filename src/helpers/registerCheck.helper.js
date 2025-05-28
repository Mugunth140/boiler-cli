import { LocalStorage } from "node-localstorage";

export const checkRegister = async () => {
    const localStorage = new LocalStorage('./store')
    const token = await localStorage.getItem('token');
    if(token){
        return token;
    }
    return false
};