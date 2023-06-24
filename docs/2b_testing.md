# Informe de testing 
Proyecto asignado: [link](https://github.com/ORT-FIS-2023S1/obligatorio-techera-campopiano-franceschini/tree/main)

## Test de sistema
## Reporte de Issues
  #### Problemas de Funcionalidad
  - **Issue 1:** No hay validación al agregar un plato ya existente.
    **Severidad:** Moderado

  - **Issue 2:** No se puede agregar mas de una unidad por orden.
  **Severidad:** Baja

  - **Issue 3:** No hay validación al agregar un grupo que ya existente.
    **Severidad:** Moderado
  
  #### Problemas de usabilidad
  - **Issue 4:** Botón en realizar pedido no es visible por el pie de página.
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
  
    **Resultado esperado:**
    - El sistema debe mostrar un mensaje de error o advertencia indicando que el plato ya existe en el sistema y no se puede agregar nuevamente.

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
   
## Informe de calidad del sistema

## Reflexión