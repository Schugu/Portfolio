<h1 align='center'>🌟 Portfolio 💼🖥️🌟</h1>

> Hecho con TypeScript, React, Tailwind CSS. ✨

🎯 Este proyecto fue desarrollado para servir como un segundo currículum, mostrando mis proyectos personales. También se ofrece como una plantilla para que otros puedan usarla, siempre y cuando se me reconozca como el autor original y se respeten mis derechos de autor.

## Índice
1. [Descripción](#descripción)
2. [Instalación y ejecución del proyecto (React) 🛠️💻](#instalación-y-ejecución-del-proyecto-react-🛠️💻)
3. [Usar este proyecto como template 📄](#usar-este-proyecto-como-template-📄)
4. [Contribuir](#contribuir)
5. [Autores](#autores)
6. [Agradecimientos](#agradecimientos)

## Descripción
Breve introducción sobre el proyecto y sus objetivos.

## Instalación y ejecución del proyecto (React) 🛠️💻

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

## Usar este proyecto como template 📄

Es importante respetar el nombre de las variables, así como el nombre y la ubicación de los archivos para garantizar el correcto funcionamiento del proyecto. Los cambios en estos aspectos pueden causar errores en el código y afectar la funcionalidad del proyecto en su conjunto. Mantener una consistencia en la nomenclatura y la organización de los archivos facilita la comprensión y el mantenimiento del código, además de evitar posibles conflictos y confusiones durante el desarrollo.

### Personalización del perfil 🧑‍💻

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




### Personalización del Proyectos 🚀

He creado un archivo que contiene la información sobre los proyectos que se muestran en el portafolio. Este archivo se encuentra en la carpeta `data` y se llama `dataProjects.ts`. A continuación se muestra un ejemplo genérico de cómo debería estructurarse este archivo para incluir información sobre tus propios proyectos:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  moreInfo: string[];
  techs: string[];
  linkGithub : string;
  cantScreenshots: {
    cellphone: number;
    tablet: number;
    desktop: number;
  };
}

const dataProjects: Project[] = [
  {
    id: '1',
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    moreInfo:[
      'Información adicional sobre el proyecto...',
      'Otra información relevante...',
    ],
    techs: ['Tech1', 'Tech2', '...'],
    linkGithub: 'Enlace al repositorio en GitHub',
    cantScreenshots: {
      cellphone: 0,
      tablet: 0,
      desktop: 0,
    }
  },
];

export default dataProjects;
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
Recuerda que, si deseas añadir varias capturas de pantalla, debes especificar cuántas son en el archivo `dataProjects.ts`.

#### 🚨IMPORTANTE🚨 
Si no aparecen las tecnologías, habilidades o redes sociales como iconos, es posible que falten o que el icono de la página no esté funcionando correctamente. En ese caso, agrega un nuevo icono o reemplaza el que esté causando conflictos en `IconosTechs.tsx`, `SocialNetworkIcon.tsx` y `Techs.tsx`.



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

