const images = [ "01.webp", "02.jpeg"];

const NewyorkImage = images[Math.floor(Math.random() * images.length)];

//js에서 html로 이미지 구현하기
const bgImage = document.createElement("img");

bgImage.src = `img/${NewyorkImage}`
console.log(bgImage);

//js로 body에 html을 추가함
document.body.appendChild(bgImage);

