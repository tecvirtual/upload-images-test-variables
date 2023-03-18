const express = require("express");
const app = express();
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});


const upload = multer({ storage: storage });

app.post("/api/upload", upload.array("file"), (req, res) => {
  //console.log(req.files);
  console.log(req.body);
  res.send("Upload successful!");
});

app.get('/', function (req, res) {
    console.log('hola')
    res.sendFile(path.join(__dirname+'/prueba.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));