import { checkRegister } from '../helpers/registerCheck.helper.js';
import { GetCred } from "../utils/getCred.util.js";
import { loginUser } from '../utils/login.util.js';
import { registerUser } from '../utils/register.util.js'
import { createSpinner } from 'nanospinner';
import prompts from 'prompts';
import chalk from 'chalk';
import { storeToken, getToken } from '../utils/storeToken.util.js';
import axios from 'axios';
import { displayTemplates } from '../helpers/displayTemplates.helper.js';
import { clone } from '../helpers/cloner.helper.js';
import { BASE_SERVER_URL } from '../utils/constants.js';

export const privateList = async () => {
    try {
        const registeredUser = await checkRegister();
        if (registeredUser) {
            const spinner = createSpinner('Fetching your templates...').start();
            const progress = createSpinner('Boiling project...');
            
            try {
                const {token, id} = await getToken();
                const privateUrl = `${BASE_SERVER_URL}/private`;
                
                const { data } = await axios.get(`${privateUrl}/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    timeout: 10000 // 10 second timeout
                });

                spinner.success({ text: 'Logged in successfully!' });
                
                if (!data || !Array.isArray(data)) {
                    throw new Error('Invalid template data received');
                }

                const template = await displayTemplates(data);
                if (!template) {
                    throw new Error('No template selected');
                }

                progress.start();
                await clone(template);
                progress.success({ text: 'Project boiled successfully!' });
            } catch (error) {
                spinner.error({ text: 'Failed to fetch templates' });
                progress.error({ text: 'Project boiling failed' });
                console.error(chalk.red(`Error: ${error.message || 'Unknown error occurred'}`));
                if (error.response) {
                    console.error(chalk.red(`Server responded with: ${error.response.status}`));
                }
            }
        } else {
            console.log(chalk.yellow('Please login or register to continue'));
            
            const { action } = await prompts({
                type: 'select',
                name: 'action',
                message: 'Options:',
                choices: [
                    { title: 'Login', value: 'login' },
                    { title: 'Register', value: 'register', hint: '(one time creation)' }
                ],
                initial: 0
            });

            if (!action) {
                console.log(chalk.red('Action cancelled'));
                return;
            }

            try {
                const { username, password } = await GetCred();
                
                if (!username || !password) {
                    throw new Error('Username and password are required');
                }

                if (action === 'login') {
                    const token = await loginUser({ username, password });
                    if (token?.data?.token) {
                        await storeToken(token.data.token, token.data.id);
                        console.log(chalk.green('Login successful'));
                    } else {
                        throw new Error('Invalid login response');
                    }
                } else if (action === 'register') {
                    const userRegistered = await registerUser({ username, password });
                    if (userRegistered) {
                        console.log(chalk.green('User registered successfully'));
                        const token = await loginUser({ username, password });
                        if (token?.data?.token) {
                            await storeToken(token.data.token, token.data.id);
                        } else {
                            throw new Error('Auto-login after registration failed');
                        }
                    } else {
                        throw new Error('Registration failed');
                    }
                }
            } catch (error) {
                console.error(chalk.red(`Authentication error: ${error.message || 'Unknown error occurred'}`));
                if (error.response?.data?.message) {
                    console.error(chalk.red(`Server message: ${error.response.data.message}`));
                }
            }
        }
    } catch (error) {
        console.error(chalk.red(`Fatal error: ${error.message || 'Unknown error occurred'}`));
        process.exit(1);
    }
};