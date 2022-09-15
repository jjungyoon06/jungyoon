const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//캔버스에 그림 그리는 변수 context

canvas.width = 800;
canvas.height = 800;

/*
//fill: 색 채우기 , stroke: 선 그리기

ctx.rect(50, 50, 100, 100) //x,y,가로,세로
ctx.rect(150, 150, 100, 100) 
ctx.rect(250, 250, 100, 100) 
ctx.fill(); //검정색으로 채우기

ctx.beginPath(); //새로운 선 설정
ctx.rect(350, 350, 100, 100)
ctx.rect(450, 450, 100, 100)
ctx.fillStyle = "red"; //빨간색으로 채우기
ctx.fill();
*/

/*
//브러쉬를 해당 그림 x,y좌표로 이동시킴
ctx.moveTo(50, 50); 

//moveTo좌표 기준으로 해당 좌표만큼 선 그리기
ctx.lineTo(150, 50); 
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);

//색 채우기
ctx.fill();
*/
