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
    return new Promise((resolve, reject) => {
        const url = "https://csgocases.com/api.php/case/open?id=" + id + "&number=1&test=false";
        const options = {
            headers: {
                "cookie": "sfRemember=" + token
            }
        };
        https.get(url, options, (res) => {
            resolve(res.statusMessage);
        }).on("error", (err) => {
            reject(err);
        });
    });
}

async function openfreecases() {
    const case3 = await opencase(3);
    const case62 = await opencase(62);
    const mailoptions = {
        from: "martinmotzcontact@gmail.com",
        to: "martinmotzcontact@gmail.com",
        subject: "csgocasesfreecases",
        text: "case 3 - " + case3 + "\ncase 62 - " + case62
    };
    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

schedule.scheduleJob("0 18 * * *", () => {
    openfreecases();
});