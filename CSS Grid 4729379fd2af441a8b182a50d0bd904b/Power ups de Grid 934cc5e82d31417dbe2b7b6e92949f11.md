# Power ups de Grid

# ****Funciones especiales****

- minmax: ayuda a declarar el tamaño mínimo y máximo para el ancho y alto de una celda, sin depender del contenido que tengamos en ella
- repeat : se usa cuando todas las columnas o filas tienen el mismo ancho y evitar repetir el tamaño de las columnas

```css
grid-template-columns: minmax(30px, 300px) 200px minmax(60px, 150px);
grid-template-rows: repeat(3, auto);
```

![Untitled](Power%20ups%20de%20Grid%20934cc5e82d31417dbe2b7b6e92949f11/Untitled.png)

# **KEYWORDS ESPECIALES**

- fr : Es una unidad de medida especial de css grid para darle ancho o alto a filas y columnas 1fr representa una fracción del total de columnas o filas.
- min-content : Ajusta el ancho de la celda lo mínimo posible sin romper su contenido.
- max-content : Ajusta el ancho de la celda lo máximo posible para mostrar su contenido.
- auto-fill : Agrega columnas “fantasma” que rellenan el espacio sobrante del contenedor.
- auto-fit : Ensancha las columnas para que ocupen todo el espacio del contenedor.

**auto-fill y auto-fit** ayudan a la grilla a ocupar el 100% del espacio disponible.

```css
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
```