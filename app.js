require("dotenv").config();
require("./config/database").connect();
global.User = require("./model/user");
const express = require("express");

const app = express();
const userview=require('./User/UserView')

app.use(express.json());
// ...

app.post("/register",userview.register)
app.post("/login",userview.login)

 
module.exports = app;