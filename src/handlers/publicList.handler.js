import { createSpinner } from 'nanospinner';
import axios from 'axios';
import { displayTemplates } from '../helpers/displayTemplates.helper.js';
import { clone } from '../helpers/cloner.helper.js';
import { ResLoader } from '../utils/loader.util.js';
import { BASE_SERVER_URL } from '../utils/constants.js';


export function publicList() {
    const publicUrl = `${BASE_SERVER_URL}/public`;
    const spinner = createSpinner('Fetching public templates...').start();
    axios.get(`${publicUrl}`)
        .then(async response => {
            if(response.data.length === 0) {
                spinner.error({ text: 'No templates found!' });
                return;
            }
            spinner.success({ text: 'Templates fetched successfully!' });
            const seletedTemp = await displayTemplates(response.data);
            const success = await clone(seletedTemp);
            if(success) ResLoader('Happy Coding!');
        })
        .catch(error =>
            spinner.error({ text: 'Failed to fetch templates' })
        );
}