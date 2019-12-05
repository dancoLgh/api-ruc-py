# api-ruc-py
API de búsqueda por numero o razón social del REGISTRO ÚNICO DEL CONTRIBUYENTE DEL PARAGUAY

*desarrollada en nodejs express y mongoDB*

### Los parametros de consultas son:
#### ruc : es el numero del contribuyente regitrado en la SET *(debe ser mayor o igula a 3 digitos)*
#### razaonSocial: es el nombre del contribuyente 
#### limit : es para establecer un limite de resultados, por defecto devuelve los primeros 20  registros *(rango de 0 a 50)*
#### order: es para ordenar la razon social de forma asecndente o desendete por defecto 1 *(acendente=0, desendente=1)*


### Para buscar por razón social: 

http://api-ruc-py.openode.io/ruc/name

Devuelve un Send() con 20 documentos ordenados de forma Ascendente que coincidan con el string enviados, el tamaño del string debe de ser **igual o mayor a 4** 

**Importante** poner apellidos primero para que de un mejor resultado(trabajando en este problema)


##### ejemplo:

http://api-ruc-py.openode.io/ruc/name?razonSocial=vice%20presidencia%20de%20la%20republica

```
{
    "success": [
        {
            "_id": "5cbf22bab7e81c283c294524",
            "ruc": "80009837",
            "razon_social": "VICE PRESIDENCIA DE LA REPUBLICA",
            "dv": "4"
        }
    ],
    "limite": 20,
    "order": 1
}

```

devuelve un status 200 con un solo documento

http://api-ruc-py.openode.io/ruc/name?razonSocial=presidencia


```
{
    "success": [
        {
            "_id": "5cbf226cb7e81c283c232e6e",
            "ruc": "80044453",
            "razon_social": "ASOCIACION DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA",
            "dv": "1"
        },
        {
            "_id": "5cbf2240b7e81c283c200deb",
            "ruc": "80004761",
            "razon_social": "GABINETE MILITAR- SERVICIOS DE LA PRESIDENCIA DE LA RCA.",
            "dv": "3"
        },
        {
            "_id": "5cbf22a7b7e81c283c27c247",
            "ruc": "80020056",
            "razon_social": "PRESIDENCIA DE LA REPUBLICA - GABINETE CIVIL",
            "dv": "0"
        },
        {
            "_id": "5cbf226bb7e81c283c2320f6",
            "ruc": "80007143",
            "razon_social": "REGIMIENTO  GUARDIA PRESIDENCIAL",
            "dv": "3"
        },
        {
            "_id": "5cbf2257b7e81c283c21a7d1",
            "ruc": "80047012",
            "razon_social": "SINDICATO DE FUNCIONARIOS DE LA PRESIDENCIA DE LA REPUBLICA",
            "dv": "5"
        },
        {
            "_id": "5cbf22bab7e81c283c294524",
            "ruc": "80009837",
            "razon_social": "VICE PRESIDENCIA DE LA REPUBLICA",
            "dv": "4"
        }
    ],
    "limite": 20,
    "order": 1
}
```
devuelve un status 200 con los 20 primeros documentos ordenados de forma decendente que en la razón social contenga **presidencia**


### Para buscar por número de RUC

https://apiv1-ruc-py.herokuapp.com/api/rucs/ruc/numeroRuc

devuelve Send() con el documento que coincida el número de ruc, el ruc no debe contener el digito verificador

**80009837(correcto)**

**~~80009837-4~~(incorrecto)**

###### Ejemplo:
http://api-ruc-py.openode.io/ruc/number?ruc=80009837

```
{
    "success": [
        {
            "_id": "5cbf22bab7e81c283c294524",
            "ruc": "80009837",
            "razon_social": "VICE PRESIDENCIA DE LA REPUBLICA",
            "dv": "4"
        }
    ],
    "limiteRuc": 20,
    "order": 1
}
```
Devuelve un status 200 con el documento que coincide con el número de ruc 



La api esta en fase BETA y con servidor en openode GRATIS al igual que la base de datos en mLab, así que la respuesta no será la más rápida.
Cualquier duda o sugerencia estoy a disposición de la comunidad 

