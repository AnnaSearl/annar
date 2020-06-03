const fs = require('fs');
const path = require('path');


const files = fs.readdirSync(path.resolve(__dirname, '../components'));
// console.log('files-------',files);

const components = files.filter((item) => {
  const stat = fs.lstatSync(path.resolve(__dirname, '../components') + '/' + item);
  if (stat.isDirectory() === true && item !== "one" && item !== "style") { 
    return true;
  }
  return false;
}).map((item) => {
  return [item, `./components/${item}`]
})


module.exports = () => {
  // @ts-ignore
  return Object.fromEntries(components);
}