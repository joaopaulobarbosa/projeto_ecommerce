import './CadastroUsuario.css';
import React from "react";

  export default class CadastroUsuario extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      alert("Teste de formulário: " + this.state.value);
      event.preventDefault();
    }
  
    handleCadastrar() {
      alert("Um nome foi enviado: ");
    }
  
    render() {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <h3>Insira os dados do produto abaixo</h3>
            <label>
              Categoria:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <h3>BOTÃO CADASTRAR CATEGORIA</h3>
            <label>
              Nome:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Descrição:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Preço:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Foto:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Quantidade:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Cadastrar" />
          </form>
        </>
      );
    }
  }
  