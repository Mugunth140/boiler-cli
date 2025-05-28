import prompts from "prompts";

export async function GetCred() {
  try {
      const response = await prompts([
          {
              type: 'text',
              name: 'username',
              message: 'Enter username:',
              validate: value => value.length > 0 ? true : 'Username is required'
          },
          {
              type: 'password',
              name: 'password',
              message: 'Enter password:',
              validate: value => value.length >= 8 ? true : 'Password must be at least 8 characters long'
          }
      ], {
          onCancel: () => {
              throw new Error('Operation cancelled by user');
          }
      });

      if (!response.username || !response.password) {
          throw new Error('Both username and password are required');
      }

      return {
          username: response.username.toLowerCase().trim(),
          password: response.password
      };
  } catch (error) {
      throw new Error(`Failed to get credentials: ${error.message}`);
  }
}