// server.js
const jsonServer = require('json-server');
const chalk = require('chalk');
const fs = require("fs");
const path = require("path");
const _ = require('lodash');
const server = jsonServer.create()
const router = jsonServer.router('./json-server/db.json')
const middlewares = jsonServer.defaults();
const port = require('../package.json').config.apiPort;
const data = require('./db.json');

const defaultsOpts = {
    static: 'json-server/public'
};

function prettyPrint(object, rules) {
    const host = 'localhost';
    const root = `http://${host}:${port}`;

    console.log();
    console.log(chalk.bold('  Resources'));
    for (let prop in object) {
        console.log('  ' + root + '/' + prop);
    }

    if (rules) {
        console.log();
        console.log(chalk.bold('  Other routes'));
        for (var rule in rules) {
            console.log('  ' + rule + ' -> ' + rules[rule]);
        }
    }

    console.log();
    console.log(chalk.bold('  Home'));
    console.log('  ' + root);
    console.log();
}

const walkSync = (dir, filelist = []) => fs.readdirSync(dir)
    .map(file => fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file))[0]);

server.use(middlewares)
// Add this before server.use(router)
const otherRoutes = {
    '/api/*': '/$1'
};
server.post('/api/planPicker', function (req, res) {
    res.send(JSON.stringify(data.planPicker));
})

server.use(jsonServer.rewriter(otherRoutes))
server.use(router)

server.listen(port, () => {
    console.log();
    console.log(chalk.cyan('  \\{^_^}/ hi! development server is running on port', port));

    // Display server information
    prettyPrint(data, otherRoutes);

    console.log(chalk.bold('  Static Resources'));

    // eslint-disable-next-line array-callback-return
    _.flattenDeep(walkSync(defaultsOpts.static, [])).map(function(resource) {
        console.log('  ' + resource);
    });
    console.log();
})