import axios from "axios";
import chalk from "chalk";
import prompts from "prompts";

export async function AfterLoginPrompt(token){
   const { loggedOption } = await prompts({
    type: 'select',
    name: 'loggedOption',
    message: 'Choose an Operation :',
    choices : [
        {title: "Setup Project", value: 'setupPrivateProject'},
        {title: "Add new Template", value: 'addPrivateTemp'}
    ]
   })
   if(!loggedOption){
    console.log(chalk.yellow("Opeartion Cancelled"))
   }
   if(loggedOption === 'addPrivateTemp'){
      await axios.post(`${process.env.BASE_SERVER_URL}/private`,)
   }

}