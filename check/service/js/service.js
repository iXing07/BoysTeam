function voic() {
  var voice = document.getElementById("voice");
  var k = 1;
  voice.onclick = function () {
  if (k % 2 != 0) {
    voice.src = "./img/voice1.png";
  } else {
    voice.src = "./img/voice2.png";
  }
  k++;
};
   
}
voic();



function inputBox() {
   var inputs =document.getElementById('inputs');
   var plus =document.getElementById('plus');
   var send =document.getElementById('send');
   inputs.onfocus=function(){
    plus.style.display='none';
    send.style.display='block';
    inputs.style.width='600px';
   };
   inputs.onblur=function(){
    plus.style.display='block';
    send.style.display='none';
    inputs.style.width='700px';
   };
}
inputBox();

function adds(){
    var rights =document.getElementById('rights');
    var plus =document.getElementById('plus');
    var middles =document.getElementById('middles');
    // var bottoms = document.getElementById('bottoms');
    var center = document.getElementById('center');
    var k=1;
    rights.onclick=function(){
        if (k % 2 != 0) {
            plus.src='./img/close.png';
            center.style.height='1290px'
            middles.style.transform='translateY(0)';
            // bottoms.style.transform='translateY(0)';
            middles.style.display='block';
            // bottoms.style.display='block';
            middles.style.display='flex';
            // bottoms.style.display='flex';
          } else {
            plus.src='./img/plus.png';
            center.style.height='1440px'
            middles.style.transform='translateY(500px)';
            // bottoms.style.transform='translateY(500px)';
            middles.style.display='none';
            // bottoms.style.display='none';
          }
          k++;
    }
}   
adds()

function checking(){
    var check = document.getElementById('check');
    var pitchs = document.getElementById('pitchs');
    var k=1;
    check.onclick=function(){
        if(k%2!=0){
            pitchs.src='./img/pitch4.png';
        }else{
            pitchs.src='./img/pitch3.png';
        }
        k++;
    }
}
checking();

function regular(){

}
regular();