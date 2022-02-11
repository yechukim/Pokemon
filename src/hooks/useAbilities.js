import axios from "axios";
import { useQueries } from "react-query";

//포켓몬 능력 정보 가져오기
//배열을 입력받음 

const useAbilities = (abilities) => {
  const quries = abilities.map(({ ability }, idx) => ({
    queryKey: ['ability', idx],
    queryFn: () => axios.get(ability.url)
  }))
  return useQueries(quries)
}

export default useAbilities;