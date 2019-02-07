class ValidateUtils {

  constructor() {
    this.validateName = this.validateName.bind(this);
  }

  validateName(name) {
    if (/^([A-Za-z\-\_\d])+$/.test(name)) {
      return true;
    }
    
    return 'Name may only include letters, numbers, underscores and hashes';
  }
}

module.exports = new ValidateUtils();
