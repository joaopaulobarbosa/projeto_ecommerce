//import './Home.css';
import ListaProduto from "./ListaProduto.js";

function Home() {
  return (
    <div className="Home">
      <header className=""></header>
      <ListaProduto></ListaProduto>
      <h3>BOTÃO VER CARRINHO DE COMPRAS</h3>

      {/* somente se cliente logado */}
      <p>BOTAO VISUALIZAR COMPRAS ANTERIORES</p>
      <p>BOTAO ALTERAR CADASTRO PESSOAL</p>
      <p>BOTAO EXCLUIR CADASTRO PESSOAL</p>
      <p>BOTAO SAIR DA CONTA</p>

      {/* somente se adm */}
      <p>BOTAO LISTAR COMPRAS CLIENTES (AGRUPADAS POR CLIENTES)</p>

      <p>
        BOTAO RELATORIO TOTAL DE COMPRAS POR CLIENTE NO PERÍODO ORDENADO POR
        VALOR TOTAL COMPRAS POR CLIENTE DESCENDENTE EXPORTAVEL EM text/html, text/plain ou application/pdf
      </p>

      <p>
        BOTAO RELATORIO PRODUTOS COM ESTOQUE ZERADO ORDENADO POR DESCRIÇÃO DO
        PRODUTO ASCENDENTE EXPORTAVEL EM text/html, text/plain ou application/pdf
      </p>

      <p>
        BOTAO RELATORIO TOTAL RECEBIDO/DIA POR PERÍODO ORDENADO POR DATA
        ASCENDENTE EXPORTAVEL EM text/html, text/plain ou application/pdf
      </p>

      <p>BOTAO ALTERAR CADASTRO PESSOAL</p>
      <p>BOTAO EXCLUIR CADASTRO PESSOAL</p>
      <p>BOTAO SAIR DA CONTA</p>
    </div>
  );
}

export default Home;
