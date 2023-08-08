function navBarOpen() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
  }
  setInterval(updateClock, 1000);

function openCalculator() {
    let box = document.getElementById("box");
    if(!box.style.display) box.style.display = "none";
    if (box.style.display === "none") {
        box.style.display = "flex";
        box.style.justifyContent= 'center';
      } else {
        box.style.display = "none";
      }
}
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result = 0;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        break;
    }
  
    document.getElementById("result").value = result;
}
function clearCalculator (){
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let result = document.getElementById('result');
  num1.value = "";
  num2.value = "";
  result.value = "";
};
function changeImage(src) {
  document.getElementById('myImage').src = src;
  document.getElementById('overlay').innerText = `${src.includes('CV') ? 'Guido Gagliardini' : 'Maximiliano Bagnasco'}`;
}
function restoreImage(originalImage) {
  document.getElementById('myImage').src = originalImage;
  document.getElementById('overlay').innerText = `${originalImage.includes('CV') ? 'Guido Gagliardini' : 'Maximiliano Bagnasco'}`;

}
function redirectToLinkedin (name){
  console.log(name)
  if(name == 'guido'){
    window.location.href = 'https://www.linkedin.com/in/guido-gagliardini-6b4b69164/'
  }else{
    window.location.href = 'https://www.linkedin.com/in/maxi-bagnasco-7a1757200/'
  }
}