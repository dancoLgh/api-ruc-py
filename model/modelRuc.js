"use strict"

const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const RucShema=Schema({
    ruc:String,
    dv:String,
    razon_social:String
    
},{ collection: 'Ruc'});

module.exports=mongoose.model("Ruc",RucShema);