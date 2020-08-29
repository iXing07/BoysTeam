function ensheise() {
  var collect = document.getElementById("collect");
  var pentagram = document.getElementById("pentagram");
  var k = 1;
  collect.onclick = function () {
    if (k % 2 != 0) {
      pentagram.src = "./imgs/pentagram1.png";
    } else {
      pentagram.src = "./imgs/pentagram2.png";
    }
    k++;
  };
}
ensheise();

function countDown() {
  function zero(n) {
    n = n < 10 ? "0" + n : n;
    return n;
  }

  function countDownsecinds(times) {
    var countDown,
      endTime,
      nowTime,
      hours = 0,
      minutes = 0,
      seconds = 0;
    endTime = new Date(times);
    nowTime = new Date();
    countDown = endTime.getTime() - nowTime.getTime();
    if (countDown >= 0) {
      hours = zero(Math.floor(countDown / 1000 / 60 / 60));
      minutes = zero(Math.floor((countDown / 1000 / 60) % 60));
      seconds = zero(Math.floor((countDown / 1000) % 60));
    } else {
      hours = 00;
      minutes = 00;
      seconds = 00;
    }

    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
  }

  var local, closeTimer;
  // local = document.getElementById('local');

  let runtime = function () {
    var locValue = "2020-09-1 8:30:00";
    countDownsecinds(locValue);
    clearInterval(closeTimer);
    closeTimer = setInterval(function () {
      countDownsecinds(locValue);
    }, 1000);
  };
  runtime();
}
countDown();

function purchase() {
  var fiexs = document.getElementById("fiexs");
  var purchase = document.getElementById("purchase");
  var cart = document.getElementById("cart");
  var buy = document.getElementById("buy");
  var colses = document.getElementById("colses");
  var btn = document.getElementById("btn");
  // var headers = document.getElementById("headers");
  // var main = document.getElementById("main");
  cart.onclick = function () {
    // fiexs.style.display = "none";
    purchase.style.display = "block";
    // document.body.style.background='rgb(67, 67, 67)';
    // document.body.style.opacity='.3';
    // headers.style.background = "rgb(67, 67, 67)";
    // headers.style.opacity = ".7";
    // main.style.background = "rgb(67, 67, 67)";
    // main.style.opacity = ".7";
  };
  buy.onclick = function () {
    // fiexs.style.display = "none";
    purchase.style.display = "block";
    // headers.style.background = "rgb(67, 67, 67)";
    // headers.style.opacity = ".7";
    // main.style.background = "rgb(67, 67, 67)";
    // main.style.opacity = ".7";
  };
  colses.onclick = function () {
    purchase.style.display = "none";
    // fiexs.style.display = "block";
    // fiexs.style.display = "flex";
    // headers.style.background = "rgb(255, 255, 255)";
    // main.style.background = "none";
    // headers.style.opacity = "1";
    // main.style.opacity = "1";
  };
  btn.onclick = function () {
    purchase.style.display = "none";
    // fiexs.style.display = "block";
    // fiexs.style.display = "flex";
  };
}
purchase();

function abrogate() {
  var cancle = document.getElementById("cancle");
  var share = document.getElementById("share");
  var shareImg = document.getElementById("shareImg");
  shareImg.onclick = function () {
    share.style.display = "block";
  };
  cancle.onclick = function () {
    share.style.display = "none";
  };
}
abrogate();

function carousels() {
  var slideshow = document.getElementById("slideshow");
  var img = slideshow.getElementsByTagName("img")[0];
  // var ul = document.getElementsByTagName("ul")[0];
  var imgArray = [
    "./imgs/lb1.png",
    "./imgs/lb2.png",
    "./imgs/lb3.png",
    "./imgs/lb4.png",
  ];
  // slideshow.style.webkitTransition="all .5s";
  // touch.on('#slideshow','swipeleft',function(ev){
  //   img.style.webkitTransfrom="translate3d(-"+this.offsetLeft+"px,0,0)"
  // })
  for (let i = 0; i < imgArray.length; i++) {
    lis = document.getElementsByTagName("li");
    lis[0].style.backgroundColor = "black";
    lis[i].onclick = function () {
      index = i;
      for (let i = 0; i < imgArray.length; i++) {
        lis[i].style.backgroundColor = "";
      }
      lis[index].style.backgroundColor = "black";
      img.src = imgArray[i];
    };
  }
  lis = document.getElementsByTagName("li");
  var index = -1;
  var time = null;
  var interval = function () {
    time = setInterval(function () {
      index++;
      if (index > imgArray.length - 1) {
        index = 0;
      }
      let lis = document.getElementsByTagName("li");
      for (let i = 0; i < imgArray.length; i++) {
        lis[i].style.backgroundColor = "";
      }
      lis[index].style.backgroundColor = "black";
      img.src = imgArray[index];
    }, 3000);
  };
  interval();
  slideshow.onmouseover = function () {
    clearInterval(time);
  };
  slideshow.onmouseout = function () {
    interval();
  };
}
carousels();

function tables() {
  var subtract = document.getElementById("subtract");
  var numbers = document.getElementById("numbers");
  var append = document.getElementById("append");
  var k = 1;
  numbers.append(k);
  append.onclick = function () {
    k++;
    if (numbers.hasChildNodes()) {
      numbers.removeChild(numbers.lastChild);
    }
    numbers.append(k);
  };
  subtract.onclick = function () {
    k--;
    if (numbers.hasChildNodes()) {
      numbers.removeChild(numbers.lastChild);
    }
    if(k<1){
     k=1
    }
    
    numbers.append(k);
  };
}
tables();
