import prompts from 'prompts';

import {setRepository} from './git.js';

export async function askRepo() {
    const r = await prompts({
        type: 'confirm',
        name: 'addRepo',
        message: 'Do you want to clone a repository?'
    });

    if (r.addRepo) {
        cloneRepo()
    }
};

async function cloneRepo() {
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
    console.log(r);
    const branches = setRepository(r.name, r.url)
    console.log(branches)
    askBranch(branches)
};

async function askBranch(branches) {
    const r = await prompts({
        type: 'select',
        name: 'branch',
        message: 'Which branch to deploy?',
        choices: branches
    });
}