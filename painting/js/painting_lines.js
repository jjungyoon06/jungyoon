// 배운 개념으로 선 그려보기 3가지
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//캔버스에 그림 그리는 변수 context

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

/*

// 1.마우스 클릭 한 번으로 선 그리기
function onclick(event){
    ctx.moveTo(0,0); //시작점 x=0, y=0 모서리에서 시작
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onclick);

*/

/*

// 2.마우스 움직임으로 선 그리기
function onclick(event){
    ctx.moveTo(0,0); //시작점 x=0, y=0 표시
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onclick);

*/



// 3.여러 색으로 그리기
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
  ];

function onclick(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
canvas.addEventListener("mousemove", onclick);
