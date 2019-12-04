"use strict"

const express= require("express");
const hbs=require("express-handlebars");
const app=express();
const morgan= require("morgan");
const api=require("./routes");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/ruc', api);


module.exports=app;

