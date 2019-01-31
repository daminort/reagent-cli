function confirmMessage(answers) {
  console.log('');
  console.log('We are ready to start. Is all data correct?');

  const messages = formatAnswers(answers);
  messages.forEach(item => {
    console.log(item);
  });
}

function formatAnswers(answers) {
  const keys = Object.keys(answers);
  const maxLength = keys.reduce((length, key) => {
    if (key.length > length) {
      return key.length;
    }
    return length;
  }, 0);

  const result = keys.map(key => {
    const spaceCount = maxLength - key.length;
    const spaces = Array(spaceCount).fill(' ').join('');
    const value = answers[key];

    return `   ${key} ${spaces}: ${value}`;
  });

  return result;
}

module.exports = {
  confirmMessage,
}