# Informe entrega 1

## Repositorio Git

#### Manejo de los repositrios locales y remotos

Vamos a utlizar la rama main como rama estable en la cuál vamos a depositar todo el código y funcionalidades desarrolladas.
También utilizaremos una rama docs en la cuál pondremos toda la documentación correspondiente. Cada feature que vayamos a desarrollar tendrá su rama correspondiente para el orden y legibilidad del proyecto.

#### Comandos git a utilizar:

-   `git init`
    -   Para inizializar el repositorio local
-   `git remote add origin https://github.com/OWNER/REPOSITORY.git`
    -   Para crear la conexion remota con el repositorio.
-   `git fetch`
    -   Para descargar commits, archivos y referencias del repositorio remoto al repositorio local.
-   `git pull`
    -   Para bajar los cambios del repositorio remoto al repositorio local.
-   `git add`
    -   Para contrastar los cambios hechos de forma local, contra el repositorio. Los cambios no son guardados con git add. Para eso debe luego utilizarse git commit.
-   `git commit`
    -   Para guardar todos los cambio realizados en el repositorio local al staging área.
-   `git push`
    -   Para subir los cambios realizados al repositorio.
-   `git branch`
    -   Para listar las ramas existentes. Crear y eliminar ramas.
-   `git merge`
    -   Para unir dos ramas.
-   `git checkout`
    -   Para salir de una rama y entrar a otra. Asumiendo estas ramas ya existen.
-   `git diff`
    -   Para identificar diferencias en el repositorio.
-   `git stash`
    -   Para almacenar temporalmente los cambios reaizados en el código para que poder trabajar en otra cosa y, más tarde, regresar y volver a aplicar los cambios.

## Versionado

#### Mensajes de commits convencionales

Los commits van a seguir el siguiente formato:

<pre>
<b><a>&lt;tipo&gt;</a></b>(<b><a>&lt;alcance&gt;</a></b>): <b><a>&lt;asunto&gt;</a></b>
</pre>

**Tipos:**

-   Cambios relevantes:
    -   `feat` Commits que añaden nuevas características
    -   `fix` Commits que corrigen un error
-   Otros cambios:
    -   `refactor` Commits que reescriben o reestructuran el código por ejemplo para mejorar el rendimiento
    -   `docs` Commits que afectan solo a la documentación
    -   `build` Commits relacionados con el versionado y dependencias del proyecto
    -   `chore` Commits que impactan en cuestiones ajenas al codigo/documentación como por ejemplo el archivo `.gitignore`

**Alcance:**

-   El alcance proporciona información adicional sobre el contexto donde impacta el cambio

**Asunto:**

-   Contiene una breve descripción del cambio realizado.
-   Se utilzará el tiempo presente.
-   No vamos a escribir la primer letra en mayúscula.
-   No lleva punto final.

**Ejemplos:**

-   ```
    docs(informe1): transcripción de una entrevista
    ```
-   ```
    feat(login): add autentificación con cuenta de google
    ```
-   ```
    build(package.json): actualización de dependencias
    ```

Cada rama que creemos para una nueva feature o para corregir lo ya establecido llevará en su nombre una breve referencia para poder identificar a que parte del codigo hace referencia. Por ejemplo `feature/historial_pedidos` o `hotfix/listado_menu`.

## Elicitación

#### Entrevistas

Nuestra primer técnica de elicitación que llevamos a cabo fue realizar tres diferentes entrevistas que traten de abarcar a los usuarios potenciales. Para esto se eligieron preguntas abiertas, diferentes para cada entrevistado, con la finalidad de conocer el contexto de cada uno. Posterior a esto se utilizaron preguntas mas específicas a cada situación y/o rubro.

Los entrevistados representaban diferentes grupos, grupo de padres, cocineros y niños. De aquí se sacaron las siguientes conclusiones:

-   Lo primero que pudimos notar es que por lo general a los padres se les hace dificil hacer un seguimiento a que lo que el niño consume en los comedores. Ésto es debido a que le dan dinero para que compre lo que le apetezca durante la jornada.
-   Los niños muchas veces desconocen el menú semanal ya que no prestan atención a los medios tradicionales que utiliza el comedor para publicarlo. Esto deriva en que no compren el ticket diario para el almuerzo y compren golosinas o comida no adecuada para la correcta alimentación.
-   Por a ciertas condiciones del trabajo de los padres, se les hace imposible prepararle comida para llevar y esto agudiza los puntos anteriores.

