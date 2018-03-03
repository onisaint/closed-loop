const cluster = require('cluster');

if(cluster.isMaster) {
    console.log(`master on ${process.pid}`);

    cluster.fork();

    cluster.on('exit', function(_, _, _) {
        console.log('reiniting...');
        cluster.fork();
    })
} else {
    console.log(`child on ${process.pid}`);
    require('./app');
}