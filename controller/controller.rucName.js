"use strict"

const Ruc = require("../model/modelRuc.js")

//*************************************//
        //BUSACAR RUC POR NOMBRE
//************************************//

function getRucForName (req,res)
{
    let razonSocial=req.query.razonSocial
    let limite=req.query.limit
    let order=req.query.order
    order=parseInt(order)

    //Convierte el limite en int
    if(limite!=null)
    {
        limite=parseInt(limite)
        
    }
    //Convierte el limite en int  y le pasa el valor default 20
    if(limite==null)
    {
        limite=parseInt(limite)
        limite=20;
        
    }
    //Pasa el valor por default a order = 1 
    if(order!=-1&&order!=0)
    {
        order=1;
    }
    //Valida que razon Social que no traiga valores null
    if (razonSocial==null)
    {
        return res.status(404).send({message:"error"})
    }
    //Valida que el string de la razon social no se menor a 4
    if(razonSocial.length<2)
    {
        return res.status(404).send({message:`error:  String length ${razonSocial.length}<2`})
    }
    else
    {  //Vaalida que el limite no sea mayor 50
        if(limite>50)
        {
        return res.status(404).send({message:`error limite superado. ${limit} debe ser =<50`})            
        }
        else
        {
            //Validacion para envidar documetos sin ordenamiento
            if(order==0)
            {
                razonSocial=razonSocial.toUpperCase();
                Ruc.find({razon_social: { $regex: razonSocial } }, function(error,success)
                {
                    if(error)
                    {
                        return res.status(500).send({message:`Error al realizar petición: ${error}`})            
                    }
                    if(success=="")
                    {
                        return res.status(404).send({message:"No existe la Razon Social"})
                    }
                    res.status(200).send({success, limite,order})
                }).limit(limite)
            }
           else
            //Validacion para envidar documetos con ordenamiento
           {
                razonSocial=razonSocial.toUpperCase();
                Ruc.find({razon_social: { $regex: razonSocial } }, function(error,success)
                {
                    if(error)
                    {
                        return res.status(500).send({message:`Error al realizar petición: ${error}`})            
                    }
                    if(success=="")
                    {
                        return res.status(404).send({message:`No existe la Razon Social: ${razonSocial}`})
                    }
                    res.status(200).send({success, limite,order})
                }).sort({razon_social:order}).limit(limite)
            }
        }

    }
}

module.exports={
    getRucForName
};  