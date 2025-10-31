## Aplicación elegida: Apache HTTP Server
##Objetivo 
Se trabajo bajo los siguientes parametros "APACHE":
 - Imagen Empleada: **httpd**
 - Puerto: 8081
 - Nombre Contenedor: _mi-apache_
## Comandos Empleados
### 1. Ejecución del contenedor
```
docker run -d --name mi-apache -p 8081:80 httpd
```
![Ejecución del contenedor](clase1/capturas/creacion_contenedor.png)

### 2. Verificación
- Para la visualización del contenedor 'mi-apache' y las caracteriscas con la que fue empleada (puerto '8081').
```
docker ps
```
- `docker logs mi-apache` usado para la validacion del correcto inicio del contenedor
- Acceso por navegador: `http://localhost:8081`  para la visulaizacion de la pagina por defecto de httpd.

### 3. Limpieza
Se procedió con la limpieza correspondiente desde la detención del contenedor y eliminado; validando la correcta ejecución de estos con `docker ps`
```
docker stop mi-apache
docker rm mi-apache
```

### 4. Evidencias
Capturas en ./capturas/

