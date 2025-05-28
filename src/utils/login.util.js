import axios from 'axios';
import chalk from 'chalk';
import { LocalStorage } from 'node-localstorage';
import { ResLoader } from "./loader.util.js";

const localStorage = new LocalStorage('./store')
export const loginUser = async ({ username, password }) => {
   try {
      if (!username || !password) {
         throw new Error('Username and password are required');
      }
      const token = await axios.post(`${process.env.BASE_SERVER_URL}/auth/login`, {
         username,
         password
      });
      if (token.status === 200) {
         localStorage.setItem('token', token?.data?.token)
         ResLoader('Login Successfull');
         return token;
      }
   } catch (error) {
      console.error(chalk.red(error.message));
      throw error;
   }
};