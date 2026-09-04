# Luvee

Luvee es una experiencia web interactiva para explorar videojuegos, editoriales y planes de suscripción desde una interfaz visual inspirada en la cultura gaming.

## Características

- Landing page responsive con navegación fija.
- Hero principal con video y animación visual.
- Sección informativa con tarjetas luminosas.
- Explorador de videojuegos organizado por editorial.
- Editoriales disponibles: Nintendo, PlayStation, Xbox, EA Sports y Konami.
- Sección de planes de suscripción seleccionables.
- Diseño adaptable para dispositivos móviles y escritorio.

## Tecnologías

- React 19
- Vite
- Tailwind CSS
- Lightswind
- Framer Motion
- Lucide React
- ESLint

## Requisitos previos

Antes de instalar el proyecto necesitas tener instalado:

- [Node.js](https://nodejs.org/) versión 18 o superior.
- npm, incluido normalmente con Node.js.
- Git, si vas a clonar el repositorio.

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
```

## Instalación local

1. Clona el repositorio:

```bash
git clone git clone https://github.com/devmattiel20/Luvee.git
```

2. Entra en la carpeta del proyecto:

```bash
cd Luvee
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre en el navegador la URL que muestra Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con Vite. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Sirve localmente la versión generada en `dist`. |
| `npm run lint` | Comprueba el código con ESLint. |

## Compilar para producción

Para crear una versión lista para desplegar:

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

Para probar esa compilación localmente:

```bash
npm run preview
```

## Estructura principal

```text
Luvee/
├── public/                 # Archivos públicos, si existen
├── src/
│   ├── components/         # Componentes de la interfaz
│   ├── components/data/    # Datos de editoriales y videojuegos
│   ├── components/lightswind/ # Componentes visuales reutilizables
│   ├── images/             # Imágenes y video del proyecto
│   ├── lib/                # Utilidades compartidas
│   ├── App.jsx             # Composición principal de la aplicación
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Desarrollo

Los datos de las editoriales y videojuegos se encuentran en:

```text
src/components/data/games.js
```

Los componentes principales de la página están en:

```text
src/components/
```

## Estado del proyecto

Este proyecto se encuentra en desarrollo. Las imágenes, el video y otros recursos visuales utilizados pertenecen a los archivos incluidos en el repositorio.
