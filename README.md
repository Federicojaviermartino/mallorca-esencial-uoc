# Mallorca Esencial

Sitio web de una sola pagina dedicado a tres destinos imprescindibles de Mallorca: **Valldemossa**, **Soller** y **Palma de Mallorca**, conectados por la Serra de Tramuntana (Patrimonio de la Humanidad, UNESCO).

Proyecto desarrollado para la asignatura Herramientas HTML y CSS II de la Universitat Oberta de Catalunya (UOC).

## Demo

<https://mallorca-esencial-uoc.netlify.app/>

## Contenido de la pagina

- Navegacion fija con menu responsive
- Hero a pantalla completa
- Seccion descriptiva del destino
- Tarjetas de puntos destacados (Real Cartuja, Tranvia de Soller, Catedral de La Seu...)
- Galeria de imagenes con efecto hover
- Seccion "Como llegar" con pasos visuales
- Mapa interactivo con Leaflet y cinco marcadores geolocalizados
- Consejos practicos para la visita

## Tecnologias y dependencias

| Tecnologia | Uso |
| --- | --- |
| [Parcel](https://parceljs.org/) | Module bundler |
| [Sass/SCSS](https://sass-lang.com/) | Preprocesador de estilos |
| [Stylelint](https://stylelint.io/) | Validacion de hojas de estilos |
| [FontAwesome](https://fontawesome.com/) | Iconografia |
| [Leaflet](https://leafletjs.com/) | Mapa interactivo |
| [Fontsource](https://fontsource.org/) | Fuentes locales (Playfair Display, Source Sans Pro) |
| [PostHTML Include](https://github.com/posthtml/posthtml-include) | Parciales HTML |

## Metodologia

- **BEM** (Block, Element, Modifier) para la nomenclatura de clases CSS
- **Code Guide (@mdo)** para el orden de propiedades, aplicado con `stylelint-config-recess-order`
- Enfoque **mobile first** con cuatro breakpoints (576px, 768px, 992px, 1200px)

## Caracteristicas de Sass

- Variables (`_variables.scss`): paleta de colores, tipografia, espaciado, breakpoints, sombras y transiciones
- Anidado con operador `&` siguiendo BEM
- Funciones personalizadas: `to-rem()`, `overlay-color()`, `text-contrast()`
- Parciales: `_variables`, `_mixins`, `_dependencies`, `layouts/_home`
- Importacion con `@use` (namespaces) y `@import` (dependencias npm)
- Mixins: `respond-to()`, `container()`, `section-padding()`, `hover-lift()`, `heading()`, `sr-only()`

## Requisitos

[Node.js](http://nodejs.org/) >= 18.x

## Instalacion

```bash
git clone https://github.com/Federicojaviermartino/mallorca-esencial-uoc.git
cd mallorca-esencial-uoc
npm install
```

## Comandos

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:8123` con recarga en vivo |
| `npm run build` | Valida estilos con Stylelint, compila y optimiza para produccion en `dist/` |
| `npm run clean` | Elimina la carpeta `dist/` y las carpetas de cache |
| `npm run stylelint` | Ejecuta la validacion de Stylelint sobre los archivos SCSS |

## Estructura del proyecto

```text
src/
  index.html              # Pagina principal
  views/
    footer.html           # Parcial del footer (posthtml-include)
  assets/
    styles/
      main.scss           # Punto de entrada de estilos
      _variables.scss     # Variables Sass
      _mixins.scss        # Funciones y mixins
      _dependencies.scss  # Imports de dependencias npm
      layouts/
        _home.scss        # Estilos de la pagina
    scripts/
      main.js             # Mapa Leaflet, menu mobile, smooth scroll
    images/               # Imagenes del proyecto
```
