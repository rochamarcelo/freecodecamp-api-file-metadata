var express = require("express")
var multer = require("multer")
var upload = multer({dest: 'uploads/'})
var port = process.env.PORT || 8000;

var app = express()

app.use('/static', express.static(__dirname + '/public'));
app.get("/", (req, res) => {
    res.sendfile(__dirname + '/public/index.html');
});

app.post("/check-file-size", upload.single('file_in'), (req, res) => {
    var data = {size: req.file.size};

    res.send(JSON.stringify(data));
});

app.listen(port, () => console.log("File Metadata Microservice listening on port: " + port));