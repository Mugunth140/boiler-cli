import axios from 'axios';

export const registerUser = async ({username, password}) => {
    const registered = await axios.post(`${process.env.BASE_SERVER_URL}/auth/register`, {
        username,
        password
    });
   if(registered.status === 201){
       return true;
   }
   return false;
}