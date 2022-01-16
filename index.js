const https = require('https');

function opencase(token, id) {
    const options = {
        host: 'csgocases.com',
        port: 443,
        path: `/api.php/case/open?id=${id}&number=1&test=false`,
        method: 'GET',
        headers: {
            'cookie': `sfRemember=${token}`
        }
    };
    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (d) => {
            console.log(d);
        });
    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}

setInterval(() => {
    console.log("test");
}, 1000);

setInterval(() => {
    opencase('hz7z9bvx8xcsko8sko00s0wo0kcs80k', '3');
    opencase('hz7z9bvx8xcsko8sko00s0wo0kcs80k', '62');
}, (24 * 3600 + 10) * 1000);