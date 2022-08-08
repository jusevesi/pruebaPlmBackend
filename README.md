# userApp

Este repositorio corresponde al backend hecho con node js userApp.

## Pasos para ejecutar el proyecto

1. Instalar node js
2. Instalar Mysql Workbench 
3. Crear BD
```sql
CREATE SCHEMA `pruebaplm` DEFAULT CHARACTER SET utf8 ;
```
4. Crear tabla
```sql
CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `tipoId` varchar(45) DEFAULT NULL,
  `documento` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
5. Cambiar credenciales en archivo mysql.service.js
   
6. Clonar el proyecto
```sh
git clone https://github.com/jusevesi/pruebaPlmBackend
```
7. Instalar modulos de node
```sh
npm install
```   
8. Ejecutar el proyecto
```sh
npm start
```
