import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home.js';
import CarrinhoCompras from './components/CarrinhoCompras';
import CadastroProduto from './components/CadastroProduto';
import ListaProduto from './components/ListaProduto';
import CadastroUsuario from './components/CadastroUsuario';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
