# Mag. Site Challenge

Este repositorio es para un desafio de Front-End.

## De que se trata el Challenge?

### Contexto del Challenge

Se realizaron varios proyectos de transformación digital, y nos dejaron encargados el desarrollo de una _aplicacion_
que permita a los lectores _subscribirse_ a nuestro _paquete de diarios impresos en forma digital_.

El equipo de investigación tambien nos da 3 puntos importantes antes del desarrollo:

> - El 75% de las posibles suscripciones se realizarán desde un móvil
> - Por cada segundo que demora en cargar la aplicación se reduce en 18% la posibilidad de una compra
> - Se espera que al menos el 35% de compradores provengan de motores de búsqueda.

A partir de esta información, podemos obtener 2 conclusiones importantes:

> - La página tiene que ser desarrollada para móviles primero (mobile-first)
> - La página debe cargar rápido para retener la mayor cantidad de usuarios. (Disminuir tiempo de carga inicial con Lazy Loading)

El equipo de UI también adjuntó un [prototipo de la aplicación](https://xd.adobe.com/view/95b2cf77-ac47-4c1d-5430-43576b88590e-e383/)

### Resultado del Challenge

Para este desafio, se necesita en términos generales:

- Crear una aplicación front-end utilizando **React**
- Crear la página de **"Subscripcion"**, donde el usuario escoge el plan y pasa a ingresar sus datos.
- Crear la página de **"Datos"**, donde el usuario ingresa la información de su tarjeta de crédito. Si es válida, se pasa a la siguiente página.
- Crear la página de **"Confirmacion"**, donde el usuario recibe la confirmación de su compra.

## Solución

### Aplicaciones Utilizadas

Para programar el challenge, utilicé:
- Visual Studio Code
- Firefox Dev Tools
- Chrome Dev Tools

### Estructura de la Solución

La solución está estructurada de la siguiente manera:

- **src**: Contiene los archivos de inicio como Index.js, App.js, así como el Routing.
- **pages**: Las 3 paginas principales
- **components**: Diferentes componentes que son utilizados en las páginas
- **store**: El Context API con la información que debe ser utilizada por toda la aplicación
- **hooks**: Un _custom Hook_ creado para la validación del Formulario en _Datos_ 

### Toma de Decisiones

#### ``Mobile-First``

De acuerdo a la investigación dada en el _Contexto_, se decidió utilizar el enfoque de _(Mobile-First)_. 
Esto incurre también en que se necesitará utilizar breakpoints para realizar el diseño web.

#### ``Redux Context-API``

La decisión de utilizar Redux o el Context API recae en las dependencias. Agregar Redux incrementa
la carga que tendrán que realizar los usuarios. Asimismo, la aplicación no es lo suficientemente
compleja para necesitar la ayuda de Redux.

En este proyecto se utilizará el **Context-API**

#### ``Validacion del Formulario``

Para realizar la validación del formulario, se utilizó un **customHook**. En **useForm** iniciamos 2 estados:

![Custome_Hook](https://user-images.githubusercontent.com/21108071/123308431-441aaf00-d4e9-11eb-998e-29e0b5169cd5.png)

Lo que hacemos es actualizar los datos de **value** cada vez que hay un cambio. Luego, validamos el formulario utilizando REGEX.
Si el formulario tiene valores erróneos, entonces el objeto **errors** deja de ser vacio. Se muestran los campos con errores en rojo. 
Si todo esta bien, se pasa a la página de "Confirmacion".

#### ``React Router DOM``

Este paquete es la única librería externa que se ha instalado. Permite la modificacion del URL para dar la ilusion de que cambiamos la página.
Tambien nos permite crear **rutas protegidas**. En nuestro caso, la ruta protegida seria la de **Confirmacion**. Esta pagina solo deberia 
accederse desde el formulario de **Datos**.

#### ``Code Splitting``

Code Splitting se refiere a dividir el bundle generado al crear la aplicación para deployment. De esta manera, el usuario solo carga la página
que necesita acceder. Implementarlo es sencillo y se puede realizar con la libreria **React**.

![CodeSplitting](https://user-images.githubusercontent.com/21108071/123309850-0880e480-d4eb-11eb-9e6c-8af9425c24eb.png)

Importamos de **React**, _lazy_ y _Suspense_. Luego, importamos cada una de nuestras páginas utilizando _lazy()_.
Luego, dentro de nuestro functional component, podemos utilizar **<Suspense>** para cubrir las rutas que acabamos de importar.
Se debe tener en cuenta que **<Suspense>** necesita de un valor **fallback** para funcionar.
  
#### ``Despliegue de la Aplicación``
  
Para desplegar la aplicación, pensaba utilizar **Netlify**. Lamentablemente, tenía un problema con el routing con cualquier path que no sea "/".
Es por esa razón que el despliegue está en Vercel.
  
#### ``PWA``
  
Para obtener el estado de **PWA**, primero se necesita correr **Lighthouse** en nuestra aplicación. Al correrlo, tenemos 2 errores:
  1. No se tiene un **maskable-icon**
  2. No se tiene un **service-worker**

Para resolver el primer problema, necesitamos crear un ícono, para luego [Obtener los tamaños requeridos](https://maskable.app/editor) a traves de
esta página. Luego, tenemos que cambiar nuestro **manifest.json** para incluir estos nuevos iconos.
  
Para resolver el segundo problema, necesitamos utilizar el serviceWorkerRegistration y registrarnos. Asimismo, se necesitara crear un archivo
con el service worker. Mayor documentación se puede encontrar en [WorkBox](https://developers.google.com/web/tools/workbox)
 
#### ``Mejoras``
  
Este proyecto definitivamente se puede mejorar:
- Agregar una página **Home** mostrando los periodicos.
- Arreglar el styling en la página **Confirmacion**.
- Crear los test suites para probar los componentes.
- Arreglar el SEO.
- Hacer Refactoring a las páginas.
- etc...

## Tareas por Realizar

- [x] Añadir react-router-dom
- [x] Crear el _Header_
- [x] Crear la página **suscripcion**
  - [x] Crear el _Toggle Switch_
  - [x] Crear los _Planes de Suscripcion_
- [x] Crear la página **datos**
  - [x] Crear el _formulario_
  - [x] Crear _validaciones_ para el _formulario_
  - [x] Crear el _"Modal" para cambiar plan_  
- [x] Crear la página **confirmacion**
  - [x] Crear el _mensaje de confirmacion_
- [x] Realizar el routing de las paginas
- [x] Utilizar el _Context API_ para manejar el estado de la aplicación
- [x] Proteger la página de **confirmacion** de ser ingresada por el url
- [x] Hacer uso de _Code Splitting_

## Tareas por Realizar (Bonus)

- [x] Comentar la toma de decisiones y mejoras para una siguiente versión
- [ ] Crear suite de tests para los componentes
- [x] Desplegar la aplicación usando _Netlify / Heroku / Zeit_
- [x] Hacer que la aplicación sea una PWA

---
  
## Página:
  
[Mag. Site en Vercel](https://mag-site-challenge.vercel.app/suscripcion)
