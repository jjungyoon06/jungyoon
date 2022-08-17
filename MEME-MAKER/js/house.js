// 배운 개념으로 집 그려보기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//캔버스에 그림 그리는 변수 context

canvas.width = 800;
canvas.height = 800;

//벽
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

//문
ctx.lineWidth = 2; 
ctx.strokeRect(300, 300, 50, 100);

//천장
ctx.fillRect(200, 200, 200, 20);

//지붕
ctx.moveTo(200, 200); //브러쉬 기준 좌표 잡기
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();


