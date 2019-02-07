const fs = require('fs');

class ConfigUtils {

  constructor() {
    this.setSettingsValue  = this.setSettingsValue.bind(this);
    this.saveSettings      = this.saveSettings.bind(this);
    this.readSettingsFile  = this.readSettingsFile.bind(this);
    this.readUserTemplates = this.readUserTemplates.bind(this);

    const currentPath = `${__dirname}`;
    const parts = currentPath.split('/');
    parts.pop();
    const processPath = parts.join('/');

    const settingsData = this.readSettingsFile(processPath);
    const { userTemplatesPath, showInfo, settingsPath } = settingsData;

    const userTemplates    = this.readUserTemplates(userTemplatesPath);
    const isUserTemplates  = (userTemplates.length > 0);

    this.cwd               = process.cwd();
    this.processPath       = processPath;
    this.userTemplatesPath = userTemplatesPath;
    this.showInfo          = showInfo;
    this.settingsPath      = settingsPath;
    this.templatesPath     = `${processPath}/templates`;

    this.userTemplates     = userTemplates;
    this.isUserTemplates   = isUserTemplates;
  }

  setSettingsValue(name, value) {
    this[name] = value;
  }

  saveSettings() {
    const confData = {
      userTemplatesPath : this.userTemplatesPath,
      showInfo          : this.showInfo,
    };
    const jsonData = JSON.stringify(confData, null, 2);
    fs.writeFileSync(this.settingsPath, jsonData, 'utf8');
  }

  readSettingsFile(processPath) {
    const settingsPath = `${processPath}/reagent/settings.json`;
    const jsonData     = fs.readFileSync(settingsPath, 'utf8');
    const settingsData = JSON.parse(jsonData);

    return {
      ...settingsData,
      settingsPath,
    };
  }

  readUserTemplates(userTemplatesPath) {
    const defaultRes = [];
    if (!userTemplatesPath) {
      return defaultRes;
    }
    const configFile = `${userTemplatesPath}/config.json`;
  
    try {
      const jsonData        = fs.readFileSync(configFile, 'utf8');
      const templatesConfig = JSON.parse(jsonData);
      const templates       = templatesConfig.templates;
  
      return (Array.isArray(templates) && templates.length) ? templates : defaultRes;
  
    } catch (err) {
      return defaultRes;
    }
  }
}

module.exports = new ConfigUtils();