-   Los cocineros no saben exactamente cuanta comida realizar, produciendo desperdicio de comida a diario. Cabe enmarcar también que no estan familiarizados con las diferentes situaciones de salud que pueden presentar los niños y podrían estar facilitando el acceso de ciertos alimentos a quienes presentan algun tipo de problema con ellos como por ejemplo intolerancia a las harinas o a la lactosa.

Creemos fuertemente que con el desarrollo de nuestra aplicación se podrían abordar todos estos problemas.

Las evidencias de las entrevistas pueden ser corroboradas aquí: [Entrevista 1](/docs/elicitacion/entrevistas/entrevista1.md), [Entrevista 2](/docs/elicitacion/entrevistas/entrevista2.md) y [Entrevista 3](/docs/elicitacion/entrevistas/entrevista3.md)

#### User Persona

Identificamos dos tipos de personas:

-   Madre de dos hijos casada y con un trabajo estable.
-   Padre soltero con un hijo y recursos ajustados.

A grandes razgos, los usuarios ideales sobre los que nos vamos centrar para que hagan uso de nuestra aplicación estan englobados por estos dos tipos.

![Mariana](elicitacion/user_persona/user_persona_mariana.png?raw=true "Mariana")
![Martin](elicitacion/user_persona/user_persona_martin.png?raw=true "Martin")

#### Análisis de Documentación

Buscando aplicaciones ya existentes encontramos OrderEAT, un negocio planteado por tes estudiantes de un liceo que buscaban solucionar los problemas que afecta al servicio de su comedor. Uno de esos problemas eran las largas filas de treinta minutos para recibir el almuerzo, que los platos llegaban fríos y, muchas veces, se quedaban sin comer.
La plataforma tiene un doble objetivo. Por un lado, que los comedores y cafeterías escolares puedan digitalizar el servicio, cobrar a través de la plataforma, eliminar las filas de espera y disminuir la cantidad de comida desperdiciada. Por el otro, busca conectar a los padres con la alimentación de los hijos, ya que a través de la aplicación tienes seguimiento de lo que consumen, los gastos que realiza cada chico y pueden configurar presupuestos o restricciones alimentarias.

De la documentacion pudimos identiicar los siguientes puntos:

