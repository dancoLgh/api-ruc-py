"use strict"
 
const mongoose=require("mongoose");
const app=require("./app.js");
const config=require("./config")

//conexión DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(config.db, (error, respuesta)=>
{
    if(error)
    {
        throw error;
    }
    else
    {
        console.log("Se conecto a la DB");
        app.listen(config.port, function()
        {
        console.log("servidor del ApiRest en http://localhost:"+config.port);
        })
    }

})



