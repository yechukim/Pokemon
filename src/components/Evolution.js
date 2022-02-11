import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import { mapColorToHex } from '../utils';
import useEvolutionChain from '../hooks/useEvolutionChain';
import EvolutionStage from './EvolutionStage';

const Base = styled.div`
margin-top:32px;
padding:0 20px 20px;`;

const Title = styled.h4`
color:${({ color }) => color};
margin:0;
padding:0;
font-size:20px;
font-weight:bold;
`;

const imageWrapper = styled.div`
width:100%;
height:160px;
display:flex;
justify-content:center;
align-items:center;`;

const Image = styled.img`
width:120px;
height:120px;
object-fit:contain;`;

const List = styled.ul`
list-style:none;
margin:20px 0 0 0;
padding:0;
> li + li {
  margin-top:24px;
}`;

const EmptyWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:calc(100vh-44px);`;

const Empty = styled.div`
color: ${({ color }) => color};
`;

function Evolution({ url, color }) {

  const { isSuccess, isError, isLoading, data } = useEvolutionChain(url)
  const [evolutionChain, setEvolutionChain] = useState([])

  useEffect(() => {
    const makeEvolutionChain = (chain) => {
      if (chain.evolves_to.length) {
        const [evolvesTo] = chain.evolves_to;

        const from = chain.species;
        const to = evolvesTo.species;
        const level = evolvesTo.evolution_details[0].min_level;

        setEvolutionChain(prev => [...prev, { from, to, level }]);
        //재귀적으로 호출됨?
        makeEvolutionChain(chain.evolves_to[0]);
      }
    }

    isSuccess && data && makeEvolutionChain(data.data.chain);

    return () => {
      setEvolutionChain([]);
    }
  }, [isSuccess, data])
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>Evolution</Title>

      {
        evolutionChain.length ? (
          <List>
            {
              evolutionChain.map(({ from, to, level }, idx) => (
                <EvolutionStage level={level} from={from} to={to} color={color} />
              ))
            }
          </List>
        ) : (
          <Empty color={mapColorToHex(color?.name)} T>This Pokemon does not evolve</Empty>
        )
      }

    </Base>
  );
}

export default Evolution;