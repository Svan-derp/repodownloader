#!/usr/bin/env node

import cmd from 'cmd-executor';
import path from 'path';
import accessSync from 'fs';

const REPOSITORY_PATH = path.join(process.cwd(), './src')


export async function setRepository(repoFolder, repoUrl) {
    const repoPath = path.join(REPOSITORY_PATH, repoFolder)

    if (!repoCloned(repoPath)) {
        await cloneRepo(repoUrl, repoPath)
        return listBranches(repoPath)
    } else {
        console.info('***', repoName, ' is already in ', repoPath);
    }

};

function repoCloned(pathToCloneTo) {
    try {
        accessSync(pathToCloneTo)
        return true;
    } catch {
        return false
    }
}

async function cloneRepo(repoUrl, pathToCloneTo) {
    console.info('Cloning repo ', repoUrl, ' to ', pathToCloneTo);
    return await cmd.git.clone(repoUrl, pathToCloneTo)

}

async function listBranches(repoPath) {
    process.chdir(repoPath);
    const branches = await cmd.git.branch('-a')
    console.log(typeof branches);
    console.log(branches)
    return [{
            title: 'Red',
            description: 'This option has a description',
            value: '#ff0000'
        },
        {
            title: 'Green',
            value: '#00ff00',
            disabled: true
        },
        {
            title: 'Blue',
            value: '#0000ff'
        }
    ]
}

export async function checkoutBranch(repoFolder, devBranch) {
    const repoPath = path.join(REPOSITORY_PATH, repoFolder)
    // return cmd.git.checkout(devBranch);
}