"use strict"

const Ruc = require("../model/modelRuc.js")


//*************************************//
        //BUSACAR RUC POR NÚMERO
//************************************//
function getRucForNumber(req,res)
{

    let ruc=req.params.Ruc
    let limiteRuc=req.query.limit
    let order=req.query.order

    order=parseInt(order)

    //pregunto se el ordern es disto de -1 o 0 para poner 1 (defaul)
    if(order!=-1&&order!=0)
    {
        order=1;
    }
    //pregunto si limite viene null para igular a 20 (default)

    if(limiteRuc==null)
    {
        limiteRuc=20;
    }
    if(limiteRuc!=null)
    {
        limiteRuc=parseInt(limiteRuc)

    }
    //validacion de ruc vacio
    if (ruc==null)
    {
        return res.status(404).send({message:"error"})
    }
    //validacion para no recibir ruc menor a 3 caracteres
    if(ruc.length<3)
    {
        return res.status(404).send({message:`error:  String length ${ruc.length}<3`})
    }
    else
    {  //validacion si suera el limite de 50
        if(limiteRuc>50)
        {
        return res.status(404).send({message:`error limite superado. ${limit} debe ser =<50`})            
        }
        else
        {
            //validacion si recibe 0 no ordena
            if(order==0)   
            {

                Ruc.find({ruc:{ $regex:ruc } }, function(error, success)
                {
                    if(error)
                    {
                        return res.status(500).send({message:`Error al realizar petición: ${error}`})  
                    }
                    if(success==null)
                    {
                        return res.status(404).send({message:"No existe el RUC", ruc})
                    }
                        res.status(200).send({success})
                }).limit(limiteRuc)
            }   
            else
            {
                //otro que no sea cero por default simpre es 1
                Ruc.find({ruc:{ $regex:ruc } }, function(error, success)
                {
                    if(error)
                    {
                        return res.status(500).send({message:`Error al realizar petición: ${error}`})  
                    }
                    if(success==null)
                    {
                        return res.status(404).send({message:"No existe el RUC", ruc})
                    }
                        res.status(200).send({success, limiteRuc, order})
                }).sort({RazonSocial:order}).limit(limiteRuc)
            }
        }
    }
}

function postNewRegistry(req,res)
{
    ruc = new Ruc()
    ruc.RucAnterior=req.body.rucAnterior
    ruc.Ruc=req.body.ruc
    ruc.Dv=req.body.Dv
    ruc.RazonSocial=req.body.razonSocial
    ruc.save((error,rucSave)=>
    {
        if(error){
            res.status(500).send({message:`error al guardar en la Base de Datos: ${error}`})
        }
        else
        {
            res.status(200).send({ruc: rucSave})
        }
    })
}

module.exports={
getRucForNumber,
postNewRegistry
};