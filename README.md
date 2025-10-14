Skandia Frontend Test – Landing Page
====================================

Este repositorio contiene el proyecto frontend creado como parte de la prueba técnica para Skandia. Es una landing page construida con Angular y completamente estilizada usando SCSS. El proyecto utiliza únicamente la configuración por defecto de Angular — no se instalaron librerías adicionales.

Tecnologías Utilizadas
----------------------

*   **Angular CLI 20.3.4**: Para crear y gestionar la aplicación.
    
*   **TypeScript**: Para tipado y desarrollo de la lógica.
    
*   **SCSS (Sass)**: Para los estilos de la aplicación.
    
*   **HTML5 / CSS3**: Estructura y estilo básico.
    

Cómo Ejecutar el Proyecto Localmente
------------------------------------

Sigue estos pasos para clonar el repositorio y ejecutar el proyecto en tu máquina local:

### 1\. Clona el repositorio

```bash
`git clone`
```
### 2\. Navega al directorio del proyecto
```bash 
cd skandia-frontend-test
```

### 3\. Instala las dependencias

```bash 
npm install
```

### 4\. Inicia la aplicación en modo de desarrollo

```bash 
ng serve
```

Esto abrirá la aplicación en tu navegador en:

```bash
http://localhost:4200/
```

> La aplicación se recargará automáticamente si realizas cambios en el código.

Estructura del Proyecto
-----------------------

```bach
src/
└── app/
     ├── components/  # Todos los componentes reutilizables de la landing page
     └── app.component.ts
```

> Dado que el proyecto es pequeño, no se crearon carpetas separadas para layouts, templates o UI.

Screenshots
-----------

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/954d6da6-7549-46cf-960c-f0f18e75c5e0" />


<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ee192ef8-0e4d-47bb-b4bb-dbfec58b753c" />


Notas
-----

*   La landing page es **funcional y esta estilizada con SCSS**.
    
*   **No se utilizaron librerías externas**, solo Angular por defecto.
    
*   Todos los componentes están dentro de src/app.
    
*   No se implementaron tests unitarios ni end-to-end debido a limitaciones de tiempo.
    

Más Información
---------------

*   Para aprender más sobre Angular, visita la [documentación oficial](https://angular.dev/).
    
*   Para aprender más sobre SCSS, visita la [documentacion Oficial](https://sass-lang.com/documentation/).
    
*   Para aprender más sobre TypeScript, visita la [documentación oficial](https://www.typescriptlang.org/docs/).
