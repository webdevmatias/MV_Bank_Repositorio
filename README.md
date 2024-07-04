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

## Navegação

    import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
    
    const App = () => {
          return (
            <>
            <Router>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/exemple1' element={<Exemple1/>}/>
                <Route path='/exemple2' element={<Exemple2/>}/>
              </Routes>
              <Footer/>
            </Router>
            </>
          );
    };
    
    export default App

