import exec from 'child_process';
import { createSpinner } from 'nanospinner';

export function clone(repo) {
  const cloneSpinner = createSpinner('Boiling your Project...').start();
  return new Promise((resolve, reject) => {
    exec.exec(`git clone ${repo.url}`, (error, stdout, stderr) => {
      if (error) {
        cloneSpinner.error({ text: 'Failed to Boil' });
        reject(error);
      } else {
        cloneSpinner.success({ text: 'Boiled successfully' });
        const setupSpinner = createSpinner('Setting up your project...').start();
        setupSpinner.success({ text: 'Setup completed successfully' });
        resolve();
      }
    });
  });
}