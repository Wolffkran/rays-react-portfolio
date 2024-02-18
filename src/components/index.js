const fs = require('fs');
const path = require('path');

const components = {};

// Read all files in the components folder
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const componentName = path.basename(file, '.jsx');
    components[componentName] = require(`./${file}`).default;
  }
});

export default components;
