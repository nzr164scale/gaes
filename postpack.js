var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall
 z9tv6drQ1f
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
