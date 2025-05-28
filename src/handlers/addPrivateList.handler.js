import chalk from "chalk";
import prompts from "prompts";
import axios from "axios";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage('./store');

export async function addPrivateList() {
    try {
        const response = await prompts([{
            type: 'text',
            name: 'name',
            message: 'Enter the name of the template:',
            validate: (value) => {
                if (!value || !value.trim()) {
                    return 'Please enter a template name.';
                }
                return true;
            }
        },{
            type: 'text',
            name: 'url',
            message: 'Enter github clone link for the template:',
            validate: (value) => {
                if (!value || !value.trim()) {
                    return 'Please enter a url.';
                }
                const githubUrlPattern = /^(https?:\/\/)?github\.com\/[\w-]+\/[\w-]+(\.git)?$/;            
                if (!githubUrlPattern.test(value.trim())) {
                    return 'Please enter a valid GitHub repository URL.';
                }
                return true;
            }
        }]);

        const { name, url } = response;

        if (!name || !url) {
            console.log(chalk.yellow("Required all Fields"));
            return;
        }

        const token = await localStorage.getItem('token');
        const user = await localStorage.getItem('id');

        if (!token || !user) {
            console.log(chalk.red("Authentication required. Please login first."));
            return;
        }

        if (!process.env.BASE_SERVER_URL) {
            console.log(chalk.red("Server URL not configured."));
            return;
        }

        const { data } = await axios.post(
            `${process.env.BASE_SERVER_URL}/private/`, 
            { 
                user, 
                name: name.trim(), 
                url: url.trim() 
            }, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                timeout: 5000
            }
        );

        if (data) {
            console.log(chalk.green("Template Added Successfully!"));
        }
    } catch (error) {
        if (error.response) {
            console.log(chalk.red(`Server Error: ${error.response.data.message || 'Unknown error occurred'}`));
        } else if (error.request) {
            console.log(chalk.red("Network Error: Unable to connect to server"));
        } else {
            console.log(chalk.red(`Error: ${error.message}`));
        }
    }
}