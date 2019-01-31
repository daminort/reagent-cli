function validateName(input) {
  if (/^([A-Za-z\-\_\d])+$/.test(input)) {
    return true;
  }
  
  return 'Name may only include letters, numbers, underscores and hashes';
}

module.exports = {
  validateName,
};
