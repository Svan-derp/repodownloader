# Overview

This repository contains everything you need to set up and spin up containerized services in docker.

## Prerequisites

- The Docker engine and docker-compose must be installed on your system. You can find it [here](https://docs.docker.com/engine/install/). Make sure you have installed at least  Docker version 19.03 and docker-compose version 1.25.5.
- Git must be installed on your system.
- SSH must be installed on your system.
- Github and SSH must be configured. See [this](https://kamarada.github.io/en/2019/07/14/using-git-with-ssh-keys/#.Xs9qyhMzZTY) for instructions and more info.

## Usage

### Initialization

The following steps need to be performed to pull from Github and to build docker images which will then be used to run our containerized services.

1. Switch into the `cli` folder and run `npm install` to install required modules.  

2. Run `node run start` to start initialization process.

   This will...

   1. download all repositories to the `src` folder. Working on the projects will be done there.
   2. build Docker images using the Dockerfiles located in `containers folder`

Once completed, you can start working on the repositories sitting in the `src` folder.
