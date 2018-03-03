const app = require('express')();


app.get('/', function(req, res) {
    res
        .status(200)
        .send({
            ok:true
        });
})

app.get('/exit', function(req, res) {
    console.log(`process : ${process.pid} exited with 1`);
    process.exit(1);
})

app.listen(7777, function(err) {
    console.log('listning on port 7777');
})