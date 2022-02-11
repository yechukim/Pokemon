import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Evolution from '../components/Evolution';
import PokemonInfo from '../components/PokemonInfo';
import Stats from '../components/Stats';
import About from '../components/About'
import Tabs from '../components/Tabs';
import usePokemon from '../hooks/usePokemon';
import useSpecies from '../hooks/useSpecies';
import styled from '@emotion/styled/macro';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family:arial;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;


function DetailPage() {

  const { id } = useParams()
  const [selectedTab, setSelectedTab] = useState('about')

  const pokemonQueryResult = usePokemon(id)
  const speciesQueryResult = useSpecies(id)

  const { name, types, height, weight, abilities, baseExp, stats } = useMemo(() => ({
    name: pokemonQueryResult.data?.data.name,
    types: pokemonQueryResult.data?.data.types,
    height: pokemonQueryResult.data?.data.height,
    weight: pokemonQueryResult.data?.data.weight,
    abilities: pokemonQueryResult.data?.data.abilities,
    baseExp: pokemonQueryResult.data?.data.base_experience,
    stats: pokemonQueryResult.data?.data.stats,
  }), [pokemonQueryResult]);

  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(() => ({
    color: speciesQueryResult.data?.data.color,
    growthRate: speciesQueryResult.data?.data.growth_rate.name,
    flavorText: speciesQueryResult.data?.data.flavor_text_entries[0].flavor_text,
    genderRate: speciesQueryResult.data?.data.gender_rate,
    isLegendary: speciesQueryResult.data?.data.is_legendary,
    isMythical: speciesQueryResult.data?.data.is_mythical,
    evolutionChainUrl: speciesQueryResult.data?.data.evolution_chain.url,
  }), [speciesQueryResult]);

  const handleClick = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <Container>
      <PokemonInfo
        id={id}
        name={name}
        types={types}
        color={color} />
      <TabsWrapper>
        <Tabs
          tab={selectedTab}
          onClick={handleClick}
          color={color} />
      </TabsWrapper>
      {
        selectedTab === 'about' && (
          <About
            isLoading={pokemonQueryResult.isLoading || speciesQueryResult.isLoading}
            color={color}
            growthRate={growthRate}
            flavorText={flavorText}
            genderRate={genderRate}
            isLegendary={isLegendary}
            isMythical={isMythical}
            types={types}
            weight={weight}
            height={height}
            baseExp={baseExp}
            abilities={abilities}
          />
        )
      }
      {
        selectedTab === 'stats' && (
          <Stats
            isLoading={pokemonQueryResult.isLoading || speciesQueryResult.isLoading}
            color={color}
            stats={stats}
          />
        )
      }
      {
        selectedTab === 'evolution' && (
          <Evolution
            id={id}
            isLoading={speciesQueryResult.isLoading}
            color={color}
            url={evolutionChainUrl}
          />
        )
      }
    </Container>
  );
}

export default DetailPage;