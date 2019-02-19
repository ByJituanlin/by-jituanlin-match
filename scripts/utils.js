const ncp = require('copy-paste');
const prettier = require('prettier');

module.exports = {
  prettierAndCopy: text =>
    ncp.copy(prettier.format(text, { parser: 'typescript' }), () => {
      console.log('copy generate type success!');
      console.log('content is');
      console.log(text);
      process.exit();
    })
};
