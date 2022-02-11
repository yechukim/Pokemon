import React from 'react';
import styled from '@emotion/styled/macro';
import usePokemon from '../hooks/usePokemon';
import { formatNumbering } from '../utils';
import { useNavigate } from 'react-router-dom';

const Base = styled.div`
  margin-top:24px;
`
const ListIem = styled.li`
  position:relative;
  list-style:none;
  display:flex;
  align-items:center;
  box-shadow: 6px 4px 14px 5px rgba(0,0,0,.21);
  border-radius:12px;
  & + & {
    margin-top:10px;
  }
  cursor:pointer;
  :hover{
    background-color:#eee;
  }
  transition:all .4s;
`

const List = styled.ul`
  margin:0;
  padding:0;
  `

const Image = styled.img``

const Name = styled.p`
  margin:0;
  padding:0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size:16px;
  font-weight:bold;
  `

const Index = styled.p`
  position:absolute;
  margin:0;
  padding:0;
  right:16px;
  font-size:24px;
  font-weight:bold;
  color:#d1d5db;
`
const LoadingWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height : calc(100vh-180px);
`
const Loading = styled.img``

const getImageUrl = (pokemonIndex) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
function PokemonList() {

  const { isLoading, isError, data } = usePokemon()
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/${id + 1}`)
  }

  return (
    <Base>
      {
        isLoading || isError ? (
          <LoadingWrapper>
            <Loading src="/assets/loading.gif" alt="loading" />
          </LoadingWrapper>
        ) : (
          <List>
            {
              data?.data.results.map((pokemon, idx) => (
                <ListIem
                  key={pokemon.name}
                  onClick={() => handleClick(idx)}>
                  <Image src={getImageUrl(idx)} />
                  <Name>{pokemon.name}</Name>
                  <Index>{formatNumbering(idx + 1)}</Index>
                </ListIem>
              ))
            }
          </List>
        )
      }
    </Base>
  );
}

export default PokemonList;