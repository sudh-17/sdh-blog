// var rm = require.context('./module', false, /.js$/)
// const modules = rm.keys().reduce((modules, pathName) => {
//   const moduleName = pathName.replace(/\.\/(.*)\.\w+/, '$1') //$1 为括号内的匹配
//   modules[moduleName] = rm(pathName).default
//   return modules
// }, {})

console.log(require);