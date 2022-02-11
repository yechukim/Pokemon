import axios from "axios";
import { useQuery } from "react-query";

//진화정보가져오는 훅 

const useEvolutionChain = (url) => (
  useQuery(['evolution', { url }], () =>
    url ? axios.get(url) : null
  )
)
export default useEvolutionChain