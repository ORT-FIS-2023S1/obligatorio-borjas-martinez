# Informe de testing 
Proyecto asignado: [link](https://github.com/ORT-FIS-2023S1/obligatorio-techera-campopiano-franceschini/tree/main)

## Test de sistema
## Reporte de Issues
  #### Problemas de Funcionalidad
  - **Issue 1:** No hay validación al agregar un plato ya existente.
    **Severidad:** Moderado

  - **Issue 2:** No se puede agregar mas de una unidad al Registrar un Pedido.
  **Severidad:** Baja

  - **Issue 3:** No se puede agregar platos diferentes en un mismo pedido al Registrar un Pedido.
  **Severidad:** Baja

  - **Issue 4:** No hay validación al agregar un grupo que ya existente.
    **Severidad:** Moderado
  
  #### Problemas de usabilidad
  - **Issue 5:** Botón en realizar pedido no es visible por el pie de página.
  **Severidad:** Importante

  #### Casos de prueba generados:

  - Caso de Prueba 1: **Issue 1:** No hay validación al agregar un plato ya existente.
  
    **Descripción:**
    Verificar si el sistema valida adecuadamente la adición de un nuevo plato, evitando agregar un plato que ya existe en el sistema.

    **Pasos:**
    1. Ingresar a la aplicación en Google Chrome versión 114.0.5735.133.
    2. Iniciar sesión con credenciales válidas de administrador.
    3. Navegar a la sección de "Administrar menús".
    4. Hacer clic en el botón "Agregar plato al menú".
    5. Agregar un nuevo plato con los siguientes datos:
        - Nombre del Plato: "Espaguetis con salsa de tomate"
        - Precio del Plato: "100"
        - Ingredientes principales: "Pasta, salsa de tomate, queso rallado"
        - Tamaño de la porción: "1"
        - Información Nutricional: "Calorías: 400, Carbohidratos: 50 g, Proteínas: 15 g, Grasas: 10 g"
        - URL de la Imagen: "https://ejemplo.com/imagen"
    6. Guardar el plato y confirmar que se ha agregado correctamente.
    7. Intentar agregar nuevamente un plato con los mismos datos especificados en el paso 4.
    8. Observar el comportamiento del sistema.

    **Resultado obtenido:**
    - El sistema permite agregar un plato al menú semanal sin validar si ese plato ya existe previamente. Por lo tanto, se permite la duplicación de platos en el menú semanal sin mostrar ningún mensaje de error.
  
    **Resultado esperado:**
    - El sistema debe validar si el plato que se está agregando ya existe en el sistema y no permitir su duplicación. Se espera que se muestre un mensaje de error indicando que el plato ya existe y se impida la duplicación en el menú semanal.

    **Datos de prueba:**
    - Nombre del Plato: "Espaguetis con salsa de tomate"
    - Precio del Plato: "100"
    - Ingredientes principales: "Pasta, salsa de tomate, queso rallado"
    - Tamaño de la porción: "1"
    - Información Nutricional: "Calorías: 400, Carbohidratos: 50 g, Proteínas: 15 g, Grasas: 10 g"
    - URL de la Imagen: "https://ejemplo.com/imagen"

    **Entorno de prueba:**
    - Sistema Operativo: Windows 11
    - Navegador: Google Chrome Versión 114.0.5735.133 (Official Build) (64-bit)

    **Observaciones:**
      - Al agregar un nuevo plato que contiene el mismo nombre y los mismos datos que uno existente, el sistema no debe permitir su adición y mostrar un mensaje de error o advertencia correspondiente.
      - Se debe verificar que el sistema realiza una validación adecuada al agregar un nuevo plato para evitar duplicados en la base de datos del sistema.
      - Se recomienda que el campo “Tamaño de la porción” sea una selección de opciones descriptivas (por ejemplo, “Chica”, “Mediana”, “Grande”) en lugar de permitir cualquier número. Esto puede mejorar la usabilidad y la claridad de los datos ingresados.
    ---
  

  - Caso de Prueba 2: **Issue 2:** No se puede agregar mas de una unidad al Registrar un Pedido.
  
    **Descripción:**
    Verificar si el sistema permite agregar más de una unidad del mismo plato al realizar el registro de un pedido.
    
    **Pasos:**
    1. Ingresar a la aplicación en Google Chrome versión 114.0.5735.133.
    2. Iniciar sesión con credenciales válidas de administrador.
    3. Navegar a la sección de "Administrar pedidos".
    4. Hacer clic en el botón "Registrar Pedido".
    5. Realizar un nuevo pedido con los siguientes datos:
        - Nombre y Apellido del Comensal: "Juan Pérez"
        - Menú Deseado: "Café con leche"
        - Información Adicional: "Café sin azúcar"
    7. Agregar pedido y confirmar que se ha agregado correctamente.

    **Resultado obtenido:**
    - La interfaz del sistema no proporciona una opción para agregar más de una unidad del mismo plato en la misma orden al registrar un pedido. No se muestra ninguna funcionalidad para especificar la cantidad deseada del plato.
  
    **Resultado esperado:**
    - La interfaz del sistema debe proporcionar una opción para agregar más de una unidad del mismo plato en la misma orden al realizar el registro de un pedido. Se espera que el usuario pueda especificar la cantidad deseada del plato en el pedido y que esta información se refleje correctamente en la orden.

    **Datos de prueba:**
    - Nombre y Apellido del Comensal: "Juan Pérez"
    - Menú Deseado: "Café con leche"
    - Información Adicional: "Café sin azúcar"

    **Entorno de prueba:**
    - Sistema Operativo: Windows 11
    - Navegador: Google Chrome Versión 114.0.5735.133 (Official Build) (64-bit)

    **Observaciones:**
      - Actualmente, la interfaz del sistema no proporciona una opción para agregar más de una unidad del mismo plato en la misma orden al realizar el registro de un pedido. Este inconveniente limita la flexibilidad del usuario al no permitirle especificar la cantidad deseada de un plato.
      - Esta limitación afecta la usabilidad del sistema, ya que obliga al usuario a realizar múltiples pedidos si desea solicitar varias unidades del mismo plato. Esto resulta incómodo y puede generar confusión al gestionar las diferentes órdenes.
    ---

  - Caso de Prueba 3: **Issue 3:** No se puede agregar platos diferentes en un mismo pedido al Registrar un Pedido.
  
    **Descripción:**
    Verificar si el sistema permite agregar otros platos diferentes en un mismo pedido al realizar el registro de un pedido.
    
    **Pasos:**
    1. Ingresar a la aplicación en Google Chrome versión 114.0.5735.133.
    2. Iniciar sesión con credenciales válidas de administrador.
    3. Navegar a la sección de "Administrar pedidos".
    4. Hacer clic en el botón "Registrar Pedido".
    5. Realizar un nuevo pedido con los siguientes datos:
        - Nombre y Apellido del Comensal: "Juan Pérez"
        - Menú Deseado: "Café con leche"
        - Información Adicional: "Café sin azúcar"
    7. Agregar pedido y confirmar que se ha agregado correctamente.

    **Resultado obtenido:**
    - La interfaz del sistema no ofrece la opción de agregar otros platos diferentes en la misma orden al registrar un pedido. Solo permite seleccionar un único plato para cada pedido y no se proporciona una forma de añadir platos adicionales.
  
    **Resultado esperado:**
    - La interfaz del sistema debe permitir agregar otros platos diferentes en un mismo pedido al realizar el registro de un pedido. Se espera que el usuario pueda seleccionar y agregar varios platos diferentes en una sola orden, lo que facilitará la combinación de opciones de menú y evitará la necesidad de realizar pedidos separados para cada plato.

    **Datos de prueba:**
    - Nombre y Apellido del Comensal: "Juan Pérez"
    - Menú Deseado: "Café con leche"
    - Información Adicional: "Café sin azúcar"

    **Entorno de prueba:**
    - Sistema Operativo: Windows 11
    - Navegador: Google Chrome Versión 114.0.5735.133 (Official Build) (64-bit)

    **Observaciones:**
      - La interfaz del sistema no ofrece la opción de agregar otros platos diferentes en la misma orden al realizar el registro de un pedido. Esta restricción impide al usuario combinar varios platos en un solo pedido, lo cual es una limitación significativa en términos de usabilidad y conveniencia.
      - Al no poder agregar diferentes platos en una misma orden, los usuarios se ven obligados a realizar pedidos separados para cada plato, lo que puede resultar confuso y poco eficiente, especialmente cuando desean solicitar una variedad de opciones de menú.
    ---

  - Caso de Prueba 4: **Issue 4:** No hay validación al agregar un grupo que ya existente.
  
    **Descripción:**
    Verificar si el sistema valida adecuadamente la duplicación de grupos al intentar agregar un grupo que ya existe durante la creación de un nuevo grupo de comensales.
    
    **Pasos:**
    1. Ingresar a la aplicación en Google Chrome versión 114.0.5735.133.
    2. Iniciar sesión con credenciales válidas de administrador.
    3. Navegar a la sección de "Administrar Grupos".
    4. Hacer clic en el botón "Registrar Nuevo Grupo".
    5. Realizar el registro de un nuevo grupo con los datos:
      - Nombre del grupo: "Grupo 1" (un grupo que ya existe en el sistema)
      - Descripción del grupo: "Este es el grupo 1"
      - Miembros del grupo: Juan Pérez, María González, Carlos López
    7. Crear grupo y confirmar que se ha agregado correctamente.

    **Resultado obtenido:**
    - El sistema permite agregar un grupo sin validar si el nombre del grupo ya existe previamente en el sistema. Esto resulta en la creación de grupos duplicados con el mismo nombre y los mismos miembros.
  
    **Resultado esperado:**
    - El sistema debe validar si el nombre del grupo ingresado ya existe en el sistema y mostrar un mensaje de error indicando que el grupo ya está registrado. No se debe permitir la duplicación de grupos en el sistema.

    **Datos de prueba:**
      - Nombre del grupo: "Grupo 1" (un grupo que ya existe en el sistema)
      - Descripción del grupo: "Este es el grupo 1"
      - Miembros del grupo: Juan Pérez, María González, Carlos López

    **Entorno de prueba:**
    - Sistema Operativo: Windows 11
    - Navegador: Google Chrome Versión 114.0.5735.133 (Official Build) (64-bit)

    **Observaciones:**
      - La falta de validación al agregar un grupo que ya existe puede tener un impacto negativo en la usabilidad del sistema. Al permitir la creación de grupos duplicados, se genera confusión y dificulta la gestión de los grupos, especialmente cuando se tienen dos grupos con el mismo nombre y los mismos miembros.
      - La repetición de grupos con el mismo nombre y los mismos usuarios puede dificultar la identificación y selección adecuada de los grupos durante el proceso de asignación de comensales.
      - Esta situación puede llevar a errores en la asignación de comensales a grupos específicos y dificultar la administración y organización de los datos de los comensales.
    ---

  #### Problemas de usabilidad
  - Casos de Prueba 5: **Issue 5:** Botón en realizar pedido no es visible por el pie de página.
  
    **Descripción:**
    Verificar si el sistema permita 
    
    **Pasos:**
    1. Ingresar a la aplicación en Google Chrome versión 114.0.5735.133.
    2. Iniciar sesión con credenciales válidas de administrador.
    3. En la pagina de inicio identificar un pedido en la lista de pedidos realizados.
    4. Hacer clic en el botón de procesar el pedido correspondiente al pedido seleccionado.
    5. Verificar si se muestra el modal de confirmación "¿Deseas procesar el pedido?".

    **Resultado obtenido:**
    - El botón "Realizar pedido" no es visible debido a la obstrucción causada por el pie de página. Como resultado, los usuarios no pueden visualizar ni acceder al botón, lo que impide que puedan continuar con el proceso de pedido.
  
    **Resultado esperado:**
    - El botón "Realizar pedido" debe ser claramente visible y accesible en el modal de confirmación, sin estar oculto o dificultado por el pie de página. Esto permitirá que se puedan procesar los pedidos de manera adecuada y sin obstáculos en la usabilidad.

    **Datos de prueba:**
      - Nombre del grupo: "Grupo 1" (un grupo que ya existe en el sistema)
      - Descripción del grupo: "Este es el grupo 1"
      - Miembros del grupo: Juan Pérez, María González, Carlos López

    **Entorno de prueba:**
    - Sistema Operativo: Windows 11
    - Navegador: Google Chrome Versión 114.0.5735.133 (Official Build) (64-bit)

    **Observaciones:**
     - La falta de visibilidad del botón "Realizar pedido" debido al pie de página impide que los usuarios puedan avanzar y completar el proceso de pedido de manera efectiva.
    - Esta situación crea una barrera en la usabilidad del sistema, ya que los usuarios no pueden continuar con el pedido debido a la inaccesibilidad del botón.
    - Es necesario abordar este problema para garantizar que el botón "Realizar pedido" sea claramente visible y accesible, sin ser obstruido por el pie de página. Esto permitirá a los usuarios continuar con el proceso de pedido sin dificultades y mejorar la experiencia de usuario.
    ---

  #### Sesiones de Testing exploratorio
<table>
  <tr>
    <td><b>Fecha:</b></td>
    <td>24/6/2023</td>
  </tr>
  <tr>
    <td><b>Tester:</b></td>
    <td>Sebastian Borjas</td>
  </tr>
  <tr>
    <td><b>Misión:</b></td>
    <td>Probar flujo completo de realizar pedido
    </td>
  </tr>
  <tr>
    <td><b>Duración:</b></td>
    <td>20 minutos</td>
  </tr>
  <tr>
    <td><b>Estructura de División:</b></td>
    <td> Diseño y ejecución de pruebas: 10 %. Investigación y reporte de defectos 85 %. Armado de la sesión 5 %. Objetivo vs Oportunidad 90 / 10</td>
  </tr>
  <tr>
    <td><b>Notas de prueba:</b></td>
    <td> - Verificación del correcto funcionamiento de los campos en agregar orden.<br>
    - Verificación del funcionamiento del botón agregar pedido. <br>
    - Verificación del funcionamiento de los botones del menu lateral. <br>
    - Verificación de que el pedido se procese correctamente  </td>
  </tr>
  <tr>
    <td><b>Incidentes:</b></td>
    <td> - Se encontró que no se puede acceder botón de procesar pedido en el inicio con el puntero del mouse debido a que el pie de pagina o footer lo tapa. Para lograr realizarlo se tuvo que presionar la tecla enter.<br>
    - No se puede seleccionar cantidad, es decir por ejemplo si se quieren pedir 2 donuts hay que hacer el pedido dos veces. </td>
  </tr>
  <tr>
    <td><b>Inconvenientes:</b></td>
    <td> - Para la preparación de la sesión no se especifica cuales son los usuarios administradores precargados y se tuvo que investigar en el código de la aplicación.<br>
    -No hay un botón de inicio en la menu lateral que permita ver los pedidos realizados, se pudo acceder a inicio tras hacer click en el logo. </td>
  </tr>
</table>

---

<table>
  <tr>
    <td><b>Fecha:</b></td>
    <td>24/6/2023</td>
  </tr>
  <tr>
    <td><b>Tester:</b></td>
    <td>Agustina Martinez</td>
  </tr>
  <tr>
    <td><b>Misión:</b></td>
    <td>Probar flujo completo de agregar grupos y comensales. <br>
    </td>
  </tr>
  <tr>
    <td><b>Duración:</b></td>
    <td>35 minutos</td>
  </tr>
  <tr>
    <td><b>Estructura de División:</b></td>
    <td> Diseño y ejecución de pruebas: 10 %. Investigación y reporte de defectos 85 %. Armado de la sesión 5 %. Objetivo vs Oportunidad 70 / 30</td>
  </tr>
  <tr>
    <td><b>Notas de prueba:</b></td>
    <td>
    - Verificación del correcto funcionamiento al registar un nuevo comensal. <br>
    - Verificación del correcto funcionamiento al registar un nuevo grupo. <br>
    - Verificación del correcto funcionamiento al registar nuevos platos
    - Verificación del correcto funcionamiento al eliminar un grupo.
    </td>
  </tr>
  <tr>
    <td><b>Incidentes:</b></td>
    <td>- Se encontro que no se puede agregar platos diferentes en los pedidos, por lo que para pedir mas de un plato hay que tener varias ordenes creadas. <br>
    - Se permite agregar un plato al menú semanal sin validar si ese plato ya existe previamente, por lo que se puede tener varios platos duplicados.<br>
    - Se permite agregar un grupo que ya existe previamente en el sistema. Esto resulta en la creación de grupos duplicados con el mismo nombre y los mismos miembros
    </td>
  </tr>
    <tr>
    <td><b>Inconvenientes:</b></td>
    <td>
    <strong>Al loggearse con las credenciales de usuario:</strong><br>
    - Se observó que al hacer clic en el botón "Agregar al carrito" en la vista del menú semanal, se produce una redirección a una página 404 en lugar de agregar el producto al carrito. Sería recomendable mostrar un mensaje informativo indicando que la funcionalidad no está disponible actualmente o simplemente desactivar el botón para evitar confusiones y redirecciones incorrectas. <br>
   - Al intentar volver al inicio después de encontrarse en la página 404, se experimenta un comportamiento inadecuado donde el usuario es deslogueado de su sesión actual. Sería preferible que el usuario permanezca logueado al intentar volver al inicio desde una página inexistente.Esto interrumpe la continuidad de la experiencia del usuario <br>
    </td>
  </tr>
</table>
   
## Informe de calidad del sistema

## Reflexión

