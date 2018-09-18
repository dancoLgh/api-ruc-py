# api-ruc-py
API de búsqueda por numero o razón social del REGISTRO ÚNICO DEL CONTRIBUYENTE DEL PARAGUAY

>>*desarrollada en nodejs y mongoDB*

### Para buscar por razón social: 

https://apiv1-ruc-py.herokuapp.com/apiV1/SearchRucForName/<razon%social>

Devuelve todos los documentos que coincidan con el string enviados, el tamaño del string de ser **igual o mayor a 4**

##### ejemplo:

https://apiv1-ruc-py.herokuapp.com/apiV1/SearchRucForName/vice%20presidencia%20de%20la%20republica

```
{
    "success": [
        {
            "RucAnterior": 0,
            "_id": "5b9f026738277738b48eef3a",
            "Ruc": 80009837,
            "Dv": 4,
            "RazonSocial": "VICE PRESIDENCIA DE LA REPUBLICA"
        }
    ]
}

```
devuelve un solo documento

https://apiv1-ruc-py.herokuapp.com/apiV1/SearchRucForName/vice%20presidencia


```
{
    "success": [
        {
            "RucAnterior": 0,
            "_id": "5b9f016838277738b48621ad",
            "Ruc": 80004761,
            "Dv": 3,
            "RazonSocial": "GABINETE MILITAR- SERVICIOS DE LA PRESIDENCIA DE LA RCA."
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f019038277738b487a98a",
            "Ruc": 80047012,
            "Dv": 5,
            "RazonSocial": "SINDICATO DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA"
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f01a638277738b4891173",
            "Ruc": 80007143,
            "Cv": 3,
            "RazonSocial": "REGIMIENTO  GUARDIA PRESIDENCIAL"
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f01a738277738b4891eeb",
            "Ruc": 80044453,
            "Dv": 1,
            "RazonSocial": "ASOCIACION DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA"
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f01db38277738b48c0404",
            "Ruc": 80015275,
            "Dv": 1,
            "RazonSocial": "PRESIDENCIA DE LA REPUBLICA - SECRETARIA DE ACCION SOCIAL"
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f021b38277738b48d7db6",
            "Ruc": 80020056,
            "Dv": 0,
            "RazonSocial": "PRESIDENCIA DE LA REPUBLICA - GABINETE CIVIL"
        },
        {
            "RucAnterior": 0,
            "_id": "5b9f026738277738b48eef3a",
            "Ruc": 80009837,
            "Dv": 4,
            "RazonSocial": "VICE PRESIDENCIA DE LA REPUBLICA"
        }
    ]
}
```
devuelve todos los documentos que en la razón social contenga **presidencia**


### Para buscar por número de RUC

https://apiv1-ruc-py.herokuapp.com/apiV1/SearchRucForNumber/<numeroRuc>

devuelve el documento con el que coincida el número de ruc, el ruc no debe contener el digito verificador

**50080395(correcto)**

**~~50080935-1~~(incorrecto)**

###### Ejemplo:
https://apiv1-ruc-py.herokuapp.com/apiV1/SearchRucForNumber/80009837

```
{
    "success": [
        {
            "RucAnterior": 0,
            "_id": "5b9f026738277738b48eef3a",
            "Ruc": 80009837,
            "Dv": 4,
            "RazonSocial": "VICE PRESIDENCIA DE LA REPUBLICA"
        }
    ]
}

```
Devuelve un documento que coincide con el número de ruc 

La api esta en fase BETA y con servidor en heroku GRATIS al igual que la base de datos en mLab, así que la respuesta no será la más rápida.
Cualquier duda o sugerencia estoy a disposición de la comunidad 

