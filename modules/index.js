import inquirer from 'inquirer';
import confirm from '@inquirer/confirm';



const answer = await confirm({ message: 'Do you want to clone repositories?' });

if (answer) {
    inquirer
      .prompt([
        {
          name: 'repoURL',
          message: 'Enter repository name:'
        },
      ])
      .then(e => {
    
        console.info('Repository added:', e.repoURL);
      });
}    

module.exports = {
    command: 'init',
    describe: 'Start local containers.',
    handler: start
};