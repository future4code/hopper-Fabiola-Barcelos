import React from "react";

import styled from 'styled-components';

const SmallCard = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
  width: 100%;
  img{
    width: 20px;
  height: 20px;
  margin-right: 10px;

  }
  h4{
    margin-bottom: 5px;
  }
`

function CardPequeno(props) {
  return (
    <SmallCard>
      <img src={props.imagem} />
        <div>
      <h4>{props.info}</h4>
      </div>
    </SmallCard>
  );
}

export default CardPequeno;
