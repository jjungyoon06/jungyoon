// 마우스가 눌려있는 채로 움직일 때부터 손가락을 뗄 때까지 그리기
// 색 굵기 변경하며 그리기
// 색 변경 하기 (+ 변경된 색 알려주기)
// 버튼눌러 fill draw 변경 
// 그림판 초기화
// 캔버스에 이미지 삽입, 이미지 위에 텍스트 삽입

const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); //forEach 함수 사용해야해서 배열Array로 함
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//캔버스에 그림 그리는 변수 context
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false; //마우스 안누른 상태
let isFilling = false;

function onMove(event) {
    if (isPainting) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }

  function startPainting() {
    isPainting = true;
  }
  function cancelPainting() {
    isPainting = false;
  }

  function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
  }

  function onColorChange(event){
    ctx.strokeStyle  = event.target.value;
    ctx.fillStyle  = event.target.value;
  }

  function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle  = colorValue;
    ctx.fillStyle  = colorValue;
    color.value = colorValue; //선택한 색깔 표시해서 알려줌
  }

    function onModeClick(){
        if(isFilling){
            isFilling = false;
            modeBtn.innerText = "Fill";
        }else{
            isFilling = true;
            modeBtn.innerText = "Draw";
        }
    }

    function onCanvasClick(){
        if(isFilling){
            ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); //해당 캔버스 크기만큼 좌표설정
        }
    }

    function onDestroyClick(){
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    } 

    function onEraserClick(){
        ctx.strokeStyle = "white";
        isFilling = false;
        modeBtn.innerText = "Fill";
    }

    function onFileChange(event){
        
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        console.log(url);
        /*
        const image = new Image();
        image.src = url; 
        image.onload = function(){
            ctx.drawImage(image, CANVAS_WIDTH, CANVAS_HEIGHT); 
        } */
        
    }

canvas.addEventListener("mousemove", onMove);//마우스를 움직일 때
canvas.addEventListener("mousedown", startPainting);//마우스를 눌렀을 때
canvas.addEventListener("mouseup", cancelPainting); //마우스를 뗐을 때
canvas.addEventListener("mouseleave", cancelPainting);//마우스가 화면을 떠났을 때
canvas.addEventListener("click", onCanvasClick); //draw누르면 색 채우기
lineWidth.addEventListener("change", onLineWidthChange); //선 굵기 변경
color.addEventListener("change", onColorChange); // 색 변경
colorOptions.forEach(color => color.addEventListener("click", onColorClick)); // 색 선택 
modeBtn.addEventListener("click", onModeClick); //버튼눌러 fill, draw 형태변경
destroyBtn.addEventListener("click", onDestroyClick); //그림판 초기화
eraserBtn.addEventListener("click", onEraserClick); //그림판 채우기 후 부분부분 지우기
fileInput.addEventListener("change", onFileChange); //이미지 삽입