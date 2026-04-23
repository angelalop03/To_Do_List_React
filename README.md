# To-Do List App con React

* Autora: Ángela López Oliva
* Asignatura: Módulo 5. Desarrollo Frontend con Frameworks I

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web de gestión de tareas (**To-Do List**) utilizando React.
Permite a los usuarios crear, completar, eliminar y filtrar tareas de forma dinámica, además de mantener la información guardada entre sesiones mediante `localStorage`.

El objetivo de esta práctica es aplicar los conceptos fundamentales de React como componentes, estado, props, hooks personalizados, Context API, carga perezosa y testing.

---

## Funcionalidades

*  Añadir tareas con título y descripción
*  Marcar tareas como completadas
*  Eliminar tareas
*  Filtrar tareas:
    * Todas
    * Completadas
    * Pendientes
*  Persistencia de datos con `localStorage`
*  Interfaz dinámica con carga perezosa (`React.lazy` y `Suspense`)
*  Gestión global del estado con **React Context**
*  Reutilización de lógica mediante **custom hook (`useTasks`)**
*  Tests unitarios y de integración con **Vitest y Testing Library**

---

## Tecnologías utilizadas

* React
* Vite
* JavaScript (ES6+)
* React Context API
* React Hooks (`useState`, `useEffect`, `useContext`, `useMemo`)
* React.lazy y Suspense
* Vitest
* Testing Library
* CSS

---

## Estructura del proyecto

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── FilterButtons.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── hooks/
│   └── useTasks.js
│
├── tests/
│   ├── TaskForm.test.jsx
│   ├── TaskItem.test.jsx
│   ├── TaskList.test.jsx
│   ├── FilterButtons.test.jsx
│   └── useTasks.test.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Instalación

Clona el repositorio o descarga el proyecto y ejecuta:

```bash
npm install
```

---

## Ejecución del proyecto

```bash
npm run dev
```

Abre el navegador en:

```
http://localhost:5173
```

---

## Ejecución de tests

```bash
npm run test
```

Los tests cubren:

* Creación de tareas
* Eliminación de tareas
* Cambio de estado (completado)
* Filtrado de tareas
* Interacción con los componentes

---

## Arquitectura y decisiones

* Se ha utilizado un **custom hook (`useTasks`)** para encapsular toda la lógica relacionada con las tareas.
* Se ha implementado **React Context** para evitar el uso excesivo de props (*prop drilling*).
* Se ha usado `localStorage` para mantener los datos persistentes entre sesiones.
* Se ha aplicado **React.lazy y Suspense** para cargar componentes de forma diferida.
* Se ha separado la aplicación en componentes reutilizables para mejorar la mantenibilidad.

---

## Estilos

Se ha aplicado un diseño moderno y responsive mediante CSS, mejorando la experiencia de usuario con:

* Layout centrado
* Tarjetas para tareas
* Botones estilizados
* Estados visuales para tareas completadas


---

## Notas

Este proyecto cumple con los requisitos solicitados:

* Componentes reutilizables
* Uso de hooks y estado
* Context API
* Lazy loading
* Persistencia de datos
* Testing

---
