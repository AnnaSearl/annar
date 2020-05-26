/* eslint no-console:0 */
function camelCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase());
}

// Just import style for https://github.com/ant-design/ant-design/issues/3745
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

console.log('req--------', req);

req.keys().forEach(mod => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  console.log('match-------', match);
  console.log('v-------', v);

  if (match && match[1]) {
    exports[camelCase(match[1])] = v;
  }
});

module.exports = require('./components');
