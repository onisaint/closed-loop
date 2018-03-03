const cluster = require('cluster');
const numCpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`master on ${process.pid}`);
    
    let i = 0;
    while(i++ < numCpus) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('reiniting...');
        cluster.fork();
    });
} else {
    console.log(`child on ${process.pid}`);
    require('./app');
}