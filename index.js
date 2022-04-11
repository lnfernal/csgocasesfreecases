const https = require("https");

//Here's your "sfRemember" cookie
const token = "*your token here*";

function opencase(id) {
    const url = `https://csgocases.com/api.php/case/open?id=${id}&number=1&test=false`;
    const options = {
        headers: {
            "cookie": `sfRemember=${token}`
        }
    };
    https.get(url, options, (res) => {
        console.log(`case ${id}: ${res.statusCode} - ${res.statusMessage}`);
    }).on("error", (err) => {
        console.error(err);
    });
}

function openfreecases() {
    opencase("3"); //Free Case 1
    opencase("62"); //Free Case 2
}

openfreecases();
setInterval(openfreecases, (3600 * 24 + 10) * 1000); //Loop all 24h and 10s
