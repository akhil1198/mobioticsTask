const express = require("express");
var app = express();
const http = require("http").createServer(app);


// //visitor api

// app.use("/postvisitor", adminController.insertvisitor); //api to insert visitor details

// app.use("/createvisitor", adminController.createvisitor); //create visitor table and fetching

// app.use("/block", adminController.blocklist); //api to blocklist visitor

// app.use("/unblock", adminController.unblock); //api to unblock visitor

// app.use("/hello", adminController.hello); //api to fetch a specific visitor details

// app.use("/previsits", adminController.previsits); //fetching visitors previous data

// app.use("/totalvisitor", adminController.totalvisitors); //api to fetch total visitor count

// app.use("/updateprofile", adminController.updateprofile); //api to update visitor invformation

app.use("/", (req, res) => {
    res.send("Hello World form NodeJS express.");
});


http.listen(5000, () => console.log("Server started on port 5000"));
