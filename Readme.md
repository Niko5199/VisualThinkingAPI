## Caracteristicas del Proyecto

Requerimientos:

- Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
- Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
- Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

## Diagrama

<img title="a title" alt="Alt text" width='600px' src="../img/Diagrama.png">

El proyecto consiste en hacer peticiones a una clase por medio de un endpoint,
esto con el fin de filtrar la informacion, a lo que necesite el ususario, la clase
`Server`, es la que se comunicara con el usuario, y a su vez esta pasara la peticion,
a controlador `PartherController`, el ejecutara el metodo que tiene un retorno de la
clase `Parther`, dependiendo de lo que necesite uno es lo que visualizara.

## Dependencias | Librerias usadas:

| Dependencias | Versiones | Devdependecie or Dependencie |
| ------------ | --------- | ---------------------------- |
| Express      | @4.18.1   | Dependencie                  |
| Jest         | @26.0.0   | Devdependencie               |
| Eslint       | @8.15.0   | Devdependencie               |
| Nodemon      | @2.0.16   | Devdependencie               |

- `Express`, para montar mi servidor y poder hacer uso de mis rutas.
- `Jest`, para hacer pruebas unitarias a las clases que use.
- `Eslint`, para analizar mi codigo y poder resolver problemas de sintaxis y aplicar mejores practicas.
- `Nodemon`, esta libreria es opcional, porque se uso mas para ejecutar mis scripts sin necesidad de bajar
  y volver a subir mis cambios.

## Estos son los endpoints que cree para la aplicacion:

| Endpoint                                        | Request                                  | Response                                                      |
| ----------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| `localhost:3000/v1/students/`                   | `localhost:3000/v1/students/`            | `List of about all visualparthers`                            |
| `localhost:3000/v1/students/credits`            | `localhost:3000/v1/students/credits`     | `List of about all visualparthers by credits superior of 500` |
| `localhost:3000/v1/students/:haveCertification` | `localhost:3000/v1/students/true & false | `List of about all visualparthers by haveCertification `      |
