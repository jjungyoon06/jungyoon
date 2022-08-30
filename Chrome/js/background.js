const images = [ "1.jpg", "2.jpg", "3.jpg"];

const oceanImage = images[Math.floor(Math.random() * images.length)];

//js에서 html로 이미지 구현하기
const bgImage = document.createElement("img");

bgImage.src = `img/${oceanImage}`
console.log(bgImage);

//js로 body에 html을 추가함
document.body.appendChild(bgImage);
