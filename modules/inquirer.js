#!/usr/bin/env node

import inquirer from 'inquirer';
import confirm from '@inquirer/confirm';

export async function askRepo(){
    if (await confirm({ message: 'Do you want to clone repositories?' })) {
        inquirer
        .prompt([
            {
            name: 'repoURL',
            message: 'Paste repository url:'
            },
        ])
        .then(e => {
            console.info('Repository added:', e.repoURL);
            askRepo()
        });
    } else {
        console.log('check in all repos are ok')
    }
}
