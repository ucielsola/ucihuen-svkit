# Cabañas Ucihuen - Documentación para LLMs

**Cabañas Ucihuen** es un negocio de alquiler de cabañas ubicado en Lago Puelo, Chubut, Argentina. El sitio web en producción está disponible en [https://ucihuen.com.ar](https://ucihuen.com.ar).

## Descripción del Negocio

Cabañas Ucihuen ofrece alquiler de cabañas de montaña en la Patagonia Argentina, ubicadas a solo dos cuadras del centro de la Villa Turística Lago Puelo y a menos de 3 km del Parque Nacional Lago Puelo. El negocio cuenta con dos cabañas:

- **Cabaña para 7 personas**: Dos plantas, 2 habitaciones, living-comedor, cocina, baño
- **Cabaña para 4 personas**: Una planta, 1 habitación, cocina-comedor, living con futones, baño

### Ubicación

- **Villa**: Lago Puelo, Chubut, Patagonia Argentina
- **Distancias**: 2 cuadras del centro, 3 km del Parque Nacional Lago Puelo
- **Cercanos**: Lago Puelo, Río Azul, El Bolsón, Parque Nacional

### Comodidades Incluidas

- Ropa de cama y toallas
- Vajilla completa
- WiFi fibra óptica 200 Mb
- TV por streaming
- Estacionamiento con sombra
- Parrilla individual
- Calefacción (estufas)
- Agua caliente 24hs
- Desayuno de bienvenida (café, té, mate cocido, azúcar, dulce casero)
- Apto para mascotas
- Secador de pelo
- Botiquín de primeros auxilios
- Almohadas y frazadas extra

### Canales de Reserva

- **WhatsApp**: https://wa.link/hfh2e3
- **Airbnb**: https://www.airbnb.com.ar/rooms/1320462855669343724
- **Booking.com**: https://www.booking.com/hotel/ar/cabana-ucihuen.es-ar.html
- **Teléfono**: +54 9 11 3158-6242

## Stack Tecnológico

- **Framework**: SvelteKit 2 con Svelte 5 (runes: `$state`, `$derived`, `$effect`, `$props`, `{@render}`)
- **Bundler**: Vite 6
- **Deployment**: Vercel (`@sveltejs/adapter-vercel`)
- **i18n**: Paraglide JS v2 (`@inlang/paraglide-js`)
- **Carousels**: Swiper 7
- **Modals**: svelte-modals
- **CDN Imágenes**: ImageKit (ik.imagekit.io/ucihuen/)
- **Maps**: Google Maps embed (API key pública)
- **Analytics**: Google Analytics (gtag)
- **APIs Externas**:
  - Google Places API (reviews)
  - ImageKit API (listado de imágenes)
  - OpenWeatherMap (clima)

## Estructura del Proyecto

```
src/
├── routes/
│   ├── +page.svelte           # Home (página principal)
│   ├── +page.server.js        # Server: fetch reviews + weather
│   ├── galeria/+page.svelte    # Galería de fotos
│   ├── galeria/+page.server.js# Server: fetch imágenes ImageKit
│   ├── paseos/+page.svelte    # Paseos recomendados
│   ├── sitemap.xml/+server.js # Generador de sitemap XML
│   └── +layout.svelte         # Layout global
├── lib/
│   ├── components/            # Componentes Svelte
│   ├── services/              # Servicios API (reviews, weather)
│   ├── data/                  # Datos estáticos
│   ├── imagekit.js            # Utilidades ImageKit
│   ├── utils/                 # Utilidades varios
│   ├── config.js              # Configuración URLs y contactos
│   └── paraglide/             # Código i18n autogenerado (gitignore)
├── hooks.js                   # Rerouting de locales (deLocalizeUrl)
└── hooks.server.js            # Paraglide middleware
messages/
├── es.json                    # Mensajes en español (idioma base)
├── en.json                    # Mensajes en inglés
└── pt.json                    # Mensajes en portugués
static/
├── icons/                     # SVG flags (ar.svg, uk.svg)
└── global.css                 # CSS global + custom properties
```

## Rutas del Sitio

| Ruta          | Descripción                                |
| ------------- | ------------------------------------------ |
| `/`           | Página principal (home)                    |
| `/en/`        | Home en inglés                             |
| `/pt/`        | Home en portugués                          |
| `/galeria`    | Galería de fotos (interiores y exteriores) |
| `/en/galeria` | Galería en inglés                          |
| `/pt/galeria` | Galería en portugués                       |
| `/paseos`     | Paseos recomendados en la zona             |
| `/en/paseos`  | Paseos en inglés                           |
| `/pt/paseos`  | Paseos en portugués                        |

## Estrategia i18n (Internacionalización)

El sitio utiliza **URL-based locale strategy** con Paraglide JS v2:

- **Idioma base (defecto)**: Español (`/` sin prefijo)
- **Idiomas soportados**: Español (es), Inglés (en), Portugués (pt)
- **Configuración**: `project.inlang/settings.json`
- **Mensajes**: `messages/{es,en,pt}.json`

### Uso en Código

```javascript
import * as m from '$lib/paraglide/messages.js';

// Sin parámetros
m.nav_home(); // "Inicio"

// Con parámetros
m.alt_exterior_photo({ n: 5 }); // "Exterior de Cabañas Ucihuen - foto 5"
```

### Links Internos

```javascript
import { localizeHref } from '$lib/paraglide/internal.js';
import { deLocalizeUrl } from '$lib/paraglide/internal.js';

// Para hrefs
<a href={localizeHref('/galeria')}>

// Para matching de rutas agnóstico de locale
deLocalizeUrl(page.url).pathname  // "/galeria" sin importar el idioma
```

### Cambio de Idioma

El componente `LangToggle` usa `data-sveltekit-reload` para recarga completa de página al cambiar idioma, asegurando que se aplique el locale correcto desde el servidor.

## APIs y Servicios

### Google Places API

Utilizada para obtener reviews de Google Maps del negocio. El servicio (`src/lib/services/reviews.js`) hace lo siguiente:

1. Fetch reviews desde Google Places API usando `PRIVATE_GOOGLE_API_KEY` y `PUBLIC_GOOGLE_PLACE_ID`
2. Merge con reviews locales (`src/lib/data/reviews.min.json`)
3. Filtra a reviews de 4+ estrellas con texto
4. Retorna reviews ordenadas (prioriza Google, fallback a locales en caso de error)

### ImageKit API

Utilizada para listar imágenes alojadas en CDN:

- **Endpoint**: `https://api.imagekit.io/v1/files/`
- **Uso**: Server-side en `src/routes/galeria/+page.server.js`
- **Fallback**: Lista de paths hardcodeados si API falla
- **Utilidades**: `src/lib/imagekit.js` (constructores de URLs, srcset, LQIP)

### OpenWeatherMap API

Widget de clima para Lago Puelo:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Datos**: Temperatura, sensación térmica, condiciones climáticas
- **Key**: `PUBLIC_OPENWEATHERMAP_API_KEY`
- **Idioma**: Retorna datos en el idioma del locale actual

## Variables de Entorno

### Archivo: `.env`

```bash
# Google Places API (reviews)
PRIVATE_GOOGLE_API_KEY=xxx
PUBLIC_GOOGLE_PLACE_ID=ChIJVVRMDZnsG5YR8o8ztZR29ec

# Google Maps embed
PUBLIC_GOOGLE_API_KEY=xxx

# ImageKit (listado de imágenes)
PRIVATE_IMAGEKIT_KEY=xxx
PUBLIC_IMAGEKIT_KEY=xxx

# OpenWeatherMap (clima)
PUBLIC_OPENWEATHERMAP_API_KEY=xxx
```

**Importante**: Las variables `PRIVATE_*` nunca se exponen al cliente.

## Componentes Principales

### Layout

- **LangToggle**: Toggle de idioma (flags de Argentina/UK/Brasil)
- **Header**: Logo Ucihuen con tagline
- **Nav**: Navegación principal (Inicio, Galería, Paseos)
- **FabWhatsapp**: Botón flotante WhatsApp (scroll-aware, se oculta al hacer scroll hacia abajo)
- **Footer**: Links, redes sociales, créditos

### Pages

- **Home**: Secciones de ubicación, comodidades, cabañas, reviews, clima, mapa
- **Galería**: Carrusel Swiper con categorías (Cabaña 7, Cabaña 4, Exteriores)
- **Paseos**: Lista de excursiones recomendadas en la zona con tags, descripciones expandibles

## Estilos y CSS

- **Framework**: CSS puro (sin frameworks de CSS)
- **Custom Properties**: Definidas en `static/global.css`
  - Colores (primary, secondary, accent, etc.)
  - Fuentes (Ovo para logo, Open Sans body, Ruluko headings)
  - Sombras, bordes, z-index layers
- **Responsive**: Mobile-first, breakpoint en `@media (min-width: 1024px)` para desktop
- **LSP**: 100 chars de ancho
- **Indentación**: Tabs

## Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta Prettier + ESLint
npm run format   # Formatea con Prettier
```

## SEO y Sitemap

- **Sitemap**: Generado dinámicamente en `src/routes/sitemap.xml/+server.js`
- **Hreflang**: Links alternativos por idioma en sitemap
- **Meta tags**: Títulos, descripciones en cada idioma vía Paraglide messages
- **Imágenes**: Hosteadas en ImageKit CDN con alt text accesible

## Contenido No Traducido

Los siguientes elementos **NO** se traducen:

- Reviews (son generados por usuarios)
- Nombre de marca "Cabañas Ucihuen"
- Títulos de links externos
- Número de teléfono

## Excursiones Destacadas

El sitio incluye una página `/paseos` con 10 excursiones recomendadas:

1. Parque Nacional Lago Puelo (4 km)
2. Pasarela Río Azul (balneario natural)
3. Balneario Cayún
4. Feria Regional El Bolsón (martes, jueves, sábados, domingos)
5. Laberinto Patagonia (laberinto natural más grande de Sudamérica)
6. Centro Ski Perito Moreno (nieve invierno, trekking verano)
7. Puerto Patriada (Lago Epuyén)
8. Pasarela La Confluencia
9. Sendero Mirador del Lago (900 m, dificultad media)
10. Sendero Antiguos Pobladores (Patrimonio Histórico)

Cada excursión tiene tags (Naturaleza, Senderos, Balneario, Feria, Trekking, etc.) y descripciones expandibles.

## Contacto y Redes Sociales

- **WhatsApp Principal**: +54 9 11 3158-6242 (https://wa.link/hfh2e3)
- **Email**: (vía FormSubmit en el footer)
- **Redes Sociales**: Links en footer (Instagram, Facebook)
- **Dirección**: (mostrada en Google Maps embed)

---

---

# Cabañas Ucihuen - LLM Documentation

**Cabañas Ucihuen** is a cabin rental business located in Lago Puelo, Chubut, Argentina. The production website is available at [https://ucihuen.com.ar](https://ucihuen.com.ar).

## Business Description

Cabañas Ucihuen offers mountain cabin rentals in Argentine Patagonia, located just two blocks from the center of Lago Puelo Tourist Village and less than 3 km from Lago Puelo National Park. The business has two cabins:

- **Cabin for 7 guests**: Two floors, 2 bedrooms, living-dining room, kitchen, bathroom
- **Cabin for 4 guests**: Single floor, 1 bedroom, kitchen-dining room, living room with futons, bathroom

### Location

- **Town**: Lago Puelo, Chubut, Argentine Patagonia
- **Distances**: 2 blocks from town center, 3 km from Lago Puelo National Park
- **Nearby**: Lago Puelo, Río Azul, El Bolsón, National Park

### Included Amenities

- Bed linens and towels
- Full tableware
- 200 Mbps fiber optic WiFi
- Streaming TV
- Shaded parking
- Private barbecue grill
- Heating (stoves)
- 24-hour hot water
- Welcome breakfast kit (coffee, tea, yerba mate, sugar, homemade jam)
- Pet friendly
- Hair dryer
- First aid kit
- Extra pillows and blankets

### Booking Channels

- **WhatsApp**: https://wa.link/hfh2e3
- **Airbnb**: https://www.airbnb.com.ar/rooms/1320462855669343724
- **Booking.com**: https://www.booking.com/hotel/ar/cabana-ucihuen.es-ar.html
- **Phone**: +54 9 11 3158-6242

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5 (runes: `$state`, `$derived`, `$effect`, `$props`, `{@render}`)
- **Bundler**: Vite 6
- **Deployment**: Vercel (`@sveltejs/adapter-vercel`)
- **i18n**: Paraglide JS v2 (`@inlang/paraglide-js`)
- **Carousels**: Swiper 7
- **Modals**: svelte-modals
- **Image CDN**: ImageKit (ik.imagekit.io/ucihuen/)
- **Maps**: Google Maps embed (public API key)
- **Analytics**: Google Analytics (gtag)
- **External APIs**:
  - Google Places API (reviews)
  - ImageKit API (image listing)
  - OpenWeatherMap (weather)

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte           # Home (main page)
│   ├── +page.server.js        # Server: fetch reviews + weather
│   ├── galeria/+page.svelte    # Photo gallery
│   ├── galeria/+page.server.js# Server: fetch ImageKit images
│   ├── paseos/+page.svelte    # Recommended excursions
│   ├── sitemap.xml/+server.js # XML sitemap generator
│   └── +layout.svelte         # Global layout
├── lib/
│   ├── components/            # Svelte components
│   ├── services/              # API services (reviews, weather)
│   ├── data/                  # Static data
│   ├── imagekit.js            # ImageKit utilities
│   ├── utils/                 # Various utilities
│   ├── config.js              # URLs and contact configuration
│   └── paraglide/             # Auto-generated i18n code (gitignore)
├── hooks.js                   # Locale rerouting (deLocalizeUrl)
└── hooks.server.js            # Paraglide middleware
messages/
├── es.json                    # Spanish messages (base language)
├── en.json                    # English messages
└── pt.json                    # Portuguese messages
static/
├── icons/                     # SVG flags (ar.svg, uk.svg)
└── global.css                 # Global CSS + custom properties
```

## Site Routes

| Route         | Description                             |
| ------------- | --------------------------------------- |
| `/`           | Home page (Spanish)                     |
| `/en/`        | Home in English                         |
| `/pt/`        | Home in Portuguese                      |
| `/galeria`    | Photo gallery (interiors and exteriors) |
| `/en/galeria` | Gallery in English                      |
| `/pt/galeria` | Gallery in Portuguese                   |
| `/paseos`     | Recommended excursions in the area      |
| `/en/paseos`  | Excursions in English                   |
| `/pt/paseos`  | Excursions in Portuguese                |

## i18n Strategy (Internationalization)

The site uses **URL-based locale strategy** with Paraglide JS v2:

- **Base language (default)**: Spanish (`/` without prefix)
- **Supported languages**: Spanish (es), English (en), Portuguese (pt)
- **Configuration**: `project.inlang/settings.json`
- **Messages**: `messages/{es,en,pt}.json`

### Code Usage

```javascript
import * as m from '$lib/paraglide/messages.js';

// Without parameters
m.nav_home(); // "Inicio"

// With parameters
m.alt_exterior_photo({ n: 5 }); // "Exterior de Cabañas Ucihuen - foto 5"
```

### Internal Links

```javascript
import { localizeHref } from '$lib/paraglide/internal.js';
import { deLocalizeUrl } from '$lib/paraglide/internal.js';

// For hrefs
<a href={localizeHref('/galeria')}>

// For locale-agnostic route matching
deLocalizeUrl(page.url).pathname  // "/galeria" regardless of language
```

### Language Switching

The `LangToggle` component uses `data-sveltekit-reload` for full page reload when changing language, ensuring the correct locale is applied from the server.

## APIs and Services

### Google Places API

Used to fetch Google Maps reviews for the business. The service (`src/lib/services/reviews.js`) does the following:

1. Fetch reviews from Google Places API using `PRIVATE_GOOGLE_API_KEY` and `PUBLIC_GOOGLE_PLACE_ID`
2. Merge with local reviews (`src/lib/data/reviews.min.json`)
3. Filter to 4+ star reviews with text
4. Return sorted reviews (prioritizes Google, falls back to local on error)

### ImageKit API

Used to list images hosted on CDN:

- **Endpoint**: `https://api.imagekit.io/v1/files/`
- **Usage**: Server-side in `src/routes/galeria/+page.server.js`
- **Fallback**: Hardcoded path lists if API fails
- **Utilities**: `src/lib/imagekit.js` (URL builders, srcset, LQIP)

### OpenWeatherMap API

Weather widget for Lago Puelo:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Data**: Temperature, feels like, weather conditions
- **Key**: `PUBLIC_OPENWEATHERMAP_API_KEY`
- **Language**: Returns data in the current locale language

## Environment Variables

### File: `.env`

```bash
# Google Places API (reviews)
PRIVATE_GOOGLE_API_KEY=xxx
PUBLIC_GOOGLE_PLACE_ID=ChIJVVRMDZnsG5YR8o8ztZR29ec

# Google Maps embed
PUBLIC_GOOGLE_API_KEY=xxx

# ImageKit (image listing)
PRIVATE_IMAGEKIT_KEY=xxx
PUBLIC_IMAGEKIT_KEY=xxx

# OpenWeatherMap (weather)
PUBLIC_OPENWEATHERMAP_API_KEY=xxx
```

**Important**: `PRIVATE_*` variables are never exposed to the client.

## Main Components

### Layout

- **LangToggle**: Language toggle (Argentina/UK/Brazil flags)
- **Header**: Ucihuen logo with tagline
- **Nav**: Main navigation (Home, Gallery, Excursions)
- **FabWhatsapp**: Floating WhatsApp button (scroll-aware, hides on scroll down)
- **Footer**: Links, social media, credits

### Pages

- **Home**: Location, amenities, cabins, reviews, weather, map sections
- **Galería**: Swiper carousel with categories (Cabin 7, Cabin 4, Outdoors)
- **Paseos**: List of recommended excursions in the area with tags, expandable descriptions

## Styles and CSS

- **Framework**: Pure CSS (no CSS frameworks)
- **Custom Properties**: Defined in `static/global.css`
  - Colors (primary, secondary, accent, etc.)
  - Fonts (Ovo for logo, Open Sans body, Ruluko headings)
  - Shadows, borders, z-index layers
- **Responsive**: Mobile-first, breakpoint at `@media (min-width: 1024px)` for desktop
- **LSP**: 100 char width
- **Indentation**: Tabs

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run Prettier + ESLint
npm run format   # Format with Prettier
```

## SEO and Sitemap

- **Sitemap**: Dynamically generated in `src/routes/sitemap.xml/+server.js`
- **Hreflang**: Alternate links by language in sitemap
- **Meta tags**: Titles, descriptions in each language via Paraglide messages
- **Images**: Hosted on ImageKit CDN with accessible alt text

## Non-Translated Content

The following elements are **NOT** translated:

- Reviews (user-generated content)
- Brand name "Cabañas Ucihuen"
- External link titles
- Phone number

## Featured Excursions

The site includes a `/paseos` page with 10 recommended excursions:

1. Lago Puelo National Park (4 km away)
2. Río Azul Footbridge (natural swimming spot)
3. Cayún Beach
4. El Bolsón Regional Market (Tuesdays, Thursdays, Saturdays, Sundays)
5. Laberinto Patagonia (largest natural labyrinth in South America)
6. Perito Moreno Ski Center (winter snow, summer trekking)
7. Puerto Patriada (Lago Epuyén)
8. La Confluencia Footbridge
9. Lago Viewpoint Trail (900 m, medium difficulty)
10. Ancient Settlers Trail (Historical Heritage)

Each excursion has tags (Nature, Trails, Beach, Market, Trekking, etc.) and expandable descriptions.

## Contact and Social Media

- **Main WhatsApp**: +54 9 11 3158-6242 (https://wa.link/hfh2e3)
- **Email**: (via FormSubmit in footer)
- **Social Media**: Links in footer (Instagram, Facebook)
- **Address**: (shown in Google Maps embed)
