const https = require("https");
const nodemailer = require("nodemailer");

const token = "hz7z9bvx8xcsko8sko00s0wo0kcs80k";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "martinmotzcontact@gmail.com",
        pass: "sV7mUcG584"
    }
});

const opencase = (id) => new Promise((resolve, reject) => {
    const url = `https://csgocases.com/api.php/case/open?id=${id}&number=1&test=false`;
    const options = {
        headers: {
            "cookie": `sfRemember=${token}`
        }
    };
    https.get(url, options, (res) => {
        resolve(res.statusCode);
    }).on("error", (err) => {
        reject(err);
    });
});

async function openfreecases() {
    let code3 = await opencase("3");
    let code62 = await opencase("62");
    const mailoptions = {
        from: "martinmotzcontact@gmail.com",
        to: "martinmotzcontact@gmail.com",
        subject: `csgocases`,
        text: `case 3 - ${code3}\ncase 62 - ${code62}`
    };
    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

setInterval(openfreecases, (3600 * 24 + 10) * 1000);