import React from "react";

export class Mensagem extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "",
        mensagem: "",
      },
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  onClickEnviar = () => {
    const nomeUsuarioMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    const novaArrayMensagem = [...this.state.mensagens, nomeUsuarioMensagem];

    this.setState(
      { mensagens: novaArrayMensagem },
      { novaMensagem: "", novoUsuario: "" }
    );
  };

  onChangeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeTexto = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

    render() {
      
        
    return (
      <div>
        <input
          value={this.state.novoUsuario}
          onChange={this.onChangeUsuario}
          placeholder={"usuário"}
        />

        <input
          value={this.state.novaMensagem}
          onChange={this.onChangeTexto}
          placeholder={"escreva sua mensagem"}
        />
        <button onClick={this.onClickEnviar}> Enviar </button>
      </div>
    );
  }
}

export default Mensagem;
