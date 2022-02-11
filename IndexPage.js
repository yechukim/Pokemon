import React from "react";
import PokemonList from "../components/PokemonList";
import styled from "@emotion/styled/macro";

const Base = styled.div`
padding:12px 18px;
overflow:hidden;
font-family:arial;
`

const Title = styled.h1`
margin:0;
padding:0;
color:#d34f49;
font-weight:bold;`

const Description = styled.small`
color: #6b7280;
padding:0;
margin:16px 0 0 0;
display:block;`

const ImageWrapper = styled.div`
position:fixed;
width:288px;
height:288px;
top:0;
right:0;
opacity: .4;
transform: translate(96px, -96px);`

const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;`

function IndexPage() {
  return (
    <Base>
      <Title>Pokedex</Title>
      <Description>The Pokédex contains detailed stats for every creature from the Pokémon games.</Description>
      <PokemonList />
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
    </Base>
  );
}

export default IndexPage;