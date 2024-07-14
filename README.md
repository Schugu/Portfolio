<h1 align='center'>🌟 Portfolio 💼🖥️🌟</h1>

> Hecho con TypeScript, React, Tailwind CSS. ✨

🎯 Este proyecto fue desarrollado para servir como un segundo currículum, mostrando mis proyectos personales. También se ofrece como una plantilla para que otros puedan usarla, siempre y cuando se me reconozca como el autor original y se respeten mis derechos de autor.

## Índice
1. [Instalación y ejecución del proyecto (React) 🛠️💻](#install)
2. [Usar este proyecto como template 📄](#portfolioTemplate)
	- [Personalización del perfil 🧑‍💻](#profileTemplate)
	- [Personalización del Proyectos 🚀](#projectTemplate)
  	- [Personalización de la página 🎨](#pageTemplate)
   	- [Personalización de idiomas 🌐](#translatesTemplate)
3. [Dependencias📦](#dependencias)
4. [Contribuir](#contribuir)
6. [Contribuyentes](#contribuyentes)
7. [Ayuda 🤝](#ayuda)

<h2 id="install">Instalación y ejecución del proyecto (React) 🛠️💻</h2> 

1. Abre la consola en la ubicación deseada para clonar el repositorio.

2. Clona este repositorio en tu máquina local utilizando Git:

    ```bash
    git clone https://github.com/Schugu/Portfolio.git
    ```

3. Navega al directorio del proyecto clonado:

    ```bash
    cd Portfolio
    ```

4. Instala las dependencias del frontend utilizando npm o yarn:

    ```bash
    npm install
    # o
    yarn
    ```

5. Inicia el servidor de desarrollo del proyecto utilizando npm:

    ```bash
    npm run dev
    ```

6. Una vez que el servidor de desarrollo del proyecto esté en funcionamiento, abre tu navegador web y navega a la dirección local para ver el proyecto en acción.

### Personalización y comprensión del proyecto 🎨🧠

Para personalizar y comprender el proyecto, sigue estas instrucciones:

- Si deseas modificar o entender cómo funciona el proyecto, revisa los archivos y carpetas dentro de `src`.
  - La lógica y la apariencia de las páginas se encuentran en la carpeta `pages`.
  - Los componentes individuales se encuentran en la carpeta `components`.
  - El sistema de rutas se encuentra en el archivo `App.tsx`.

<h2 id="portfolioTemplate">Usar este proyecto como template 📄</h2> 
Es importante respetar el nombre de las variables, así como el nombre y la ubicación de los archivos para garantizar el correcto funcionamiento del proyecto. Los cambios en estos aspectos pueden causar errores en el código y afectar la funcionalidad del proyecto en su conjunto. Mantener una consistencia en la nomenclatura y la organización de los archivos facilita la comprensión y el mantenimiento del código, además de evitar posibles conflictos y confusiones durante el desarrollo.

<h3 id="profileTemplate">Personalización del perfil 🧑‍💻 </h3> 
He creado un archivo que se puede editar para agregar información personalizada al portafolio. Este archivo se encuentra en la carpeta `translations/es` y se llama `profile.json`. A continuación se muestra un ejemplo genérico de cómo debería estructurarse este archivo para que puedas incluir tu propia información:

```json
{
  "fullname": "Nombre Completo",
  "aboutMe": [
    "Breve descripción sobre ti, tus habilidades y tu experiencia."
  ],
  "hobbies": [
    "Hobby 1, Hobby 2, Hobby 3"
  ],
  "titles": [
    "Título Profesional, Cargo, Área de Especialización"
  ],
  "years": "Edad",
  "nationality": "Nacionalidad",
  "profilePicture": "/ruta/a/profilePicture.png",
  "linksSocialNetworks": {
    "Github": "https://github.com/usuario",
    "Linkedin": "https://www.linkedin.com/in/usuario/",
    "Instagram": "https://www.instagram.com/usuario/",
    "FreeCodeCamp": "https://www.freecodecamp.org/certification/usuario/responsive-web-design",
    "Email": "mailto:usuario@example.com",
    "CV": "/ruta/al/cv.pdf"
  },
  "skills": {
    "Área de Especialización": [
      "Habilidad 1",
      "Habilidad 2",
      "Habilidad 3"
    ],
  },
  "workExperience": [
    {
      "title": "Puesto",
      "company": "Empresa",
      "date": "Fecha de inicio - Fecha de fin / Actualidad",
      "modality": "Modalidad de trabajo",
      "workplace": "Lugar de trabajo",
      "country": "País",
      "description": [
        "Breve descripción de las tareas y responsabilidades."
      ],
      "tasks": [
        "Tarea 1",
        "Tarea 2"
      ],
      "infoLink": "Enlace opcional adicional"
    },
  ],
  "certificates": [
    "Link certicicado 1",
	"Link certicicado 1"
  ],
  "textContact": [
    "Mensaje de contacto para posibles empleadores o colaboradores."
  ]
}
```
También debes reemplazar estos archivos. Si deseas cambiarles el nombre, asegúrate de hacerlo primero en el archivo `profile.json`.
```
public
└── profile
    ├── CV.pdf
    └── profilePicture.png
```

> [!TIP]
> **Agregar Nuevos Campos**
> - Para agregar nuevos campos dentro de una sección existente, como aboutMe, hobbies, certificates, etc., sigue este formato:
> 	- **Campos Simples:** Para agregar un nuevo campo simple, como una cadena de texto, agrégalo dentro de su sección correspondiente separado por comas y entre comillas dobles.
> 	- **Campos de Listas:** Si el campo es una lista de elementos, como hobbies o certificates, simplemente agrega el nuevo elemento como una nueva cadena dentro del array.
> - Para agregar una nueva sección o un nuevo objeto, como workExperience o skills, crea un nuevo objeto dentro del JSON. Cada sección debe ser un objeto separado dentro de su array correspondiente, siguiendo la estructura definida por la interfaz `ProfileContextTypes.tsx` ubicado en `/types`.

> [!IMPORTANT] 
> **Posibles problemas con iconos**
> 
> Si no se encuentran los iconos de las redes sociales, la bandera de tu país o los iconos de los programas, pueden ocurrir dos cosas: o bien están mal escritos (verifica cómo están escritos en el componente), o directamente no están disponibles. En este último caso, agrega los iconos necesarios desde la página  [Yesicon](https://yesicon.app "Yesicon"). Los componentes que deben editarse están ubicados en la carpeta `components` y se llaman `Flag.tsx`, `IconosTechs.tsx`, `SkeletonUniversal.tsx`, `Techs.tsx` y `subtitle.tsx`, ubicado en `components/profile/subtitle.tsx`.



### 
<h3 id="projectTemplate">Personalización del Proyectos 🚀</h3> 
He creado un archivo que contiene la información sobre los proyectos que se muestran en el portafolio. Este archivo se encuentra en la carpeta `translations/es` y se llama `projects.json`. A continuación se muestra un ejemplo genérico de cómo debería estructurarse este archivo para incluir información sobre tus propios proyectos:

```json
{
  "approaches": {
    "Categoria 1": [
      {
        "id": 1,
        "title": "Proyecto 1",
        "description": "Descripción del Proyecto 1.",
        "moreInfo": [
          "Parrafo 1.",
          "Parrafo 2"
        ],
        "techs": [
          "Tecnología1",
          "Tecnología2"
        ],
        "linkGithub": "Enlace al repositorio del Proyecto 1",
        "livePreviewLink": "Enlace a la demo del Proyecto 1",
        "cantScreenshots": {
          "cellphone": 0,
          "tablet": 0,
          "desktop": 0
        }
      }
    ],
    "Categoria 2": [
      {
        "id": 2,
        "title": "Proyecto 2",
        "description": "Descripción del Proyecto 2.",
        "moreInfo": [
          "Parrafo 1.",
          "Parrafo 2"
        ],
        "techs": [
          "Tecnología1",
          "Tecnología2"
        ],
        "linkGithub": "Enlace al repositorio del Proyecto 2",
        "livePreviewLink": "Enlace a la demo del Proyecto 2",
        "cantScreenshots": {
          "cellphone": 0,
          "tablet": 0,
          "desktop": 0
        }
      }
    ]
  }
}
```

También debes reemplazar estos archivos. Si deseas cambiarles el nombre, asegúrate de hacerlo primero en el archivo `dataProjects.ts`.
```
public
└── projects
    └── [projectID]
        ├── frontPage.png
        └── screenshots
            ├── cellphone
            │   └── 1.png
            ├── tablet
            │   └── 1.png
            └── desktop
                └── 1.png
```
Recuerda que, si deseas añadir varias capturas de pantalla, debes especificar cuántas son en el archivo `projects.json`.


> [!TIP]
>** Agregar Nuevos Campos**
> - Para agregar nuevos campos dentro de una sección existente, como `aboutMe`, `hobbies`, `certificates`, etc., sigue este formato:
>   - **Campos Simples:** Para agregar un nuevo campo simple, como una cadena de texto, agrégalo dentro de su sección correspondiente separado por comas y entre comillas dobles.
>   - **Campos de Listas:** Si el campo es una lista de elementos, como `hobbies` o `certificates`, simplemente agrega el nuevo elemento como una nueva cadena dentro del array.
> - Para agregar una nueva sección o un nuevo objeto, como `workExperience` o `skills`, crea un nuevo objeto dentro del JSON. Cada sección debe ser un objeto separado dentro de su array correspondiente, siguiendo la estructura definida por la interfaz `ProfileContextTypes.tsx` ubicado en `/types`.

> [!IMPORTANT]
> Si no se encuentran los iconos de las redes sociales, la bandera de tu país o los iconos de los programas, pueden ocurrir dos cosas: o bien están mal escritos (verifica cómo están escritos en el componente), o directamente no están disponibles. En este último caso, agrega los iconos necesarios desde la página  [Yesicon](https://yesicon.app "Yesicon"). Los componentes que deben editarse están ubicados en la carpeta `components` y se llaman `Flag.tsx`, `IconosTechs.tsx`, `SkeletonUniversal.tsx`, `Techs.tsx` y `subtitle.tsx`, ubicado en `components/profile/subtitle.tsx`.


<h3 id="pageTemplate">Personalización de la página 🎨 </h3> 
He creado un archivo que se puede editar para cambiar los colores de la página. Este archivo se encuentra en la carpeta `/context` y se llama `colorPalettes.ts`. A continuación se muestra un ejemplo genérico de cómo está estructurado este archivo para que puedas incluir tus propios colores

> [!TIP]
> Los colores pueden tener cualquier formato, hex, hsl, o rgb.

```TypeScript
export const darkThemeColors = {
  primary: {
    first: "#ffcc50",
    second: '#ffd750',
    third: "#cca340",
  },
  secondary: {
    first: "#2196f3",
    second: "#89c4f3"
  },
  border: {
    first: "#ffcc50",
    second: "#2196f3",
  },
  text: {
    first: "#f1e1cf",
    second: "#fffaf4",
    third: "#f1e1cf"
  },
  background: {
    first: "#0c1523",
    second: "#122138",
    third: "#1f2937",
    fourth: "#060e1c"
  },
  error: {
    text: "#f2634a"
  },
  form: {
    text: "#ffcc50",
    background: {
      one: "#374151",
      two: "#4b5563",
      three: "#9ca3af",
    },
    button: {
      background: "#ffcc50",
      text: "#000000",
      hover: "#cca340",
      sent: "#22c55e",
    },
    placeholder: "#9ca3af",
  },
  colorOpacity: "#f1e1cf18",
  primaryOpacity: "#ffcc5018"
};

export const lightThemeColors = {
  primary: {
    first: "#2196f3",
    second: '#89c4f3',
    third: "#0d3c63",
  },
  secondary: {
    first: "#145c96",
    second: "#2196f3"
  },
  border: {
    first: "#0d3c63",
    second: "#2196f3",
  },
  text: {
    first: "#16202f",
    second: "#314567",
    third: "#f5faff"
  },
  background: {
    first: "#ecf4fd",
    second: "#f5faff",
    third: "#d6e7fa",
    fourth: "#060e1c"
  },
  error: {
    text: "#ef4444"
  },
  form: {
    text: "#145c96",
    background: {
      one: "#f9fafb",
      two: "#e5e7eb",
      three: "#6b7280",
    },
    button: {
      background: "#2196f3",
      text: "#ffffff",
      hover: "#89c4f3",
      sent: "#22c55e",
    },
    placeholder: "#9ca3af",
  },
  colorOpacity: "#2195f318",
  primaryOpacity: "#2196f318"
};
```
> [!WARNING]
> No cambies los nombres de las variables (keys), ya que causará problemas y no se verán los colores deseados.


<h3 id="translatesTemplate">Personalización de idiomas 🌐</h3> 
<p>Esta página utiliza un sistema de idiomas para públicos de distintos países. Si deseas modificar alguna traducción, puedes hacerlo en la carpeta <code>translates</code>. Dentro de esta carpeta, encontrarás la carpeta <code>es</code>, donde se depositan los archivos utilizados por defecto. Estos archivos son:</p>
<ol>
  <li><code>global.json</code>: Aquí encontrarás traducciones de la interfaz de la página, es decir, botones, títulos, etc.</li>
  <li><code>profile.json</code>: Aquí estará tu información personal.</li>
  <li><code>projects.json</code>: Aquí estará la información de tus proyectos.</li>
</ol>

>[!CAUTION]
>No cambies los nombres de las variables (keys), ya que causará problemas y no se verán las traducciones deseadas.

#### Agregar un nuevo idioma
Si deseas agregar un nuevo idioma, agrega una carpeta con las siglas de tu idioma en minúscula en la carpeta `translations`. Por ejemplo, ya están creadas las carpetas de Inglés (en), Español (es) y Portugués (pt). Una vez creada la carpeta, debes crear tres archivos llamados: `global.json`, `profile.json` y `projects.json`. Estos deben tener la misma estructura que los archivos de los otros idiomas. Una vez agregados los archivos, dirígete a `/utils`, al archivo `i18n.ts`, e importa los archivos del nuevo idioma. Debes importar los archivos usando el nombre del archivo más un guión bajo y las siglas del idioma. Por ejemplo:

```typescript
import global_es from "@/translations/es/global.json";
```

Luego, debes agregar tu idioma siguiendo ese patrón:
```typescript
resources: {
      es: {
        global: global_es,
        profile: profile_es,
        projects: projects_es,
      },
      en: {
        global: global_en,
        profile: profile_en,
        projects: projects_en,
      },
      pt: {
        global: global_pt,
        profile: profile_pt,
        projects: projects_pt,
      }
    }
```

El idioma predeterminado es el Español (es), es decir, que toda la información que forma la página se basa en los archivos de la carpeta es, y después se aplican las traducciones. Si quieres cambiarlo, debes editar las siguientes líneas de código con las siglas del idioma que deseas en estos archivos:

`/utils/i18n`
```typescript
const savedLanguage = localStorage.getItem('language') || 'es';

fallbackLng: 'es',
```

`/context/profileContext.tsx`
```typescript
fetch('/src/translations/es/profile.json').then(response => response.json()),
fetch('/src/translations/es/projects.json').then(response => response.json())
```

 
<h3 id="dependencias">Dependencias📦 </h3> 

Este proyecto utiliza varias dependencias para diferentes propósitos, incluyendo gestión de formularios, internacionalización, enrutamiento y más. A continuación se describe cada una de las dependencias utilizadas:

### Dependencias de Producción

- **@emailjs/browser**: Biblioteca para enviar correos electrónicos directamente desde el navegador usando EmailJS.
- **@types/node**: Tipos para Node.js que proporcionan soporte de TypeScript para las APIs de Node.js.
- **i18next**: Framework de internacionalización para JavaScript, utilizado para gestionar las traducciones en la aplicación.
- **js-cookie**: Librería para gestionar cookies de manera sencilla en JavaScript.
- **react**: Biblioteca de JavaScript para construir interfaces de usuario.
- **react-dom**: Paquete que proporciona métodos específicos del DOM que se utilizan en la mayoría de las aplicaciones de React.
- **react-hook-form**: Biblioteca para gestionar formularios en React de manera eficiente.
- **react-i18next**: Biblioteca de integración de i18next para React, utilizada para internacionalización.
- **react-router-dom**: Biblioteca para el enrutamiento en aplicaciones de React.
- **react-select**: Componente de selección para React con soporte para múltiples opciones, búsqueda y más.

### Dependencias de Desarrollo

- **@iconify/json**: Colección de iconos en formato JSON utilizada con Iconify.
- **@iconify/tailwind**: Complemento de Tailwind CSS para utilizar Iconify.
- **@types/js-cookie**: Tipos para la librería js-cookie, proporcionando soporte de TypeScript.
- **@types/react**: Tipos para React, proporcionando soporte de TypeScript para React.
- **@types/react-dom**: Tipos para ReactDOM, proporcionando soporte de TypeScript para ReactDOM.
- **@typescript-eslint/eslint-plugin**: Plugin ESLint para TypeScript, proporcionando reglas específicas para TypeScript.
- **@typescript-eslint/parser**: Parser ESLint para TypeScript.
- **@vitejs/plugin-react-swc**: Plugin de Vite para transformar y optimizar React usando SWC.
- **autoprefixer**: Plugin de PostCSS para añadir prefijos de navegador automáticamente.
- **eslint**: Herramienta de linting para identificar y reportar patrones problemáticos en el código.
- **eslint-plugin-react-hooks**: Plugin ESLint para reglas de los hooks de React.
- **eslint-plugin-react-refresh**: Plugin ESLint para la integración de React Refresh.
- **postcss**: Herramienta para transformar CSS con plugins de JavaScript.
- **tailwindcss**: Framework de CSS utilitario para un desarrollo rápido de interfaces de usuario.
- **typescript**: Lenguaje de programación tipado que se compila a JavaScript.
- **vite**: Herramienta de construcción rápida para proyectos de frontend.

### Scripts

- **dev**: Inicia el servidor de desarrollo de Vite.
- **build**: Compila el proyecto TypeScript y construye los archivos de producción con Vite.
- **lint**: Ejecuta ESLint en los archivos .ts y .tsx, reportando errores y advertencias.
- **preview**: Inicia un servidor para previsualizar la construcción de producción.

Cada una de estas dependencias y scripts ayuda a mantener y construir el proyecto de manera eficiente y organizada.

<h2 id='contribuyentes'>Contribuyentes</h2>

1. [@nicolasboattini](https://github.com/nicolasboattini "@nicolasboattini"): Aportó verificando las traducciones al portugués brasileño de la página, ideas de diseño y svg´s que no existen en la página de iconos.


<h2 id='contribuir'>Contribuir</h2>

Guía para los desarrolladores que deseen contribuir al proyecto.
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

<h2 id="ayuda">Ayuda 🤝</h2>
<p>Si no entiendes cómo funciona algo, o tienes problemas, puedes contactarme para ayudarte.</p>






## Capturas de pantalla 📸
## 📱 Celular 📱
<table width="100%">
  <tr>
    <td width="50%">
      <h2 align=center>Light Mode ☀️</h2>
    </td>
    <td width="50%">
        <h2 align=center>Dark Mode 🌙</h2>
    </td>
  </tr>
   
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/1.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/1.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/2.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/2.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/3.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/3.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/4.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/4.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/5.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/5.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/phone/6.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/phone/6.png" alt="Captura de pantalla"/>
    </td>
  </tr>
</table>

## 💻 Computadora 💻
<table width="100%">
  <tr>
    <td width="50%">
      <h2 align=center>Light Mode ☀️</h2>
    </td>
    <td width="50%">
        <h2 align=center>Dark Mode 🌙</h2>
    </td>
  </tr>
   
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/desktop/1.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/desktop/1.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/desktop/2.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/desktop/2.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/desktop/3.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/desktop/3.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/desktop/4.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/desktop/4.png" alt="Captura de pantalla"/>
    </td>
  </tr>
  <tr>
    <td align="center">
       <img src="/public/screenshotsPage/light/desktop/5.png" alt="Captura de pantalla"/>
    </td>
    <td align="center">
      <img src="/public/screenshotsPage/dark/desktop/5.png" alt="Captura de pantalla"/>
    </td>
  </tr>
</table>

