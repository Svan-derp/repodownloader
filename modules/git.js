#!/usr/bin/env node

import cmd from 'cmd-executor';
import path from 'path';
import accessSync from 'fs';

const REPOSITORY_PATH = path.join(process.cwd(), './src')

export function setRepository(repoName, repoUrl){
      const repoPath = path.join(REPOSITORY_PATH, repoName)
      
      if(!repoCloned(repoPath)){
        console.info('*');
        cloneRepo(repoUrl, repoPath);
        console.info('**');

      } else {
        console.info('***', repoName, ' is already in ', repoPath);
      }
      return [
        { title: 'Red', description: 'This option has a description', value: '#ff0000' },
        { title: 'Green', value: '#00ff00', disabled: true },
        { title: 'Blue', value: '#0000ff' }
      ]
  };
  
  function repoCloned(pathToCloneTo){
    try {
      accessSync(pathToCloneTo)
      return true;
    } catch {
      return false
    }
  }
  
  function cloneRepo( repoUrl , pathToCloneTo ) {
  
    console.info('Cloning repo ', repoUrl, ' to ', pathToCloneTo);
    return cmd.git.clone(repoUrl, pathToCloneTo)
  }
  
  export async function checkoutBranch(repoName, devBranch) {
    const repoPath = path.join(REPOSITORY_PATH, repoName)
    await cmd.git.cwd(repoPath);
    return cmd.git.checkout(devBranch);
  }