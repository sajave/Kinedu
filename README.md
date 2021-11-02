# Kinedu challenge

## Para iniciar

- Para instalar ir al directorio `/kinedu-challenge` y ejecutar:

  ```
  npm install
  ```

- Una vez finalizada la instalación ejecutar:
  ```
  npm start
  ```

# Funcionamiento

La estructura general de componentes es:

> Areas > MilestoneList > MilestoneCard > MilestoneStateButton

Al iniciar la app, lo primero que se hacen son 2 request a los endpoints brindados y las respuestas se almacenan en el store de Redux (de ahora en adelante no se realizan más request, solo se utiliza lo almacenado).

En el componente Area existe un estado local (selectedArea) controlado por el boton selector de áreas que se encarga de establecer qué props se le enviarán a los componentes hijos. Por ejemplo: Si se selecciona "Social & emocional", el estado local se cargara con los datos correspondientes y los componentes hijos recibirán por props esos datos para mostrarlos.

El componente MilestoneList realiza un .map de los milestones, genera un componente MilestoneCard por cada uno y le envia por props los detalles que contiene cada milestone. En caso de que el array recibido sea nulo, se muestra un spinner (es importado de la libreria "react-spinners")

El componente MilestoneCard recibe los detalles de cada milestone y se encarga de mostrar el título, el rango de edad y el componente MilestoneStateButton.

El componente MilestoneStateButton recibe por props el id del milestone al que pertenece y la respuesta que contiene. Según lo que vi de los endpoints:

> null = Not answered\
> 'yes' = Completed\
> 'no' = Uncompleted

Una vez que se clickea el botón, se realiza un dispatch para actualizar el "answer" del milestone y a su vez se setea el estilo correspondiente.
Esta actualización se va a ver reflejada en el componente Area, el cual va a re-renderizar y actualizar los estados de los botones.

Al almacenar y actualizar en el store de Redux, se puede hacer toggle entre areas y las respuestas van a quedar "guardadas" para visualización y posterior envio al backend.

## Consideraciones

- Tuve conflictos con los endpoints originales por problemas de CORS. Si bien intenté resolverlo preferí continuar con los endpoints de emergencia para evitar perder tiempo.
- La fuente utilizada no es la que se especificaba en el link de figma debido a que encontré que es paga, en su reemplazo busqué la más similar posible y gratuita en google fonts.
- Por cuestiones de tiempo y para priorizar tareas, el diseño mobile no está terminado, sin embargo el diseño no se "rompe" y es bastante responsive.
