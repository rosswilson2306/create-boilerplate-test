#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${commmand}`, {stdio: 'inherit'});
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/rosswilson2306/create-boilerplate-test ${repoName}`;
const installDependenciesCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository`);
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(code: -1);

console.log("Installing dependcies");
const install = runCommand(installDependenciesCommand);
if (!install) process.exit(code: -1);

console.log('Opening project in VSCode')
runCommand('code .');
