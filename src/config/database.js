const mongoose = require("mongoose");
const dns = require("dns");

async function connectToDB() {
    try {
        // Set DNS servers to public ones to resolve Node.js c-ares DNS resolution issues on Windows
        try {
            dns.setServers(["8.8.8.8", "1.1.1.1"]);
        } catch (dnsErr) {

        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDB;