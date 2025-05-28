import axios from 'axios';
import { BASE_SERVER_URL } from './constants.js';

export const registerUser = async ({username, password}) => {
    const registered = await axios.post(`${BASE_SERVER_URL}/auth/register`, {
        username,
        password
    });
   if(registered.status === 201){
       return true;
   }
   return false;
}