const express = require("express");
const mongoose = require("mongoose");
const server_config = require("./config/server.config");
const app=express();



//Start the server
app.listen(server_config.PORT, ()=>{
    console.log("Server running on "+server_config.PORT);
});