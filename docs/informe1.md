# Informe entrega 1

## Repositorio Git

#### Manejo de los repositrios locales y remotos

Vamos a utlizar la rama main como rama estable en la cuál vamos a depositar todo el código y funcionalidades desarrolladas.
También utilizaremos una rama docs en la cuál pondremos toda la documentación correspondiente. Cada feature que vayamos a desarrollar tendrá su rama correspondiente para el orden y legibilidad del proyecto.

#### Mensajes de commits convencionales

Los commits van a seguir el siguiente formato:

<pre>
<b><a>&lt;tipo&gt;</a></b></font>(<b><a>&lt;alcance&gt;</a></b>): <b><a>&lt;asunto&gt;</a></b>
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

Para mantener buenas practicas a lo largo de todo el proyecto, haremos uso de todo lo mencionado en el punto anterior. Cabe enmarcar que cada rama que creemos para una nueva feature llevará en su nombre una breve referencia para poder identificar que es lo que hace o a que parte del codigo hace referencia. Por ejemplo `feature/historial_pedidos` o `hotfix/listado_menu`.

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

## Especificación

## Validación y verificación

## Reflexión
