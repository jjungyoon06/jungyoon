const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //시간은 number라서 string으로 바꿔줘야됨
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //화면에 출력
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//website가 load되자마자 getClock() 실행, 매 초마다 다시 실행
getClock();
//실시간으로 보이는 부분
setInterval(getClock,1000);

//1초를 01초로 변경하기
//padStart로 앞  String길이 늘리기 "1".padStart(2,"0") => 01 출력
//padEnd 뒤 String길이 늘리기 "1".padEnd(2,"0") => 10 출력

//매 n초마다 특정 작동하기
//setInterval(sayHello,5000);

//매 n초 기다리고 함수 실행
//setTimeout(sayHello, 5000);