
const fs = require('fs');
const chalk = require('chalk');
const { createDirs, copyTemplateContent } = require('../helpers/fs');

function eject(pathname) {

  const cwd = process.cwd();
  createDirs(pathname, cwd);

  const templatesPath = `${__dirname}/../templates`;
  copyTemplateContent(templatesPath, pathname);
}

module.exports = {
  eject,
};
