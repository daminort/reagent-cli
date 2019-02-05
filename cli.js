#!/usr/bin/env node
const program  = require('commander');
const pkg = require('./package.json');
const { create } = require('./reagent/create');
const { eject } = require('./reagent/eject');
const { setPath } = require('./reagent/paths');

// Usage
program.usage(`
  Reagent
    reagent <cmd> --option

  Examples:
    reagent create
    reagent eject ./InnerTemplates
    reagent set ./MyTemplates
  
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
    setPath(pathname);
  });

program
  .command('current')
  .description('Setting path to user defined templates: current working directory')
  .action(() => {
    const pathname = process.cwd();
    setPath(pathname);
  });

program
  .command('clear')
  .description('Removing from configs path to user defined templates')
  .action(() => {
    setPath('');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
};
