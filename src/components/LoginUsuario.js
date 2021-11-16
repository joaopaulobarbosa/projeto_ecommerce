import "./LoginUsuario.css";
import React from "react";

export default class LoginUsuario extends React.Component {
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
          <h6>Já tem cadastro? Acesse aqui:</h6>
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
          <input type="submit" value="Entrar" />
        </form>
        <button onClick={() => {alert("Teste de botão cadastrar");}}>Cadastrar</button>
      </>
    );
  }
}
