# MVBank - Bloco de Notas do Desenvolvimento

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

## Comandos Git

### Inicializa um novo repositório Git no diretório atual
    git init

### Adiciona o arquivo README.md ao index do Git para prepará-lo para o próximo commit
    git add README.md

### Realiza um commit dos arquivos que estão no index com a mensagem "first commit"
    git commit -m "first commit"

### Lista todas as branches locais no repositório
    git branch

### Renomeia a branch atual para branch-name (force a renomeação se necessário)
    git branch -M branch-name

### Cria uma nova branch chamada branch-name e muda para ela
    git checkout -b branch-name

### Adiciona um novo repositório remoto chamado origin
    git remote add origin git@github.com:exemplo/form-validation.git

### Faz o push dos commits locais da branch branch-name para o repositório remoto origin, definindo origin/branch-name como a upstream da sua branch local branch-name
    git push -u origin branch-name

### Mostra o estado atual do seu repositório Git
    git status

### Mostra as diferenças entre os arquivos modificados e a versão mais recente no repositório Git
    git diff

### Mostra o histórico de commits, incluindo mensagens de commit, autores e timestamps
    git log

### Muda para a branch branch-name
    git checkout branch-name

### Mescla os commits da branch branch-name na branch atual
    git merge branch-name

### Puxa as atualizações da branch branch-name do repositório remoto origin para a sua branch local
    git pull origin branch-name


