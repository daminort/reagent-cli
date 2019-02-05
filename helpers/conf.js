const fs = require('fs');

class Config {

  constructor() {
    const currentPath = `${__dirname}`;
    const parts = currentPath.split('/');
    parts.pop();
    const processPath = parts.join('/');

    const configPath = `${processPath}/reagent/config.json`;
    const jsonData   = fs.readFileSync(configPath, 'utf8');
    const confData   = JSON.parse(jsonData);

    this.userTemplatesPath = confData.userTemplatesPath;
    this.processPath       = processPath;
    this.configPath        = configPath;
    this.templatesPath     = `${processPath}/templates`;
  }

  setValue(name,value) {
    this[name] = value;
  }

  save() {
    const confData = {
      userTemplatesPath: this.userTemplatesPath,
    };
    const jsonData = JSON.stringify(confData, null, 2);
    fs.writeFileSync(this.configPath, jsonData, 'utf8');
  }
}

module.exports = new Config();
