const http = require("http");
const express = require("express");
const app = express();

http
  .createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];

    req
      .on("error", (err) => {
        console.error("err");
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
      });
  })
  .listen(8080);
