const http = require("http");
const fs = require("fs");
const path = require("path");
const { data } = require("./datasample.js")
console.log(http.STATUS_CODES);



let server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1>Hello World<h1/>");
            res.end();
            break;

        case "/data":
            res.writeHead(200, { "content-type": "application/JSON" });
            res.write(JSON.stringify(data));
            res.end();
            break;

        case "/index":
            let indexPath = path.join(__dirname, "./index.html")
            let indexRead = fs.readFileSync(indexPath, "utf-8")
            res.writeHead(200, { "content-type": "text/html" });
            res.write(indexRead);
            res.end();
            break;

        default:
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h1>The page you are looking for is not found.<h1/>");
            res.end();
            break;
    }
})

server.listen(5001, () => {
    console.log("Server is running at localhost://5001");
})



