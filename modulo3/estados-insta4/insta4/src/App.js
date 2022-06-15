import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
 
  state = {
    posts: [{
      nomeUsuario: "huguinho",
      fotoUsuario: 'https://picsum.photos/50/58',
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "zezinho",
      fotoUsuario: 'https://picsum.photos/50/57',
      fotoPost: "https://picsum.photos/200/120"
    },
    {
      nomeUsuario: "luizinho",
      fotoUsuario: 'https://picsum.photos/50/56',
      fotoPost: "https://picsum.photos/200/140"
    }
    ],

    novoNomeUsuario: " ",
    novaFotoUsuario: "",
    novaFotoPost: "",
  }

  publicaPost = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novoPost = {
        
      nomeUsuario: this.state.novoNomeUsuario,
      fotoUsuario: this.state.novaFotoUsuario,
      fotoPost: this.state.novaFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts });
    this.setState({ novoNomeUsuario: "", novaFotoUsuario: "", novaFotoPost: "" })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ novoNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ novaFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
      this.setState({ novaFotoPost: event.target.value });
    };


render() {
  const listaPosts = this.state.posts.map((post) => {
    return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    );
  });


    return (
      <MainContainer>
       <div>

        <input
            value={this.state.novoNomeUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do usuário"}
          />
          
        <input
            value={this.state.novaFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuário"}
            
        />
        
        <input
            value={this.state.novaFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
            
          />
          <button onClick={this.publicaPost}>Publicar</button>

        </div>
        {listaPosts}


      </MainContainer>
    );
  }
}

export default App;
