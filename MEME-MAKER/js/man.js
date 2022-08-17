// 배운 개념으로 사람 그려보기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//캔버스에 그림 그리는 변수 context

canvas.width = 800;
canvas.height = 800;

//팔과 몸통
ctx.fillRect(180, 180, 15, 100);
ctx.fillRect(310, 180, 15, 100);
ctx.fillRect(220, 180, 60, 200);

//얼굴
ctx.arc(250, 100, 50, 0, 2 * Math.PI); //x y radius(반지름) startAngle(원의 시작부분) endAngle(원의 끝부분)
ctx.fill();

//눈
ctx.beginPath(); //다른 색 설정해야하니까 선 다시 그려주기
ctx.fillStyle = "white";
ctx.arc(270, 80, 8, Math.PI, 2 * Math.PI); //Math.PI = 반원
ctx.arc(230, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();