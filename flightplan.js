// flightplan.js
var plan = require('flightplan');

plan.target('staging', [
    {
        host: '45.76.88.209',
        username: 'root',
        password: '',
        agent: process.env.SSH_AUTH_SOCK
    }
]);

var tmpDir = 'example-com-' + new Date().getTime();

// run commands on localhost
plan.local(function(local) {
    local.log('Compiling Sass');
    local.log('Create Build');
    local.exec('node_modules/webpack/bin/webpack.js --env.APP_ENV=production --config webpack.production.config.js --progress');
    local.log('Copy files to remote hosts');
    var filesToCopy = local.exec('find public/', {silent: true});

    local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
    remote.log('Move folder to web root');
    remote.exec('rm -rf /var/www/web');
    remote.exec('mv /tmp/' + tmpDir + '/public /var/www/web');
});
