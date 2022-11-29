# NodeJS React Graphql exercise

## Backend

Ubicado dentro de la carpeta __backend__ la cual contiene todo el proceso de consultas hacia graphql de github, para ello se realiza una pequeña distribución de archivos tratando de mantener una estructuracion en pro a *Clean Architecture*.

Se implementa el uso de un archivo de configuración basado en variables de entorno.  

Se requiere el uso del paquete cors para devolver en cada respuesta del API el encabezado *__Access-Control-Allow-Origin__* para permitir el uso compartido de informacion hacia el frontend, ya que al user el mismo endpoint pero diferente puerto se generaba un error *No 'Access-Control-Allow-Origin'*.

Para inicializar el proyecto, ubicado dentro de la carpeta __backend__ se requiere ejecutar el comando:

```
npm run start
```


Para consultar los repositorios es requerido recibir el usuario de github debido a que no se encuentra terminado la obtención del token por [oauth app](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) en cambio se genera directamente desde github un [token personal](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) requerido para poder consultar al API de graqphql.

## Frontend

Ubicado dentro de la carpeta __frontend__,  contiene una aplicación react la cuál es usada para consumir el API creado en NodeJS y realizar las consultas de los repositorios de un usuario a graphql

La Aplicacion permite el registro de cualquier usuario, almacenado en localstorage solicitando `email, password y usuario de github` 

Para inicializar el proyecto, ubicado dentro de la carpeta __frontend__ se requiere ejecutar el comando:

```
npm start
```
