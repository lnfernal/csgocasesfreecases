const https = require("https");
const schedule = require("node-schedule");

const token = "hz7z9bvx8xcsko8sko00s0wo0kcs80k";

function opencase(id) {
    const url = "https://csgocases.com/api.php/case/open?id=" + id + "&number=1&test=false";
    const options = {
        headers: {
            "cookie": "sfRemember=" + token
        }
    };
    https.get(url, options, (res) => {
        let data = "";
        res.on("data", (d) => {
            data += d;
        });
        res.on("end", () => {
            console.log(data);
        });
    }).on("error", (e) => {
        console.error(e);
    });
}

schedule.scheduleJob("0 18 * * *", () => {
    opencase(3);
    opencase(62);
});