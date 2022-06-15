import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://img.icons8.com/external-dreamcreateicons-fill-lineal-dreamcreateicons/452/external-branch-autumn-season-dreamcreateicons-fill-lineal-dreamcreateicons-2.png"
          nome="Fabíola Barcelos"
          descricao="Oi, eu sou a Fabíola, mas o pode me c hamar de Fabs! Sou estudante de programação e já me apaixonei pelo front-end :)"
        />

        <ImagemButton
          imagem="https://img.icons8.com/pastel-glyph/344/circled-down.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://img.icons8.com/pastel-glyph/344/email-open--v1.png"
          info="E-mail: email@email.com"
        />

        <CardPequeno
          imagem="https://img.icons8.com/ios-filled/344/address--v1.png"
          info="Endereço: Rua Avenida 1234 Cidade Cidade"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://img.icons8.com/glyph-neue/344/sakura.png"
          nome="Mestrado acadêmico em Administração"
          descricao="Faço parte da linha de pesquisa Inovação, Tecnologia e Sustentabilidade (ITS), estou trabalhando com bancos comunitários e as potencialidades de projetos sustentáveis na perfiferia."
        />

        <CardGrande
          imagem="https://img.icons8.com/external-simple-line-edt.graphics/344/external-Branch-nature-simple-line-edt.graphics-2.png"
          nome="Justa Troca"
          descricao="Banco Comunitário no Bairro Sarandi"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
