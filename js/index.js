
//makes text curve
function circularText1(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("intro__text--holder")[classIndex];
  
    var deg = 15 / txt.length,
      origin = 260;
  
    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText1("hi, I'm", 280, 0);

function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("intro__text--holder")[classIndex];
  
    var deg = 160 / txt.length,
      origin = 240;
  
    txt.forEach((ea) => {
      ea = `<h1 style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</h1>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText("Chantelle Isaacs", 270, 0);
