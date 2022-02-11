# 리액트 쿼리를 사용한 포켓몬 도감
1. 포켓몬 목록 뿌리기
2. 클릭시 해당 포켓몬 페이지로 이동
3. 탭마다 다른 정보 보여줌

* 필요한 라이브러리
```console
yarn add @emotion/react @emotion/styled axios react-query reset-css react-router-dom
```
* 참고: react router v6 을 사용(강의 내용과 다름)

## 기억할 부분
- emotion 스타일을 사용한 스타일링
* color를 prop으로 받아서 백그라운드 색상 변경

- pokemon api 요청 => 커스텀 훅으로 만들기
- String 메소드인 `padStart(targetLength, padString)`를 사용하여 넘버링 폼 생성
- css property `object-fit` 
- 이외 css에 hover, transition 속성 추가 