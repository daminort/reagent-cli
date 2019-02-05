const fs = require('fs');
const chalk = require('chalk');
const config = require('./conf');
const { TYPES, TYPE_PATH } = require('../constants/common');
const { readUserTemplates } = require('./userTemplates');

function copyTemplate(answers) {
  const cwd = process.cwd();
  const { type, templateName, location, name } = answers;

  const templatePath = getTemplatePath(type, templateName);
  const targetPath   = `${location}/${name}`;
  const needReplace  = checkNeedReplaceTemplateName(type, templateName);

  try {
    createDirs(targetPath, cwd);
    if (needReplace) {
      copyTemplateContent(templatePath, targetPath, templateName, name);
    } else {
      copyTemplateContent(templatePath, targetPath);
    }

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

  if (typePath !== TYPE_PATH.userTemplate) {
    return `${templatesPath}/${typePath}/${templateName}`;
  }

  const templates = readUserTemplates();
  const currentTemplate = templates.find(item => item.type === templateName);
  if (!currentTemplate) {
    throw new Error(`Unknown user template ${templateName}`);
  }

  const userTemplatesPath = config.userTemplatesPath;

  return `${userTemplatesPath}/${currentTemplate.path}`;
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

function checkNeedReplaceTemplateName(type, templateName) {
  if (type !== TYPES.userTemplate) {
    return true;
  }

  const templates = readUserTemplates();
  const currentTemplate = templates.find(item => item.type === templateName);
  if (!currentTemplate) {
    return false;
  }

  return currentTemplate.rename;
}

module.exports = {
  copyTemplate,
  createDirs,
  copyTemplateContent,
}