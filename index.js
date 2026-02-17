const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

const routers = require("./routes");
app.use(routers);


app.listen(3000,() => {
  console.log("Listening on locahost port 3000");
});