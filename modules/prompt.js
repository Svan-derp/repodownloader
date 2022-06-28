import prompts from 'prompts';

import {
    setRepository
} from './git.js';

export async function askRepo() {
    const r = await prompts({
        type: 'confirm',
        name: 'addRepo',
        message: 'Do you want to clone a (new) repository?'
    });

    if (r.addRepo) {
        setRepo()
    } else{
        console.log("All repositories are set.")
    }
};

async function setRepo() {
    const r = await prompts([{
            type: 'text',
            name: 'url',
            message: 'Paste repository url:'
        },
        {
            type: 'text',
            name: 'name',
            message: 'Name repository folder:'
        },
    ]);
    const branches = await setRepository(r.name, r.url)
    askRepo()
};