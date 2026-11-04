# LaBeBCNOFuncioNa
Página educativa sobre los elementos químicos de la tabla periódica utlizando la API de https://periodictableofelements.org

## Guía rápida de uso

La aplicación está diseñada para ser intuitiva, interactiva y totalmente adaptiva. A continuación se detallan las principales funcionalidades y cómo interactuar con ellas:

### 1. Exploración en la Landing Page
* **Acceso:** Al entrar a la aplicación, se presenta una pantalla de bienvenida que introduce el propósito educativo de la plataforma.
* **Navegación:** Un botón central te redirigirá directamente a la aplicación principal de la Tabla Periódica.

### 2. Panel de la Tabla Periódica e Interactividad
* **Visualización Dinámica:** Los elementos químicos se renderizan automáticamente consumiendo la API. Están organizados siguiendo la estructura oficial y coloreados bajo el **estándar internacional CPK** según su tipo de elemento.
* **Feedback Visual:** Al pasar el cursor (*hover*) sobre cualquier casilla de la tabla, se activa un efecto de opacidad y sombreado que resalta el elemento seleccionado.
* **Filtrado Avanzado:** Utiliza el sistema de filtrado (potenciado por *Isotope*) para aislar grupos específicos de elementos químicos con un solo clic.

### 3. Consulta de Fichas de Elementos Avanzadas
* **Selección:** Haz clic en cualquier elemento de la tabla periódica. La aplicación utiliza `Local Storage` en segundo plano para recordar tu elección y cargar los datos de manera inmediata.
* **Información Detallada:** Accederás a una ficha técnica avanzada optimizada para cualquier pantalla (móviles y monitores) que recopila:
  * Parámetros físicos completos con sus respectivas **unidades de medida**.
  * Cuadrícula *responsive* con los **isótopos** conocidos del elemento.
* **Retorno:** Cada ficha incluye un enlace de navegación rápido para regresar a la tabla general sin perder el hilo de tu investigación.
## 🛠️ Tecnologías y herramientas utilizadas

El proyecto está construido utilizando tecnologías web estándar, aplicando buenas prácticas de maquetación y programación orientada a objetos (POO):

* **HTML5:** Estructuración semántica de la landing page, la tabla periódica y las fichas técnicas adaptadas a dispositivos móviles y monitores.
* **CSS3:** Diseño personalizado con sistemas modernos de disposición (Flexbox/Grid), animaciones *hover* de opacidad/sombreado y paleta de colores basada en el estándar químico CPK.
* **JavaScript (ES6+):** 
  * Arquitectura orientada a objetos mediante la clase `Element` para la gestión de datos químicos.
  * Consumo asíncrono de APIs externas (Fetch API) para la carga y automatización de la tabla.
  * Uso de `Web Storage (LocalStorage)` para la persistencia de datos y comunicación del número atómico entre vistas.
* **Google Gemini y Meta AI:** Ayuda para la parte artística: creación del banner, escoger los colores de las categorías de los elementos.



---

## Instalación y despliegue local

Sigue estos sencillos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno local:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando para descargar el proyecto:
```bash
git clone https://github.com
```

### 2. Acceder al directorio
Entra en la carpeta del repositorio clonado:
```bash
cd LaBeBCNOFuncioNa
```

### 3. Ejecutar la aplicación
Al ser un proyecto basado en tecnologías *frontend* puras (HTML, CSS y JS), no requiere instalar dependencias pesadas de Node.js. 

Puedes iniciarlo de dos maneras:
* **Opción A (Recomendada):** Abre el archivo `index.html` utilizando la extensión **Live Server** de Visual Studio Code (o cualquier servidor web local) para asegurar el correcto funcionamiento de las peticiones a la API y el uso de `LocalStorage`.
* **Opción B:** Haz doble clic directamente sobre el archivo `index.html` en tu explorador de archivos para abrirlo en tu navegador.
* **Opción C:** Si se ha instalado en un servidor web, accede a su URL raíz

---
## Tecnologías y herramientas utilizadas

El proyecto está construido utilizando tecnologías web estándar, aplicando buenas prácticas de maquetación y programación orientada a objetos (POO):

* **HTML5:** Estructuración semántica de la landing page, la tabla periódica y las fichas técnicas adaptadas a dispositivos móviles y monitores.
* **CSS3:** Diseño personalizado con sistemas modernos de disposición (Flexbox/Grid), animaciones *hover* de opacidad/sombreado y paleta de colores basada en el estándar químico CPK.
* **JavaScript (ES6+):** 
  * Arquitectura orientada a objetos mediante la clase `Element` para la gestión de datos químicos.
  * Consumo asíncrono de APIs externas (Fetch API) para la carga y automatización de la tabla.
  * Uso de `Web Storage (LocalStorage)` para la persistencia de datos y comunicación del número atómico entre vistas.

