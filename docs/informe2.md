# Informe entrega 2

## Construcción
- #### ESLint `8.41.0`
  ESLint es un analizador estático de JavaScript configurable que nos ayuda a encontrar problemas en nuestro codigo. Estos problemas pueden ir desde potenciales bugs en tiempo de ejecucion, no seguir buenas practicas de codificacion, hasta problemas de estilos. Su objetivo principal es mejorar la calidad y legibilidad del código, así como mantener una consistencia en el estilo de programación. Su funcionamiento de basa en analizar el código fuente sin ejecutarlo y aplicar una serie de reglas predefinidas o personalizadas para    identificar los posibles problemas ya mencionados. En nuestro caso utilizamos las reglas predefinidas por google que estan presentes en la sigueinte dependencia `"eslint-config-google": "^0.14.0"`.
- #### Webpack `5.87.0`
  Webpack es una herramienta utilizada en el desarrollo web para gestionar y optimizar los activos estáticos de una aplicación. Básicamente toma varios archivos de entrada, como archivos JavaScript, CSS, imágenes, fuentes, entre otros, y los combina en un número reducido de archivos de salida optimizados. Esto tiene un gran beneficio y es que permite reducir el número de solicitudes al servidor y mejora el rendimiento de la aplicación. 
  Tambien se pueden configurar plugins como es el caso de `"html-webpack-plugin": "^5.5.3"` que se encuentra presente en nuestras dependencias. Éste, simplifica la generación y la gestión de archivos HTML en el proceso de construcción de una aplicación web, es decir,  inserta de forma automática las etiquetas `<script>` y `<link>` necesarias en el archivo HTML para cargar los archivos JavaScript y CSS generados por Webpack.
  Para el manejo de webpack utilizamos la dependencia `"webpack-cli": "^5.1.4"` (interfaz de línea de comandos o CLI en inglés) que es una herramienta complementaria que facilita la ejecución de comandos relacionados con la construcción y el empaquetado de proyectos. En nuestro caso `npm run start` corre el comando `webpack-cli serve` que inicia un servidor de desarrollo para servir la aplicación y recargar automáticamente los cambios en tiempo real durante el desarrollo gracias a `"webpack-dev-server": "^4.15.1"` que permite ejecutar una instancia del servidor web durante el desarrollo de la aplicación. Cuando se ejecuta, el servidor sirve los archivos estáticos generados por Webpack en la memoria, lo que resulta en tiempos de carga más rápidos y facilita el desarrollo iterativo. Y por ultimo `npm run build` ejecuta `webpack build --mode=production` que se utiliza para ejecutar el proceso de construcción de Webpack en modo de producción.

  - ##### sass-loader
  - ##### style-loader
  - ##### postcss-loader
  - ##### css-loader
  - ##### autoprefixer
- #### Bootstrap `5.3.0`
  Para darle estilos a nuestro HTML utilizamos Bootstrap, que ademas de ser un gran framework que css era un requerimiento de la letra de este proyecto. Este framework, es de código abierto y es ampliamente utilizado para el desarrollo de sitios web y aplicaciones web responsivas. Fue creado por Twitter y ahora es mantenido por la comunidad. Proporciona una colección de herramientas, estilos predefinidos y componentes de interfaz de usuario que facilitan la creación de interfaces web modernas y atractivas. El objetivo principal de Bootstrap es agilizar el proceso de diseño y desarrollo. En nuestro caso, debido a la utilizacion de webpack, ya descrito anteriormente, para complementar la integracion utilizamos `"sass-loader": "^13.3.2"`, un módulo de Webpack que permite cargar y compilar archivos Sass o SCSS en un proyecto. `"sass": "^1.63.4"` es una extension de CSS que agrega características y funcionalidades adicionales como Variables y Anidamiento de reglas. Su finalidad es  extender las capacidades de CSS con estas características y otras mas.
  - ##### @popperjs/core
- #### Jest
-   - ##### babel/core
-   - ##### babel/preset-env
-   - ##### babel/jest


## Interfaz de usuario

## Codificación

## Test unitario

## Reflexión
