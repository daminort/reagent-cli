const fs = require('fs');
const chalk = require('chalk');
const ConfigUtils = require('../utils/ConfigUtils');
const { ENTITY_TYPES, ENTITY_PATH } = require('../config/constants');

class FileUtils {

  constructor() {
    this.copyTemplate                 = this.copyTemplate.bind(this);
    this.getTemplatePath              = this.getTemplatePath.bind(this);
    this.checkNeedReplaceTemplateName = this.checkNeedReplaceTemplateName.bind(this);
    this.createDirs                   = this.createDirs.bind(this);
    this.copyTemplateContent          = this.copyTemplateContent.bind(this);
  }

  copyTemplate(answers) {
    const cwd = ConfigUtils.cwd;
    const { type, templateName, location, name } = answers;
  
    const templatePath = this.getTemplatePath(type, templateName);
    const needReplace  = this.checkNeedReplaceTemplateName(type, templateName);
    const targetPath   = `${location}/${name}`;
  
    try {
      this.createDirs(targetPath, cwd);
      if (needReplace) {
        this.copyTemplateContent(templatePath, targetPath, templateName, name);
      } else {
        this.copyTemplateContent(templatePath, targetPath);
      }
  
    } catch (err) {
      console.log(err);
      process.exit(err.code);
    }
  
    console.log('');
    console.log(chalk.bold.green('  Great! We have done it :)'));
    console.log('');
  }

  getTemplatePath(type, templateName) {
    const templatesPath = ConfigUtils.templatesPath;
    const typePath = ENTITY_PATH[type];

    if (typePath !== ENTITY_PATH.userTemplate) {
      return `${templatesPath}/${typePath}/${templateName}`;
    }

    const template = ConfigUtils.userTemplates.find(item => item.type === templateName);
    if (!template) {
      throw new Error(`Unknown user template ${templateName}`);
    }

    return `${ConfigUtils.userTemplatesPath}/${template.path}`;
  }

  checkNeedReplaceTemplateName(type, templateName) {
    if (type !== ENTITY_TYPES.userTemplate) {
      return true;
    }
  
    const template = ConfigUtils.userTemplates.find(item => item.type === templateName);
    if (!template) {
      return false;
    }
  
    return template.rename;
  }

  createDirs(path, root) {
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
  
    if (isCreated && ConfigUtils.showInfo) {
      console.log(`  Created folder: ${targetPath}`);
    }
  }

  copyTemplateContent(templatePath, targetPath, templateName = '', name = '') {

    const templateFiles = fs.readdirSync(templatePath);
    templateFiles.forEach(fileName => {
  
      const originFilePath = `${templatePath}/${fileName}`;
      const stats = fs.statSync(originFilePath);
  
      if (stats.isDirectory()) {
        const newTargetPath = `${targetPath}/${fileName}`;
        fs.mkdirSync(newTargetPath);
        if (ConfigUtils.showInfo) {
          console.log(`  Created folder: ${newTargetPath}`);
        }
  
        this.copyTemplateContent(originFilePath, newTargetPath);
        return;
      }
  
      const needReplace    = (templateName && name);
      const search         = new RegExp(templateName, 'g');
  
      const resultFileName = needReplace ? fileName.replace(search, name) : fileName;
      const resultFilePath = `${targetPath}/${resultFileName}`;
  
      const fileContent    = fs.readFileSync(originFilePath, 'utf8');
      const resultContent  = needReplace ? fileContent.replace(search, name) : fileContent;
      
      fs.writeFileSync(resultFilePath, resultContent, 'utf8');
  
      if (ConfigUtils.showInfo) {
        console.log(`  Created file: ${resultFilePath}`);
      }
    });
  }
}

module.exports = new FileUtils();
