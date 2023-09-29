const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(
  "/Character",
  createProxyMiddleware({
    target: "http://Character:8001",
    changeOrigin: true,
  })
);
app.use(
  "/Film",
  createProxyMiddleware({
    target: "http://Film:8002",
    changeOrigin: true,
  })
);
app.use(
  "/Planet",
  createProxyMiddleware({
    target: "http://Planet:8003",
    changeOrigin: true,
  })
);
app.use(
  "/:model",
  createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true,
  })
);
app.listen(8000, () => {
  console.log("Gateway on port 8000");
});

// module.exports = app