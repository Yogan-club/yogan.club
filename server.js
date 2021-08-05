const express = require("express");
const server = express();

server.get("/", async (req, res) => {
    res.sendFile(__dirname + "/landingpage/index.html")
})

server.listen(1000, console.log("Server is now live"))