# 리액트 쿼리를 사용한 포켓몬 도감
1. 포켓몬 목록 뿌리기
2. 클릭시 해당 포켓몬 페이지로 이동
3. 탭마다 다른 정보 보여줌

* 필요한 라이브러리
```console
yarn add @emotion/react @emotion/styled axios react-query reset-css react-router-dom
```
* 참고: react router v6 을 사용(강의 내용과 다름)

# React query 
간단하게 이번 프로젝트에서 쓴 커스텀 훅을 간단 설명

`index.js`
생성한 쿼리 클라이언트를 프로바이더의 client에 넣어줘서 App을 감싼다.
```js
const queryClient = new QueryClient()

  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>

```
`커스텀 훅`
가장 처음에 만들었던 `usePokemon.js` 를 예시로 들어보자\
먼저 axios 를 사용해서 get()요청을 한다. id를 넘기지 않으면 전체 포켓몬이 나오고, id를 넘겼을땐 해당 포켓몬의 정보를 받을 것이다. 

```js
import { useQuery } from "react-query";
import axios from "axios";

const pokemonApi = id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ''}`, {
  params: {
    limit: 151
  }
})

const usePokemon = (id) => {
  return useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id))
}
export default usePokemon;
```
`useQuery(쿼리키, 콜백)`
* unique key는 id가 있을 때와 없을때가 달라지고, id가 있을때는 쿼리 키가 배열이 되게 작성
* useQuery()에서 반환된 결과는 모든 정보를 포함하고 있다.

## 기억할 부분
- emotion 스타일을 사용한 스타일링
* color를 prop으로 받아서 백그라운드 색상 변경

- pokemon api 요청 => 커스텀 훅으로 만들기
- String 메소드인 `padStart(targetLength, padString)`를 사용하여 넘버링 폼 생성
- css property `object-fit` 
- 이외 css에 hover, transition 속성 추가 