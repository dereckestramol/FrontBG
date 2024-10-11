## Como iniciar el proyecto


Para iniciar el proyecto una vez descargado desde el git se debe ejecutar un "npm install" en la terminal, esto instalara todos los modulos para que funcione la aplicacion.

## Problemas de CORs

Si el proyecto marca algun problema con la conexion al backend una de las razones puede ser los CORs para solucionar este incoveniente se debe ir al program del backend


<img src="../FrontBG/public/images/CORs.jpeg"/>

En la linea 14 debemos modificar el puerto del localhost por el que este levantado el front 

## No se encuentra la url del backend

En caso de no encontrarse la Url del backend debemos abrir la carpeta environments que se encuentra dentro de la carpeta src, en environments.development procederemos a cambiar la url del backed


<img src="../FrontBG/public/images/environment.jpeg"/>

en la linea 3 podemos modificar la url a la conexion al backend 