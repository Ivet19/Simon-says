# Prueba técnica: Refactorización de Simon Says

## Descripción
Este proyecto contiene una implementación básica del juego "Simon says" con React y TypeScript. El código actual funciona correctamente, pero **no cumple con el Principio de Responsabilidad Única (SRP)**.

Tu tarea es refactorizar el código para que cumpla con este principio, separando responsabilidades y mejorando la mantenibilidad del proyecto.

## Requisitos funcionales
- El juego tiene 4 botones de colores.
- El juego muestra una secuencia de colores (máximo 10 niveles).
- El usuario debe repetir la secuencia en el mismo orden.
- Si el usuario falla, se le asigna una nota del 0 al 10 según el nivel alcanzado:
  - Falla antes del nivel 5: cara triste.
  - Falla entre el nivel 6 y 8: cara contenta.
  - Llega al nivel 9 o 10: cara muy contenta.
- Al finalizar, se muestra la nota y la cara correspondiente.

## Instrucciones
1. Analiza el código en `src/App.tsx`.
2. Refactoriza el código para que cumpla con el Principio de Responsabilidad Única (SRP):
   - Separa la lógica del juego, la gestión de la secuencia, la interfaz de usuario y la visualización de resultados en componentes o funciones distintas.
   - El código debe ser limpio, sencillo y fácil de entender.
3. No cambies la funcionalidad del juego.
4. Puedes crear los archivos y componentes que consideres necesarios.

## Tiempo estimado
La prueba está pensada para resolverse en **10 a 15 minutos**.

¡Suerte!

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
