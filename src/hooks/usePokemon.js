import { useQueries, useQuery } from "react-query";
import axios from "axios";

const pokemonApi = id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ''}`, {
  params: {
    limit: 151
  }
})

const usePokemon = (id) => {
  //id가 있을때 array로 쿼리 키값 설정
  //없으면 string으로 쿼리 키값을 설정
  //쿼리키 , 콜백 (params)
  return useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id))
}

export const usePokemonQueries = (names) => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: () => pokemonApi(name)
  })
  )
  return useQueries(queries)
}

export default usePokemon;
