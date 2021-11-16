import "./ListaProduto.css";

function ListaProduto() {
  return (
    <div className="ListaProduto">
      <header className="">
        {/* somente quando no carrinho */}
        BOTÃO IR PARA A HOME
      </header>
      <p>
        <ul>
          <h1>Lista de produtos</h1>
          <h3>Produto1</h3>
          <ul>
            <li>SELECT categoria</li>
            <li>imagem</li>
            <li>cod</li>
            <li>nome</li>
            <li>valor unidade</li>

            <li>descricao</li>

            <li>BOTAO adicionar unidades</li>
            <li>INPUT quantidade</li>
            <li>BOTAO remover unidades</li>

            {/* somente para administrador */}
            <li>BOTAO alterar cadastro produto</li>
            <li>BOTAO excluir cadastro produto</li>

          </ul>
          <h3>Produto2</h3>
          <ul>
            <li>SELECT categoria</li>
            <li>imagem</li>
            <li>cod</li>
            <li>nome</li>
            <li>valor unidade</li>

            <li>descricao</li>

            <li>BOTAO adicionar unidades</li>
            <li>INPUT quantidade</li>
            <li>BOTAO remover unidades</li>

            {/* somente para administrador */}
            <li>BOTAO alterar cadastro produto</li>
            <li>BOTAO excluir cadastro produto</li>

          </ul>
          <h3>Produto3</h3>
          <ul>
            <li>SELECT categoria</li>
            <li>imagem</li>
            <li>cod</li>
            <li>nome</li>
            <li>valor unidade</li>

            <li>descricao</li>

            <li>BOTAO adicionar unidades</li>
            <li>INPUT quantidade</li>
            <li>BOTAO remover unidades</li>

            {/* somente para administrador */}
            <li>BOTAO alterar cadastro produto</li>
            <li>BOTAO excluir cadastro produto</li>

          </ul>
        </ul>
      </p>
      
      {/* somente para administrador */}
      <p>BOTAO CADASTRAR NOVO PRODUTO</p>

      {/* somente quando no carrinho */}
      <p>VALOR TOTAL CARRINHO</p>
      
      {/* somente quando no carrinho */}
      <p>BOTÃO FINALIZAR COMPRA</p>
    </div>
  );
}

export default ListaProduto;
