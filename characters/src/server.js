const express = require("express");
const morgan = require("morgan");
const charactersRoute = require("./routes/index")

const server = express();

server.use(express.json());
server.use(morgan("dev"));

// console.log("3", server);
server.use("/Character", charactersRoute );

//errors handler
server.use("*", (req, res) => {
    res.status(404).send("Not found")
});
server.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        error: true,
        message: err.message,
    });
});

module.exports = server;