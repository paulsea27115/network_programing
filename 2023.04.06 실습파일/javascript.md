# 자바스크립트 DOM

## 문서객체 모델(Dom document object model)

- 웹브라우저가 HTML페이지를 인식하는 방법
- DOM을 이용하면 HTML페이지레 동적으로 태그를 추가

### id접급

> getElmwntById()
> couvument.getElementBtId()'아이디명';

### class로 접근

> getElementByClassName();

### tag이름을 으로 접근

> getElementByTagName

### css 기법으르 접근

> (1) querySelector() // 첫번쨰 노드 선택

- 아이디: document.querySelector(#아이디명);
- 클래스: document.querySelector(.클래스);
- 태크: document.querySelector(태그);
  > (2) querySelectorAll() // 전체 노드 선택
- 아이디: document.querySelectorAll(#아이디명);
- 클래스: document.querySelectorAll(.클래스);
- 태크: document.querySelectorAll(태그);
