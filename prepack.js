var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))
 6cYluqDQnO
pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
