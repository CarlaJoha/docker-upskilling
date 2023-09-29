const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
dotenv.config();
// const characterRoutes = require("./routes/characterRoutes");
// const filmRoutes = require("./routes/filmRoutes");
// const planetRoutes = require("./routes/planetRoutes/index");
const store = require("./routes");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

// server.use("/", characterRoutes);
// server.use("/", filmRoutes);
// server.use("/", planetRoutes);
server.use("/", store);

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