Las evidencias de la documentacion puede ser corroborado aquí: [Nota ElPais](/docs/elicitacion/documentos/OrderEAT%20ElPais.pdf), [Nota ElObservador](/docs/elicitacion/documentos/OrderEAT%20ElObservador.pdf) y [Entrevista en TeleDoce](https://www.teledoce.com/?p=596829)

| Solución para tutores y estudiantes:                | Solución para comedores/cafés:      |
| --------------------------------------------------- | ----------------------------------- |
| Pagos online desde la app                           | Mayor planificación                 |
| Evitar el manejo de efectivo                        | Disminución de carga horaria        |
| Aumentar el involucramiento en la alimentación      | Reducción de desperdicios           |
| Evitar problemas nutricionales y obesidad infantil  | Aumento de ventas                   |
| Reducir los tiempos de espera de entrega de pedidos | Registro total de las transacciones |

Además contamos con imagenes de la applicacion:

<img src="elicitacion/documentos/OrderEAT1.png">
<img src="elicitacion/documentos/OrderEAT2.png">
<img src="elicitacion/documentos/OrderEAT3.png" >
<img src="elicitacion/documentos/OrderEAT4.png" >
<img src="elicitacion/documentos/OrderEAT5.png" >
<img src="elicitacion/documentos/OrderEAT6.png" >

## Especificación

## Requerimientos Funcionales

### RF1 : Permitir regisrar comedores, tutores y niños

-   **Descripción:** El sistema debe permitir registrar un comedor, tutores y niños.

### RF2 : Asociar los niños a un comedor y tutores

-   **Descripción:** El sistema debe permitir asociar los niños a un comedor y tutores, para poder hacer un correcto seguimiento de que es lo que el niño consume.

### RF3 : Permitir compras a los comedores a traves del sistema

-   **Descripción:** El sistema debe permitir compras a los comedores de parte de los tutores para que los niños lo canjeen en el comedor y así asegurarse que el niño coma adecuadamente.

### RF4 : Debe existir una billetera virtual para los niños

-   **Descripción:** El sistema debe permitir agregar dinero a una billetera virtual para que el niño utilice en los productos del comedor.

### RF5 : Permitir cargar billetera virtual con tarjeta de crédito o débito

-   **Descripción:** El sistema debe admitir tarjeta de crédito o débito para comprar y/o cargar la billetera virtual del niño.

### RF6 : Se debe guardar un registro de todas las compras durante el mes

-   **Descripción:** El sistema debe guardar un registro de las compras mensuales que los tutores pueden observar presionando un boton resumen.

### RF7 : Los comedores deben poder publicar y editar sus planificaiones de alimentos

-   **Descripción:** Los comedores deben poder publicar y editar su planificacion semanal, precios y ofertas del plato del dia en su perfil.

### RF8 : Los comedores deben poder observar cuanto llevan vendido

-   **Descripción:** Los comedores deben poder observar cuantos platos reservados tienen para poder cocinar la cantidad correspondiente y no desperdiiar comida.

### RF9 : El sistema debe notificar a los tutores despues de una compra

-   **Descripción:** El sistema debe notificar a los tutores al momento de hacer una compra con la billetera virtual.

### RF10 : Debe restringirse el acceso de ciertos alientos a algunos niños.

-   **Descripción:** El sistema debe restringir los alimentos a los niños con problemas alimenticios.

## Requerimientos no funcionales:

-   **RNF1:** El sistema debe estar integrado con la pasarela de pago MercadoPago
-   **RNF2:** El sistema utilizará protocolos https como método de seguridad.
-   **RNF3:** El sistema en la primera versión solo estara disponible en español.
-   **RNF4:** El sistema en su primera version debera admitir 3 comedores con hasta 100 alumnos cada uno.
-   **RNF5:** El sistema debe ser compatible con Google Chrome.
-   **RNF6:** El sistema en su primera version debe ser compatible con dispositivos mobile, Android 10 e iOS 13 en adelante.
-   **RNF7:** El color primario debe ser Green 900 #1B5E20 y el secundario Light Blue 800 #0277BD como lo establece los estandares de [Material Design](https://m3.material.io/)
-   **RNF8:** La fuente a utilizar sera Roboto
-   **RNF9** El estilo de los iconos sera filled
-   **RNF10** Los estilos de los componentes seran bajo las especificaiones de [Material Design](https://m3.material.io/)

## Historias de Usuario

-   **ID:** 1
-   **Título:** Seguimiento del consumo del niño
    -   **Como** padre de un niño que consume en el comedor
    -   **Quiero** ver que en que alimentos utiliza el dinero
    -   **Para** asegurarme que coma lo correcto y se mantenga saludable
-   **Criterios de aceptación:**

    -   **Dado** el padre registrado
    -   **Cuando** quiera ver el historial en el comedor
    -   **Entonces** se le mostrara en pantalla el dinero total gastado y un listado con todos los productos con su fecha correspondiente.

-   **ID:** 2
-   **Título:** Agregar nuevo producto al comedor
    -   **Como** empleado de un comedor escolar
    -   **Quiero** agregar un nuevo producto
    -   **Para** que los niños puedan consumirlo
-   **Criterios de aceptación:**
    -   **Dado** el empleado
    -   **Cuando** quiera registrar un nuevo producto
    -   **Entonces** podrá agregar una foto, precio y descripción.

## Casos de Uso

-   **Título:** Cargar billetera digital
-   **Actor:** Padre/Tutor
-   **Precondición:** El tutor ya esta registrado y tiene a su hijo asignado
-   **Curso normal:**
    -   1 (Actor): Ingresa a la aplicación
    -   2 (Sistema): Muestra la ventana principal
    -   3 (Actor): Selecciona menú desplegable
    -   4 (Sistema): Muestra todas las opciones
    -   5 (Actor): Selecciona opcion de ver resumen
    -   6 (Sistema): Muestra total de dinero gastado y una lista con los productos y su fecha
-   **Curso alternativo:**
    -   5.1 (Actor) Si selecciona resumen de un mes pasado
    -   5.2 (Sistema) Descarga en formato PDF el resumen.
    -   6.1 (Sistema) Si no tiene ningun gasto muestra un mensaje en pantalla.

## Validación y verificación

## Reflexión
