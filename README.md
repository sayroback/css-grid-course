# CSS Grid

# ¿Qué es CSS Grid Layout?

Es una especificación de CSS por la necesidad de hacer layouts más dinámicos. Introdujo un sistema de grillas con columnas (column) y filas (row), usamos esos dos ejes y espacios para ubicar elementos.

## \***\*Conceptos para comenzar\*\***

- Container: elemento que se convertirá en una grilla.
- Item: Son los elementos que están en el contenedor y se convierten en Grid Item pueden ser (botones, links, imágenes y videos).

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled.png)

- Líneas : Son los elementos que dividen las filas y columnas de una Grilla. Se enumeran de arriba a abajo y de izquierda a derecha.

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%201.png)

- Celda: Es la unidad mínima que tenemos en una Grilla, esta delimitada por 4 lines, ocupa 1 columna y 1 Fila.
- Track: Los track son un grupo de celdas que están en una misma fila o una misma columna.
- Area: Pueden usar varias filas o varias columnas al mismo tiempo.

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%202.png)

## \***\*Propiedades del contenedor\*\***

- Display grid: para decirle al contenedor que tenga esa propiedad y así aplicarle estilos de grid

```css
display: grid;
```

- Grid-template-columns: define cuantas y de qué tamaño son columnas.

```css
grid-template-columns: 100px 200px 300px;
```

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%203.png)

- Grid-template-rows: define cuantas y de qué tamaño son las filas.

```css
grid-template-rows: 150px 250px;
```

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%204.png)

- grid-auto-rows/columns: define el tamaño que indiquemos para todas las columnas o filas.

```css
grid-auto-rows: 150px;
```

- grid-auto-flow: controla cómo funciona el algoritmo de colocación automática, especificando exactamente cómo los elementos colocados automáticamente fluyen hacia la cuadrícula.

```css
grid-auto-flow: row; column; row dense;
```

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%205.png)

column/row-gap: define el espacio entre columnas o filas.

grap: define espacio tanto para filas como para columnas.

```css
row-gap: 15px;
column-grap: 15px;
grap: 15px;
```

## \***\*Propiedades de alineación\*\***

> Propiedades para la alineación de los items (elementos):

- Justify-items
- Align-items
- Place-items

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%206.png)

```css
justify-items: center;
align-items: center;
```

> Propiedades para la alineación del container:

- Justify-content
- Align-content
- Place-content

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%207.png)

```css
justify-content: center;
align-content: center;
```

> Propiedades para la alineación de un solo item individual

- Justify-self
- Align-self
- Place-self

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%208.png)

```css
justify-self: end;
```

## \***\*Propiedades de ubicación\*\***

Podemos modificar el espacio que utiliza una celda y su posición secuencial.

![Untitled](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Untitled%209.png)

Grid-area: nos permite definir en una sola lineá donde comienza y termina tanto en columnas como en filas. También podemos darle nombre a las zonas con esta propiedad.

[**Power ups de Grid**](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Power%20ups%20de%20Grid%20934cc5e82d31417dbe2b7b6e92949f11.md)

[Proyecto](CSS%20Grid%204729379fd2af441a8b182a50d0bd904b/Proyecto%20c365899da3a84aa28e3359a45cbae4f1.md)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
