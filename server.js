var express = require("express");
var app = express();
var fs = require("fs");


// serve your css as static
app.use(express.static(__dirname + "/"));


app.get("/", (req, res) => {
    fs.readFile(__dirname + "/todo.html", function (err, data) {


        if (err) {
            res.status(404).send("Not Found")
            console.log("hata")
        } else {
            res.write(data)
            //     res.write("<h1>girdikmi</h1>");
            //   res.write("<h1>girdik</h1>")
            res.end("");

        }


    })
});

app.listen(80, () => {
    console.log("Application started and Listening on port 80");
});