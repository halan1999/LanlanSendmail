const express = require("express");
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//var url = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(3000);

let randomCode = null;
randomCode = Math.floor(Math.random() * 10000);

var transporter = nodemailer.createTransport({
  //host: "smtp.gmail.com",
  //port: 587,
  service : "gmail",
  auth: {
    user: "zaloaltp@gmail.com",
    pass: "Zaloaltp2020@",
  },
});



app.get("/", function (req, res) {
  res.render("form");
});

app.post("/mail", function (req, res) {
  var userName = req.body.email;
  //var passWord = req.body.password;
  transporter.sendMail(
    {
      from: "zaloaltp@gmail.com",
      to: userName,
      subject: "Verification",
      text: "Your is code" + "   " + randomCode
    },
    function (err, response) {
      if (err) {
        res.send(err);
      } else {
        res.send("thanh cong");
      }
    }
  );
});
