const https = require("https");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");

const token = "hz7z9bvx8xcsko8sko00s0wo0kcs80k";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "martinmotzcontact@gmail.com",
        pass: "sV7mUcG584"
    }
});

function opencase(id) {
    const url = `https://csgocases.com/api.php/case/open?id=${id}&number=1&test=false`;
    const options = {
        headers: {
            "cookie": `sfRemember=${token}`
        }
    };
    https.get(url, options, (res) => {
        const mailoptions = {
            from: "martinmotzcontact@gmail.com",
            to: "martinmotzcontact@gmail.com",
            subject: `case ${id} - csgocases`,
            text: `${res.statusCode} - ${res.statusMessage}`
        };
        transporter.sendMail(mailoptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }).on("error", (err) => {
        console.log(err);
    });
}

function openfreecases() {
    opencase(3);
    opencase(62);
}

schedule.scheduleJob("0 18 * * *", () => {
    openfreecases();
});