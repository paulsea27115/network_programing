// 동기
// 요청을 보낸후 해당 요청이 응답을 받아야 다음 동장을 실해하는 방식
console.log(1);
setTimeout(()=>{console.log(2)},1000);
console.log(3);

