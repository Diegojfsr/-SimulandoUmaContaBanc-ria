# TransicaoPaginasComReact
Projeto React, TypeScript, Vite e transições de página e centralização do conteúdo.

Aqui está um passo a passo completo para criar um projeto React com TypeScript e Vite, incluindo transições de página e centralização do conteúdo.

1. Criar o Projeto com Vite
Primeiro, crie um novo projeto Vite com TypeScript:
```
npm create vite@latest my-react-app --template react-ts
cd my-react-app
```
2. Instalar Dependências
Instale as dependências necessárias, incluindo react-transition-group:
```
npm install react-transition-group react-router-dom
```

3. Criar Componentes de Página
Crie os componentes de página "Home" e "About".  
> src/pages/Home.tsx:
```
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};
export default Home;
```
> src/pages/About.tsx:
```
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About Page</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
export default About;
```

4. Configurar o App.tsx
Configure o arquivo App.tsx para gerenciar as rotas e aplicar as transições de página.  
> src/App.tsx:
```
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import './styles.css';
const App: React.FC = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};
const Root: React.FC = () => (
  <Router>
    <App />
  </Router>
);
export default Root;
```
5. Configurar o main.tsx
Certifique-se de que o arquivo main.tsx está configurado corretamente.  
> src/main.tsx:
```
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './App';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
```
7. Adicionar Estilos CSS
Crie um arquivo CSS para centralizar o conteúdo das páginas e definir as transições.  
> src/PageStyles.css:
```
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.page-container h1 {
  margin-bottom: 20px;
}

.page-container a {
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
}

.page-container a:hover {
  text-decoration: underline;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
```
7. Executar o Projeto
Adicionar uma declaração de módulo: 
Se os tipos não estiverem disponíveis, você pode adicionar uma declaração de módulo manualmente. Crie um arquivo de declaração (.d.ts) no seu projeto (por exemplo, react-transition-group.d.ts) e adicione a seguinte linha:
```
declare module 'react-transition-group';
```
Finalmente, execute o projeto:  
```
npm run dev
```
Com esses passos, você terá um projeto React com TypeScript e Vite, com transições de página suaves e conteúdo centralizado.


