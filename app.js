const images = ["a.jpg"];

let imgindex = 0;
const imgEl = document.getElementById("slider-img");
setInterval(() => {
  if (imgindex === images.length) {
    imgindex = 0;
  }
  const imgUrl = images[imgindex];
  imgEl.setAttribute("src", imgUrl);
  imgindex++;
}, 1000);
