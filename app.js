require ('dotenv').config();
const express = require("express");
const hbs=require("hbs");

const app = express();
const port = process.env.PORT;

//HANDLEBARS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname +'/views/partials')

// servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home",{
    title: "Webserver Node",
    nombre:"Arnold"
  });
});

app.get("/generic", (req, res) => {
 res.render("generic",{
  title: "Webserver Node",
  nombre:"Arnold"
 });
});
app.get("/elements", (req, res) => {
  res.render("elements",{
    title: "Webserver Node",
    nombre:"Arnold"
  });
 });
 

 /*
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
**/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
