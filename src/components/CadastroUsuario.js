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

        <h1>BOTÃO HOME</h1>
          <form onSubmit={this.handleSubmit}>
            <h6>Insira os dados abaixo para prosseguirmos com seu cadastro</h6>
            <label>
              Nome:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Nascimento:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CPF:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Genero:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              E-mail:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Senha:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Por favor, repita a senha:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Entrar" />
          </form>
        </>
      );
    }
  }
  