## Aplicación elegida: Apache HTTP Server
## Comandos Empleados
### 1. Ejecución del contenedor
 - docker run -d --name mi-apache -p 8081:80 httpd
### 2. Verificación
- 'docker ps' empleado para mostrar el contenedor 'mi-apache' y las caracteriscas con la que fue empleada (puerto '8081').
- 'docker logs mi-apache' usado para la validacion del correcto inicio del contenedor
- Acceso por navegador: 'http://localhost:8081' para la visulaizacion de la pagina por defecto de httpd.

### 3. Limpieza
- docker stop mi-apache
- docker rm mi-apache

### 4. Evidencias
Capturas en ./capturas/

