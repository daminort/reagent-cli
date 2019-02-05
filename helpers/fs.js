const fs = require('fs');
const chalk = require('chalk');
const config = require('../helpers/conf');
const { TYPE_PATH } = require('../constants/common');

function copyTemplate(answers) {
  const cwd = process.cwd();
  const { type, templateName, location, name } = answers;

  const templatePath = getTemplatePath(type, templateName);
  const targetPath   = `${location}/${name}`;

  try {
    createDirs(targetPath, cwd);
    copyTemplateContent(templatePath, targetPath, templateName, name);

  } catch (err) {
    console.log(err);
    process.exit(err.code);
  }

  console.log('');
  console.log(chalk.bold.green('  Great! We have done it :)'));
  console.log('');
}

function createDirs(path, root) {
  const parts = path.split('/');
  let targetPath = root;
  let isCreated = false;
  parts.forEach(dir => {
    if (!dir || dir === '..') {
      return;
    }

    targetPath = `${targetPath}/${dir}`;
    try {
      if (!fs.existsSync(targetPath)){
        fs.mkdirSync(targetPath);
        isCreated = true;
      }
    } catch (err) {
      throw err;
    }
  });

  if (isCreated) {
    console.log(`  Created folder: ${targetPath}`);
  }
}

function getTemplatePath(type, templateName) {
  const templatesPath = config.templatesPath;
  const typePath = TYPE_PATH[type];
  const result = `${templatesPath}/${typePath}/${templateName}`;

  return result;
}

function copyTemplateContent(templatePath, targetPath, templateName = '', name = '') {

  const templateFiles = fs.readdirSync(templatePath);
  templateFiles.forEach(fileName => {

    const originFilePath = `${templatePath}/${fileName}`;
    const stats = fs.statSync(originFilePath);

    if (stats.isDirectory()) {
      const newTargetPath = `${targetPath}/${fileName}`;
      fs.mkdirSync(newTargetPath);

      copyTemplateContent(originFilePath, newTargetPath);
      return;
    }

    const needReplace    = (templateName && name);
    const search         = new RegExp(templateName, 'g');

    const resultFileName = needReplace ? fileName.replace(search, name) : fileName;
    const resultFilePath = `${targetPath}/${resultFileName}`;

    const fileContent    = fs.readFileSync(originFilePath, 'utf8');
    const resultContent  = needReplace ? fileContent.replace(search, name) : fileContent;
    
    fs.writeFileSync(resultFilePath, resultContent, 'utf8');

    console.log(`  Created file: ${resultFilePath}`);
  });
}

module.exports = {
  copyTemplate,
  createDirs,
  copyTemplateContent,
}