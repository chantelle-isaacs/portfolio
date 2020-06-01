
//makes text curve
function circularText1(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("intro__hiIm--holder")[classIndex];
  
    var deg = 40 / txt.length,
      origin = 280;
  
    txt.forEach((ea) => {
      ea = `<p class="hiIm" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText1("Hi, I'm", 320, 0);

function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("intro__text--holder")[classIndex];
  
    var deg = 160 / txt.length,
      origin = 240;
  
    txt.forEach((ea) => {
      ea = `<h1 class="circTxt" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</h1>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText("Chantelle Isaacs", 270, 0);


