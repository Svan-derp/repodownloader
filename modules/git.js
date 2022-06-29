#!/usr/bin/env node

import cmd from 'cmd-executor';
import path from 'path';
import accessSync from 'fs';

const REPOSITORY_PATH = path.join(process.cwd(), './src')


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

export async function setRepository(repoFolder, repoUrl) {
    const repoPath = path.join(REPOSITORY_PATH, repoFolder)

    if (!repoCloned(repoPath)) {
        await cloneRepo(repoUrl, repoPath)
    } else {
        console.info('***', repoName, ' is already in ', repoPath);
    }

};