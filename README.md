# api-ruc-py
API de búsqueda por numero o razón social del REGISTRO ÚNICO DEL CONTRIBUYENTE DEL PARAGUAY

>>*desarrollada en nodejs y mongoDB*

### Para buscar por razón social: 

https://apiv1-ruc-py.herokuapp.com/api/rucs/name/razon%20social

Devuelve 20 documentos ordenados de forma Ascendente que coincidan con el string enviados, el tamaño del string debe de ser **igual o mayor a 4**

**Importante** poner apellidos primero (trabajando en este problema)

##### ejemplo:

https://apiv1-ruc-py.herokuapp.com/api/rucs/name/vice%20presidencia%20de%20la%20republica

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

https://apiv1-ruc-py.herokuapp.com/api/rucs/name/presidencia


```
{
    "success": [
        {
            "RucAnterior": 0,
            "_id": "5ba08c3d3827773c8cc641ab",
            "Ruc": 80044453,
            "RazonSocial": "ASOCIACION DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA",
            "Dv": 1
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c383827773c8cc3446d",
            "Ruc": 80004761,
            "RazonSocial": "GABINETE MILITAR- SERVICIOS DE LA PRESIDENCIA DE LA RCA.",
            "Dv": 3
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c493827773c8ccaa076",
            "Ruc": 80020056,
            "RazonSocial": "PRESIDENCIA DE LA REPUBLICA - GABINETE CIVIL",
            "Dv": 0
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c443827773c8cc926c4",
            "Ruc": 80015275,
            "RazonSocial": "PRESIDENCIA DE LA REPUBLICA - SECRETARIA DE ACCION SOCIAL",
            "Dv": 1
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c3d3827773c8cc63433",
            "Ruc": 80007143,
            "RazonSocial": "REGIMIENTO  GUARDIA PRESIDENCIAL",
            "Dv": 3
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c3b3827773c8cc4cc4a",
            "Ruc": 80047012,
            "RazonSocial": "SINDICATO DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA",
            "Dv": 5
        },
        {
            "RucAnterior": 0,
            "_id": "5ba08c4b3827773c8ccc11fa",
            "Ruc": 80009837,
            "RazonSocial": "VICE PRESIDENCIA DE LA REPUBLICA",
            "Dv": 4
        }
    ]
}
```
devuelve los 20 primero documentos ordenados de forma acendente que en la razón social contenga **presidencia**


### Para buscar por número de RUC

https://apiv1-ruc-py.herokuapp.com/api/rucs/ruc/numeroRuc

devuelve el documento con el que coincida el número de ruc, el ruc no debe contener el digito verificador

**80009837(correcto)**

**~~80009837-4~~(incorrecto)**

###### Ejemplo:
https://apiv1-ruc-py.herokuapp.com/api/rucs/ruc/80009837

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

