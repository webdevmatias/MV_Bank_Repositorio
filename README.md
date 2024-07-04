# MVBank

### Instalando dependências do frontend: 

    yarn create vite front
    cd front
    yarn add -D tailwindcss postcss autoprefixer && yarn tailwindcss init -p && yarn add react-icons react-router-dom
    yarn
    yarn dev

## TAILWINDCSS
### tailwind.config.js : 

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

### index.css

    /* index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
