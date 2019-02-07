#!/usr/bin/env node
const program  = require('commander');
const pkg = require('./package.json');
const { create } = require('./reagent/create');
const { eject } = require('./reagent/eject');
const { setValue } = require('./reagent/settings');

const userTemplatesPath = 'userTemplatesPath';
const showInfo          = 'showInfo';

// Usage
program.usage(`
  Reagent
    reagent <cmd> --option

  Examples:
    reagent create
  
  For additional info, please, visit to ${pkg.homepage}
`);

// Version & Description
program.version(pkg.version)
program.description(pkg.description);

// Commands
program
  .command('create')
  .alias('new')
  .description('Creating new component/container/redux section')
  .action(() => {
    create();
  });

program
  .command('eject')
  .description('Ejecting inner templates to folder with theirs config file')
  .action(() => {
    eject();
  });

program
  .command('path')
  .description('Setting path to user defined templates')
  .action(pathname => {
    setValue(userTemplatesPath, pathname);
  });

program
  .command('current')
  .description('Setting path to user defined templates: current working directory')
  .action(() => {
    const pathname = process.cwd();
    setValue(userTemplatesPath, pathname);
  });

program
  .command('clear')
  .description('Removing from configs path to user defined templates')
  .action(() => {
    setValue(userTemplatesPath, '');
  });

program
  .command('info')
  .description('Toogle showing info during copying templates. Options: [on | off]')
  .action((rawValue) => {
    const value = rawValue.toLowerCase();
    if (value !== 'on' && value !== 'off') {
      console.log('Invalid parameter. Must be "on" or "off"');
      return;
    }
    const result = (value === 'on') ? true : false;
    setValue(showInfo, result);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
};
